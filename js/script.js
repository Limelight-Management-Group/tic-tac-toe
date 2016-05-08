var you = 1;
function clickBtn(btn) {
	if (you === 1)  {

	document.getElementById(btn).value = "X";
	document.getElementById(btn).disabled = "disbaled";
	you -=1;	
} else {
	document.getElementById(btn).value = "O";
	document.getElementById(btn).disabled = "disbaled";
	you +=1;
}
}

function threeInARow() {
if (document.getElementById(btn1).value == "X" && document.getElementById(btn2).value == "X" && document.getElementById(btn3).value == "X") {
	return alert("You're a winner!");
}	
}