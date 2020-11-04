import React from 'react';

class AverageRating extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const len = this.props.reviews.length;
        let total = 0;
        this.props.reviews.forEach(review => {
            total += review.rating;
        })
        const halfStar = window.halfStar;
        const fullStar = window.fullStar;
        const avg = (total / len).toFixed(1)

        if (avg > 0 && avg < 1) {
            return <img src={halfStar} />
        } else if (avg >= 1 && avg <= 1.4) {
            return <img src={fullStar} />
        } else if (avg >= 1.5 && avg < 2) {
            return <div><img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg >= 2 && avg <= 2.4) {
            return <div><img src={fullStar} /> <img src={fullStar} /></div>
        } else if (avg >= 2.5 && avg < 3) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg >= 3 && avg <= 3.4) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /></div>
        } else if (avg >= 3.5 && avg < 4) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg >= 4 && avg <= 4.4) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /></div>
        } else if (avg > 4.4 && avg <= 4.6) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg > 4.6) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /></div>
        }
    }
}

export default AverageRating;