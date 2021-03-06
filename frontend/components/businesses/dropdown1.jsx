import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";

class Dropdown1 extends React.Component {
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
        this.setState({category: catArray});
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
        const coffee = <FontAwesomeIcon icon={['fas', 'coffee']}/>
        const carrot = <FontAwesomeIcon icon={['fas', 'carrot']} />
        const fish = <FontAwesomeIcon icon={['fas', 'fish']} />
        const iceCream = <FontAwesomeIcon icon={['fas', 'ice-cream']} />
        const pepper = <FontAwesomeIcon icon={['fas', 'pepper-hot']} />
        const pizza = <FontAwesomeIcon icon={['fas', 'pizza-slice']} />
        const wineGlass = <FontAwesomeIcon icon={['fas', 'wine-glass']} />
        const utensils = <FontAwesomeIcon icon={['fas', 'utensils']} />
        const redirectToSearch = this.state.redirect;
        if (redirectToSearch) {
            return <Redirect to={'/search'} />
        } else {
            return (
                <div>
                    <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a className="icon-parent">Restaurants {utensils}</a>
                        {this.state.show ? (
                            <div className="dropdown-wrapper-1">
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a className="icon-filter" onClick={this.handleClick}>Vegetarian {carrot}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick}>Thai {pepper}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick}>Seafood {fish}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick}>Mexican {utensils}</a></li>
                            </ul>
                            <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                                <li><a className="icon-filter" onClick={this.handleClick}>Italian {pizza}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick}>Dessert {iceCream}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick}>Bar {wineGlass}</a></li>
                                <li><a className="icon-filter" onClick={this.handleClick}>Cafe {coffee}</a></li>
                            </ul>
                            </div>
    
                        ) : null}
                    </button>
                </div>
            )
        }
    }
}

export default Dropdown1;