import React from 'react';

function ShowImages() {
    return (
        <div className="img-wrapper">
            <img src={window.rest1} />
            <img src={window.rest2} />
            <img src={window.rest3} />
            <img src={window.rest4} />
        </div>
    )
}

export default ShowImages;