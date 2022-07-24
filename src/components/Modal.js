import React from 'react';
import Modal from 'react-modal';
import '../design/css/modal.device.css';

const customStyles = {

    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    content: {
        width: '80%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

function ModalComponent({ isOpen = false, onRequestClose = () => null, projectItemInfo }) {


    const { title, skill, content, image, link } = projectItemInfo;

    return (
        <Modal

            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            ariaHideApp={false}
        >
            <div style={{ width: '100%', height: '80vh' }}>
                <div
                    onClick={onRequestClose}
                    style=
                    {{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        cursor: 'pointer',
                        textShadow: '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',
                        color: 'white',
                        fontFamily: 'Gmarket-sans-bold'
                    }}>
                    CLOSE
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='modal-image-wrap' src={image} />
                    <br />
                    <h3>
                        프로젝트명 : {title}
                    </h3>
                    <br />
                    <p style={{ textAlign: 'center' }}>
                        사용기술  {skill}
                    </p>
                    <br />
                    <div className='content-info-wrap'>
                        <p style={{ fontSize: 20, textAlign: 'center' }}>
                            {content}
                        </p>
                    </div>
                    <br />
                    {link && <p style={{ textAlign: 'center' }}>
                        바로가기  <a href={link} target='_blank'>{link}</a>
                    </p>}
                </div>
            </div>

        </Modal>
    );
}

export default ModalComponent;