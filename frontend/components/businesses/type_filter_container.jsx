import { connect } from 'react-redux';
import TypeFilter from './type_filter';
import { openModal, closeModal } from '../../actions/modal_actions';

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


export default connect(null, mDTP)(TypeFilter);