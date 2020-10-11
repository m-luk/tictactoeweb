//variables init
var board = [[0, 0, 0], //board cache
                    [0, 0, 0],
                    [0, 0, 0]];

var act_player = 0;
var gamestate = 0;
var draww = false;
var win_ln =0; //number of wining line
const BOARD_FIELDS= document.getElementsByClassName("b_pole"); //array of html table elements

const MSG = document.getElementById("msgbox");


//color constants for animation and styling
const std_bdCol = "white";
const play_bdCol = "black";

//constants
//array of wining lines					
const win_lines=	[ 	[ 0, 1, 2 ], // górna pozioma
                        [ 3, 4, 5 ], // środ. pozioma
                        [ 6, 7, 8 ], // dolna pozioma
                        [ 0, 3, 6 ], // lewa pionowa
                        [ 1 ,4 ,7 ], // środ. pionowa
                        [ 2, 5, 8 ], // prawa pionowa
                        [ 0, 4, 8 ], // p. backslashowa
                        [ 6, 4, 2 ] ]; // p. slashowa


//player signs
const PLAYER_1 = 'X'; 
const PLAYER_2 = 'O';
const EMPTY_FIELD = ""

//functions

function boardInit(){
    for (let field in BOARD_FIELDS) {
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
}

function checkIfWon(){
    //checks if any of wining lines appeard
    var p_match;
    var i, j;
    
    for(i=0; i<8; ++i){
        p_match = 0;
        
        for(j=0; j<3; ++j){
            if(board[win_lines[i][j][0]][l_match[i][j][1]] == act_player)
                p_match++;	
        }
        //if full
        if(p_match == 3){
            win_ln = i;
            return true;
        }
    }
}

function p_win(){
    //turns wining squares to red
    setMsg(act_player + " won!");
    let y;
    let x;
    let i;
    
    //mapping wining line
    for(i=0; i<3; i++){
        y = win_lines[win_ln][i][0];
        x = win_lines[win_ln][i][1];
        
        var pole = x + 3*y;
        
        //turn to red
        BOARD_FIELDS[pole].style.backgroundColor = "red";
    }
}

function draw(){
    //draws board to the screen
    //DOM 
    var x, y;
    var i=0;
    //filing board
    for(y=0; y<3; y++){
        for(x=0; x<3; x++){
            if(board[y][x]==0){
                BOARD_FIELDS[i].innerHTML = "";
                i++;
                continue;
            }	
            else{
                BOARD_FIELDS[i].innerHTML = board[y][x];
            }
            i++;
        }
    }
}


function setMsg(message = "") {
    // ommit argument to clear the message value
    MSG.innerHTML = message
}

function checkIfDraw(){
    //checks if board is fully loaded
    var y;
    var x;
    var l =0;
    for(y=0; y<3; y++){
        for(x=0; x<3; x++){
            if(board[y][x]==0)
                l++;
        }
    }
    if(l==0){
        return true;
    }
    return false;
}


function playerDisplay(){
    //displays act_player to msgbox
    setMsg("Player " + act_player);
}


function placeSign(object){
    if((gamestate==0) || draww){
        return;
    }
    else if ( object.innerHTML != ""){
        setMsg("This box is already taken!")
        return false;
    }
    else {
        // TODO: we need to gather board state from DOM not keep it inside
        // TODO:

        // place player on board
        object.innerHTML = act_player;

        // calculate board form objects

        // player won
        if (checkIfWon()){
            playerWin();
            return;
        }
        // draw
        else if (checkIfDraw()){
            setMsg("Draw!");
            draww = true;
            return;
        }
        // active player change
        else { (act_player == PLAYER_1 ? act_player = PLAYER_2 : act_player = PLAYER_1)}
    }

}


function start(){
    //check if aleardy started, random choose player and switch to started
    //if started
    if(gamestate!=0){
        return false
    }
    //board initialisation
    init();
    //player choosing
    (Math.floor((Math.random() * 10) + 1)%2==0) ? act_player = PLAYER_1 : act_player = PLAYER_2;

    gamestate = 1;
    
    setMsg("Player with sign " + act_player + " starts!");
    draw();
}

function stop(){
    //stops game
    if(gamestate == 0)
        return false;	
    gamestate = 0;
    boardInit();
    draw();
    setMsg();
}

