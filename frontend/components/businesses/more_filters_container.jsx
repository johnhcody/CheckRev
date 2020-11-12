import { connect } from 'react-redux';
import MoreFilters from './more_filters';
import { updateFilters } from '../../actions/filter_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        openModel: () => dispatch(openModel('see-more')),
        closeModal: () => dispatch(closeModal()),
        updateFilters: (filterObj) => dispatch(updateFilters(filterObj))
    }
}


export default connect(null, mDTP)(MoreFilters);