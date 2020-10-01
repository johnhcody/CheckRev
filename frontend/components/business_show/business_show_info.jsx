import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const BusinessShowinfo = props => {
    const star = <FontAwesomeIcon icon={['fas', 'star']} />
    return (
        <div className="bus-show-info">
            <h2>www.daves-diner.com</h2>
            <h3>(617 273 - 2839</h3>
        </div>
    )
}

export default BusinessShowinfo;