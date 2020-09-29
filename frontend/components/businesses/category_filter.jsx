import React from 'react';


class CategoryFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div className="filter-placeholder">
            <h1>Category</h1>
            <label htmlFor=""><input type="checkbox" name="" id="" />Restaurants</label>
            <label htmlFor=""><input type="checkbox" name="" id="" />Home Services</label>
            <label htmlFor=""><input type="checkbox" name="" id="" />Professional Services</label>
        </div>
        )
    }
}

export default CategoryFilter;