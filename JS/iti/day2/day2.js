/*
nan-> once there is a chr ,
 even this chr is a space
*/
var x = "3a" 
var y = " my name is dana";
console.log("Last index",y.indexOf("j"));
console.log("Char At ",y.charAt(1))
alert(Number(x))
alert(Number(y))

/*
true -> if string only contain numbers.
false-> otherwise
*/
alert(isFinite(x))
alert(isFinite(y))


age = prompt("ur age");

while (!isFinite(age)){
	age = prompt("a valid age");
}

document.write("ur age " , age);


/*`isNan` -> is not a number */
document.write(isNaN(x));
document.write(isNaN(y));



function sum(x = 8, y) {
	res = x + y;
	alert(res);
	console.log("ur res is " + res);
}
sum(9, y = 6);
sum(y = 6);

function sum(x, y = 8) {
	res = x + y;
	alert(res);
	console.log("ur res is " + res);
}

sum(6);



x = 3
y = new Number(3);
z = new Number(9);
a = 5

y = z
y = 8989
console.log(" Check premb ",y.valueOf())
console.log(" Check premb ",z.valueOf())


arr = [1,2,3]
for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i])
}
console.log("Sorting " ,arr.sort())

now = new Date()
console.log("Now ", now)
console.log("Year  " , now.getYear())


str = "Vola mynae is rowida"

console.log("strike of string".strike())