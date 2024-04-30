import PostsJSX from './jsx/posts';
import React, { useState, useEffect } from 'react';
import '../styles/posts.css'

function BlogPage({ darkTheme, identity, langue }) {

  const [posts, setPosts] = useState([])

  const getTenPosts = () => {
    fetch('https://dummyjson.com/posts?limit=10')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts)
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des articles :', error);
      });
  }



  useEffect(() => {
    getTenPosts();
 

  }, [])

  return (
    <PostsJSX darkTheme={darkTheme} identity={identity} langue={langue} posts={posts} />
  )

}


export default BlogPage;
