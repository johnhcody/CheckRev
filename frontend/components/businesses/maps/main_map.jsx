import React from 'react';
import MarkerManager from '../../../util/marker_manager';



class MainMap extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {

        const mapOptions = {
            center: { lat: 41.8459, lng: -70.9495  },
            zoom: 10
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }
    
    componentDidUpdate() {

        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }
    render() {
        return (
            <div style={{ width: 400, height: 800 }} id="map-wrapper" ref={map => this.mapNode = map}></div> 
            )
        }
    }
    
    
export default MainMap;

                    
