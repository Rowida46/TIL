const database = {
	['index.html'] : "<html>Vola</html>",
};

module.exports.get = (key,callback) =>{
	setTimeout(() =>{
		callback(database[key]);
	}, 3000);
};

