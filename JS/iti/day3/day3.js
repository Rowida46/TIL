console.log(window.name)
console.log("closed" + window.closed)
console.log("status "+ window.status)
console.log(window.innerHeight)
console.log(window.outerHeight)
console.log(window.innerWidth)
console.log(window.outerWidth)
console.log("frames" + window.frames)
console.log("frames of index : " + window.frames[0])


function navigateTo() {
	window.open("https://www.w3schools.com", "_parent");

}


function Focus() {
	window.blur()
}

console.log(document.forms)

console.log(document.forms[0])