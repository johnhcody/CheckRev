import { connect } from 'react-redux';
import BusinessReviewsCards from './business_review_cards';

const mSTP = state => {
    debugger
    return {
        business: {
            name: 'Speedy Auto Repair',
            totalReviews: 12,
            type: 'Auto',
            location: 'Boston',
            amenities: "fast, efficient, good value"
        }
    }
}


export default connect(mSTP)(BusinessReviewsCards);