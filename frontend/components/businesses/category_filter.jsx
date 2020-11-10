import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class CategoryFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            business_type: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        debugger
        return e => {
            debugger
            e.currentTarget.checked ? this.setState({ [field]: this.state.business_type.push(e.currentTarget.value) }) : this.setState({ [field]: this.state.business_type.filter(el => el !== (e.currentTarget.value)) })
            debugger
            this.props.updateFilters(field, this.state.business_type)
            debugger
        }

    }

    render() {

        return (
            <div className="category-container">
                <header>Category</header>


                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Restaurant" onChange={this.handleChange('business_type')}/>
                            <span className="checkbox__control">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                    <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                            </span>
                    </span>
                        <span className="radio__label">Restaurants</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Home Services" onChange={this.handleChange('business_type')}/>
                            <span className="checkbox__control">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                            </span>
                    </span>
                        <span className="radio__label">Home Services</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Professional Services" onChange={this.handleChange('business_type')}/>
                            <span className="checkbox__control">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                            </span>
                    </span>
                        <span className="radio__label">Professional Services</span>
                </label>


{/* 
                    


               <div className="cat-button-container">
                   <input type="checkbox" name="cat-restaurant" id="" value="restaurant" />
                   <label htmlFor="cat-restaurant">Restaurants</label>               </div>
               <div className="cat-button-container">
                    <input type="checkbox" name="cat-home-services" id="" value="home-services" />
                    <label htmlFor="cat-home-services">Home Services</label>
               </div>
               <div className="cat-button-container">
                    <input type="checkbox" name="cat-professional-services" id="" value="professional-services" />
                    <label htmlFor="cat-professional-services">Professional Services</label>
               </div> */}
            </div>
        )
    }
}

export default CategoryFilter;