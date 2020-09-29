import React from 'react';


class CategoryFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="category-container">
                <h1>Category</h1>
                <label classname="check-container" >Restaurants<input type="checkbox" name="" /></label>
                <label classname="check-container" >Home Services
                        <input type="checkbox" name="" />
                </label>
                <label classname="check-container" >Professional Services
                        <input type="checkbox" name="" />
                </label>
            </div>
        )
    }
}

export default CategoryFilter;