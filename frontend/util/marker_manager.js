class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }


    updateMarkers(businesses) {
        let busObj = {};
        businesses.forEach(business => busObj[business.id] = business);


        console.log("here is a business");

        businesses.forEach(business => {
            if (!this.markers[business.id]) {
                this.createMarkerfromBusiness(business)
                this.markers[business.id] = business;
            }
        })
    }


    createMarkerfromBusiness(business) {
        const position = new google.maps.LatLng(business.latitude, business.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id
        })
    }
}

export default MarkerManager;