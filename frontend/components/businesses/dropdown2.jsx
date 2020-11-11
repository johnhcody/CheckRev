import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Dropdown2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    }
    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }
    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        const home = <FontAwesomeIcon icon="home" />
        const bell = <FontAwesomeIcon icon="concierge-bell" />
        const calculator = <FontAwesomeIcon icon={['fas', 'calculator']} />
        const bank = <FontAwesomeIcon icon={['fas', 'piggy-bank']} />
        const suitcase = <FontAwesomeIcon icon={['fas', 'suitcase']} />
        const money = <FontAwesomeIcon icon={['fas', 'money-bill']} />
        const laptop = <FontAwesomeIcon icon={['fas', 'laptop']} />
        const marketing = <FontAwesomeIcon icon={['fas', 'lightbulb']} />
        const dollar = <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
        const insurance = <FontAwesomeIcon icon={['fas', 'house-damage']} />
        return (
            <div>
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a  className="icon-parent">Professional Services {suitcase}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper-2">
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a  className="icon-filter">Accounting {calculator}</a></li>
                                <li><a  className="icon-filter">Banking {bank}</a></li>
                                <li><a  className="icon-filter">Legal {suitcase}</a></li>
                                <li><a  className="icon-filter">Finance {money}</a></li>
                            </ul>
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a  className="icon-filter">Insurance {insurance}</a></li>
                                <li><a  className="icon-filter">Investing {dollar}</a></li>
                                <li><a  className="icon-filter">Web Design {laptop}</a></li>
                                <li><a  className="icon-filter">Marketing {marketing}</a></li>
                            </ul>
                        </div>

                    ) : null}
                </button>
            </div>
        )
    }
}

export default Dropdown2;