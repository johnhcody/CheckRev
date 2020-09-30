import { connect } from 'react-redux';
import MoreFilters from './more_filters';
import {openModel, closeModal} from '../../actions/modal_actions';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    debugger
    return {
        openModel: () => dispatch(openModel('see-more')),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(null, mDTP)(MoreFilters);