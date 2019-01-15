import React from 'react';

const Scroll = (props) => {
    // console.log(props);
    return (
        <div className='center' style={{ overflowY: 'scroll', border: '5px solid white', height: '500px' }}>
            {props.children}
        </div>    
    );
}

export default Scroll;