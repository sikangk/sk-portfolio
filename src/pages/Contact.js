import React from 'react';
import '../design/css/contact.css';
import '../design/css/contact.device.css';

const Contact = () => {
    return (
        <div
            className='main-wrapper'
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
            <h1 className='main-text'>CONTACT</h1>

            <div>
                <h3 className='sub-text'>Email : updream4@naver.com</h3>
                <div style={{ height: 20 }} />
                <h3 className='sub-text'>Github : <a className='sub-text' href='https://github.com/sikangk' target="_blank">https://github.com/sikangk</a></h3>
                <div style={{ height: 20 }} />
                <h3 className='sub-text'>개발일기(인스타) : <a className='sub-text' href='https://www.instagram.com/dev____sk/' target="_blank">https://www.instagram.com/dev____sk/</a></h3>

            </div>
        </div>
    )
}

export default Contact;