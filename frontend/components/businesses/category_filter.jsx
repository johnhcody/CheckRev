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
                <header>Restaurant Category</header>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Dessert" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Dessert</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Vegetarian" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Vegetarian</span>
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
                        <input type="checkbox" name="checkbox" value="Seafood" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Seafood</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Mexican" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Mexican</span>
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
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Bar" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Bar</span>
                </label>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" value="Cafe" onChange={this.handleChange('category')} />
                        <span className="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
                        </span>
                    </span>
                    <span className="radio__label">Cafe</span>
                </label>
                <div className="see-more-trigger">
                    <button onClick={this.props.openModal}>
                        Filter by Other Categories
                    </button>
                </div>
            </div>
        )
    }
}

export default CategoryFilter;