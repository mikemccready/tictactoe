//angular
//	.module('app', []);

var boxes = document.getElementsByClassName('box');
var turn = 0;

function takeTurns() {
	turn ++;
	if ((turn + 2) % 2 === 0) {
		return "o";
	} else return "x";
}

chooseBox();	

function chooseBox() {
	
		for (var i = 0; i < boxes.length; i ++) {
			boxes[i].addEventListener('click', function(){
				this.innerHTML = takeTurns();
			})		

		}
/*function win() {

	if (boxes[0,1,2].innerHTML = "x") {
		console.log("win");
	}

}
win()*/

}



