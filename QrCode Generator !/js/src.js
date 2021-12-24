btn = document.querySelector(".button");
qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", ()=>{
	let user_input = document.querySelector("#input_text");
	if (user_input.value != ""){
		if (qr_code_element.childElementCount == 0){
			console.log("here")
			generate(user_input);
		}
		else{
			qr_code_element.innerHTML = "";
            generate(user_input);
		}
	}
	else {
		console.log("again here");
		document.querySelector(".qr-code").style = "display: none";
        console.log("not valid input");
	}
});


// .qr-code element will be hidden until the user clicks on the Generate QR code button.
function generate(user_input) {
	/*
	QRCode wil take 2 
		1. the element in which the QR code has to be displayed.
		2. the content for which the QR code.
	*/
	qr_code_element.style = "";
	var qrcode = new QRCode(document.querySelector(".qr-code"), {
		text: `${user_input.value}`,
        width: 180, //default 128
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
	});
	//console.log(qrcode);

	// add download button
	let download = document.createElement("button");
	qr_code_element.appendChild(download);

	//  create download `a` 
	let download_link = document.createElement("a");
	download_link.setAttribute("download" , "qr_code_linq.png");
	download_link.innerText = "Get your QRCode Here";

	// append the a link tothe download button
	download.appendChild(download_link);

	// Work on qrcode link `href`
	
    let qr_code_img = document.querySelector(".qr-code img");
    let qr_code_canvas = document.querySelector("canvas");

    if(qr_code_img.getAttribute("src") == null){
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
        }, 300);
    }
}


