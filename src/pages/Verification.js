import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import './verification.css'
import banner from '../images/Banner.png'
import logo from '../images/Logo.png'
import banner1 from '../images/Banner (1).png'
import banner2 from '../images/Banner (2).png'


const Verification = () => {
    return (
        <div className='details-container'>
            <div className=' container'>
                <div className='content containerStart'>
                    <img className='icon' src={logo} alt="" />
                    <h2 className='title'>Enter the verification <br /> code to continue</h2>
                    <p className='message'>
                        We sent to <span style={{ color: '#0858F7' }}>hellouser@heads.design.</span> If you <br /> don’t see it, check your spam.
                    </p>
                    <div className='codes'>
                        <input maxLength={1} className='code-box' type="text" />
                        <input maxLength={1} className='code-box' type="text" />
                        <input maxLength={1} className='code-box' type="text" />
                        <input maxLength={1} className='code-box' type="text" />
                        <input maxLength={1} className='code-box' type="text" />
                        <input maxLength={1} className='code-box' type="text" />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                        <div>
                            <Link to='/'>
                                <span className="backButton">Back</span>
                            </Link>
                            <Link to='/success'>
                                <span className="backButton">Success</span>
                            </Link>
                        </div>
                        <span className='resendCode'>Resend 00:10</span>
                    </div>
                    <p className='signIn'>Not member? <span className='color'>Create account</span> </p>

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

export default Verification;