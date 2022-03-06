from flask import Flask, render_template
from data import Contacts

app = Flask(__name__) # That will work like a placeholder for our app 

@app.route("/")
def index():
	return render_template('layout.html')

Contacts_data = Contacts()
@app.route('/contacts')
def Contact():
	return render_template('contacts.html', Contacts = Contacts_data)


app.route('/contact/<string:id>/')
def Contact():
	id = 1
	return render_template('contact.html', id = id)
	

@app.route("/index")
def wlcm():
	return render_template('home.html')
if __name__ == '__main__':
	app.run(debug = True)