var you = 1;
function clickBtn(btn) {
	console.log('btn', btn)
	if (you === 1)  {

	document.getElementById(btn).value = "X";
	document.getElementById(btn).disabled = "true";
	document.getElementById(btn).style.backgroundColor = 'Red';
	you -=1;
	checkedBoxesArray.push(btn);
	checkBoxes();	
} else {
	document.getElementById(btn).value = "O";
	document.getElementById(btn).disabled = "true";
	document.getElementById(btn).style.backgroundColor = 'Blue';
	you +=1;
	checkedBoxesArray.push(btn);
	checkBoxes();
}
}
// document.getElementById(btn).addEventListener("click", function(){
//     document.push()


// });
var checkedBoxesArray = new Array ();
	
function checkBoxes(){
  if (document.getElementById('box1').value == "X" && document.getElementById('box2').value == "X" && document.getElementById('box3').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box1').value == "X" && document.getElementById('box5').value == "X" && document.getElementById('box9').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box8').value == "X" && document.getElementById('box5').value == "X" && document.getElementById('box2').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box1').value == "X" && document.getElementById('box4').value == "X" && document.getElementById('box7').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box3').value == "X" && document.getElementById('box6').value == "X" && document.getElementById('box9').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box4').value == "X" && document.getElementById('box5').value == "X" && document.getElementById('box6').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box7').value == "X" && document.getElementById('box8').value == "X" && document.getElementById('box9').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box7').value == "X" && document.getElementById('box5').value == "X" && document.getElementById('box3').value == "X") {
	 alert("X's Win!!");
} else if (document.getElementById('box1').value == "O" && document.getElementById('box2').value == "O" && document.getElementById('box3').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box1').value == "O" && document.getElementById('box5').value == "O" && document.getElementById('box9').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box8').value == "O" && document.getElementById('box5').value == "O" && document.getElementById('box2').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box1').value == "O" && document.getElementById('box4').value == "O" && document.getElementById('box7').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box3').value == "O" && document.getElementById('box6').value == "O" && document.getElementById('box9').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box4').value == "O" && document.getElementById('box5').value == "O" && document.getElementById('box6').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box7').value == "O" && document.getElementById('box8').value == "O" && document.getElementById('box9').value == "O") {
	 alert("O's Win!!");
} else if (document.getElementById('box7').value == "O" && document.getElementById('box5').value == "O" && document.getElementById('box3').value == "O") {
	 alert("O's Win!!");
} else if (checkedBoxesArray.length >= 9) {
			alert("Game Over");
} 
};

// function threeInARow() {
// if (document.getElementById('box1').value == "X" && document.getElementById('box2').value == "X" && document.getElementById('box3').value == "X") {
// 	return alert("You're a winner!");
// }	
// }


// var winningComboArray = [[0,4,8], [6,4,2], [0,3,6], [0,1,2], [2,5,8], [1,4,7], [3,4,5], [6,7,8]];
// var boxesArray = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
// for (var i = 0; i > boxesArray.length; i++) {
// 	function boxHasValue () {
// 		if (value !== undefined && value !== null) {
// 			console.log(value);
// 		}
// 	}


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