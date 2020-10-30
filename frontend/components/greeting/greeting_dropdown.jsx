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
        const user = <FontAwesomeIcon icon="user" />
        return (
            <div>
                <button className="splash-drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a>{user}</a>
                    {this.state.show ? (
                        <div className="splash-dropdown-wrapper">
                            <header>{user} {this.props.currentUser.firstName}</header>
                            <a id="logout-button-splash" onClick={this.handleClick}>Logout</a>
                        </div>
                    ) : null}
                </button>
            </div>
        )
    }
}

export default GreetingDropdown;