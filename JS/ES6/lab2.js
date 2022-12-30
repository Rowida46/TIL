/** swap 2 vals */
a = 9
b = 90;
[a,b] = [b,a]
console.log("After swapping ",a,b)

/** q2 */

getMinMax = (...lst) =>{
    return {
        "max" : Math.max(...lst),
        "min" : Math.min(...lst)
    };
}

console.log(getMinMax(1,2,3,9,4,5))

/** q3 */

fruits = ["apple", "strawberry", "banana", "orange","mango"]

/** every */
isStr = fruits.every((ele) => typeof ele ==="string")
console.log("is string type" , isStr)

/** b some in arr */
summ = fruits.some((ele) => ele.startsWith("a"))


/** c startsWith */
summ = fruits.filter((ele) => ele.startsWith("b") || ele.startsWith("s"))

console.log(summ)
/**mapping */
mapping = fruits.map((ele) => `i love ${ele}`)
console.log("Mapping", mapping)

/** foreach */

mapping.forEach((ele) => {
   console.log(ele) 
});