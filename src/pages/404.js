import React from 'react';
import Layout from '../layout';
import Seo from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <p style={{fontWeight: "900", fontSize: "150px", marginTop: "30%", background : "linear-gradient(to right, #ff0085, #ffcf00)", backgroundClip : "text", WebkitTextFillColor : "transparent", display : "inline-block"}}>404</p>
      <p style={{fontWeight: "900", fontSize: "20px", marginTop: "20px"}}>Not Found.</p>
    </Layout>
  );
}

export default NotFoundPage;
