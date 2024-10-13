/*
 * script.js
 *
 * JS for SN4K3 game site (general functions for website)
 *
 * written by von Wensierski, Christian (2024)
 */

/*
 * General functions
 */

function getBrowserThemePreference() {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
	} else {
		return "light";
	}
}

function setTheme(theme_new) {
	body = document.body;
    body.setAttribute("theme", theme_new);
}

function setColor(color_new) {
	body = document.body;
    body.setAttribute("color", color_new);
}

function changePageTheme() {
    theme_new = document.getElementById("page_theme").value;

	if (theme_new == "auto") {
		setTheme(getBrowserThemePreference());
	} else {
		setTheme(theme_new);
	}
}

function changePageColor() {
    color_new = document.getElementById("page_color").value;
    setColor(color_new);
}

function gameRestart() {
	alert("Restarted!");
}

/*
 * Init
 */

//Initial set of theme preference
setTheme(getBrowserThemePreference());