import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const bell = <FontAwesomeIcon icon="concierge-bell" />

const MoreFilters = (props) => {
    return (
        <div className="more-filters">
            <ul>
                <button onClick={props.closeModal}>X</button>
                <header>More Features</header>
                <div className="feat-list-1">
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                </div>
                <div className="feat-list-2">
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                    <li>{bell} This Feature</li>
                </div>
            </ul>
            
        </div>
    )
}

export default MoreFilters;