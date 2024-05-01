import PostJSX from './jsx/post';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/post.css'

function AddPostPage({ darkTheme, identity, langue }) {
    const [editedBody, setEditedBody] = useState('');
    const [editedTitle, setEditedTitle] = useState('');
    const [post, setPost] = useState(null);
    const [isAddingForm, setIsAddingForm] = useState(true);
    const [newPost, setIsNewPost] = useState(false)
    const [deleted, isDeleted] = useState(false)
  

    // Je sais qu'il ne faut pas mettre les clés d'API en public mais c'est qu'un projet scolaire
    // sinon.env
    const API_KEY = "PAXwCgMG1KtNcIYYcSCGG874SS1yWE6EWk6xagHoPw1lzJmzPQP3LKHW";

    const handleSaveButtonClick = () => {
        handleAddPost(editedTitle, editedBody);
    };

    const handleCancelEditButtonClick = () => {
        setEditedBody('');
        setEditedTitle('');
    };

    const handleBodyChange = (event) => {
        setEditedBody(event.target.value);
    };

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value);
    };


    const handleAddPost = (title, body) => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 5 
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add post');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setPost(data);
                setIsAddingForm(false); 
                setIsNewPost(true);
            })
            .catch(error => {
                console.error('Error adding post:', error);
            });
    };

    useEffect(() => {
        
      }, [])

    return (
        <PostJSX
            darkTheme={darkTheme}
            post={post}
            handleSaveButtonClick={handleSaveButtonClick}
            handleCancelEditButtonClick={handleCancelEditButtonClick}
            handleTitleChange={handleTitleChange}
            handleBodyChange={handleBodyChange}
            editedTitle={editedTitle}
            editedBody={editedBody}
            isAddingForm={isAddingForm}
            newPost={newPost}
            deleted={isDeleted}
        />
    );
}

export default AddPostPage;
