import PostsJSX from './jsx/posts';
import React, { useState, useEffect } from 'react';
import '../styles/posts.css'

function BlogPage({ darkTheme, identity, langue}) {

  const [posts, setPosts] = useState([])

  //Je sais qu'il ne faut pas mettre les clé d'API en public mais c'est qu'un projet scolaire
  //sinon.env
  const API_KEY = "PAXwCgMG1KtNcIYYcSCGG874SS1yWE6EWk6xagHoPw1lzJmzPQP3LKHW"

  const getTenPosts = () => {
    fetch('https://dummyjson.com/posts?limit=10')
      .then(response => response.json())
      .then(data => {
        const postsData = data.posts;
        return fetch('https://api.pexels.com/v1/curated?page=1&per_page=10', {
          headers: {
            'Authorization': API_KEY
          }
        })
        .then(response => response.json())
        .then(imagesData => {
            const updatedPosts = postsData.map((post, index) => {
            const imageUrl = imagesData.photos[index] ? imagesData.photos[index].src.landscape : '';
            return { ...post, img: imageUrl };
          });
          setPosts(updatedPosts);
        });
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
