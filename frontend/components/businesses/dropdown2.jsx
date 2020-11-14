import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Redirect } from "react-router-dom";

class Dropdown2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            category: [],
            redirect: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }

    handleClick(e) {
        const catArray = [e.currentTarget.innerText.slice(0, e.currentTarget.innerText.length - 1)];
        this.setState({ category: catArray });
        if (!window.location.href.includes("search")) {

            this.setState({ redirect: true })
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.category !== prevState.category) {
            this.props.updateFilters({ 'category': this.state.category });
        }
    }
    render() {
        const calculator = <FontAwesomeIcon icon={['fas', 'calculator']} />
        const bank = <FontAwesomeIcon icon={['fas', 'piggy-bank']} />
        const suitcase = <FontAwesomeIcon icon={['fas', 'suitcase']} />
        const money = <FontAwesomeIcon icon={['fas', 'money-bill']} />
        const laptop = <FontAwesomeIcon icon={['fas', 'laptop']} />
        const marketing = <FontAwesomeIcon icon={['fas', 'lightbulb']} />
        const dollar = <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
        const insurance = <FontAwesomeIcon icon={['fas', 'house-damage']} />
        const redirectToSearch = this.state.redirect;
        if (redirectToSearch) {
            return <Redirect to={'/search'} />
        } else {
            return (
            <div>
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a  className="icon-parent">Professional Services {suitcase}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper-2">
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Accounting {calculator}</a></li>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Banking {bank}</a></li>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Legal {suitcase}</a></li>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Finance {money}</a></li>
                            </ul>
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Insurance {insurance}</a></li>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Investing {dollar}</a></li>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Web Design {laptop}</a></li>
                                <li><a  className="icon-filter" onClick={this.handleClick} >Marketing {marketing}</a></li>
                            </ul>
                        </div>

                    ) : null}
                </button>
            </div>
            )
        }
    }
}

export default Dropdown2;