import ArticleJSX from './jsx/article';

function BlogPage({ darkTheme, identity, langue }) {

  return (
    <ArticleJSX darkTheme={darkTheme} identity={identity} langue={langue}/>
  )

}


export default BlogPage;
