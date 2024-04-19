/*function initialize() {
    const fenway = { lat: 42.345573, lng: -71.098326 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: fenway,
      zoom: 14,
    });
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10,
        },
      },
    );
  
    map.setStreetView(panorama);
  }
  
  window.initialize = initialize;*/ 

  //variable lat lng
  //const data = {"name": latitude, "age": longitude};
  //var json = require('output.json');
  //var latitude = "Data.Latitude"
  //var longitude = "Data.Longitude"

  //function getFromJson(){

  //}
  
  
function initialize() { // where does it get lat and lng from? the json file

const data = { //example data
    deviceName:786458319,
    latitude:25.78915,
    longitude:-80.20374
    }
    
    //grabs example data
    var name = data.deviceName
    var latitude = 25.78915
    var longitude = -80.20374

    var latlng = { lat: latitude, lng: longitude };
    var map = new google.maps.Map(document.getElementById("map"), { //api function to grab the map
      center: latlng, //from given lat and long
      zoom: 14,
    });
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"), //api function to grab panorama
      {
        position: latlng, //panorama of given lat and long
        pov: {
          heading: 34,
          pitch: 10,
        },
      },
    );
    
    map.setStreetView(panorama);
  }

 
      
  
  window.initialize = initialize;

  const data = { //example data
    deviceName:786458319,
    latitude:25.78915,
    longitude:-80.20374
    }
    
    //grabs example data
    var name = data.deviceName
    var latitude = 25.78915
    var longitude = -80.20374

    var latlngName = '25.78915,-80.20374'

  function downloadImages() {
    const images = document.querySelectorAll('#img'); // all with img id
    images.forEach((img, index) => {
        const url = img.src;
        const filename = `${name}__${latlngName}__n-${index + 1}.jpg`; //change to lat long

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error downloading image:', error));
    });
}

// call the function to download images when the page loads
window.onload = downloadImages; 
