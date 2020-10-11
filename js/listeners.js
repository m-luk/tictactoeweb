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



cls_b_pole = document.getElementsByClassName("b_pole");

for (var i = 0; i < cls_b_pole.length; i++) {
    cls_b_pole[i].addEventListener("click", function(){
        if (g_gamestate != 1){
            return
        }
        else {
            this.innerHTML = act_player
        }
    });

}


//buttons
//start
document.getElementById("bt_start").addEventListener("click", function(){
    start();
    ch_bdColor(cls_b_pole, color2);
    ch_dimension(cls_b_pole, "50px", "50px");
})
//stop
document.getElementById("bt_stop").addEventListener("click", function(){
    stop();
    ch_bdColor(cls_b_pole, color1);
    ch_dimension(cls_b_pole, "15px", "15px");
})
