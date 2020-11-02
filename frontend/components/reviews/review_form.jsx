import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            body: this.props.body,
            busId: '',
            rating: "0"
                    }
        
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderRating() {
        return <div className="radio-wrapper">
            <label htmlFor="1">
                <input type="radio" name="rating" id="1" value="1" onChange={this.handleChange('rating')} checked={this.state.rating == "1"} required />
                <i className="fas fa-star"></i>
            </label>
            <label htmlFor="2">
                <input type="radio" name="rating" id="2" value="2" onChange={this.handleChange('rating')} checked={this.state.rating == "2"} required />
                <i className="fas fa-star"></i>
            </label>
            <label htmlFor="3">
                <input type="radio" name="rating" id="3" value="3" onChange={this.handleChange('rating')} checked={this.state.rating == "3"} required />
                <i className="fas fa-star"></i>
            </label>
            <label htmlFor="4">
                <input type="radio" name="rating" id="4" value="4" onChange={this.handleChange('rating')} checked={this.state.rating == "4"} required />
                <i className="fas fa-star"></i>
            </label>
            <label htmlFor="5">
                <input type="radio" name="rating" id="5" value="5" onChange={this.handleChange('rating')} checked={this.state.rating == "5"} required />
                <i className="fas fa-star"></i>
            </label>
        </div>
    }

    render() {
        const business = this.props.allBusinesses[parseInt(window.location.href.split('/')[window.location.href.split('/').length - 2])]
            return (
                <div className="review-form-wrapper">
                    <div className="review-form">
                        <h1>{business.name}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="rating-and-text-wrapper">
                                <div className="rating-placeholder">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <div className="textarea-wrapper">
                                    <textarea name="" id="" placeholder="Love that all the staff are wearing masks and gloves, it makes me feel that they’re prioritizing health and safety. Unfortunately when I got home I noticed they gave me the wrong size. I understand things are difficult with COVID and that many businesses are short staffed, even if this means I have to go back..."></textarea>
                                </div>
                            </div>
                            <button>Post Review</button>
                        </form>
                    </div>
                </div>
            )
    }
}

export default ReviewForm;