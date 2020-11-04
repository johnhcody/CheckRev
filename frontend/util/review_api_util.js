export const fetchReviews = () => (
    $.ajax({
        url: `api/reviews/`
    })
);

export const fetchReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}/`
    })
);

export const createReview = review => {
    return $.ajax({
        url: `api/reviews/`,
        method: 'POST',
        data: {
            review: {
                id: review.id,
                business_id: review.businessId,
                rating: review.rating,
                author_id: review.authorId,
                body: review.body
            }
        }
    })

};

export const updateReview = review => {
    debugger
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data: {
            review: {
                id: review.id,
                business_id: review.businessId,
                rating: review.rating,
                author_id: review.authorId,
                body: review.body
            }
        }
    })
};

export const deleteReview = reviewId => {
    debugger
    return $.ajax({
        url: `/api/reviews/${reviewId}/`,
        method: 'DELETE'
    })
}