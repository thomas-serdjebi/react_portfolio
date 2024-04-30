import React from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'; // Importation des icônes de react-bootstrap

function PostJSX({
    darkTheme,
    post,
    comments,
    handleDelete,
    isEditing,
    handleEditButtonClick,
    handleSaveButtonClick,
    handleCancelEditButtonClick,
    handleBodyChange,
    handleTitleChange,
    editedBody,
    editedTitle
}) {
    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className={`${darkTheme ? 'darktheme' : ''}`}>
                <div className="container d-flex align-items-center justify-content-center" style={{ paddingTop: '150px' }}>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="card single_post">
                                <div className="body">
                                    <div className="container d-flex flex-row justify-content-between mb-3">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={editedTitle}
                                                onChange={handleTitleChange}
                                                className="form-control mb-3"
                                            />
                                        ) : (
                                            <h3>{post.title}</h3>
                                        )}
                                        <div>
                                            {isEditing ? (
                                                <>
                                                    <button className="btn btn-sm btn-success me-2" onClick={handleSaveButtonClick}>
                                                        Save
                                                    </button>
                                                    <button className="btn btn-sm btn-secondary me-2" onClick={handleCancelEditButtonClick}>
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <button className="btn btn-sm btn-dark me-2" onClick={handleEditButtonClick}>
                                                    <BsPencilSquare />
                                                </button>
                                            )}
                                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(post.id)}>
                                                <BsTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="img-post">
                                        <img className="d-block img-fluid" src={post.img} alt="" />
                                    </div>
                                    {isEditing ? (
                                        <textarea value={editedBody} onChange={handleBodyChange} className="form-control mb-3" rows="5" />
                                    ) : (
                                        <p>{post.body}</p>
                                    )}
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2>Comments</h2>
                                </div>
                                <div className="body">
                                    <ul className="comment-reply list-unstyled">
                                        {comments.map((comment, index) => (
                                            <li key={index} className="row clearfix">
                                                <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                                    <h5 className="m-b-0">{comment.user.username}</h5>
                                                    <p>{comment.body}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostJSX;