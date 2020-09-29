import React from 'react';

class MainMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
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

