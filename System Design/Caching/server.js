const database = require('./db');
const express = require('express');


const app = express();
const cach = {};

/* we've 2 end points
** 1- without cache 
** 2- stor in cach
*/

app.get('/nocache/index.html', (req,res) =>{
	database.get('index.html', page =>{
		res.send(page);
	});
});


app.get('./withcache/index.html', (req,res)=>{
	if ('index.html' in cach) {
		res.send(cach['index.html']);
		return ;
	}
	database.get('index.html', page=>{
		cach['index.html'] = page;
		res.send(page);
	});
});

app.listen