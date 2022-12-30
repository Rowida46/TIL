
/**
 * fatory function -: is to create an anonymous fuction 
 * aka it's constructor is not of a type of the cllass name
 * src : https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/
 * src: stackoverflow https://stackoverflow.com/questions/36123203/javascript-what-are-factories
 */
function employee(name, age) {
    return {
        name: name,
        age: age
    }
}

//obj = employee("dana", 22)
/**constructor function */

function Employee(name, age) {
    this.name = name;
    this.age = age


}
/* 
objConstructor = new Employee("dana", 22)
objOrdinaryFunction = Employee("dana", 22) // without new

console.log("Constructor function obj:  ", objConstructor)
console.log("factory function that create& hold anonymous function: ", obj)
console.log("constructor function without using the new operator&keyword : ", objOrdinaryFunction)

 */
/* class Student{
    constructor(name,age,grades){
        this.name = name
        this.age = age
        this.grades = grades
    }
    print(){
        console.log(this.name, this.age)
    }
    clacGrage(){
        var sum = 0 ;
        this.grades.forEach(element => {
            sum += element
        });
        console.log("your total  grades is ",sum);
    }
} 

s1 = new Student("dana", 25, [10,20,90])
s1.print()
s1.clacGrage()
*/

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    print() {
        console.log(this.name, this.age)
    }
}


export class Student extends User {
    constructor(name, age, grads) {
        super(name, age);
        this.grades = grads
    }
    clacGrage() {
        var sum = 0;
        this.grades.forEach(element => {
            sum += element
        });
        console.log("your total  grades is ", sum);
    }

}

