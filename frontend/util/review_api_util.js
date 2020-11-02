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

export const updateReview = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'patch',
        data: {
            review: {
                id: review.id,
                business_id: review.businessId,
                rating: rating,
                author_id: authorId,
                body: body
            }
        }
    })
);

export const deleteReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}/`,
        method: 'DELETE'
    })
)