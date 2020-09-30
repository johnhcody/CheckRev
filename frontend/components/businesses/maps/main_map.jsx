import React from 'react';
import MarkerManager from '../../../util/marker_manager';

//import MapView from 'react-native-maps';


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
    }
    
    componentDidUpdate() {
        this.MarkerManager = new MarkerManager(this.map);
    }
    render() {
        return (
            <div style={{ width: 400, height: 800 }} id="map-wrapper" ref={map => this.mapNode = map}></div> 
            )
        }
    }
    
    
export default MainMap;
    
    // <div id="map-wrapper"> 
    //     <MapView style={StyleSheet.container}  // may need new loader? oaders are configured to process this file. See https://webpack.js.org/concepts#loaders
    // |   const overlays = makeOverlays(props.geojson.features);
    // |   return (
        // > <React.Fragment>
        //         |       {overlays.map((overlay, index) => {
            // |         if (overlay.type === 'point') {
                //         @ ./node_modules/react - native - maps / index.js 21:0-65 21:0-65
                //     initialRegion={{
                    //         latitude: 122.4194, 
                    //         longitude: 37.7749
                    //     }}
                    //     />
                    // </div>
                    
