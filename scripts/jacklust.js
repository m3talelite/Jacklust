function toggleSpotify() {
	var spotifyIframe = $("#spotify-iframe");
	var spotifyButton = $(".btn-spotify span");
	if (spotifyIframe.height() === 80) { 
		spotifyIframe.animate({height: 300}, 'fast');
		spotifyButton.text("Minify");
	}
	if (spotifyIframe.height() === 300) {
		spotifyIframe.animate({height: 80}, 'fast');
		spotifyButton.text("Expand"); 
	}
}

function flipCard(cardId) {
	if (!$("#card-" + cardId).hasClass("flipped"))
		$("#card-" + cardId).addClass('flipped');
	else 
		$("#card-" + cardId).removeClass('flipped');
}

function switchTab(tabname) {
	// Make the site a single page so everything only has to be loaded once and can be more easly cached;
	var content = $("#content-container");

	content.children().each(function() {
		if ($(this).attr('id').indexOf(tabname) > -1) {
			if (!$(this).hasClass("visible")) {
				$(this).addClass("visible");
			}
			if ($(this).hasClass("hidden")) {
				$(this).removeClass("hidden");
			}
		}
		else {
			if (!$(this).hasClass("hidden")){
				$(this).addClass("hidden");
			}
			if ($(this).hasClass("visible")) {
				$(this).removeClass("visible");
			}
		}
	});
}

function generateShowPanel() {
	var today = new Date();

	// make a upcomming container
	
	// make a past container

	gigs.forEach((gig, index) => {
		const dateSplits = gig.date.split("-");
		// Months are from 0 to 11;
		const dateGig = new Date(dateSplits[2], dateSplits[1] -1, dateSplits[0]);
		
		if (dateGig > today)
			genPane(gig, true, index);
		else 
			genPane(gig, false, index);
	});
}

function genPane(gig, upcomming, index) {
	var panelContainer = document.createElement("div");
	panelContainer.className = "col-md-6 col-xs-12";
	
	var panel = document.createElement("div");
	panel.className = upcomming ? "panel panel-success" : "panel panel-default";
	
	var panelHeading = document.createElement("div");
	panelHeading.className = "panel-heading";
	
	var panelHeadingContentWrapper = document.createElement("a");
	panelHeadingContentWrapper.className = "no-decoration";
	panelHeadingContentWrapper.setAttribute("data-toggle", "collapse");
	panelHeadingContentWrapper.setAttribute("href", "#gig" + index);
	
	//var panelHeaderContent = document.createTextNode(gig.date + " &nbsp;&nbsp;&nbsp; " + gig.venue);
	var panelHeaderContent = document.createElement("span");
	panelHeaderContent.textContent = gig.date + " ~ " + gig.venue;
	
	var panelBody = document.createElement("div");
	panelBody.className = upcomming ? "panel-body panel-collapse collapse in" : "panel-body panel-collapse collapse";
	panelBody.setAttribute("id", "gig" + index);

	var panelBodyContentLoc = document.createElement("span");
	panelBodyContentLoc.textContent = "Locatie: " + gig.loc;
	
	var panelBodyContentDesc = document.createElement("span");
	panelBodyContentDesc.textContent = gig.desc;
	
	panelBody.appendChild(panelBodyContentLoc);
	panelBody.appendChild(panelBodyContentDesc);
	
	if (gig.event.length > 0) {
		var panelBodyContentLink = document.createElement("a");
		panelBodyContentLink.setAttribute("href", gig.event);
		panelBodyContentLink.innerHTML = "Event";
		
		panelBody.appendChild(panelBodyContentLink);
	}

	panelHeadingContentWrapper.appendChild(panelHeaderContent);
	panelHeading.appendChild(panelHeadingContentWrapper);
	panel.appendChild(panelHeading);
	panel.appendChild(panelBody);
	panelContainer.appendChild(panel);
	
	if (upcomming) {
		$("#upcomming-show-container").append(panelContainer);
	} else {
		$("#past-show-container").append(panelContainer);
	}
}

