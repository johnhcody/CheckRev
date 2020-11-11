import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Dropdown1 extends React.Component {
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
        const home = <FontAwesomeIcon icon="home" />
        const bell = <FontAwesomeIcon icon="concierge-bell" />
        const chevron = <FontAwesomeIcon icon="fa-chevron-down" />
        const coffee = <FontAwesomeIcon icon={['fas', 'coffee']}/>
        const carrot = <FontAwesomeIcon icon={['fas', 'carrot']} />
        const fish = <FontAwesomeIcon icon={['fas', 'fish']} />
        const iceCream = <FontAwesomeIcon icon={['fas', 'ice-cream']} />
        const pepper = <FontAwesomeIcon icon={['fas', 'pepper-hot']} />
        const pizza = <FontAwesomeIcon icon={['fas', 'pizza-slice']} />
        const wineGlass = <FontAwesomeIcon icon={['fas', 'wine-glass']} />
        const utensils = <FontAwesomeIcon icon={['fas', 'utensils']} />
        const taco = <FontAwesomeIcon icon={['fas', 'taco']} />
        const oven = <FontAwesomeIcon icon={['fas', 'oven']} />
        return (
            <div>
                <button className="drop-button" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}><a className="icon-parent">Restaurants {bell}</a>
                    {this.state.show ? (
                        <div className="dropdown-wrapper-1">
                        <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                            <li><a className="icon-filter">{carrot} Vegetarian</a></li>
                            <li><a className="icon-filter">{pepper} Thai</a></li>
                            <li><a className="icon-filter">{fish} Seafood</a></li>
                            <li><a className="icon-filter">{utensils} Mexican</a></li>
                        </ul>
                        <ul className="btn-ul" onClick={e => e.stopPropagation()}>
                            <li><a className="icon-filter">{pizza} Italian</a></li>
                            <li><a className="icon-filter">{iceCream} Dessert</a></li>
                            <li><a className="icon-filter">{wineGlass} Bar</a></li>
                            <li><a className="icon-filter">{coffee} Cafe</a></li>
                        </ul>
                        </div>

                    ) : null}
                </button>
            </div>
        )
    }
}

export default Dropdown1;