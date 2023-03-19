import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='details-container'>
            <div className='container'>
                <div className='content'>
                    <img className='icon' src="/subtract.png" alt="" />
                    <h2 className='title'>Welcome to Systempackage</h2>

                    <div className=''>
                        <input className='input' placeholder='Enter Your Email' type="email" />
                    </div>
                    <div>

                        <input className='input' placeholder='Enter Your Password' type="password" />
                        <br />
                        <button className='next-button'>Next</button>
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