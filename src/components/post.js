import PostJSX from './jsx/post';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/post.css'

function PostPage({ darkTheme, identity, langue }) {

    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const { id } = useParams();

    const [isEditing, setIsEditing] = useState(false);
    const [editedBody, setEditedBody] = useState(post.body);
    const [editedTitle, setEditedTitle] = useState(post.title)

    const handleEditButtonClick = () => {
        setIsEditing(true);
        setEditedBody(post.body)
        setEditedTitle(post.title)
    };

    const handleSaveButtonClick = () => {
        handleUpdate(post.id, editedBody);
        setIsEditing(false);
    };

    const handleCancelEditButtonClick = () => {
        setIsEditing(false);
        setEditedBody(post.body);
    };

    const handleBodyChange = (event) => {
        setEditedBody(event.target.value);
    };

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value)
    }
    const handleUpdate = () => {
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: editedTitle,
                body: editedBody
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to update post');
                }
                return res.json();
            })
            .then(res => setPost(res))
            .catch(error => {
                console.error('Error updating post:', error);
            });
    }


    const handleDelete = () => {
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to delete post');
            }
            return res.json();
        })
        .then(res => 
            setPost([]),
            setComments([]))
        .catch(error => {
            console.error('Error deleting post:', error);
        });
    }


    const getPostAndComments = () => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des articles :', error);
            });

        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => {
                setComments(data.comments)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des articles :', error);
            });
    }





    useEffect(() => {
        getPostAndComments();
    }, [])

    return (
        <PostJSX
            darkTheme={darkTheme}
            post={post}
            comments={comments}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            isEditing={isEditing}
            handleEditButtonClick={handleEditButtonClick}
            handleSaveButtonClick={handleSaveButtonClick}
            handleCancelEditButtonClick={handleCancelEditButtonClick}
            handleBodyChange={handleBodyChange}
            handleTitleChange={handleTitleChange}
            editedBody={editedBody}
            editedTitle={editedTitle}
        />
    )

}

export default PostPage;
