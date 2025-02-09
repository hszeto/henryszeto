var map;  // Google map object

// Initialize and display a google map
function initMap()
{
  // HTML5/W3C Geolocation
  if ( navigator.geolocation ){
    navigator.geolocation.getCurrentPosition( UserLocation );
  // Default to Temple City, CA
  }else{
    ShowLocation( 34.1028, -118.0581, "Temple City, CA" );
  };
}

// Callback function for asynchronous call to HTML5 geolocation
function UserLocation( position )
{
  ShowLocation( position.coords.latitude, position.coords.longitude, "This is your Location" );
}

// Display a map centered at the specified coordinates with markers and InfoWindow.
function ShowLocation( lat, lng, title )
{
  // Create Google coordinates for where to center the map
  var latlng = new google.maps.LatLng( lat, lng );
  var templeCity = new google.maps.LatLng(34.1028,-118.0581); 

  // Map options for how to display the Google map
  var mapOptions = { zoom: 12 };
  
  // Show the Google map in the div with the attribute id 'map-canvas'.
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Place a Google Marker at Temple City
  var marker = new google.maps.Marker({
    position: templeCity,     
    map: map,
    title: "I am here at Temple City",
    icon: 'img/myMarker.png'
  });
  
  // Place a Google Marker at the visitor location 
  // When you hover over the marker, it will display the title
  var marker = new google.maps.Marker({
    position: latlng,     
    map: map,      
    title: title
  });

  // Create an InfoWindow for the marker
  var contentString = "<b>" + title + "</b>"; // HTML text to display in the InfoWindow
  var infowindow = new google.maps.InfoWindow( { content: contentString } );
  
  // Set event to display the InfoWindow anchored to the marker when the marker is clicked.
  google.maps.event.addListener( marker, 'click', function() { infowindow.open( map, marker ); });

  // Center the map between the 2 markers. Temple City and visitor location.
  var bounds = new google.maps.LatLngBounds();
    bounds.extend(latlng);
    bounds.extend(templeCity);
    map.fitBounds(bounds);

}
