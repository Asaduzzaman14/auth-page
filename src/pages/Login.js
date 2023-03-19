import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className='details-container'>
            <div className='container'>
                <div className='content'>
                    <img className='icon' src="/logo.png" alt="" />
                    <h2 className='title'>Welcome to Systempackage</h2>

                    <div className=''>
                        <input className='input-box' placeholder='Enter Your Email' type="email" />
                        <input className='input-box' placeholder='Enter Your Password' type="password" />
                    </div>

                    <div>
                        <Link to='otp'>
                            <button className='next-button'>Next</button>
                        </Link>
                    </div>
                    <p className='forgetPass'>Forgot your password?</p>

                    <span className='signIn'>Not member? <span className='color'>Create account</span> </span>

                </div>
                <div className='banner-section'>
                    <img className='banner' src="/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;