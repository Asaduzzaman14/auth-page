import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import banner from '../images/Banner.png'
import logo from '../images/Logo.png'
import banner1 from '../images/Banner (1).png'
import banner2 from '../images/Banner (2).png'

const Login = () => {
    return (
        <div className='details-container'>
            <div className='container'>
                <div className='content'>
                    <img className='icon' src={logo} alt="" />
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
                    <div className='banners'>
                        <img className='banner' src={banner} alt="" />
                        <img className='banner1' src={banner1} alt="" />
                        <img className='banner2' src={banner2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;