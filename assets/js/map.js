function initMap(){
            //Map Options and Initial View
            var options = {
                zoom: 10,
                center: {lat:52.175664, lng:-6.585877} //Kilmore Quay, County Wexford
            }
            
            //New Map
            var map = new google.maps.Map(document.getElementById('map'), options);
            
            //This is the format to push custom markers in Google Maps
            //saving this for concat or push function later to display markers.
            //just testing if icons show. I realized I'd have to make a list
            //instead of copying and pasting all the data. Then I have to
            //make an array of all info then just draw the information I need.
            //Navigation Initial Marker
            addMarker({
                coords:{lat:52.175664, lng:-6.585877}, //Kilmore Quay, County Wexford
                iconCustom:'./assets/images/map-icons/navigation-icon.png',
                content:'<h2>Kilmore Quay, County Wexford</h2>'
            });
            
            //Restaurants
            addMarker({
                coords:{lat:52.1729, lng:-6.5897}, //Saltee Chipper
                iconCustom:'./assets/images/map-icons/restaurant-icon.png',
                content:'<h2>Saltee Chipper Restaurant</h2>'
            });
            
            addMarker({
                coords:{lat:52.198706, lng:-6.374228}, //Lobster Pot
                iconCustom:'./assets/images/map-icons/restaurant-icon.png',
                content:'<h2>Lobster Pot Restaurant</h2>'
            });
            
            addMarker({
                coords:{lat:52.180259, lng:-6.894808}, //Templars Inn
                iconCustom:'./assets/images/map-icons/restaurant-icon.png',
                content:'<h2>Templars Inn Restaurant</h2>'
            });
            
            //Bars
            addMarker({
                coords:{lat:52.190840, lng:-6.839256}, //Nevilles Bar and Kitchen
                iconCustom:'./assets/images/map-icons/bar-icon.png',
                content:'<h2>Nevilles Bar and Kitchen</h2>'
            });
            addMarker({
                coords:{lat:52.1751, lng:-6.5869}, //Meyler's Millhouse Bar & Restaurant
                iconCustom:'./assets/images/map-icons/bar-icon.png',
                content:'<h2>Meyler\'s Millhouse Bar & Restaurant</h2>'
            });
            addMarker({
                coords:{lat:52.2101, lng:-6.3804}, //The Island Bar
                iconCustom:'./assets/images/map-icons/bar-icon.png',
                content:'<h2>The Island Bar</h2>'
            });
            
            //Add Markers Function
            function addMarker(props){
            var marker = new google.maps.Marker({
                position:props.coords,
                map:map,
                icon:props.iconCustom
            });
            
            //Check for custom icon
            if(props.iconCustom){
            //Set icon image
            marker.setIcon(props.iconCustom);
            }
            
            //Check content
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                content:props.content,
                maxWidth: 200
            });
            
            //Add Listener event for InfoWindow when icon is clicked
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}