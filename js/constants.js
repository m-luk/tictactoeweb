//constants file
const BOARD_FIELDS= document.getElementsByClassName("b_pole"); //array of html table elements

const MSG = document.getElementById("msgbox");

//array of wining lines					
const WIN_LINES=	[ 	[ 0, 1, 2 ], // górna pozioma
                        [ 3, 4, 5 ], // środ. pozioma
                        [ 6, 7, 8 ], // dolna pozioma
                        [ 0, 3, 6 ], // lewa pionowa
                        [ 1 ,4 ,7 ], // środ. pionowa
                        [ 2, 5, 8 ], // prawa pionowa
                        [ 0, 4, 8 ], // p. backslashowa
                        [ 6, 4, 2 ], ]; // p. slashowa


//player signs
const PLAYER_1 = 'X'; 
const PLAYER_2 = 'O';
const EMPTY_FIELD = ""
