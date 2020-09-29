import React from 'react';

class MainMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 122.4194, lng: 37.7749 },
            zoom: 13
        };


        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div id="map-wrapper" ref={map => this.mapNode = map}></div> 
            )
        }
}


export default MainMap;

