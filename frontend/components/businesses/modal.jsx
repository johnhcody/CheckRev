import React from 'react';

import MoreFilters from './more_filters_container';

function Modal({ modal, closeModal, updateFilters }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'see-more':
            component = <MoreFilters closeModal={closeModal} updateFilters={updateFilters} /> 
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;



