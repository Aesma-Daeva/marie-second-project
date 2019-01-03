function initMap(){
            //Map Options and Initial View
            var options = {
                zoom: 10,
                center: {lat:52.175664, lng:-6.585877} //Kilmore Quay, County Wexford
            }
            
            //New Map
            var map = new google.maps.Map(document.getElementById('map'), options);
            
            addMarker({
                coords:{lat:52.175664, lng:-6.585877},
                iconCustom:'/assets/images/map-icons/navigation-icon.png',
                content:'<h2>Kilmore Quay, County Wexford</h2>'
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
                maxWidth: 300
            });
            
            //Add Listener event for InfoWindow when icon is clicked
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}