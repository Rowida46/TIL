//alert("hello javascript 1")

//alert("hello javascript 2")

/*alert("hello javascript 3")
alert("hello javascript 4")
alert("hello javascript 5")
alert("hello javascript 6")
alert("hello javascript 7")*/
//========================================================== //
//knows data type from the variable its self
//========================================================== //
//1- string
/* var s="hi" //literal creation (value type in -> stack )
alert(typeof s)

var S= new String("Islam")//constructor creation (refrence type -> heep and there is pointer in stack point to it)
alert(typeof S)*/
//========================================================== //
//2-number
/* var n=5 //literal creation (value type in -> stack )
alert(typeof n)

var N= new String("Islam")//constructor creation (refrence type -> heep and there is pointer in stack point to it)
alert(typeof N)*/
//========================================================== //
//3-boolean
/* var b=false //literal creation (value type in -> stack )
alert(typeof b)

var B= new boolean(true)//constructor creation (refrence type -> heep and there is pointer in stack point to it)
alert(typeof B) */
//========================================================== //
//4-null
/* var test1=null
alert(typeof test1)*/
//========================================================== //
//5-undefined
/* var test2=undefined
alert(typeof test2)*/
//========================================================== //
//console.log("hello Soli")//view to develober in consol
//========================================================== //
//prompt("please enter your last name")//take input from user
//========================================================== //
/*var th=prompt("please enter your last name")//carry the value from user set on prompt as input
alert(th)*/
//========================================================== //
/* var result =confirm("are you sure you want to cancel?")
alert(result)
if (result==true){
	alert("hello")
	else{
		alert("goodbye")
	}
 }*/
//========================================================== //
/*var id=prompot("please enter your id")
document.write("id")*/
//========================================================== //
/*function sum(a,b){

	console.log(a+b)
}
sum(22,11)*/
//========================================================== //
/*function sum(a,b){

	console.log(typeof(a+b))
}
sum(22,"islam")*/
//========================================================== //
/*function sum(a,b){

	console.log(a) //in this case it's undefined
	console.log(b) //in this case it's undefined
	console.log(a+b)//in this case it's NaN
}
sum()*/
//========================================================== //
/*function test3(){
	//what calls the functio might be it's return
	return 3
}
var result=test3()
console.log(result)*/
//========================================================== //
/*function test4(){
	//in this case return is undefined because the function don't have return
	alert("hi hi")
}
var result=test4()
console.log(result)*/
//========================================================== //
//hoisting ==> call the function before it's decleration
//1- hoisting functions

/*test5(5,6)
function test5(a,b){

	alert(a+b)
}*/

//2- hoisting variables (but value will be undefined)

/*console.log(hoi)
var hoi="ali"*/
//========================================================== //
//var scope
//var outside the function is ==> global

/*var num=5
function test6(){

	alert(num)
}
test6()*/

//var inside the function is ==> local

/*function test7(){

	var z=30
	console.log(z)
}
test7()
console.log(z)*/

/*function test8(){

	var num=30
	
}
test8()
console.log(num)*/ //output is 5 the var num on line 112
//========================================================== //
//let ==> hoisting to declaration only and no initialization (initialization can't be accessed)
/*console.log(number)
let number=4*/
//========================================================== //
//let scope
/*for (var i=0;i<3;i++){

	
}
console.log(i)*/

//let ==> block scope
/*for (let j=0;j<3;j++){

}
console.log(j)*/

/*function test9(){
	for (let k=0;k<3;k++){
		console.log(k)
	}

	console.log(k)
}
test9()*/
//========================================================== //
//constant it's first initialization can't be changed (same hoisting and scope of let)
/*const str="islam"
str="ahmed"*/
//========================================================== //
/*z=100 //it will work 

/*function display(){
	z=6 //it will be global when i call the function for the first time
	console.log(z)
}
display()
console.log(z)*/

/*"use strict" //strict mood
z=166*/ //it will not work because of strict mood and i must use var

/*"use strict" //strict mood
z=166
var z*/ //it will work here because I've used var
//========================================================== //
//ternary operator

/*var g=320
var t= (g>=300)?"good":"bad";*/
//========================================================== //
/*var n=30
var o=55

if (n==30 && o>65){
	console.log"correct1"
}else{
	console.log"not correct1"
}

if (n==30 && o==55){
	console.log"correct2"
}else{
	console.log"not correct2"
}

if (n==30 || o>=65){
	console.log"correct3"
}else{
	console.log"not correct3"
}

if (n==30 && o==55){
	console.log"correct4"
}else{
	console.log"not correct4"
}

if (n!=30){
	console.log"correct5"
}else{
	console.log"not correct5"
}*/
//========================================================== //
var numb= parseInt(prompt("pleaase enter F number"))
var numb2=parseInt(prompt("pleaase enter S number"))

alert(numb+numb2)