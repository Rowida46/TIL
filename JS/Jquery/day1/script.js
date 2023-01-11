/* to make sure that jqury file loaded right 
* use `$(document).ready(callback function)`
*/

$(document).ready(() => {
    $("button").click(() => {
        $("#welcome").hide();
        console.log("insedie click button")
    })

    console.log("inside callback")
})