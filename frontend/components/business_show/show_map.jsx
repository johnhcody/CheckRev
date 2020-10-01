import React from 'react';
import MarkerManager from '../../util/marker_manager';


class MainMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        const mapOptions = {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 15
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.createMarkerfromBusiness(this.props.business);
    }

    componentDidUpdate() {

        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }
    render() {
        return (

                <div style={{ width: 315, height: 150 }} ref={map => this.mapNode = map}></div>

        )
    }
}


export default MainMap;