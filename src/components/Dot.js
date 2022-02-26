import React, { useRef, useEffect } from 'react';


const Dot = ({ pageState = 0 }) => {

    const element = useRef();



    const dotArr = [{
        id: 1,
        styles: {
            width: 20,
            height: 20,
            backgroundColor: 'white',
            borderRadius: '100%',
            margin: 10
        }
    }, {
        id: 2,
        styles: {
            width: 20,
            height: 20,
            backgroundColor: 'white',
            borderRadius: '100%',
            margin: 10
        },
        
    },
    {
        id: 3,
        styles: {
            width: 20,
            height: 20,
            backgroundColor: 'white',
            borderRadius: '100%',
            margin: 10
        },
        
    }
]






    return (
        <div style={{ position: 'fixed', right: '10%', top: '50%', botton: '50%' }}>
            {
                dotArr.map((el) => {
                    return (
                        <div style={{ borderRadius: '100%', border: pageState === el.id ? '1px dotted white' : null }}>
                            <div key={el.id + 'dot'} style={el.styles}></div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Dot;