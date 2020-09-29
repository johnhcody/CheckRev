import React from 'react';

class PriceFilters extends React.Component {
    constructor(props) {
        super(props)
    }



    // handleClick() {
    //     this.props.btnColor = 'red';
    // }

    render() {
        return (
            <div className="dollar-filter-wrapper">
                <button>$</button>
                <button>$$</button>
                <button>$$$</button>
                <button>$$$$</button>
                {/* <button 
                onClick={this.handleClick}
                style={{backgroundColor: this.props.btnColor}}
                >$</button>
                <button onClick={this.handleClick}>$$</button>
                <button onClick={this.handleClick}>$$$</button>
                <button onClick={this.handleClick}>$$$$</button> */}
            </div>
        )
    }
}

export default PriceFilters;

