from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
	user_agent = request.headers.get("User-Agent")
	return '<p>ur browser is %s</p>' % user_agent

@app.errorhandler(404)
def page_not_found():
	return render_template("404.html"), 400

@app.errorhandler(500)
def internal_server_error():
	return render_template("500.html"), 500

if __name__ == '__main__':
	"""Flask lookup the URL given in the requestin the
		application's url_map ...see below
	`url_map` : contains a map of given urlsto the voew function that handle them, 
		Flask build this map using the decorator `app.route`
		 OR
		the eq nondecorator `app.add_url_rule()`
	"""
	print(app.url_map) 
	app.run()
