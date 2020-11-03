import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ReviewProfile extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

    }
    

    onMouseEnter(e) {
        this.setState({ hovered: true });
    };

    onMouseLeave(e) {
        this.setState({ hovered: false });
    };

    // renderEdit() {
    //     debugger
    //     if (props.currentUser.id === props.review.author_id && document.getElementById('edit-link')) {
    //         document.getElementById('edit-link').style.display = "block"
    //     }
    // }
    
    render() {
        const hovered = this.state.hovered;
        const style = hovered && this.props.currentUser.id === this.props.review.author_id ? { display: "block" } : { display: "none"}
        const user = <FontAwesomeIcon icon="user" />
        debugger
        return (
            <div className="review-user-wrapper" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="user-img">
                    <a>{user}</a>
                </div>
                <div className="user-prof">
                    <h1>{this.props.author.firstName} {this.props.author.lastName}</h1>
                    <h2>Boston, MA</h2>
                    <h3>{typeof this.props.author.reviews === 'undefined' ? "0" : this.props.author.reviews.length.toString()} Reviews</h3>
                    <h4 style={style}>Edit this Review</h4>
                </div>
                
            </div>
        )
    }
}

export default ReviewProfile;