import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import ReviewProfile from './review_profile';
import { formatDate } from '../../util/date_utils';
import { Link } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';
// import DeleteIcon from 'react-tooltip'; 
//import DeleteIcon from '@material-ui/icons/Delete';

class ReviewText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onMouseEnter(e) {
        this.setState({ hovered: true });
    };

    onMouseLeave(e) {
        this.setState({ hovered: false });
    };
    
    renderRating(rating) {
        const star = <FontAwesomeIcon icon={['fas', 'star']} />
        switch(rating) {
            case 1:
                return <a>{star}</a> 
            case 2:
                return <a>{star} {star}</a>
            case 3:
                return <a>{star} {star} {star}</a>
            case 4:
                return <a>{star} {star} {star} {star}</a>
            case 5:
                return <a>{star} {star} {star} {star} {star}</a>
            default:
                break;
        }
    }

    handleClick(e) {
        debugger
        this.props.deleteReview(this.props.review);
        debugger
        this.props.rerenderCallback();
    }


    render() {
        if (!this.props.author) {
            return null
        } else {
            const hovered = this.state.hovered;
            const style = hovered && this.props.currentUser.id === this.props.review.author_id ? { display: "block" } : { display: "none" }
            const user = <FontAwesomeIcon icon="user" />
    
            return (
                <div className="review-text-and-profile-wrapper" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                <div className="review-user-wrapper" >
                    <div className="user-img">
                        <a>{user}</a>
                    </div>
                    <div className="user-prof">
                        <h1>{this.props.author.firstName} {this.props.author.lastName}</h1>
                        <h2>Boston, MA</h2>
                        <h3>{typeof this.props.author.reviews === 'undefined' ? "0" : this.props.author.reviews.length.toString()} Reviews</h3>
                        <Link to={`/businesses/${this.props.business.id}/${this.props.review.id}/review-edit`}><h4 style={style}>Edit this Review</h4></Link>
    
                    </div>
                </div>
                <div className="review-text-wrapper">
                    <div className="review-text-header">
                        {this.renderRating(this.props.review.rating)}
                        <h2>{formatDate(this.props.review.created_at)}</h2>
                    </div>
                    <p>{this.props.review.body}</p>
                    <div className="trash-wrapper">
                        {this.props.author.id === this.props.currentUser.id ? <i onClick={this.handleClick} className="far fa-trash-alt"></i> : null }
                    </div>
                </div>
            </div>
            )
        }

    }
}

export default ReviewText;