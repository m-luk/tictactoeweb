//variables init
var board = [[0, 0, 0], //board cache
					[0, 0, 0],
					[0, 0, 0]];

var act_player = 0;
var g_gamestate = 0;
var draww = false;
var win_ln =0; //number of wining line
var b_sqr = document.getElementsByClassName("b_pole"); //array of html table elements

//constants
//array of wining lines					
const l_match=	[ 	[	 [ 0,0 ], [ 0,1 ], [ 0,2 ] 	], // górna pozioma
							[	 [ 1,0 ], [ 1,1 ], [ 1,2 ] 	], // środ. pozioma
							[	 [ 2,0 ], [ 2,1 ], [ 2,2 ] 	], // dolna pozioma
							[	 [ 0,0 ], [ 1,0 ], [ 2,0 ] 	], // lewa pionowa
							[	 [ 0,1 ], [ 1,1 ], [ 2,1 ] 	], // środ. pionowa
							[	 [ 0,2 ], [ 1,2 ], [ 2,2 ] 	], // prawa pionowa
							[	 [ 0,0 ], [ 1,1 ], [ 2,2 ] 	], // p. backslashowa
							[	 [ 2,0 ], [ 1,1 ], [ 0,2 ] 	] ]; // p. slashowa
//player signs
const p_1 = 'X'; 
const p_2 = 'O';

//functions

function b_init(){
	//initialises board to blank state
	var x, y;
	for(y=0; y<3; y++){
		for(x=0; x<3; x++){
			board[y][x] = 0;
		}
	}
	//initialisation of square colors
	for(var i=0; i<9; i++){
		b_sqr[i].style.backgroundColor = "white";
	}
}

function v_init(){
	//initialises variables
	act_player = 0;
	g_gamestate = 0;
	win_ln =0;
	draww = false;
}

function c_ifWin(){
	//checks if any of wining lines appeard
	var p_match;
	var i, j;
	
	for(i=0; i<8; ++i){
		p_match = 0;
		
		for(j=0; j<3; ++j){
			if(board[l_match[i][j][0]][l_match[i][j][1]] == act_player)
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
	document.getElementById("msgbox").innerHTML = act_player + " won!";
	var y;
	var x;
	var i;
	
	//mapping wining line
	for(i=0; i<3; i++){
		y = l_match[win_ln][i][0];
		x = l_match[win_ln][i][1];
		
		var pole = x + 3*y;
		
		//turn to red
		b_sqr[pole].style.backgroundColor = "red";
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
				b_sqr[i].innerHTML = "";
				i++;
				continue;
			}	
			else
				b_sqr[i].innerHTML = board[y][x];
			i++;
		}
	}
}

function cl_msg(){
	//clears msgbox
	document.getElementById("msgbox").innerHTML = "";
}

function c_ifFull(){
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


function p_disp(){
	//displays act_player to msgbox
	var txt = "Player " + act_player;
	document.getElementById("msgbox").innerHTML = txt;
}

function placeSgn(x, y){
	//msgbox import
	var msg = document.getElementById("msgbox");
	//if not started
	if((g_gamestate==0) || draww){
		return;
	}
	
	//if target is taken
	if(board[y][x] != 0){
		msg.innerHTML = "This square is aleardy taken";
		return false;	
	}
	//if target is availible
	else {
		board[y][x] = act_player;
		draw();
		//check if wining line appeared
		if(c_ifWin()){
			p_win();
			return;
		}
		//check if board is full
		else if(c_ifFull()){
			msg.innerHTML = "Draw!";
			draww =true;
			return;
		}
		//player change
		else{
			if(act_player == p_1)
				act_player = p_2;
			else
				act_player = p_1;
		}
	}
	//display new player
	p_disp();
}


function start(){
	//check if aleardy started, random choose player and switch to started
	//if started
	if(g_gamestate!=0){
		return false
	}
	//board initialisation
	b_init();
	//variables initialisation
	v_init();
	//player choosing
	if((Math.floor((Math.random() * 10) + 1)%2==0)){
		act_player = p_1;
	}
	else {
		act_player = p_2;
	}
	//change state to 'in game'
	g_gamestate = 1;
	
	document.getElementById("msgbox").innerHTML = "Player with sign " + act_player + " starts!";
	draw();
}

function stop(){
	//stops game
	if(g_gamestate == 0)
		return false;
	
	g_gamestate = 0;
	b_init();
	draw();
	cl_msg();
}

