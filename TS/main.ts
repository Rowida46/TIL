// ts-node main.ts
console.log("Hello world");


class Greeter{
	greating: string;
	constructor(msg: string){
		this.greating = msg;
	}
	show_msg() :string{
		return this.greating;
	}
}
let dana = new Greeter("Dana");
console.log(dana.show_msg());

/* -------------------------- */

let foo = 123;

{
	const foo = (X: number, Y: number) => X + Y;
	console.log(foo(3, 2));
}

foo = 4


/*---------- find in array ------------------*/

console.log(foo);
const inventory = [
 {name: 'apples', quantity: 2},
 {name: 'bananas', quantity: 0},
 {name: 'cherries', quantity: 5}
];
/*function findCherries(fruit) {
 return fruit.name === 'cherries';
}
inventory.find(findCherries); // { name: 'cherries', quantity: 5 }*/
/* OR */

let ans = inventory.find(e => e.name == "cherries");
console.log(ans);


/*---------- Enum ------------------*/

/*let myFavoritePet: "dog";
myFavoritePet = "dog";
// myFavoritePet = "cat"; error :: Use Enum alianse type
*/
const enum Pets{
 "Cat" ,"Dog" , "Horse"
} //  const  Pets = "Cat" | "Dog" | "Horse" -> note the disserance bro..



let myFavoritePet: Pets;
myFavoritePet = Pets.Dog;

enum MyOddSet { Three = 3, Five = 5, Seven = 7, Nine = 9 }

console.log(MyOddSet.Three)

enum tp {
 JPEG = 'image/jpeg',
 PNG = 'image/png',
 PDF = 'application/pdf',
}
let arr :Array<string> = [];
for(let ele in tp){
	arr.push(ele)
}
console.log(arr)

class Car {
 public position: number = 0;
 protected speed: number = 42;
 
 move() {
 this.position += this.speed;
 }
} 
class SelfDrivingCar extends Car {
 move() {
 // start moving around :-)
 super.move();
 super.move();
 }
}
let cr = new SelfDrivingCar();
console.log(cr.position);
cr.move()
console.log(cr.position)





function addMetadata(target: any) {
 
 // Add some metadata
 target.__customMetadata = {
 someKey: "someValue"
 };
 
 // Return target
 return target;
}

@addMetadata
class Person {
 private _name: string;
 public constructor(name: string) {
 this._name = name;
 }
 public greet() {
 return this._name;
 }
}
function getMetadataFromClass(target: any) {
 return target.__customMetadata;
}
console.log(getMetadataFromClass(Person));