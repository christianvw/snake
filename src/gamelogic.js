/*
 * gamelogic.js
 *
 * JS for SN4K3 game
 *
 * written by von Wensierski, Christian (2024)
 */

//game vars
var snake;
var food;

//game functions
function skin2mainColor(skin) {
    switch(skin) {
        case '1': return '#283593';
        case '2': return '#c62828';
        default: return '#283593';
    }
}
function skin2borderColor(skin) {
    switch(skin) {
        case '1': return '#1b2575';
        case '2': return '#ac2a2a';
        default: return '#000000';
    }
}

//Snake OO
class Snake {
    constructor(length, skin, pos_start) {
        this.length = length;
        this.skin = skin;
        this.mainColor = skin2mainColor(skin);
        this.borderColor = skin2borderColor(skin);
        this.dir = 'top';
        this.dir_next = [];
        this.x_next;
        this.y_next;

    }
}