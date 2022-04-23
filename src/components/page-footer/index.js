import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer" style={{ padding: '50vh 0 10px 0' }}>
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a>
      </p>
      <p style={{ padding: '0 0 20px 0' }}>
        이 페이지에는 토스팀에서 제공한 토스페이스가 적용되어 있습니다.
      </p>
    </footer>
  );
}

export default PageFooter;
