var boxes = document.getElementsByClassName('box');
var turn = 1;

function takeTurns(){
	turn ++;
	if (turn % 2 === 0){
		return'x';
	}else return'o';
}	

chooseBox();	
function chooseBox(){
	for (var i = 0; i < boxes.length; i ++) {
		boxes[i].addEventListener('click', function(){
			if (this.innerHTML === ""){
				this.innerHTML = takeTurns();
				winner();
			} else console.log("taken");	
		})				
	}
}


function winner(){
	if( 
		(  ((boxes[0].innerHTML === "x") && (boxes[1].innerHTML === "x") && (boxes[2].innerHTML === "x")) 
    	 ||((boxes[3].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[5].innerHTML === "x"))
    	 ||((boxes[6].innerHTML === "x") && (boxes[7].innerHTML === "x") && (boxes[8].innerHTML === "x"))
    	 ||((boxes[0].innerHTML === "x") && (boxes[3].innerHTML === "x") && (boxes[6].innerHTML === "x"))
    	 ||((boxes[1].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[7].innerHTML === "x"))
    	 ||((boxes[2].innerHTML === "x") && (boxes[5].innerHTML === "x") && (boxes[8].innerHTML === "x"))
    	 ||((boxes[0].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[8].innerHTML === "x"))
    	 ||((boxes[2].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[6].innerHTML === "x"))
    	) 
 
		||

		(  ((boxes[0].innerHTML === "o") && (boxes[1].innerHTML === "o") && (boxes[2].innerHTML === "o")) 
    	 ||((boxes[3].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[5].innerHTML === "o"))
    	 ||((boxes[6].innerHTML === "o") && (boxes[7].innerHTML === "o") && (boxes[8].innerHTML === "o"))
    	 ||((boxes[0].innerHTML === "o") && (boxes[3].innerHTML === "o") && (boxes[6].innerHTML === "o"))
    	 ||((boxes[1].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[7].innerHTML === "o"))
    	 ||((boxes[2].innerHTML === "o") && (boxes[5].innerHTML === "o") && (boxes[8].innerHTML === "o"))
    	 ||((boxes[0].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[8].innerHTML === "o"))
    	 ||((boxes[2].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[6].innerHTML === "o"))
    	)
    ) 
    {
		document.getElementById('announce').style.backgroundImage = 'url(work.gif)';	
		document.getElementById('board').style.display = 'none';
		document.getElementById('ban').style.fontSize = '30vw';
		document.getElementById('ban').style.marginTop = '.5em';
		document.getElementById('ban').style.lineHeight = '1em';
			// clearBoard()			
	}else console.log("keep playing");	
}

// function clearBoard(){
// 	for (var i = 0; i < boxes.length; i ++){
// 		boxes[i].innerHTML = "";
// 	}
// }





