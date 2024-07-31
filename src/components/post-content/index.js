import React, { useEffect } from 'react';
import './style.scss';

function PostContent({ html }) {
  function nearestNumber(array, target) {
    var abs = 0;
    var min = Number.MAX_SAFE_INTEGER;
    var index = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] - target > 100) {
        continue;
      }
      abs = array[i] - target < 0 ? -(array[i] - target) : array[i] - target;
      if (abs < min) {
        min = abs;
        index = i;
      }
    }
    return index;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  let currentY = 0;

  const handleScroll = () => {
    //run scroll event
    if (Math.abs(currentY - window.scrollY) > 10) {
      //toc active reset
      let i = 0;
      let tocAnchors = document
        .getElementsByClassName('table-of-contents')
        .item(0)
        .querySelectorAll('a');
      for (i = 0; i < tocAnchors.length; i++) {
        tocAnchors[i].classList.remove('active');
      }
      currentY = window.scrollY;
      let anchors = document.getElementsByClassName('anchor');
      let anchorsY = [];
      for (i = 0; i < anchors.length; i++) {
        let forEach = anchors[i];
        let absoluteY = window.scrollY + forEach.getBoundingClientRect().top - 60; // 헤더에 가려지는 부분 -60으로 제외.
        anchorsY[i] = absoluteY;
      }
      let activeIndex = nearestNumber(anchorsY, currentY);
      let activeHref = anchors[activeIndex].getAttribute('href');
      document
        .getElementsByClassName('table-of-contents')
        .item(0)
        .querySelector("[href='" + activeHref + "']").className = 'active';

      //toc auto scroll inside
      let element = document.getElementsByClassName('table-of-contents').item(0).querySelector("[href='" + activeHref + "']");
      element.scrollIntoView({ behavior: 'instant', block: 'center' }); // 보이도록 스크롤.

      return;
    }

    //ignore scroll event
    if (Math.abs(currentY - window.scrollY) <= 10) {
      return;
    }
  };

  return (
    <div className="post-content">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;
