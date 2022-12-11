document.write("<h1>Voala...!</h1>")

/*
color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial
*/
document.querySelector('h1').style.color = "blue";
document.querySelector('h1').style.fontSize = "80px";
document.querySelector('h1').style.fontWight = "bold";
document.querySelector('h1').style.textAlign = "center";
document.querySelector('h1').style.fontFamily = "Arial";


console.log("%cOh %cShit %cHere we go again",
	"color: red; font-size: 40px;",
    "color: green; font-size: 40px; font-weight: bold;",
    "background-color: purple; color: white; font-size: 40px;")

console.group("Group 1")
	console.log("msg 1")
	console.log("msg 2")
	console.group("Group Child")
		console.log("msg 1")
		console.log("msg 2")
		console.group("Grand Group Child")
			console.log("msg 1")
			console.log("msg 2")
		console.groupEnd()
	console.groupEnd()
console.groupEnd()
console.group("Group 2")
	console.log("msg 2.1")
	console.log("msg 2.2")
console.groupEnd()

console.table(['Rowida', "Dana"])


let numberOne = 10,
    numberTwo = 20;

console.log(numberOne + "" + numberTwo);
// Normal Concatenate => 1020

console.log(typeof "numberOne + '' + numberTwo");
console.log(`${numberTwo}${numberOne}`);
console.log(`${numberTwo}
${numberOne}`);



console.log(dana.innerHTML); // object
console.log(typeof dana); // object


console.log(obj.innerHTML); // object
console.log(typeof obj); // object


let myVar = "100.56789";
console.log(parseFloat(myVar));
let num = 10;
console.log(Math.floor(Math.random() * 3))
console.log(Math.floor(Math.random() * (4 - 0 + 1) + 0));
let name = "dana"
console.log(name[0].repeat(3));
console.log(name.includes('d'));

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ))
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends.slice(0,3));
// Write Code Here
myFriends.pop();
myFriends.shift();
console.log(myFriends); // Output => ["Elham", "Osama"]
