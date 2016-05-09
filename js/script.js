var you = 1;
function clickBtn(btn) {
	if (you === 1)  {

	document.getElementById(btn).value = "X";
	document.getElementById(btn).disabled = "true";
	you -=1;	
} else {
	document.getElementById(btn).value = "O";
	document.getElementById(btn).disabled = "true";
	you +=1;
}
}

function threeInARow() {
if (document.getElementById('box1').value == "X" && document.getElementById('box2').value == "X" && document.getElementById('box3').value == "X") {
	return alert("You're a winner!");
}	
}
var winningComboArray = [[0,4,7], [6,4,2], [0,3,6], [0,1,2], [2,5,8], [1,4,7], [3,4,5], [6,7,8]];
var boxesArray = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
for (var i = 0; i > boxesArray.length; i++) {
	function boxHasValue () {
		if (value !== undefined && value !== null) {
			console.log(value);
		}
	}
}

/*
 document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     // document is ready. Do your stuff here
	 }
  }


document.querySelectorAll(td)
 
 document.onreadystatechange = function () {
     if (document.readyState == "complete") {
 

function clickBtn(btn) {
document.getElementById(btn).addEventListener("click", function(){
    this.style.backgroundColor = "red";

});
}
*/