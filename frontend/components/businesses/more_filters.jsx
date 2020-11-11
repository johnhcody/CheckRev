import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const bell = <FontAwesomeIcon icon="concierge-bell" />

class MoreFilters extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return () => {
            this.props.closeModal()
        }
    }

    handleChange() {
        console.log('hello');
    }

    render() {
        return (
            <div className="more-filters">
                    <div className="modal-top-title">
                        <header>More Features</header>
                        <button className="close-modal-button" onClick={this.props.closeModal}>X</button>
                    </div>
                        <div className="modal-category-container-wrapper">
                            <div className="modal-category-container">
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Restaurant" onChange={this.handleChange('business_type')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Japanese</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Home Services" onChange={this.handleChange('business_type')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Thai</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Professional Services" onChange={this.handleChange('business_type')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Cleaning</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Restaurant" onChange={this.handleChange('business_type')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Landscaping</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Home Services" onChange={this.handleChange('business_type')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Security</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Professional Services" onChange={this.handleChange('business_type')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Italian</span>
                            </label>
                            <div className="see-more-trigger">
                            <div className="modal-category-container">
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Restaurant" onChange={this.handleChange('business_type')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Japanese</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Home Services" onChange={this.handleChange('business_type')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Thai</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Professional Services" onChange={this.handleChange('business_type')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Cleaning</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Restaurant" onChange={this.handleChange('business_type')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Landscaping</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Home Services" onChange={this.handleChange('business_type')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Security</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Professional Services" onChange={this.handleChange('business_type')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Italian</span>
                                </label>   
                            </div>
                            <div className="see-more-trigger">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoreFilters;