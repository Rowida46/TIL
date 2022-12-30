function colapse() {
    flag = true

    img = document.getElementById("imgFlip");
    shape = document.getElementById("child");
    img.addEventListener('click', function () {
        if(flag){
            shape.style.display = "none";
            shape.style.transition = "3s";
            flag = false
        }
        else{
            shape.style.display = "inline";
            shape.style.transition = "3s";
            flag= true;
        }
    })

}
colapse()

function slider() {
    var secCols = document.getElementsByClassName("col");
    var txt = document.querySelectorAll(".colapse");
    console.log(secCols, txt[1], txt.length)
    flag = true

    for (let index = 0; index < secCols.length; index++) {
        secCols[index].addEventListener('click', () => {
            if (flag) {
                console.log(index, flag)
                secCols[index].style.cssText = "width:200px";
                txt[index].style.cssText = "display:block";
                flag = false

            } else {
                console.log(index, flag)
                console.log(txt[index], index)
                secCols[index].style.cssText = "width:30px";
                txt[index].style.cssText = "display:none"
                flag = true;

            }
        })
    }

}
slider()
