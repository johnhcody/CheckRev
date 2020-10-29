import * as ReviewApiUtil from '../util/review_api_util';


export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: RECEIVE_REVIEW,
    reviewId
});

export const fetchReviews = () => dispatch => (
    ReviewApiUtil.fetchReviews()
        .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const fetchReview = reviewId => dispatch => (
    ReviewApiUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
    ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
);