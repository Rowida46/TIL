function map(f, lst) {
	ans = []
	for (var i = 0 ; i != lst.length; i ++) {
		ans[i] = f(lst[i]);
	}
	return ans;
}

const f = function(x) {
   return x * x * x;
}


let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
/*
We can provide a name to a function that is assigned to a specific name see the above line of code :

Objective:
	Providing a name allows the function to refer to itself, 
	and also makes it easier to identify the function in a debugger's stack traces:

Note :> we can call the fuction name itself ownits own like this
* console.log(fac(3))
Error :: Uncaught ReferenceError: fac is not defined
*/

/*
In JavaScript, a function can be defined based on a condition.
 For example, the following function definition defines myFunc only if num equals 0:
 */

var conditional_func;
if (conditional_func){
	conditional_func = function (x){
		return x **4;
	}
}



function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give to it

result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8


console.log(fn_inside)