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
	var str = '';
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