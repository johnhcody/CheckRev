import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const bell = <FontAwesomeIcon icon="concierge-bell" />

class MoreFilters extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        (e) => {
            this.props.closeModal()
        }
    }

    render() {
        return (
            <div className="more-filters">
                <ul>
                    <div className="modal-top-title">
                        <header>More Features</header>
                        <button className="close-modal-button" onClick={this.props.closeModal}>X</button>
                    </div>
                        <div className="modal-category-container-wrapper">
                            <div className="modal-category-container">
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>This Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Another Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Seach by this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>but not this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>This Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Another Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Seach by this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>but not this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                            </div>
                            <div className="modal-category-container">
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>This Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Another Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Seach by this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>but not this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>This Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Another Feature</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>Seach by this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>but not this</h2>
                                </div>
                                <div className="modal-cat-button-container">
                                    <button></button> <h2>or that</h2>
                                </div>
                            </div>
                        </div>

                </ul>
                
            </div>
        )
    }
}

export default MoreFilters;