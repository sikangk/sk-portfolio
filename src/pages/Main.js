import React from 'react';
import Typing from 'react-typing-animation';
import '../design/css/main.css';

const Main = () => {
    return (
        <section
            className='main-wrapper'

        >
            <Typing speed={50}>
                <h1
                    className='main-text'
                >제 얘기가 궁금하신가요 ?</h1>
                <h1
                    className='main-text'
                >스크롤을 내려주세요 !</h1>

            </Typing>
        </section>
    );
}

export default Main;