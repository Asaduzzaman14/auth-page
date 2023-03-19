import React from 'react';
import './login.css'
import './verification.css'

const Verification = () => {
    return (
        <div className='details-container'>
            <div className=' container'>
                <div className='content containerStart'>
                    <img className='icon' src="/subtract.png" alt="" />
                    <h2 className='title'>Enter the verification <br /> code to continue</h2>
                    <p>
                        We sent to hellouser@heads.design. If you <br /> don’t see it, check your spam.
                    </p>
                    <div className='codes'>
                        <input className='code-box' type="text" />
                        <input className='code-box' type="text" />
                        <input className='code-box' type="text" />
                        <input className='code-box' type="text" />
                        <input className='code-box' type="text" />
                        <input className='code-box' type="text" />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                        <span className="backButton">Back</span>
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