import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate } from '../../util/date_utils';
import { Link } from 'react-router-dom';


class ReviewText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
            value: 0
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.rerenderCallback = this.rerenderCallback.bind(this);

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
        this.props.deleteReview(this.props.review);
        this.props.rerenderCallback();
        // this.setState({value: this.state.value + 1})
    }

    componentDidMount() {
        // below works...but need to properly send patch request
        // if (typeof this.props.author !== 'undefined') {
        //     if (this.props.author.state === "" && this.props.author.city === "") {
        // fetch(`http://ZiptasticAPI.com/${this.props.author.zipcode}`)
        //     .then((resp) => resp.json()) // Transform the data into json
        //     .then(function (data) {
        //         document.getElementById("city-and-zip").innerHTML = data["city"].charAt(0) + data["city"].slice(1).toLowerCase() + ", " + data['state']
        //         })
        //     } else {
        //         document.getElementById("city-and-zip").innerHTML = this.props.author.city + ", " + this.props.author.state
        //     }
        // }

    }

    componentDidUpdate(prevProps, prevState) {
        // const cityAndState = document.getElementById("city-and-zip").innerHTML;
        // if (cityAndState !== ""  && this.props.author && this.props.author.city !== "" && this.props.author.state !== "") {
        //     const obj = {
        //         city: cityAndState.split(',')[0],
        //         state: cityAndState.split(' ')[1]
        //     }
        //     console.log(obj);
        //     // const user = Object.assign({}, this.props.author);
        //     // Object.assign(user, obj)
        //     // 
        //     // this.props.updateUser(user)
        // } else if ...
        if (this.props.review.body !== prevProps.review.body || this.props.review.rating !== prevProps.review.rating){

            // this.forceUpdate();
            this.rerenderCallback();
            this.props.fetchBusiness(this.props.business.id)
            this.setState({value: this.state.value + 1})
        }
    } 

    rerenderCallback() {

        this.props.rerenderCallback();
    }


    render() {
        if (!this.props.author) {
            return null
        } else if (this.props.currentUser) {
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
                        <h2 id="city-and-zip"></h2>
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
        } else {
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
                        </div>
                    </div>
                    <div className="review-text-wrapper">
                        <div className="review-text-header">
                            {this.renderRating(this.props.review.rating)}
                            <h2>{formatDate(this.props.review.created_at)}</h2>
                        </div>
                        <p>{this.props.review.body}</p>
                    </div>
                </div>
            )
        }

    }
}

export default ReviewText;