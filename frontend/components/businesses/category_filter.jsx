import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class CategoryFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const check = <FontAwesomeIcon icon="check"/>
        return (
            <div className="category-container">
               <div className="cat-button-container">
                <button>√</button> <h2>Restaurants</h2>
               </div>
               <div className="cat-button-container">
                    <button>√</button> <h2>Home Services</h2>
               </div>
               <div className="cat-button-container">
                    <button>√</button> <h2>Professional Services</h2>
               </div>
            </div>
        )
    }
}

export default CategoryFilter;