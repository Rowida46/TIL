
alert("Welcome to my site");

var username = prompt("Enter your name", "username");

document.write("Welcome " + username);

function sum(a= '', b= '') {
	a = Number(document.getElementById("fnumber").value);
	b = Number(document.getElementById("lnumber").value);
	var sum = a + b;
	document.getElementById("sum").innerText = "Your Result is " + sum;
	return sum;
}

function reg(){
	expr = prompt("Enter math expression", "expression");
	var res = eval(expr);
	alert("You entered " + expr + "and the result is: " + res)
	return res;
}
