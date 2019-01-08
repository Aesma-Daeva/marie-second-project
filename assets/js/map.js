//Declaring the map as a global variable
var map;
//Stores markers in an array
var markers = [];

//Main list of all locations
let locations = [{
        country: 'Ireland',
        type: 'Restaurant',
        name: 'Saltee Chipper',
        lat: 52.1729,
        lng: -6.5897,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Restaurant',
        name: 'Lobster Pot',
        lat: 52.198706,
        lng: -6.374228,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Restaurant',
        name: 'Templars Inn',
        lat: 52.180259,
        lng: -6.894808,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Bar',
        name: 'Neville\'s Bar & Kitchen',
        lat: 52.190840,
        lng: -6.839256,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Bar',
        name: 'The Island Bar',
        lat: 52.2101,
        lng: -6.3804,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Bar',
        name: 'Meyler\'s Millhouse Bar & Restaurant',
        lat: 52.2092,
        lng: -6.4245,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Hotel',
        name: 'Seashells B+B',
        lat: 52.220410,
        lng: -6.931007,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Hotel',
        name: 'Kelly\'s Resort Hotel',
        lat: 52.275537,
        lng: -6.387682,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Hotel',
        name: 'Kilderry CountryHouse',
        lat: 52.274146,
        lng: -6.713090,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Attractions',
        name: 'Saltee Island Great, Ireland',
        lat: 52.119210,
        lng: -6.615862,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Attractions',
        name: 'Colclough Walled Garden',
        lat: 52.234456,
        lng: -6.842257,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'Ireland',
        type: 'Attractions',
        name: 'Hook Lighthouse',
        lat: 52.123763,
        lng: -6.928994,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Restaurant',
        name: 'The Soup Company',
        lat: 63.419284,
        lng: -19.017176,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Restaurant',
        name: 'Black Beach Restaurant',
        lat: 63.404770,
        lng: -19.040827,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Restaurant',
        name: 'Restaurant Sudur Vik',
        lat: 63.422965,
        lng: -19.005189,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Bar',
        name: 'Strondin Bistro and Bar',
        lat: 63.418312,
        lng: -18.994253,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Bar',
        name: 'Halldorskaffi',
        lat: 63.417997,
        lng: -19.013819,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Bar',
        name: 'Smiðjan Brugghús',
        lat: 63.418028,
        lng: -19.010272,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Hotel',
        name: 'Skammidalur Guesthouse',
        lat: 63.451145,
        lng: -19.100789,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Hotel',
        name: 'Black Beach Suites',
        lat: 63.437207,
        lng: -19.060917,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Hotel',
        name: 'Hotel Kria',
        lat: 63.418181,
        lng: -18.993632,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Attractions',
        name: 'Aurora Viewing Spot',
        lat: 63.454367,
        lng: -19.058494,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Attractions',
        name: 'Dyrholaey',
        lat: 63.407542,
        lng: -19.127560,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'Iceland',
        type: 'Attractions',
        name: 'Black Sand Beach',
        lat: 63.417212,
        lng: -19.031345,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Restaurant',
        name: 'Waitomo Clay Birds',
        lat: -38.243659,
        lng: 175.183439,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Restaurant',
        name: 'Waitomo Homestead',
        lat: -38.243659,
        lng: 175.183439,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Restaurant',
        name: 'Stoked Eatery',
        lat: -38.335734,
        lng: 175.166084,
        iconCustom: '../assets/images/map-icons/restaurant-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Bar',
        name: 'Tomo Bar & Eatery',
        lat: -38.260907,
        lng: 175.108377,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Bar',
        name: 'Otorohanga Club (Inc)',
        lat: -38.188369,
        lng: 175.210441,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Bar',
        name: 'The Muster Bar - Te Kuiti',
        lat: -38.333262,
        lng: 175.165054,
        iconCustom: '../assets/images/map-icons/bar-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Hotel',
        name: 'Woodlyn Park',
        lat: -38.253138,
        lng: 175.119341,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Hotel',
        name: 'Waitomo Orchard B&B',
        lat: -38.230557,
        lng: 175.188821,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Hotel',
        name: 'Waitomo Lodge',
        lat: -38.325400,
        lng: 175.153452,
        iconCustom: '../assets/images/map-icons/hotel-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Attractions',
        name: 'Waitomo Glowworm Caves',
        lat: -38.260767,
        lng: 175.103614,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Attractions',
        name: 'Hairy Feet Waitomo',
        lat: -38.427656,
        lng: 174.898447,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
    {
        country: 'New Zealand',
        type: 'Attractions',
        name: 'Marokopa Falls',
        lat: -38.261450,
        lng: 174.851896,
        iconCustom: '../assets/images/map-icons/tourist-attraction-icon.png'
    },
];

//Initialize Map
function initMap() {
    //Map Options and Initial View
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 61.514534, lng: -6.851611 }, //Streymoy, Faroe Islands
        zoom: 4,
        //If page body is bigger than map, it will be set to greedy.
        //you can easily zoom and drag the map.
        //If page body is smaller than map like in mobile devices,
        //it is set to 'cooperative' so the map doesn't get moved when user
        //needs to scroll down.
        gestureHandling: 'auto'
    });
}

//New Map
// var map = new google.maps.Map(document.getElementById('map'), options);

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
            content: props.content
        });

        //Add Listener event for InfoWindow when icon is clicked
        var myListener = marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
}

//Update the marker on the map based on the selection from createMarkers function
//then adds the icon on the map
function updateMarkers() {
    createMarkers();
    for (var i = 0; i < markers.length; i++) {
        //Add marker
        addMarker(markers[i]);
    }
}

//Creates or makes the markers by narrowing it down to selected country and type
//If user puts checkbox on all selected input types, all icons will show on the map
function createMarkers() {

    // Filter main list by country and will select all the items that belong to that country
    let selectedLocations = locations.filter(function(obj) {
        var selectedCountry = document.getElementById("countrySelect").value;
        return obj.country === selectedCountry;
    });
    
    //
    let resultlist = [];

    // Will check if checkbox for hotels is enabled
    // if the checkbox is enabled, add the list of hotels in selected country
    if (document.getElementById("hotels").checked) {
        let hotels = selectedLocations.filter(function(obj) {
            return obj.type === "Hotel";
        });
        resultlist = resultlist.concat(hotels);
    }
    
    // Will check if checkbox for restaurants is enabled
    // if the checkbox is enabled add the list of restaurants in selected country
    if (document.getElementById("restaurants").checked) {
        let restaurants = selectedLocations.filter(function(obj) {
            return obj.type === "Restaurant";
        });
        resultlist = resultlist.concat(restaurants);
    }

    // Will check if checkbox for bars is enabled
    // if the checkbox is enabled add the list of bars in selected country
    if (document.getElementById("bars").checked) {
        let bars = selectedLocations.filter(function(obj) {
            return obj.type === "Bar";
        });
        resultlist = resultlist.concat(bars);
    }

    // Will check if checkbox for tourist attractions is enabled
    // if the checkbox is enabled add the list of attractions in selected country
    if (document.getElementById("attractions").checked) {
        let attractions = selectedLocations.filter(function(obj) {
            return obj.type === "Attractions";
        });
        resultlist = resultlist.concat(attractions);
    }
    
    // Iterate through the resut list
    for (var i = 0; i < resultlist.length; i++) {
        markers.push({
            coords: {
                lat: resultlist[i].lat,
                lng: resultlist[i].lng
            },
            iconCustom: resultlist[i].iconCustom,
            content: resultlist[i].name
        });
    }
}