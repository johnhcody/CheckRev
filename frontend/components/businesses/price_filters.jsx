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
                    <input type="radio" name="$" id="dol$"/><label id="dol1" htmlFor="dol$">$</label>
                    <input type="radio" name="$$" id="dol$$" /><label id="dol2" htmlFor="dol$$">$$</label>
                    <input type="radio" name="$$$" id="dol$$$" /><label id="dol3" htmlFor="dol$$$">$$$</label>
                    <input type="radio" name="$$$$" id="dol$$$$" /><label id="dol4" htmlFor="dol$$$$">$$$$</label>
                </div>
            </div>
        )
    }
}

export default PriceFilters;