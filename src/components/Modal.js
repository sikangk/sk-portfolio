import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

function ModalComponent({ isOpen = false, onRequestClose = () => null }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <div style={{ width: 900, height: '80vh' }}>
                <div
                    onClick={onRequestClose}
                    style=
                    {{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        cursor:'pointer'
                    }}>
                    Close
                </div>
            </div>
        </Modal>
    );
}

export default ModalComponent;