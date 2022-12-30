/**
 * we could use a transibiler ti transelate code according to js engine 
 */

/**
 * to handel val scope
 * var : is a vitual scope -> it's accessable or seen even if a var val is defined insidea block  
 */
/**
 * let and var are both a block scope
 */
for(var i=0; i<=4; i++){
    console.log(i)
}

console.log(i) /**i is defiend inside a block scope however it's seen here */

//console.log(p)

var x = 10;
console.log(typeof x)


function test(n){
    if (n){
        let msg = "hello, " + n
    }
    //console.log(msg)
} 

test("nana")

testArrowFunction = (x,y) => x+y; /**single line */

testArrowFunction2 = (X,Y) =>{ /**MULTIPLE LINES */
    console.log(X+Y)
    return   X+Y;
}

console.log(testArrowFunction(8,7))

/** this -> to refer to the current obj, workds as a caller.  */

console.log(this, "this window obbj")

var obj ={
    "id" : 1,
    "age" : 90,
    print: function(){
        console.log(this)
    }
}


obj.print();

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
a,,c = arr;


/**
 * using rest, split 
 */

/**
 * every
 * sum
 */