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
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a href="#" className="icon-parent">Professional Services {bell}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper">
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                            </ul>
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                                <li><a href="#" className="icon-filter">Professional Services {bell}</a></li>
                            </ul>
                        </div>

                    ) : null}
                </button>
            </div>
        )
    }
}

export default Dropdown3;