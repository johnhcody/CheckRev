import React from 'react';


class BusinessCategories extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="business-cat-container-parent">
                <div className="heading-title">
                    <h3>Find the Best Businesses in Town</h3>
                </div>
                <div className="bus-cards-container">
                    <div className="bus-card">
                        <img src={window.construction} />
                        <div className="bus-container">
                            <h3>Massage</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessCategories;