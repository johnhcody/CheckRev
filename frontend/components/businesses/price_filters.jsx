import React from 'react';
import CategoryFilter from './category_filter';
import TypeFilter from './type_filter';

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
                    <label id="dol1" htmlFor="dol$"><input type="radio" name="$" id="dol$" />$</label>
                    <label id="dol2" htmlFor="dol$$"><input type="radio" name="$$" id="dol$$" />$$</label>
                    <label id="dol3" htmlFor="dol$$$"><input type="radio" name="$$$" id="dol$$$" />$$$</label>
                    <label id="dol4" htmlFor="dol$$$$"><input type="radio" name="$$$$" id="dol$$$$" />$$$$</label>
                </div>
                <CategoryFilter />
                <TypeFilter />
            </div>
        )
    }
}

export default PriceFilters;