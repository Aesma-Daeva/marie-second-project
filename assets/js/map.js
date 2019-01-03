function initMap(){
    //Map Options and Initial View
    var options = {
        zoom: 10,
        center: {lat:52.175664, lng:-6.585877} //Kilmore Quay, County Wexford
    }
    
    //New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    //Add Map Custom Markers
    var marker = new google.maps.Marker({
        position:{lat:52.175664, lng:-6.585877},
        map:map,
        icon:'/assets/images/map-icons/navigation-icon.png'
    });
}