// To lazy to load everything from json, just make a list for gigs
// date, venueName, location, description, link to event, Generate index front
// Make sure everything is in the correct order
var gigs = [
	//2018
	{ date:"21-04-2018", venue:"MIR", loc:"Rotterdam", desc:"w/ Tsar Bompa & Haggard Cat", event:"", imgLink: ""},
	{ date:"30-03-2018", venue:"K'annet", loc:"Etten-Leur", desc:"", event:"", imgLink: ""},
	{ date:"17-03-2018", venue:"Eurotrash United", loc:"Rotterdam", desc:"w/ Drunken Dolly", event:"", imgLink: ""},
	{ date:"16-03-2018", venue:"The Skiff", loc:"Hilversum", desc:"w/ Drunken Dolly", event:"", imgLink: ""},
	{ date:"24-02-2018", venue:"Stedsj", loc:"Barneveld", desc:"w/ The Dutch Duke & This is my Happy Face", event:"", imgLink: ""},
	{ date:"22-02-2018", venue:"De Boederij", loc:"Zoetermeer", desc:"w/ The Tasteless Gentleman", event:"", imgLink: ""},
	{ date:"03-02-2018", venue:"Hedon", loc:"Zwolle", desc:"", event:"", imgLink: ""},
	//2017
	{ date:"17-12-2017", venue:"De Speeltuin", loc:"Breda", desc:"", event:"", imgLink:""},
	{ date:"25-11-2017", venue:"K'll", loc:"Woerden", desc:"", event:"", imgLink:""},
	{ date:"14-10-2017", venue:"Maasrock", loc:"Puttershoek", desc:"", event:"", imgLink:""},
	{ date:"13-10-2017", venue:"The Box", loc:"Hilvarenbeek", desc:"", event:"", imgLink:""},
	{ date:"09-09-2017", venue:"Baroeg Open Air", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"08-09-2017", venue:"Eurotrash United", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"02-09-2017", venue:"The Move", loc:"Arnhem", desc:"", event:"", imgLink:""},
	{ date:"27-08-2017", venue:"Popelucht", loc:"Etten-Leur", desc:"", event:"", imgLink:""},
	{ date:"14-05-2017", venue:"Baroeg", loc:"Rotterdam", desc:"Battle 4 Baroeg Open Air", event:"", imgLink:""},
	{ date:"15-04-2017", venue:"Bibelot", loc:"Dordrecht", desc:"Band Boost halve finale", event:"", imgLink:""},
	{ date:"31-03-2017", venue:"K'annet", loc:"Etten-Leur", desc:"Doe maar vet Finale", event:"", imgLink:""},
	{ date:"17-03-2017", venue:"K'annet", loc:"Etten-Leur", desc:"", event:"", imgLink:""},
	{ date:"11-03-2017", venue:"Peer", loc:"Peer (BE)", desc:"", event:"", imgLink:""},
	{ date:"10-02-2017", venue:"Lokaal Vredebreuk", loc:"Den Haag", desc:"", event:"", imgLink:""},
	{ date:"03-02-2017", venue:"Baroeg", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"28-01-2017", venue:"Mijn Muze", loc:"Olen (BE)", desc:"", event:"", imgLink:""},
	{ date:"26-01-2017", venue:"RTV Ridderkerk", loc:"Ridderkerk", desc:"", event:"", imgLink:""},
	{ date:"13-01-2017", venue:"Bibelot", loc:"Dordrecht", desc:"", event:"", imgLink:""},
	//2016
	{ date:"17-12-2016", venue:"Band Boost", loc:"Dordrecht", desc:"", event:"", imgLink:""},
	{ date:"10-12-2016", venue:"Trap Af", loc:"Papendrecht", desc:"", event:"", imgLink:""},
	{ date:"06-11-2016", venue:"Club Vibes", loc:"Rotterdam", desc:"Dead Boys-tribute", event:"", imgLink:""},
	{ date:"24-09-2016", venue:"Bastille", loc:"Schoonhoven", desc:"w/ Black Label", event:"", imgLink:""},
	{ date:"23-09-2016", venue:"Backstage", loc:"Nijmegen", desc:"w/ Dark Mourning", event:"", imgLink:""},
	{ date:"17-09-2016", venue:"Bar 3", loc:"Rotterdam", desc:"EP Release Party, w/ Sink the Bismarck & Stealers", event:"", imgLink:""},
	{ date:"02-09-2016", venue:"Lokaal Vredebreuk", loc:"Den Haag", desc:"w/ Eternal Mortification", event:"", imgLink:""},
	{ date:"26-08-2016", venue:"De Muze", loc:"Olen", desc:"w/ Bat Wings & Shock ! Hazard", event:"", imgLink:""},
	{ date:"21-07-2016", venue:"WORM", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"18-06-2016", venue:"Dijkpop", loc:"Roosendaal", desc:"", event:"", imgLink:""},
	{ date:"10-06-2016", venue:"Studio Gonz", loc:"Gouda", desc:"", event:"", imgLink:""},
	{ date:"04-06-2016", venue:"Pre-Pinkpop Party", loc:"Eygelshoven", desc:"", event:"", imgLink:""},
	{ date:"05-03-2016", venue:"", loc:"En Genne Komm", desc:"w/ SkullSuit & Experienced", event:"", imgLink:""},
	{ date:"20-02-2016", venue:"De Oefenbunker", loc:"Landgraaf", desc:"", event:"", imgLink:""},
	{ date:"13-02-2016", venue:"Capsloc", loc:"Cappelle a/d Ijsel", desc:"w/ The Peterlees & Drunken Dolly", event:"", imgLink:""},
	//2015
	{ date:"19-12-2015", venue:"De Groote Weiver", loc:"Wormerveer", desc:"", event:"", imgLink:""},
	{ date:"28-11-2015", venue:"Club Vibes", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"14-11-2015", venue:"De Meister", loc:"Geleen", desc:"w/ SkullSuit", event:"", imgLink:""},
	{ date:"29-08-2015", venue:"Radio2rock Festival", loc:"Heerlen", desc:"", event:"", imgLink:""},
	{ date:"22-08-2015", venue:"Boschpop", loc:"Oudenbosch", desc:"", event:"", imgLink:""},
	{ date:"01-08-2015", venue:"Odeon", loc:"Veldhoven", desc:"", event:"", imgLink:""},
	{ date:"11-07-2015", venue:"Rotorock", loc:"Berkel en Rodenrijs", desc:"", event:"", imgLink:""},
	{ date:"04-07-2015", venue:"Odeon", loc:"Veldhoven", desc:"", event:"", imgLink:""},
	{ date:"29-05-2015", venue:"Mortsel", loc:"Belgie", desc:"w/ Rebelstar & Rusted & White Lightning & Silver Bullet Machine", event:"", imgLink:""},
	{ date:"08-05-2015", venue:"Cafe the Jack", loc:"Eindhoven", desc:"Kempenerpopprijs Finale", event:"", imgLink:""},
	{ date:"05-05-2015", venue:"Cafe t Avontuur", loc:"Dordrecht", desc:"", event:"", imgLink:""},
	{ date:"24-04-2015", venue:"The Cave", loc:"Amsterdam", desc:"w/ Sink the Bismarck", event:"", imgLink:""},
	{ date:"17-04-2015", venue:"Cafe Altstad", loc:"Eindhoven", desc:"", event:"", imgLink:""},
	{ date:"20-03-2015", venue:"De Oefenbunker", loc:"Landgraaf", desc:"w/ Sister", event:"", imgLink:""},
	{ date:"21-02-2015", venue:"De Graauwe Hengst", loc:"Schiedam", desc:"w/ Hurricane Joe & Cheap Thrills", event:"", imgLink:""},
	{ date:"13-02-2015", venue:"De Pit", loc:"Nieuwegein", desc:"", event:"", imgLink:""},
	{ date:"12-02-2015", venue:"Exit", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"07-02-2015", venue:"Lazerus", loc:"Leiden", desc:"w/ Sink the Bismarck", event:"", imgLink:""},
	{ date:"06-02-2015", venue:"Oefenbunker", loc:"Landgraaf", desc:"Voorronde Metal Battle", event:"", imgLink:""},
	{ date:"05-02-2015", venue:"Eendrachtfestival", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"31-01-2015", venue:"Bastille", loc:"Schoonhoven", desc:"w/ Reventes & Crazed", event:"", imgLink:""},
	//2014
	{ date:"19-12-2014", venue:"Cafe Daniels", loc:"Wageningen", desc:"w/ Reventes", event:"", imgLink:""},
	{ date:"25-10-2014", venue:"Trap Af", loc:"Papendrecht", desc:"", event:"", imgLink:""},
	{ date:"24-10-2014", venue:"Popcentrale", loc:"Dordrecht", desc:"w/ Disturbance", event:"", imgLink:""},
	{ date:"27-09-2014", venue:"Highlands", loc:"Ijsselstijn", desc:"w/ Sativa & Crazed", event:"", imgLink:""},
	{ date:"05-09-2014", venue:"Club Vibes", loc:"Rotterdam", desc:"w/ Stealers", event:"", imgLink:""},
	{ date:"18-07-2014", venue:"TexMex", loc:"Spijkenisse", desc:"", event:"", imgLink:""},
	{ date:"17-07-2014", venue:"Eendrachtsfestival", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"12-07-2014", venue:"De Hut", loc:"Krimpen aan den Ijsel", desc:"", event:"", imgLink:""},
	{ date:"22-06-2014", venue:"Slag om Rooi", loc:"Sint-Oedenrode", desc:"", event:"", imgLink:""},
	{ date:"20-06-2014", venue:"Denzo Studio Media Works", loc:"Den Haag", desc:"", event:"", imgLink:""},
	{ date:"09-06-2014", venue:"Baroeg", loc:"Rotterdam", desc:"w/ The Kinds, The Dirty Denims", event:"", imgLink:""},
	{ date:"08-06-2014", venue:"Cafe Extase", loc:"Tilburg", desc:"", event:"", imgLink:""},
	{ date:"17-05-2014", venue:"K77", loc:"Woerden", desc:"", event:"", imgLink:""},
	{ date:"10-05-2014", venue:"Saturnus", loc:" Scheveningen", desc:"", event:"", imgLink:""},
	{ date:"15-03-2014", venue:"HPC Cafe", loc:"Den Haag", desc:"", event:"", imgLink:""},
	{ date:"22-02-2014", venue:"De Vinger", loc:"Den Haag", desc:"", event:"", imgLink:""},
	{ date:"08-02-2014", venue:"`t Blok", loc:"Nieuwerkerk a/d Ijsel", desc:"", event:"", imgLink:""},
	//2013
	{ date:"28-12-2013", venue:"Trap Af", loc:"Papendrecht", desc:"", event:"", imgLink:""},
	{ date:"27-12-2013", venue:"De Rotonde", loc:"Berkel en Rodenrijs", desc:"", event:"", imgLink:""},
	{ date:"15-11-2013", venue:"Total Music", loc:"Schiedam", desc:"", event:"", imgLink:""},
	{ date:"09-11-2013", venue:"De Hut", loc:"Krimpen aan den Ijsel", desc:"", event:"", imgLink:""},
	{ date:"05-10-2013", venue:"De Hut", loc:"Krimpen aan den Ijsel", desc:"", event:"", imgLink:""},
	{ date:"26-06-2013", venue:"De Rotonde", loc:"Berkel en Rodenrijs", desc:"", event:"", imgLink:""},
	{ date:"19-05-2013", venue:"The Little Cave", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"04-04-2013", venue:"The Cave", loc:"Amsterdam", desc:"", event:"", imgLink:""},
	{ date:"05-03-2013", venue:"Grafish Lyceum", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"22-02-2013", venue:"Hemmingway", loc:"Rotterdam", desc:"", event:"", imgLink:""},
	{ date:"19-01-2013", venue:"De Kroeg", loc:"Rijen", desc:"", event:"", imgLink:""},
	//2012
	{ date:"23-12-2012", venue:"Ijsbreker", loc:"Leusen", desc:"", event:"", imgLink:""},
	{ date:"22-09-2012", venue:"Willemeen", loc:"Arnhem", desc:"", event:"", imgLink:""},
	{ date:"08-09-2012", venue:"De Kroeg", loc:"Rijen", desc:"", event:"", imgLink:""},
	{ date:"17-08-2012", venue:"Boothill Saloon", loc:"Utrecht", desc:"", event:"", imgLink:""},
	{ date:"07-06-2012", venue:"Capsloc", loc:"Cappelle a/d Ijsel", desc:"", event:"", imgLink:""}
];

$(function() {
    console.log( "ready!" );
	generateShowPanel();
});