//lst_of_js_tips = new Array(10);

lst_of_js_tips = ["clinet side", "interperted " , " "," "," "," "," ", " "," "]
min = 0
max = 10 
indx = Math.floor(Math.random() * (max - min) + min)

tipOfTheDay = lst_of_js_tips[indx]
console.log(tipOfTheDay , indx)

console.log(lst_of_js_tips.length)

document.write("Tip of the day" + tipOfTheDay )


function current_date() {
	/* Make a button that display the current date
	 and 
	time in local format on the page. */ 
	now =  new Date();
	local = now.toLocaleDateString();
	year = now.getYear() + 1900
	msg = "Your current year  is  " + year + " and ur local zone is : " + local;
	document.getElementById("curDate").innerText = msg;
	return msg
}


function formatingDate(){
	/* (r) red, (b) blue, (g) green*/
	lst_of_colors = new Array();
	lst_of_colors["r"] = "red"
	lst_of_colors["b"] = "blue"
	lst_of_colors["g"] = "green"

	/*color decided*/
	val = prompt("enter r, g , b", "r, b , g")
	txt = document.getElementById("curDate").innerHTML
	//console.log("-----",lst_of_colors[val]);
	res = txt.fontcolor(lst_of_colors[val]);
	document.getElementById("formatedDate").innerText = res;

	document.write(res);
}


function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

function checkValidDate(){
	
	try{
		date = Date.parse(prompt("ur date"))
		//throw error("my error")
		console.log("date", date)
		if(isNaN(date)){
			throw error("Not a valid date format")
		}
		urDate = new Date(date);
		console.log(urDate)
		return urDate;
	}catch(error){
		alert("Not a valid date formate")
	}
}

function sorting(){
	/*
	Make function to sort array numerically ,
	and explain how d
	*/

	lst = [1,5,3,9,2,11]
	res = lst.sort((a, b) => a - b);
	alert(res);
	//alert(lst.sort());
}


function checkValid(){
	date = Date.parse(prompt("ur date"))
	if (isValidDate(date)){
		curDate = new Date(date)
		alert(curDate.getYear())
		return curDate; /*anonumse obj*/
	}
	else{
		alert("Not a valid date formate")
	}
}


