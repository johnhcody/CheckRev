import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Dropdown3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            category: []
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
        this.setState({ category: catArray })
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.category !== prevState.category) {
            this.props.updateFilters({ 'category': this.state.category });
        }
    }
    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        const home = <FontAwesomeIcon icon="home" />
        const bell = <FontAwesomeIcon icon="concierge-bell" />
        const building = <FontAwesomeIcon icon={['fas', 'building']} />
        const lock = <FontAwesomeIcon icon={['fas', 'lock']} />
        const tree = <FontAwesomeIcon icon={['fas', 'tree']} />
        const drafting = <FontAwesomeIcon icon={['fas', 'drafting-compass']} />
        const roofing = <FontAwesomeIcon icon={['fas', 'vihara']} />
        const broom = <FontAwesomeIcon icon={['fas', 'broom']} />
        const house = <FontAwesomeIcon icon={['fas', 'home']} />
        const hammer = <FontAwesomeIcon icon={['fas', 'hammer']} />

        return (
            <div>
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a className="icon-parent">Home Services {house}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper-3">
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a className="icon-filter" onClick={this.handleClick} >Cleaning {broom}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick} >Landscaping {tree}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick} >Security {lock}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick} >Real Estate {house}</a></li>
                            </ul>
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a className="icon-filter" onClick={this.handleClick} >Construction {hammer}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick} >Interior Design {drafting}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick} >Property Management {building}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick} >Roofing {roofing}</a></li>
                            </ul>
                        </div>

                    ) : null}
                </button>
            </div>
        )
    }
}

export default Dropdown3;