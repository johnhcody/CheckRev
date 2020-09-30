import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class GreetingDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }

    handleClick(e) {
        e => e.stopPropagation()
        this.props.logout();
    }

    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        const home = <FontAwesomeIcon icon="home" />
        const bell = <FontAwesomeIcon icon="concierge-bell" />
        const chevron = <FontAwesomeIcon icon="fa-chevron-down" />
        return (
            <div>
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a className="user-dropdown">{bell}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper">
                            <button className="btn-ul" onClick={this.handleClick}>Logout</button> 
                        </div>
                    ) : null}
                </button>
            </div>
        )
    }
}

export default GreetingDropdown;