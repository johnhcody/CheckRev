import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';

class BusinessIcons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="bus-icons-parent">
                    <Dropdown1 
                        history={this.props.history}
                        updateFilters={this.props.updateFilters} />
                    <Dropdown2 
                        history={this.props.history}
                        updateFilters={this.props.updateFilters} />
                    <Dropdown3 
                        history={this.props.history}
                        updateFilters={this.props.updateFilters} />
                </div>
            </div>
        )
    }

}


export default BusinessIcons;