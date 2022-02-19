/*
	** Types or val
	* multi-types allowed using `|`
	* interface type is allowed
	* Let's create some alianse type like `type ID = number;`
	* as we can see void type is just like `null` or undefined
*/

const foo: void = null; // no worries
let foo2: void = undefined; // no worries

type ID = number;
type Name= string;

let id : ID | null = 2;
let names: Name[] = ["Dana", "Roiwda"]; // list of alians types



let val : string | number = 1;

let val2 : string | null = null; // custom type
let val3 : string | null = "null";

const dana= {
	name: "Dana"
}

const user2: {name: Name; age: number} = {
	name: "Roiwda",
	age: 20,
};

// or we can use interface

interface User{
	name: string;
	age: number;
}

const usr3: User ={
	name: "Anas",
	age: 20,
}

console.log(user2.age, usr3.name, usr3.name);
