
function makeFetch(argument) {
    fetch("https://retoolapi.dev/MO3Cl6/data").then(res => res.json()).then(renderResult)

}
/*get res */
function renderResult(res){
    //console.log(res)
    localStorage.setItem("posts", JSON.stringify(res))
    posts = document.getElementById("Posts")

    res.forEach(function(post){
        //console.log(post.title + ' ' + post.image)
        posts.innerHTML +=  `<div id="div2" >
            <h2><a onclick='save(${JSON.stringify(post)})' href="view.html?${post.id}"> ${post.title}</a>
           </h2>
            <img src='${post.image}'>
            <p>${post.description}</p>
            <button onclick='deletPostsFromLocalStorage(${post.id})'> Delete ! </button>
            <button onclick='updatePostsFromLocalStorage(${post.id})'> Update ! </button>
            <button onclick='addPoststoLocalStorage(${post.id})'> Add Random Post! </button>

            
        </div>` 
        }
    );
}

function save(data){
    localStorage.setItem("currentPost", data)
    console.log(data)
}

/*delete from api */
function deletePost(id){
    /*delet item from api */
    console.log(id);
    fetch("https://retoolapi.dev/MO3Cl6/data/"+id, {
        method:"DELETE"
    }).then(res => res.json()).then(renderResult);

}

/* delete */
function deletPostsFromLocalStorage(id){
    console.log(id)
    posts = JSON.parse(localStorage.getItem("posts")); // get posts from local storage
    posts = posts.filter(function(post){
        return post.id != id
    })
    localStorage.setItem("posts", JSON.stringify(posts) )
    console.log(posts)
}


/* update */

function updatePostsFromLocalStorage(id){
    console.log(id)
    posts = JSON.parse(localStorage.getItem("posts")); // get posts from local storage

    targetPost = posts.filter((post) => post.id == id).pop(); /*filter to get the target post */
    if (targetPost){/*update its probs */
        targetPost.title = "title";
        targetPost.image = "img";
        targetPost.description = "description";
    }
    console.log(targetPost)

    localStorage.setItem("posts", JSON.stringify(posts))
    console.log(posts)
}


/* add new post */
function addPoststoLocalStorage(){
    posts = JSON.parse(localStorage.getItem("posts")); // get posts from local storage
    newPost = {
        "title" : "new title",
        "image" : "new img",
        "description" : "new description"
    }
    console.log(newPost)
    posts.push(newPost)
    localStorage.setItem("posts", JSON.stringify(posts))
    console.log(posts)
}