import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import CategoryFilter from './category_filter';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        openModal: () => dispatch(openModal('see-more')),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(null, mDTP)(CategoryFilter);