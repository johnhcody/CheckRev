import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import ReviewNav from './review_nav';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.reviewId,
            body: this.props.body,
            rating: this.props.rating,
            businessId: this.props.busId,
            authorId: this.props.currentUser.id,
            ready: false,
            change: false
                    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRating = this.renderRating.bind(this);
    }

    componentDidMount() {
        // this.props.fetchBusiness(parseInt(window.location.href.split('/')[window.location.href.split('/').length - 2]))
        this.props.fetchBusiness(this.props.busId);
        window.scrollTo(0,0);
        //this.setState({id: this.props.reviewId})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.setState({ready: true})
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }


        
    renderRating() {
            
            switch (this.state.rating) {
                case "0":   
                   return  <div className="radio-wrapper">
                        <label htmlFor="1">
                            <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"}  required />
                            <img src={window.defaultStar} alt=""/>
                        </label>
                        <label htmlFor="2">
                            <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                            <img src={window.defaultStar} alt=""/>
                        </label>
                        <label htmlFor="3">
                            <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                            <img src={window.defaultStar} alt=""/>
                        </label>
                        <label htmlFor="4">
                            <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                            <img src={window.defaultStar} alt=""/>
                        </label>
                        <label htmlFor="5">
                            <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                            <img src={window.defaultStar} alt=""/>
                        </label>
                       <div id="default-text">
                           <p>Select your rating</p>
                       </div>
                    </div>
                    
                case "1":
                    return <div className="radio-wrapper">
                        <label htmlFor="1">
                            <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                            <img src={window.oneStar} alt="" />
                        </label>
                        <label htmlFor="2">
                            <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <label htmlFor="3">
                            <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <label htmlFor="4">
                            <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <label htmlFor="5">
                            <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <div>
                            <p>Not good</p>
                        </div>
                    </div>

                case "2": 
                    return <div className="radio-wrapper">
                        <label htmlFor="1">
                            <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                            <img src={window.twoStar} alt="" />
                        </label>
                        <label htmlFor="2">
                            <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                            <img src={window.twoStar} alt="" />
                        </label>
                        <label htmlFor="3">
                            <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <label htmlFor="4">
                            <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <label htmlFor="5">
                            <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <div>
                            <p>Could've been better</p>
                        </div>
                    </div>
                case "3":
                    return <div className="radio-wrapper">
                        <label htmlFor="1">
                            <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                            <img src={window.threeStar} alt="" />
                        </label>
                        <label htmlFor="2">
                            <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                            <img src={window.threeStar} alt="" />
                        </label>
                        <label htmlFor="3">
                            <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                            <img src={window.threeStar} alt="" />
                        </label>
                        <label htmlFor="4">
                            <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <label htmlFor="5">
                            <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <div>
                            <p>OK</p>
                        </div>
                    </div>
                case "4":
                    return <div className="radio-wrapper">
                        <label htmlFor="1">
                            <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                            <img src={window.fourStar} alt="" />
                        </label>
                        <label htmlFor="2">
                            <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                            <img src={window.fourStar} alt="" />
                        </label>
                        <label htmlFor="3">
                            <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                            <img src={window.fourStar} alt="" />
                        </label>
                        <label htmlFor="4">
                            <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                            <img src={window.fourStar} alt="" />
                        </label>
                        <label htmlFor="5">
                            <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                            <img src={window.defaultStar} alt="" />
                        </label>
                        <div>
                            <p>Good</p>
                        </div>
                    </div>
                case "5":
                    return <div className="radio-wrapper">
                        <label htmlFor="1">
                            <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                            <img src={window.fiveStar} alt="" />
                        </label>
                        <label htmlFor="2">
                            <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                            <img src={window.fiveStar} alt="" />
                        </label>
                        <label htmlFor="3">
                            <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                            <img src={window.fiveStar} alt="" />
                        </label>
                        <label htmlFor="4">
                            <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                            <img src={window.fiveStar} alt="" />
                        </label>
                        <label htmlFor="5">
                            <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                            <img src={window.fiveStar} alt="" />
                        </label>
                        <div>
                            <p>Great</p>
                        </div>
                    </div>
            
                default:
                    break;
            }

    }

    render() {
        const redirectToShow = this.state.ready;
        if (redirectToShow) {
            return <Redirect to={`/businesses/${this.props.busId}`} />
        }
        if (this.props.allBusinesses.length === 0) {
            return null;
        } else {
            
            const business = this.props.allBusinesses.length === 1 ? this.props.allBusinesses[0] : this.props.allBusinesses.filter(business => business.id == this.props.busId)[0]
            return (
                <div>
                    <ReviewNav />
                    <div className="review-form-wrapper">
                        <div className="review-form">
                            <Link to={`/businesses/${business.id}`}><h1>{business.name}</h1></Link>
                            
                            <form onSubmit={this.handleSubmit}>
                                <div className="rating-and-text-wrapper">
                                    <div className="rating-placeholder">
                                        {this.renderRating()}
                                        {/* <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> */}
                                    </div>
                                    <div className="textarea-wrapper">
                                        <textarea name="" id="" onChange={this.handleChange('body')} placeholder={this.props.body.length === 0 ? "Love that all the staff are wearing masks and gloves, it makes me feel that they’re prioritizing health and safety. Unfortunately when I got home I noticed they gave me the wrong size. I understand things are difficult with COVID and that many businesses are short staffed, even if this means I have to go back..." : "" } value={this.state.body}></textarea>
                                    </div>
                                </div>
                                <button>Post Review</button>
                            </form>
                        </div>
                    </div>
                    <Footer />
                    <Copyright />
                </div>
                )
            }
    }
}

export default withRouter(ReviewForm);
