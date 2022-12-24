/*Task 1*/

function keyPressed(e){
	document.getElementById('txt').innerText += e.key;

}
/*Task 2 */

let mins = 0, secs = 0, hours = 0;
let timer;

function ShowCurrentTimetst() {
	date = new Date()
	str = date.toDateString();
	local = date.toLocaleDateString();
	document.getElementById("textBox").value += "\n" + str + " " + local; 
}


function getTime() {
	/* using date function */
	var currentDate = new Date();
	var currentTime = currentDate.toLocaleTimeString();
	console.log(currentTime)
	document.getElementById("textBox").value = currentTime;
}

function ShowCurrentTime() {
	timer = window.setInterval(getTime, 1000);
}

/* function ShowTime() {
	timer = window.setInterval(ShowCurrentTime, 1000);
} */

/*Task 2 */

function calcTime() {
	mins = parseInt(secs / 60);
	hours = parseInt(secs / 3600);
	secs += 1
	document.getElementById("myTextBox").value = "It's been : " + hours + " hours and " + mins + " mintues ans " + secs % 60 + " seconds"

}
function StartTimer() {
	timer = window.setInterval(calcTime, 1000);
}

function StopTime() {
	window.clearInterval(timer)
}

/* ads = document.getElementById("ads").onclick = openads;
function openads(){
	console.log(ads)
	tap = window.open(ads);
} */

/*start of  task 3*/
let myAdsWindow;

function openAd() {
	ads = document.getElementById("ads");
	console.log("your lonk is " + ads);
	/*open the new window at the center  */
	var x = screen.width / 2 - 700 / 2;
	var y = screen.height / 2 - 450 / 2;
	myAdsWindow = window.open("", "_blank", 'width=300,height=300,left=' + x + ',top=' + y);

	txt = "The lorem ipsum is a placeholder text used in publishing and graphic design.This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout of the text instead of its content";
	myAdsWindow.document.write("<p>" + txt + "</p>");
}

function showAd() {
	window.setTimeout(openAd, 3000);
}

function closeAd() {
	myAdsWindow.window.close();
}

/*Close window on clicking 's' */
document.body.onkeydown = function (e) {
	if (e.key == 's') {
		window.close()
	}
}

/* end of task 3*/
/*start of task 4 
** Use valid and not valid text for validation messages.
*/

let msg;

function validateMsg() {
	msg = document.getElementById('msg').value;
	expr = /^[a-zA-Z]+$/;
	isValid = document.getElementById('isValid');
	if (msg && msg.match(expr)) {
		console.log(msg)
		isValid.innerText = "valid massage";
	}
	else {
		console.log(msg)
		isValid.innerText = "not a valid massage!";
	}
}

/*task 5 */

function sayHello() {
	document.getElementById("flipmode").innerText = "Hello !";
	alert("Hello !");
}

function flipMode() {
	img = document.getElementById("smileyFace")
	img.src = "https://i.pinimg.com/564x/ac/6a/fc/ac6afca86476e167ed70c22deb74ac79.jpg";
}

/* task 6 */

function rememberme(){
	var name = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	localStorage.setItem('username', name);
	localStorage.setItem('password', password);
	console.log(sessionStorage);
}