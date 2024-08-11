import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ThemeSwitch from '../components/theme-switch';
import ScrollToTop from '../components/scroll-to-top';
import { getValueFromLocalStorage } from '../utils/localStorage';
import './style.scss';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getValueFromLocalStorage('isDarkMode'));

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            name
            social {
              github
            }
          }
        }
      }
    }
  `);
  const { title, author } = data.site.siteMetadata;

  return (
    <div className="page-wrapper">
      <PageHeader siteTitle={title || `Title`} />
      <main className="page-content">{children}</main>
      <PageFooter
        author={author.name || `Author`}
        githubUrl={author.social?.github || `https://www.github.com`}
      />
      <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;
