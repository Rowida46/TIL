/**
 * we could use a transibiler ti transelate code according to js engine 
 */

/**
 * to handel val scope
 * var : is a vitual scope -> it's accessable or seen even if a var val is defined insidea block 
 * var are not a block scope
 * let is a block scope
 */
/**
 * let and var are both a function scope
 */

for(var i=0; i<=4; i++){
    console.log(i)
}

console.log(i) /**i is defiend inside a block scope however it's seen here */

function test(){
    for(var ifunc=0; ifunc<=4; ifunc++){
    console.log(ifunc)
}}
//console.log(ifunc) // raise error cuz var is a function block

for(let ii =0; ii<=4; ii++){
    console.log(ii)
}

// console.log(ii) cerror cuz let is a block scope
//console.log(p)

/** see the  */
var name;
var x;
console.log(typeof x) /**not a preserved key, so it's undefined */
console.log(typeof name) /**works as window.name  ->aka preserved key*/

let nameL;
console.log(typeof nameL)

function test(n){
    if (n){
        let msg = "hello, " + n
    }
    //console.log(msg) /** cuz let is a block scope */
} 

test("nana")

testArrowFunction = (x,y) => x+y; /** arrow function -> single line */

testArrowFunction2 = (X,Y) =>{ /**MULTIPLE LINES */
    console.log(X+Y)
    return   X+Y;
}

console.log(testArrowFunction(8,7))

/** this -> to refer to the current obj, workds as a caller.  */

console.log(this, "this window obbj")
function test(){
    console.log(this);
}
test();

var obj ={
    "id" : 1,
    "age" : 90,
    print: function(){
        console.log(this)
    }
}
obj.print();

var obj2 = {
    objName:"menna",
    objAge:25,
    print:function(){
            //this==obj
          // var self = this;
       setTimeout(()=>{
            //this==window
            //
            console.log("--------------------",this.objName,this.objAge, this);
        },2000);
    }
}

obj2.print();

/** destructring in objs
 * 
 * we use this style cuz dectructing with objs is not ordered 
 */
var {age} = obj;
var {id} = obj;

console.log(age)


function summ(...params) {/**rest  parameter*/
        console.log(params);
    
}
summ(9,9,0)
summ(9,9,0)


arr = [1,2,3]
const [a,,c] = arr; /**cnt be without const */
console.log(a,c)

var z = 60;
var [x,y,cc] = [z,200]; /** cc is  undefined here */
console.log(x,y,cc)
/**
 * using rest, split 
 */

/**
 * every
 * sum
 */

function add(a,...x){
    console.log(a);
    console.log(x);
    console.log("arguments", arguments);

}

add(30,20);

add(50,60,200);

add(60,30,90,80);

function dimin(...data){
    return data
}

console.log(dimin([1,2,9,3]))