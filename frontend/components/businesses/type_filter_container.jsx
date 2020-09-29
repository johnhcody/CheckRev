import { connect } from 'react-redux';
import TypeFilter from './type_filter';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    debugger
    return {
        openModal: () => dispatch(openModal('see-more'))
    }
}


export default connect(null, mDTP)(TypeFilter);