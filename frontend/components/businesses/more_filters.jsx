import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const bell = <FontAwesomeIcon icon="concierge-bell" />

class MoreFilters extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            category: []
        }
    }

    handleClick() {
        return () => {
            this.props.closeModal()
        }
    }

    handleChange(field) {
        return e => {
            debugger
            const valArray = [e.currentTarget.value]
            e.currentTarget.checked ? this.setState({ category: this.state.category.concat(valArray) }) : this.setState({ category: this.state.category.filter(el => el !== e.currentTarget.value) })

        }
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (this.state.category !== prevState.category) {
            this.props.updateFilters({ 'category': this.state.category });
        }
    }

    render() {
        return (
            <div className="more-filters">
                    <div className="modal-top-title">
                        <header>Professional Categories</header>
                        <button className="close-modal-button" onClick={this.props.closeModal}>X</button>
                    </div>
                        <div className="modal-category-container-wrapper">
                        <div className="modal-category-container">
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Accounting" onChange={this.handleChange('category')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Accounting</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Banking" onChange={this.handleChange('category')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Banking</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Legal" onChange={this.handleChange('category')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Legal</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Finance" onChange={this.handleChange('category')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Finance</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Insurance" onChange={this.handleChange('category')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Insurance</span>
                            </label>
                            <label className="checkbox">
                                <span className="checkbox__input">
                                    <input type="checkbox" name="checkbox" value="Investing" onChange={this.handleChange('category')} />
                                    <span className="checkbox__control">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                    </span>
                                </span>
                                <span className="radio__label">Investing</span>
                            </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Web Design" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Web Design</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Marketing" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Marketing</span>
                                </label>
                        </div>
                            <div className="modal-top-title">
                                <header>Home Categories</header>
                            </div>

                            <div className="modal-category-container">
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Cleaning" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Cleaning</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Landscaping" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Landscaping</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Security" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Security</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Real Estate" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Real Estate</span>
                                </label>   
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Construction" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Construction</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Interior Design" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Interior Design</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Property Management" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Property Management</span>
                                </label>
                                <label className="checkbox">
                                    <span className="checkbox__input">
                                        <input type="checkbox" name="checkbox" value="Roofing" onChange={this.handleChange('category')} />
                                        <span className="checkbox__control">
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                                        </span>
                                    </span>
                                    <span className="radio__label">Roofing</span>
                                </label>   

                                </div>
                </div>
            </div>
        )
    }
}

export default MoreFilters;