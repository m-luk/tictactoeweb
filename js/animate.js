function changeColor(target, color){
   //change color of one object or collection of objects
   //determine if target is an Array
    toClass = {}.toString;
    if(toClass.call(target) == "[object HTMLCollection]"){
        for(var i=0; i<target.length; i++){
            target[i].style.color = color;
        }
    }
    else if(toClass.call(target) == "[object HTMLDivElement]"){
        target.style.color = color;
    }
    else{
        console.log("Error: ch_color : target invalid");
    }
}

function changeBackgroundColor(target, backgroundColor){
   //change background color of one object or collection of objects
   //determine if target is an Array
   toClass = {}.toString;
   if(toClass.call(target) == "[object HTMLCollection]"){
        for(var i=0; i<target.length; i++){
            target[i].style.backgroundColor = backgroundColor;
        }
    }
    else if(toClass.call(target) == "[object HTMLDivElement]"){
        target.style.backgroundColor = backgroundColor;
    }
    else{
        console.log("Error: ch_bgColor : target invalid");
    }
}

function changeBorderColor(target, borderColor){
    //change border color of one object or collection of objects
    //determine if target is an Array
    toClass = {}.toString;
    if(toClass.call(target) == "[object HTMLCollection]"){
        for(var i=0; i<target.length; i++){
            target[i].style.borderColor = borderColor;
        }
    }
    else if(toClass.call(target) == "[object HTMLDivElement]"){
        target.style.borderColor = borderColor;
    }
    else{
        console.log("Error: ch_bdColor : target invalid");
    }

}

function changeDimension(target, width = false, height = false){
    //change dimensions of target or collection of targets
    //if dimension is given 
    toClass = {}.toString;
    if(toClass.call(target) == "[object HTMLCollection]"){
        for(var i=0; i<target.length; i++){
            if(width){target[i].style.width = width;}
            if(height){target[i].style.height = height;}
        }
    }
    else if(toClass.call(target) == "[object HTMLDivElement]"){
        if(width){target.style.width = width;}
        if(height){target.style.height = height;}
    }
    else{
        console.log("Error: ch_bdColor : target invalid");
    }
}

function showWinner(player, final_line){
    //turns wining squares to red
    setMsg(player + " won!");
    
    final_line.forEach(element => {
        BOARD_FIELDS[element].style.backgroundColor = "red";
    });

    document.getElementById("bt_start").innerHTML = "RESTART";
}