obj = { "od": '2', "even" : 8};

$("div ").on("click", 'p', obj, (data) => {
    console.log(data)
    console.log(data.data)

})


/** or we  can multiple events as an obj */


$("#welcome").on({
    "click" : ()=>{console.log('on click')},
    "mouseover" : ()=>{console.log('on hover')}
    
})

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory

            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            user = {"id" :1 , "name" : "dana", "immg" : img.src}
            localStorage.setItem("user" , JSON.stringify(user))
            console.log(JSON.parse(localStorage.getItem("user")))
        }
    });
  });



  /** AJSX */
const xhr = new XMLHttpRequest();

console.log(';;' , xhr)
xhr.open("GET" , "https://retoolapi.dev/MO3Cl6/data");

xhr.onreadystatechange = function(){
    console.log(this.readyState, this.status)
    if(this.readyState == 4 && this.status == 200){
        console.log(xhr.responseText)
    }
}


xhr.send();