import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer" style={{ whiteSpace: "nowrap" }}>
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl} target="_blank" rel="noreferrer noopener">{author}</a>
        &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog" target="_blank" rel="noreferrer noopener">
          &nbsp;zoomkoding-gatsby-blog
        </a>
      </p>
      <p style={{ padding: '0 0 20px 0', whiteSpace: "nowrap" }}>
        이 페이지에는 토스팀에서 제공한 <a href='https://toss.im/tossface/copyright' target="_blank" rel="noreferrer noopener">토스페이스</a>가 적용되어 있습니다.
      </p>
    </footer>
  );
}

export default PageFooter;
