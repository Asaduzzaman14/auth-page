import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import './verification.css'

const Verification = () => {
    return (
        <div className='details-container'>
            <div className=' container'>
                <div className='content containerStart'>
                    <img className='icon' src="/logo.png" alt="" />
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
                    <img className='banner' src="/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Verification;