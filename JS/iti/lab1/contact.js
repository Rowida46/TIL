
function contact(){
	name = prompt("enter your user name");
	while(!isNaN(name)){/*not a number */
		name = prompt("enter your user name");
	}
	
	do{
		year = parseInt(prompt("Enter a valid birth year"));

	}while(! isNaN(year) && 2000< year && year > 2010)

	now = new Date();
	var age = now.getYear() - year + 1900 ;
	console.log("Now is " + now.getYear() + 1900)
	document.write("<strong>Name </strong> " + name + "<br><br>");
	document.write("<strong>Age </strong> " + age);

}

function looping(){
	for (var i = 1; i <= 6; i++) {
		dom = `<h${i} > welcome to my page </h${i} >`
		console.log(dom);
		document.write(dom);
	}
}