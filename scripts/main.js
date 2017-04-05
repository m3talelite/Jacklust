var ENUMPAGE = {
	HOME : { value: 0, name: "home", code: "H"},
	ABOUT : { value: 1, name: "ABOUT", code: "A" }
};

function handlePage(enumPage) {
	switch (enumPage) {
		case ENUMPAGE.HOME: handleNavigation("home.html"); break;
		case ENUMPAGE.ABOUT: console.log("about"); break;
		default: console.log("default");
	}
}

function handleNavigation(url) {
	if (url === null || url === undefined)
		return false;

	console.log("url = " + url);

    $.get(url, function (data) {
        $("#view-container").append(data);
    });
}