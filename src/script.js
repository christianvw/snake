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
	button = document.getElementById('game_restart');
	playername = document.getElementById('game_playername');

	if (playername.value == "") {
		alert("Please enter your name.");
		return;
	}

	button.innerHTML = "Restart Game";
}

function musicStartStop() {
	button = document.getElementById('music_startstop');
	audio = document.getElementById('audio');
	audio.volume = 0.1;

	if (audio.duration > 0 && !audio.paused) {
		audio.pause();
		button.innerHTML = "Play Music";
	} else {
		audio.play();
		button.innerHTML = "Pause Music";
	}
}

/*
 * Init
 */

//Initial set of theme preference
setTheme(getBrowserThemePreference());