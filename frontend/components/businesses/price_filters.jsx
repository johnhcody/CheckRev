import React from 'react';

class PriceFilters extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="filter-placeholder">
                <div className="filter-title">
                    <h1>Filters</h1>
                </div>
                <div className="price-container">
                    <label id="dol1" htmlFor="dol$"><input type="radio" name="$" id="dol$"/>$</label>
                    <label id="dol2" htmlFor="dol$$"><input type="radio" name="$$" id="dol$$" />$$</label>
                    <label id="dol3" htmlFor="dol$$$"><input type="radio" name="$$$" id="dol$$$" />$$$</label>
                    <label id="dol4" htmlFor="dol$$$$"><input type="radio" name="$$$$" id="dol$$$$" />$$$$</label>
                </div>
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
            </div>
        )
    }
}

export default PriceFilters;