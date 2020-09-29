import React from 'react';

class MainMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        const mapOptions = {
            center: { lat: 122.4194, lng: 37.7749 },
            zoom: 13
        };


        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div className="map-container">
                <div ref={map => this.mapNode = map}></div> 
            </div>
            )
        }
}


export default MainMap;

