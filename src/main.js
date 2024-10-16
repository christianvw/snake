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
	//Get variables
	button = document.getElementById('game_restart');
	game_type = document.getElementById('game_type').value;
	playername = document.getElementById('game_playername').value;

	//get gamefield doms
	game_field_canvas = document.getElementById('game_field_canvas');
	game_field_css = document.getElementById('game_field_css');
	game_field_svg = document.getElementById('game_field_svg');
	game_field_utf8 = document.getElementById('game_field_utf8');
	game_header_text = document.getElementById('game_header_text');

	//Check for name
	if (playername == "") {
		alert("Please enter your name.");
		return;
	}

	//Change Button
	button.innerHTML = "Restart Game";

	//Hide all gamefields
	game_field_loading.classList.remove("show");
	game_field_canvas.classList.remove("show");
	game_field_css.classList.remove("show");
	game_field_svg.classList.remove("show");
	game_field_utf8.classList.remove("show");
	game_header_text.innerHTML = "";

	//Show wanted gamefield
	switch (game_type) {
		case 'canvas':
			game_field_canvas.classList.add("show");
			game_header_text.textContent = "Game type: Canvas | Player: " + playername;
			break;
		case 'css':
			game_field_css.classList.add("show");
			game_header_text.textContent = "Game type: Canvas | Player: " + playername;
			break;
		case 'svg':
			game_field_svg.classList.add("show");
			game_header_text.textContent = "Game type: Canvas | Player: " + playername;
			break;
		case 'utf8':
			game_field_utf8.classList.add("show");
			game_header_text.textContent = "Game type: Canvas | Player: " + playername;
			break;
		default:
			console.log("Error starting game because no valid game type selected (main/gameRestart)");
			break;
	}
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