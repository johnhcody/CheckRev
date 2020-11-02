import React from 'react';


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        return (
            <>
            <div className="review-header">
                <header>Recent Reviews</header>
            </div>
            {
                this.props.reviews.map(review => {
                    return <ReviewProfile />
                })
            }
            </>
        )
    }
}

export default ReviewIndex;