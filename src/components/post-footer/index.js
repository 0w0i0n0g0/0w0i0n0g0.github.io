import React, { useState, useRef, useCallback } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useUpdateEffect, useEffectOnce } from 'usehooks-ts';
import './style.scss';

function PostFooter({ siteUrl, curPost }) {
  //states
  const [likeButtonY, setLikeButtonY] = useState(0);
  const [windowY, setWindowY] = useState(0);
  const [likeState, setLikeState] = useState('Like');
  const [likeCount, setLikeCount] = useState(0);

  //confetti
  const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);
  const makeShot = useCallback(
    (particleRatio, opts) => {
      let originY = likeButtonY;
      let height = windowY;
      refAnimationInstance.current &&
        refAnimationInstance.current({
          ...opts,
          colors: ['#26ccff', '#88ff5a', '#fcff42'],
          origin: { y: originY / height },
          particleCount: Math.floor(100 * particleRatio),
        });
    },
    [likeButtonY, windowY],
  );
  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  //main
  const ref = useRef();
  const handleClick = useCallback(() => {
    const namespace = siteUrl.replace(/(^\w+:|^)\/\//, '');
    const key = curPost.slug.replace(/\//g, '');
    //hit like count
    fetch(
      `https://api.countapi.xyz/${
        process.env.NODE_ENV === 'development' ? 'get' : 'hit'
      }/${namespace}/${key}like`,
    ).then(async (result) => {
      const data = await result.json();
      setLikeCount(data.value);
    });
    document.getElementsByClassName('like-button')[0].classList.add('liked');
    setLikeState('Liked');
    //set likebutton y and trigger likeButtonY useEffect
    setLikeButtonY(document.getElementsByClassName('like-button')[0].getBoundingClientRect().top);
  }, [siteUrl, curPost]);

  //set window y and trigger windownY useEffect
  useUpdateEffect(() => {
    setWindowY(window.innerHeight);
  }, [likeButtonY]);

  //fire at likebutton y
  useUpdateEffect(() => {
    fire();
  }, [windowY, fire]);

  useEffectOnce(() => {
    if (ref.current) {
      ref.current.addEventListener('click', () => handleClick(), { once: true });
    }
    const namespace = siteUrl.replace(/(^\w+:|^)\/\//, '');
    const key = curPost.slug.replace(/\//g, '');
    fetch(`https://api.countapi.xyz/get/${namespace}/${key}like`).then(async (result) => {
      const data = await result.json();
      setLikeCount(data.value);
    });
  });

  return (
    <div className="like-area">
      도움이 되셨다면 좋아요를 눌러주세요!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        className="like-button"
        ref={ref}
        size="large"
        variant="text"
        startIcon={<ThumbUpIcon />}
      >
        {likeState}&nbsp;&nbsp;{likeCount}
      </Button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  );
}
export default PostFooter;
