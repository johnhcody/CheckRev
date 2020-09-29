import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class TypeFilter extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
        //     return (
            //         {check}
            //     )
            // }
            
            render() {
                    const check = <FontAwesomeIcon icon="check" />
        return (
            <div className="type-container">
                <div className="cat-button-container">
                    <button onClick={this.handleClick}>{check}</button> <h2>Accountants</h2>
                </div>
                <div className="cat-button-container">
                    <button>{check}</button> <h2>Insurance</h2>
                </div>
                <div className="cat-button-container">
                    <button>{check}</button> <h2>Cleaning</h2>
                </div>
                <div className="cat-button-container">
                <button>{check}</button> <h2>Web Design</h2>
                </div>
                <div className="cat-button-container">
                    <button>{check}</button> <h2>Landscaping</h2>
                </div>
                <div className="cat-button-container">
                    <button>{check}</button> <h2>Construction</h2>
                </div>
                <div className="see-more">
                    <h2>See More</h2>
                </div>
            </div>
        )
    }
}

export default TypeFilter;