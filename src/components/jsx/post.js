import React from 'react';

function PostJSX({ darkTheme, identity, posts }) {
  return (
    <section className={`  news pt-0 ${darkTheme ? 'darktheme' : ''}`} style={{ paddingTop: '100px' }}>
      <div className="container mt-md-5">
        <div className="container">
          <h2 className="mx-4 my-0 text-center">Recent News</h2>
          <ul className="row d-lg-flex list-unstyled image-block justify-content-center px-lg-0 mx-lg-0">
            {posts.map((post, index) => (
              <li key={index} className="col-lg-4 col-md-5 image-block full-width p-3">
                <div className="image-block-inner">
                  <a className="mh-100 text-decoration-none text-dark fw-bold" href="#">
                    <img src="https://raw.githubusercontent.com/solodev/recent-blog-posts/master/images/news-1.jpg" alt="LunarXP Wins Space Innovator of the Year Award" className="img-responsive w-100" />
                  </a>
                  <span className="hp-posts-cat">
                    {post.tags.map((tag, index) => (
                      <span className="text-dark" key={index}>- {tag} </span>
                    ))}
                  </span>
                  <h4 className="mt-3"><a href="#">{post.title}</a></h4>
                  <p></p>
                  <a href="#" className="read-more">Read more</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
    </section>
  );
}

export default PostJSX;
