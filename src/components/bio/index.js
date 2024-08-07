import React from 'react';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">
            안녕하세요,
            <br />
              <span style={{ background : "linear-gradient(to right, #00ff7a, #0030ff)", backgroundClip : "text", WebkitTextFillColor : "transparent", display : "inline-block"}}><strong>{name}</strong></span> 입니다!
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
              <span style={{ background : "linear-gradient(to right, #00ff7a, #0030ff)", backgroundClip : "text", WebkitTextFillColor : "transparent", display : "inline-block"}}><strong>{name}</strong></span>.
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper">
        <Image style={{ width: 250, height: 250 }} src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Bio;
