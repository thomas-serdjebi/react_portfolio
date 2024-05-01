import React from 'react';
import { BsPencilSquare, BsTrash, BsBookmarkCheckFill, BsBookmarkXFill } from 'react-icons/bs'; // Importation des icônes de react-bootstrap

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
    editedTitle,
    isAddingForm,
    newPost,
    isDeleted 
}) {
    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className={`${darkTheme ? 'darktheme' : ''}`}>
                <div className="container d-flex align-items-center justify-content-center" style={{ paddingTop: '150px', minHeight: '650px' }}>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            {isDeleted ? (
                                <>
                                    <div className="alert alert-success" role="alert">
                                        Post deleted successfully
                                    </div>
                                    <div>
                                        <a className={`text-decoration-none ${darkTheme ? 'text-light' : 'text-dark'}`} href="/blog">Go back to blog</a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="card single_post">
                                        <div className="body">
                                            <div className="container d-flex flex-row justify-content-between mb-3">
                                                <div className="title-input">
                                                    {isEditing || isAddingForm ? (
                                                        <input
                                                            type="text"
                                                            value={editedTitle}
                                                            onChange={handleTitleChange}
                                                            className="form-control form-control-lg mb-3"
                                                            placeholder="Enter title"
                                                            style={{ width: '100%' }}
                                                        />
                                                    ) : (
                                                        <h3>{post.title}</h3>
                                                    )}
                                                </div>
                                                <div className="buttons">
                                                    {newPost ? (
                                                        <>
                                                            <div className="alert alert-success" role="alert">
                                                                Post created successfully
                                                            </div>
                                                            <div>
                                                                <a className={`text-decoration-none ${darkTheme ? 'text-dark' : 'text-light'}`} href="/blog">Go back to blog</a>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {isEditing || isAddingForm ? (
                                                                <>
                                                                    <button className="btn btn-sm btn-dark me-1" onClick={handleSaveButtonClick}>
                                                                        <BsBookmarkCheckFill />
                                                                    </button>
                                                                    <button className="btn btn-sm btn-danger " onClick={handleCancelEditButtonClick}>
                                                                        <BsBookmarkXFill />
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <button className="btn btn-sm btn-dark me-2" onClick={handleEditButtonClick}>
                                                                        <BsPencilSquare />
                                                                    </button>
                                                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(post.id)}>
                                                                        <BsTrash />
                                                                    </button>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="img-post">
                                                <img className="d-block img-fluid" src={
                                                    isAddingForm || newPost ? "https://scontent.fctt1-1.fna.fbcdn.net/v/t31.18172-8/12000837_764846786970516_8871490860410260806_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g5uq0zHnQxAQ7kNvgHrFTDS&_nc_ht=scontent.fctt1-1.fna&oh=00_AfAdaS4kNYpaYE11GA0ZyparG8DgnKZomlb3RpzonafYOA&oe=6659A304" : post.img
                                                }
                                                    alt=""
                                                />
                                            </div>
                                            {isEditing || isAddingForm ? (
                                                <textarea value={editedBody} onChange={handleBodyChange} className="form-control form-control-lg mb-3" rows="5" placeholder="Enter body"></textarea> // Utilisation de la classe Bootstrap pour un champ de saisie plus grand
                                            ) : (
                                                <p>{post.body}</p>
                                            )}
                                        </div>
                                    </div>
                                    {!isAddingForm && !isDeleted && !newPost && (
                                        <div className="card">
                                            <div className="header">
                                                <h2>Comments</h2>
                                            </div>
                                            {comments ? (
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
                                            ) : ('')}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostJSX;
