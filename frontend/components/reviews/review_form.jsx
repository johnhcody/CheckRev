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
        const locArr = window.location.href.split('/');
        const strId = locArr[locArr.length - 2];
        const busId = parseInt(strId);
        this.props.fetchBusinesses()
        this.setState({
            busId: [busId]
        });
        debugger
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
                <div>
                    <h1>I am the Review Form for {business.name}</h1>
                </div>
            )
    }
}

export default ReviewForm;