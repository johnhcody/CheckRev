import React from 'react';


class FeaturedBusinessItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="featured-bus-card">
                <a href="#" >
                    <img src={this.props.photoUrl} />
                    <h1>{this.props.name}</h1>
                    <h2><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> 10 reviews</h2>
                    <h3>{this.props.type}</h3>
                    <h3>{this.props.city}</h3>
                </a>
            </div>
        )
    }
}

export default FeaturedBusinessItem;