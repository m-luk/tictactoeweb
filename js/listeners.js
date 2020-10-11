//script containing listeners declaration

/* color variables
This section of variables determine the overall transition style.
Default (starting) values are taken from css to its variables.
All colors refer to only one action on element.
Colors will be labeled like this:

color[1 .. n]
/* usage:

*/



color1 = "white";
/* usage:
    body color used for transparency in borders
*/
color2 = "black";
/* usage:
    transition borderColor
*/
color3 = "red";
/* usage:
    border blink color
*/


// field click listener
for (let i = 0; i<BOARD_FIELDS.length; i++){
    BOARD_FIELDS[i].addEventListener("click", function () {
        placeSign(this)
    });
}


//buttons
//start
document.getElementById("bt_start").addEventListener("click", function(){
    start();
    changeBorderColor(BOARD_FIELDS, color2);
    changeDimension(BOARD_FIELDS, "50px", "50px");
})
//stop
document.getElementById("bt_stop").addEventListener("click", function(){
    stop();
    changeBorderColor(BOARD_FIELDS, color1);
    changeDimension(BOARD_FIELDS, "15px", "15px");
})
