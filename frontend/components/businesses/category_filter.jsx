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
                <header>Category</header>


                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="cat-restaurants"/>
                            <span className="checkbox__control">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                    <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                            </span>
                    </span>
                        <span className="radio__label">Restaurants</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="cat-home-services" />
                            <span className="checkbox__control">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                    <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                            </span>
                    </span>
                        <span className="radio__label">Home Services</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="cat-professional-services"/>
                            <span className="checkbox__control">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                    <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
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