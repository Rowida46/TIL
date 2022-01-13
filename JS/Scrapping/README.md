## XMLHttpRequest
`XMLHttpRequest` is a builtin browser object that allows to make HTTP requests in JavaScript and  used to fetch and operates all type of data not only _XML_ .

> XMLHttpRequest has two modes of operation: synchronous and asynchronous.

steps :
1. Create XMLHttpRequest Object. `const xhr = new XMLHttpRequest()`
2. open &pass argument to that object, this is the paart of configration :
```js
xhr.open(method, URL, [async,token_url, user, password])
```
This method specifies the main parameters of the request:
	- _method_ – HTTP-method. Usually "GET" or "POST".
	- _URL_ – the URL to request, a string, can be URL object.
	- _async_ – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
	- _user, password_ – login and password for basic HTTP auth (if required).

> Please note that open call, contrary to its name, does not open the connection. It only configures the request, but the network activity only starts with the call of send.

3. Send `xhr.send([body = req body])` : used to oprn the conecction and send the request to the server.
	- Parameters : __body__ which is the request body, `POST` request have body, while `GET` don't as it's
	only meant to retrieve data.

4. Listen to xhr events for response.
	- _progress_ : triggers periodically while the response is being downloaded, reports how much has been downloaded.



## Resources 
- [JS.io tutuorial](https://javascript.info/xmlhttprequest)