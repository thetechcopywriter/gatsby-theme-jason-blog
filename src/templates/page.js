import React from 'react';
import Layout from '../components/Layout';
import ContentWithFootnotes from '../components/ContentWithFootnotes';
import ContentArea from '../components/ContentArea';
import SEO from '../components/SEO/SEO';

export default ({ children, pageContext, data, location }) => {
  const postImage =
    data &&
    data.file &&
    data.file.childImageSharp &&
    data.file.childImageSharp.resize &&
    data.file.childImageSharp.resize.src
      ? data.file.childImageSharp.resize.src
      : null;

  const seo = {
    frontmatter: {
      // By default, get the slug from the page location.
      slug: location.pathname.replace(/[^\w\d-]/g, ''),
      ...pageContext.frontmatter,
    },
    postImage,
  };

  return (
    <Layout title={pageContext.frontmatter.title}>
      <SEO {...seo} />
      <h1>{pageContext.frontmatter.title}</h1>
      <ContentWithFootnotes
        render={() => <ContentArea>{children}</ContentArea>}
      />
    </Layout>
  );
};
