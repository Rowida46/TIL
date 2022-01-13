const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('POST', 'https://reqres.in/api/login');


// listen for `load` event
xhr.onload = () => {
    console.log(xhr.status+"da")

    // print JSON response
    if (xhr.status >= 200 && xhr.status < 300) {
        // parse JSON
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};

