var hamburger = $("header nav span#hamburger");
var menu = $("header div.menu");

hamburger.on("click", toggleNav);

function toggleNav() {
	menu.toggleClass("hidden");
	hamburger.toggleClass("open");
	hamburger.toggleClass("fa-bars");
	hamburger.toggleClass("fa-times");
}