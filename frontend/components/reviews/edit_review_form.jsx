import React from 'react';
import ReviewForm from './review_form';

class EditReviewForm extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {
        const { action, formType, review } = this.props;


        if (!review) return null;
        return (
            <ReviewForm
                action={action}
                formType={formType}
                post={post} />
        );
    }
}

export default EditReviewForm;