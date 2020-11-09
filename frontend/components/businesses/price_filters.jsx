import React from 'react';
import CategoryFilter from './category_filter';
import TypeFilter from './type_filter_container';

class PriceFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: "0"
        }
        this.handleChange = this.handleChange.bind(this);
        }


handleChange(field, docId) {
    debugger
    return e => {
        debugger
        const vals = ["1", "2", "3", "4"]
        this.setState({ [field]: e.currentTarget.value })
        // document.getElementById([docId]).style.backgroundColor = '#f2f2f2'
        // document.getElementById([docId]).style.color = '#67917A'
        // debugger
        // return vals.filter(el => el !== e.currentTarget.value).forEach(val => {
        //     document.getElementById([val]).style.backgroundColor = 'white'
        //     document.getElementById([val]).style.color = 'black'
        // })
        document.getElementById(`dol${e.currentTarget.value}`).style.backgroundColor = '#f2f2f2'
        document.getElementById(`dol${e.currentTarget.value}`).style.color = '#67917A'

        debugger
        if (e.currentTarget) {
            return vals.filter(el => el !== e.currentTarget.value).forEach(val => {
                debugger
                document.getElementById(`dol${val}`).style.backgroundColor = 'white'
                document.getElementById(`dol${val}`).style.color = 'black'
            // document.getElementById([val]).style.backgroundColor = 'white'
            // document.getElementById([val]).style.color = 'black'
        })

        }
        debugger
    }
    debugger
}

    render() {
        debugger
        return (
            <div className="filter-placeholder">
                <div className="filter-title">
                    <h1>Filters</h1>
                </div>
                <div className="price-container">
                    <label id="dol1" htmlFor="price-filter-1">
                        <input type="radio" name="$" id="price-filter-1" value="1" onChange={this.handleChange('price', 'dol1')} checked={this.state.price == "1"} required/>
                        $</label>
                    <label id="dol2" htmlFor="price-filter-2">
                        <input type="radio" name="$$" id="price-filter-2" value="2" onChange={this.handleChange('price', 'dol2')} checked={this.state.price == "2"} required/>
                        $$</label>
                    <label id="dol3" htmlFor="price-filter-3">
                        <input type="radio" name="$$$" id="price-filter-3" value="3" onChange={this.handleChange('price', 'dol3')} checked={this.state.price == "3"} required/>
                        $$$</label>
                    <label id="dol4" htmlFor="price-filter-4">
                        <input type="radio" name="$$$$" id="price-filter-4" value="4" onChange={this.handleChange('price', 'dol4')} checked={this.state.price == "4"} required/>
                        $$$$</label>
                </div>
                <CategoryFilter />
                <TypeFilter />
            </div>
        )
    }
}

export default PriceFilters;