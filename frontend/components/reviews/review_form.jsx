import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            body: this.props.body,
            busId: null,
                    }

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.action(this.state);
    // }

    // update(field) {
    //     return e => this.setState({ [field]: e.currentTarget.value })
    // }

    render() {
        const business = this.props.allBusinesses[parseInt(window.location.href.split('/')[window.location.href.split('/').length - 2])]
        debugger
            return (
                <div className="review-form-wrapper">
                    <div className="review-form">
                        <h1>{business.name}</h1>
                    </div>
                </div>
            )
    }
}

export default ReviewForm;