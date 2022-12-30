
var res = fetch("https://jsonplaceholder.typicode.com/users");

res.then((data) => { return data.json() }
).then(showRes);


function showRes(users) {
    var data = document.getElementById("data")
    users.forEach(user => {
        data.innerHTML += `<div id="div2" >
        <button  onClick='getPost(${user.id})' class="btn btn-secondary">${user.name}</button>
        </div>`
    });
}

function getPost(id) {
    var post = fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    post.then(res => res.json()).then(showPost);
}

function showPost(post) {
    var data = document.getElementById("posts")
    data.innerHTML = `<h3>${post.title}</h3>
    <p>${post.body}</p>`

}


