//variables init
var board = [[0, 0, 0], //board cache
                    [0, 0, 0],
                    [0, 0, 0]];

let act_player = 0;
let gamestate = 0;
let draww = false;
let win_ln =0; //number of wining line

//color constants for animation and styling
const std_bdCol = "white";
const play_bdCol = "black";

//functions
function getBoard(){

    let values = [];

    for (field of BOARD_FIELDS) {
        values.push(field.innerHTML);
    }

    return values;
}


function boardInit(){
    for (field of BOARD_FIELDS) {
        field.innerHTML = EMPTY_FIELD;
        field.style.backgroundColor = "white";
    }
}


function init(){
    //initialises variables
    act_player = 0;
    gamestate = 0;
    win_ln =0;
    draww = false;

    boardInit();
    document.getElementById("bt_start").innerHTML = "START";
}


function getPlayerFields(player){
    return getAllIndexes( getBoard(), player);
}


function checkIfWon(player){
    //checks if any of wining lines appeard

    let final_line = null;

    WIN_LINES.forEach(element => {
        if (checkIfSubset(element, getPlayerFields(player))) { 
            console.log(`Player ${player} won!`)
            final_line = element;
        }
    });
    
    return final_line;
}


function checkIfDraw() {
    return (getBoard().indexOf("") == -1);
}


function setMsg(message = "") {
    // ommit argument to clear the message value
    MSG.innerHTML = message
}


function playerDisplay(){
    //displays act_player to msgbox
    setMsg("Player " + act_player);
}


function placeSign(field){
    if (gamestate==0 || gamestate=="draw" || gamestate=="won"){
        return;
    }
    else if ( field.innerHTML != ""){
        setMsg("This box is already taken!")
        return false;
    }
    else {
        // TODO: we need to gather board state from DOM not keep it inside
        // TODO:

        // place player on board
        field.innerHTML = act_player;

        // calculate board form objects

        // player won
        let won = checkIfWon(act_player);
        if(won){
            showWinner(act_player, won);
            gamestate = "won";
            return;
        }
        // draw
        else if (checkIfDraw()){
            setMsg("Draw!");
            gamestate = "draw";
            return;
        }
        // active player change
        else { 
            (act_player == PLAYER_1) ? act_player = PLAYER_2 : act_player = PLAYER_1;
            playerDisplay();
        }
        
    }

}


function start(){
    //check if aleardy started, random choose player and switch to started
    //if started
    if(gamestate == 1){
        return false
    }
    //board initialisation
    init();
    //player choosing
    (Math.floor((Math.random() * 10) + 1)%2==0) ? act_player = PLAYER_1 : act_player = PLAYER_2;

    gamestate = 1;
    
    setMsg("Player with sign " + act_player + " starts!");
}

function stop(){
    //stops game
    if(gamestate == 0)
        return false;	
    gamestate = 0;
    boardInit();
    setMsg();
}

