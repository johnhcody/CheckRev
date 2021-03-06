import React from 'react';
import MarkerManager from '../../../util/marker_manager';



class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.updateFilters = this.props.updateFilters.bind(this);
        this.state = {
            value: 0
        }
    }
    


    componentDidMount() {

        if (this.props.businesses.length == 0) {
            let mapOptions = {
                center: { lat: 40.7238, lng: -74.0001 },
                zoom: 11
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);
            this.MarkerManager.updateMarkers(this.props.businesses);
            this.registerListeners();
        } else {
            let mapOptions = {
                center: {
                    lat: this.props.businesses[0].lat,
                    lng: this.props.businesses[0].lng
                },
                zoom: 11
            }
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);
            this.MarkerManager.updateMarkers(this.props.businesses);
            this.registerListeners();
        }
        



        

    }

    registerListeners() {
        const that = this;
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            //that.props.updateFilters({'bounds': bounds});
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            // this.handleClick(coords);
        });
    }
    
    componentDidUpdate(prevProps, prevState) {

        // previously was if (this.props !== prevPros)... may want to add another conditional for state?
        if (this.props.businesses !== prevProps.businesses && this.props.businesses.length > 0) {
            let mapOptions = {
                center: {
                    lat: this.props.businesses[0].lat,
                    lng: this.props.businesses[0].lng
                },
                zoom: 11
            }
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);
            this.MarkerManager.updateMarkers(this.props.businesses);
            this.registerListeners();
        }
    }


 //   componentWillReceiveProps(prevProps) {
 //       const { refresh, businesses } = this.props;
 //      if (prevProps.refresh !== refresh || prevProps.businesses !== businesses ) {
 //           this.MarkerManager = new MarkerManager(this.map);
 //           this.MarkerManager.updateMarkers(this.props.businesses);
 //           this.registerListeners();
 //       }
 //   }

    render() {
        return (
            <div className="google-map-wrapper">
                <div style={{ width: 400, height: 750, position: "fixed" }} id="map-wrapper" ref={map => this.mapNode = map}></div> 
            </div>
            )
        }
    }
    
    
export default MainMap;

                    
