
/** using await */
async function fetchDate(){
    var data = await fetch("https://jsonplaceholder.typicode.com/users");
    var users = await data.json();
    console.log(data)
    console.log(users)
    return data
}
fetchDate();

var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) =>{ return data.json()}
).then((users )=> {
   users.forEach(user => {
    console.log(user.name)
   });

})

