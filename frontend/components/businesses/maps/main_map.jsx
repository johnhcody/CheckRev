import React from 'react';
import MarkerManager from '../../../util/marker_manager';



class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.updateFilters = this.props.updateFilters.bind(this);
    }
    
    componentDidMount() {

        const mapOptions = {
            center: { lat: 41.8459, lng: -70.9495  },
            zoom: 10
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);



        this.registerListeners();
        

    }

    registerListeners() {
        const that = this;
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            that.props.updateFilters('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            // this.handleClick(coords);
        });
    }
    
    componentDidUpdate() {

        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }
    render() {
        return (
            <div className="google-map-wrapper">
                <div style={{ width: 400, height: 750, position: "fixed" }} id="map-wrapper" ref={map => this.mapNode = map}></div> 
            </div>
            )
        }
    }
    
    
export default MainMap;

                    
