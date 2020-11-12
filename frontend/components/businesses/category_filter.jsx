import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalFilter from './more_filters'
class CategoryFilter extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
        // this.props.closeModal = this.props.closeModal.bind(this);
        this.state = {
            category: []
        }
    }
    
    handleChange(field) {
        return e => {

            const valArray = [e.currentTarget.value]
            e.currentTarget.checked ? this.setState({ category: this.state.category.concat(valArray) }) : this.setState({ category: this.state.category.filter(el => el !== e.currentTarget.value) })

        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.category !== prevState.category) {
            this.props.updateFilters({'category': this.state.category});
        }
    }

    render() {
                    const check = <FontAwesomeIcon icon="check" />
        return (
            <div className="type-container">
                <header>Category</header>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Japanese" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Japanese</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Thai" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Thai</span>
                </label>
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
                        <input type="checkbox" name="checkbox" value="Italian" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Italian</span>
                </label>
                <div className="see-more-trigger">
                    <button onClick={this.props.openModal}>
                        Filter by Amenities
                    </button>
                </div>
            </div>
        )
    }
}

export default CategoryFilter;