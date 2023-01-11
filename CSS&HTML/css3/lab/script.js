function colapse() {
    flag = true
    img = document.getElementById("imgFlip");
    shape = document.getElementById("child");
    img.addEventListener('click', function () {
        if (flag) {
            shape.style.display = "none";
            shape.style.transition = "3s";
            flag = false
        }
        else {
            shape.style.display = "inline";
            shape.style.transition = "3s";
            flag = true;
        }
    })
}

//colapse()

function colapse2() {
    flag = false
    img = document.getElementById("imgFlip");
    shape = document.getElementById("moreInfo");

    img.addEventListener('click', function () {
        if (flag) {
            shape.style.display = "none";
            shape.style.transition = "3s";
            shape.cla
            flag = false
        }
        else {
            shape.style.display = "inline";
            shape.style.transition = "3s";
            flag = true;
        } 
    })
}

colapse2()

function slider() {
    var secCols = document.getElementsByClassName("col");
    var txt = document.querySelectorAll(".colapse");/**class of the p tag inside each col */
    console.log(secCols, txt[1], txt.length)
    flag = true

    for (let index = 0; index < secCols.length; index++) {
        secCols[index].addEventListener('click', () => {
            console.log(secCols[index]);
            secCols[index].classList.toggle("expandorhide")
            secCols[index].getElementsByTagName("p")[0].classList.toggle("expandorhide")

        
           /*  if (flag) {
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

            } */
        })
    }

}
slider()
