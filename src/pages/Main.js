import React from 'react';
import Typing from 'react-typing-animation';
import '../design/css/main.css';
import '../design/css/main.device.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const styles = {
    bounce: {
        animation: 'x 1s infinite',
        animationName: Radium.keyframes(bounce, 'bounce'),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'

    }
}

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
            <StyleRoot>
                <div style={styles.bounce}>
                    <h1 style={{ color: 'white', padding: 0, margin: 0 }}>Scroll</h1>
                    <KeyboardDoubleArrowDownIcon fontSize='large' style={{ color: 'white' }} />
                </div>
            </StyleRoot>
        </section>
    );
}

export default Main;