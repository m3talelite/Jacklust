var ENUMPAGE = {
	HOME : { value: 0, name: "home", code: "H"},
	ABOUT : { value: 1, name: "ABOUT", code: "A" }
};

//Json show object
function Show(name, place, timestamp, city, country, geolocationX, geolocationY, ticketLink, fbEventLink) {
	this.name = name;
	this.place = place;
	this.timestamp = timestamp;
	this.city = city;
	this.country = country;
	this.geolocationX = geolocationX;
	this.geolocationY = geolocationY;
	this.ticketLink = ticketLink;
	this.fbEventLink = fbEventLink;
}
Show.prototype = {
	isUpcomming: function() {
		console.log("isUpcomming()");
		console.log(this.timestamp > Date.now());
		console.log(" ");
		
		return this.timestamp > Date.now();
	},
	getGeoLocation: function() {
		return 0;
	}
}

//Document ready function
$(document).ready(function(){
	console.log("Document is Ready");
	var s = new Show("tour", "kroeg", 1507631760, "rdam", "nl", 0, 0, "google.com", "facebook.com");
	s.isUpcomming();
	
	readJsonToObjects();
	
	// $.getJSON( "~/assets/shows.json", function( data ) {
	  // var items = [];
	  // console.log("json data");
	  // console.log(" ");
	  // console.log(data);
	  // $.each( data, function( key, val ) {
		// items.push(key, value);
		// console.log("key " + key + ", val " + val);
		// console.log(" ");
	  // });
	// });
});



// function handlePage(enumPage) {
	// switch (enumPage) {
		// case ENUMPAGE.HOME: handleNavigation("pages/home.html"); break;
		// case ENUMPAGE.ABOUT: console.log("about"); break;
		// default: console.log("default");
	// }
// }

function handleNavigation(url) {
	if (url === null || url === undefined)
		return false;

	// console.log("url = " + url);
	// var xhr = new XMLHttpRequest();
	// xhr.onreadystatechange = function(e) {
		// console.log("xhr on ready state change");
		// console.log("event");
		// console.log(e);
		// console.log("xhr");
		// console.log(xhr);
		
		// if (xhr.readyState == 4 && xhr.status == 200)
			// $("#view-container").append(e);
		// else 
			// console.log("xhr error");
	// };
	
	// var getting = window.location.href + "/" + url;
	// var getting = "https://www.w3.org/Style/Examples/011/firstcss.en.html";
	// console.log(getting);
	// xhr.open("GET", getting, true);
	// xhr.setRequestHeader("Accept", "html");
	// xhr.send();
	
    // $.get(url, function (data) {
        // $("#view-container").append(data);
    // });
}

function flipCard(cardId) {
	if (!$("#card-" + cardId).hasClass("flipped"))
		$("#card-" + cardId).addClass('flipped');
	else 
		$("#card-" + cardId).removeClass('flipped');
}

function readJson() {
//	var obj = JSON.parse(tempJson);
//	console.log(obj);
}

function readJsonToObjects() {
	var showsList;
	tempJson.forEach(function(element) {
		console.log(element);
		var s = new Show(element.name, element.place, element.timestamp, element.city, element.country, element.geolocationX, element.geoLocationY, element.ticketLink, element.fbEvent);
		showsList.push(s);
	});
	function Show(name, place, timestamp, city, country, geolocationX, geolocationY, ticketLink, fbEventLink) {
}

var tempJson = {
  "shows": [
    {
      "tourName": "tournaam",
      "place": "plaatsnaam",
      "timestamp": 1507631760,
      "city": "rotterdam",
      "country": "nl",
      "geolocationX": 0,
      "geoLocationY": 0,
      "ticketLink": "url.com",
      "fbEvent": "facebook.com"
    },    
    {
      "tourName": "jacklust tour",
      "place": "cafe 1",
      "timestamp": 1507631760,
      "city": "rotterdam",
      "country": "Nl",
      "geolocationX": 0,
      "geoLocationY": 0,
      "ticketLink": "jacklust.com",
      "fbEvent": "facebook.com"
    },
    {
      "tourName": "jacklust tour",
      "place": "cafe 2",
      "timestamp": 1547631760,
      "city": "roosendaal",
      "country": "nl",
      "geolocationX": 0,
      "geoLocationY": 0,
      "ticketLink": "url.com",
      "fbEvent": "facebook.com"
    },
    {
      "tourName": "jacklust tour",
      "place": "cafe 3",
      "timestamp": 1549631760,
      "city": "antwerpen",
      "country": "be",
      "geolocationX": 0,
      "geoLocationY": 0,
      "ticketLink": "url.com",
      "fbEvent": "facebook.com"
    },
    {
      "tourName": "jacklust tour",
      "place": "cafe 0",
      "timestamp": 1506631760,
      "city": "berlijn",
      "country": "de",
      "geolocationX": 0,
      "geoLocationY": 0,
      "ticketLink": "url.com",
      "fbEvent": "facebook.com"
    }
  ]
};