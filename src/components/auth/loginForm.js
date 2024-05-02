// LoginForm.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './authProvider';

const LoginForm = ({ darkTheme, setIsLoggedIn }) => {
    const { login, message } = useContext(AuthContext);
    const [username, setUsername] = useState('atuny0');
    const [password, setPassword] = useState('9uQFF1Lh');
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password, setIsLoggedIn);
    };

    return (
        <div className={`${darkTheme ? "darktheme" : ""}`} style={{ paddingTop: '150px', minHeight: '650px' }}>
            <div className="container">
                <div className="row d-flex justify-content-center pt-5">
                    <div className="col-md-6 pt-5">
                        <div className="card px-5 py-5" id="form1">
                            <form onSubmit={handleSubmit}>
                                <div className="form-data" style={{ display: 'block' }}>
                                    <div className="forms-inputs mb-4">
                                        <span>Email or username</span>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="form-control"
                                        />
                                        {message && <div className="invalid-feedback">{message}</div>}
                                    </div>
                                    <div className="forms-inputs mb-4">
                                        <span>Password</span>
                                        <input
                                            autoComplete="off"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={`form-control ${message ? 'is-invalid' : ''}`}
                                        />
                                        {message && <div className="invalid-feedback">{message}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-dark w-100">Login</button>
                                    </div>
                                </div>
                                <div className="success-data" style={{ display: submitted ? 'block' : 'none' }}>
                                    <div className="text-center d-flex flex-column">
                                        <i className='bx bxs-badge-check'></i>
                                        <span className="text-center fs-1">You have been logged in <br /> Successfully</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginForm;
