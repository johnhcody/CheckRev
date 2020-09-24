import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SearchIcons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        return (
            <div className="icons-parent">
                <p>{utensils}</p>
            </div>
        )
    }

}


export default SearchIcons;

