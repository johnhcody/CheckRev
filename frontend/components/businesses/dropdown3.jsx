import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Dropdown3 extends React.Component {
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
        return (
            <div>
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a className="icon-parent">Home Services {bell}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper-3">
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a className="icon-filter">Cleaning {bell}</a></li>
                                <li><a className="icon-filter">Landscaping {bell}</a></li>
                                <li><a className="icon-filter">Security {bell}</a></li>
                                <li><a className="icon-filter">Real Estate {bell}</a></li>
                            </ul>
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a className="icon-filter">Construction {bell}</a></li>
                                <li><a className="icon-filter">Interior Design {bell}</a></li>
                                <li><a className="icon-filter">Property Management {bell}</a></li>
                                <li><a className="icon-filter">Roofing {bell}</a></li>
                            </ul>
                        </div>

                    ) : null}
                </button>
            </div>
        )
    }
}

export default Dropdown3;