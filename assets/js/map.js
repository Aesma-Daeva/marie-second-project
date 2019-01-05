//Declaring the map as a global variable
var map;
//Stores markers in an array
var markers = [];

//Main list of all locations
let locations = [
    {
        country: 'Ireland',
        type: 'Restaurant',
        name: 'Saltee Chipper',
        lat: 52.1729,
        lng: -6.5897,
        iconCustom: '.../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Restaurant',
        name: 'Lobster Pot',
        lat: 52.198706,
        lng: -6.374228,
        iconCustom: '.../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Restaurant',
        name: 'Templars Inn',
        lat: 52.180259,
        lng: -6.894808,
        iconCustom: '.../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Bar',
        name: 'Kehoe\'s Pub & Parlour',
        lat: 52.1751,
        lng: -6.5869,
        iconCustom: '/assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Hotel',
        name: 'Coast Kilmore Quay',
        lat: 52.1784,
        lng: -6.5849,
        iconCustom: 'assets/icons/hotel.png'
    },
    {
        country: 'Ireland',
        type: 'Hotel',
        name: 'Mill Road Farm Self Catering Cottages',
        lat: 52.1865,
        lng: -6.5681,
        iconCustom: 'assets/icons/hotel.png'
    },
    {
        country: 'Ireland',
        type: 'Hotel',
        name: 'Groveside Farm B&B',
        lat: 52.2121,
        lng: -6.5722,
        iconCustom: 'assets/icons/hotel.png'
    },
];

//Initialize Map
function initMap() {
    //Map Options and Initial View
    var options = {
        zoom: 10,
        center: { lat: 52.175664, lng: -6.585877 } //Kilmore Quay, County Wexford
    }

    //New Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //Add Markers Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconCustom,
            animation: google.maps.Animation.DROP
        });

        //Check for custom icon
        if (props.iconCustom) {
            //Set icon image
            marker.setIcon(props.iconCustom);
        }

        //Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
                maxWidth: 200
            });

            //Add Listener event for InfoWindow when icon is clicked
            var myListener = marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });

            //Testing this if adding time delay for execution is possible
            //I will need something similar for clearing map markers
            /*google.maps.event.removeListener(myListener);*/
            
            //If you click the marker, it will bounce.
            marker.addListener('click', toggleBounce);
        }
        
        //Will make the marker bounce
        function toggleBounce() {
            //Means if it has animation,
            if (marker.getAnimation() !== null) {
                //then stop its animation.
                marker.setAnimation(null);
            }
            //If it is not animated, then make it bounce.
            else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
    }
}
