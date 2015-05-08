var boxes = document.getElementsByClassName('box');
var turn = 1;

function takeTurns(){
	turn ++;
	if (turn % 2 === 0){
		return'<img src="http://pngimg.com/upload/money_PNG3545.png">';
	}else return'<img src="http://i389.photobucket.com/albums/oo334/lil_diddy7/hundred_stacks_hyphy.png#stacks%20of%20money">';
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


function winner() {
	if (turn > 3) {
		if((boxes[0].innerHTML === boxes[1].innerHTML && boxes[2].innerHTML) ||
	    	(boxes[3].innerHTML === boxes[4].innerHTML && boxes[5].innerHTML) ||
	    	(boxes[6].innerHTML === boxes[7].innerHTML && boxes[8].innerHTML) ||
	    	(boxes[0].innerHTML === boxes[4].innerHTML && boxes[8].innerHTML) ||
	    	(boxes[2].innerHTML === boxes[4].innerHTML && boxes[6].innerHTML) ||
	    	(boxes[0].innerHTML === boxes[3].innerHTML && boxes[6].innerHTML) ||
	    	(boxes[1].innerHTML === boxes[4].innerHTML && boxes[7].innerHTML) ||
	    	(boxes[2].innerHTML === boxes[5].innerHTML && boxes[8].innerHTML)){
			document.getElementById('announce').style.backgroundImage = 'url(work.gif)';	
			document.getElementById('board').style.display = 'none';
			document.getElementById('ban').style.fontSize = '12vw';
			document.getElementById('ban').style.marginTop = '5em';
		}else console.log("keep playing");
	}		
}





