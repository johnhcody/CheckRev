import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const BusinessShowinfo = props => {
    const star = <FontAwesomeIcon icon={['fas', 'star']} />
    return (
        <div className="bus-show-info">
            <h2>{props.phoneNumber}</h2>
            <h3>{props.webAddress}</h3>
        </div>
    )
}

export default BusinessShowinfo;