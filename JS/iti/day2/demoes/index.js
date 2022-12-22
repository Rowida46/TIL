function myInterval() {
	window.setInterval(alert("setInterval"), 5000)
}

function TimeOut(){
	window.setTimeout(alert("setTimeout", 500))
}
TimeOut()
myInterval()

c = 1 
function startInt(){
	t = window.setInterval(function(){
		document.getElementById("txt").value = c;
		c+=1;
	}, 1000)
}


document.links[0].onmouseenter = function(event){
	console.log(event)
	document.preventDefault();
}

document.forms[1].onsubmit = function(event){
	name = false
	age = false
	if(!name || !age){
		alert("not a valid user data")
		event.preventDefault();
	}
}

function stopCount(){
	document.clearTimeout(t)
}


two = document.querySelector(".two")
console.log(two)
window.onload = function(){
	two.focus()
}