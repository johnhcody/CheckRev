import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { updateFilters } from '../../actions/filter_actions';


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateFilters: (filterObj) => dispatch(updateFilters(filterObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);