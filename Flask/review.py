from flask import Flask, render_template, url_for, session, logging, request, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from data import Contacts
from datetime import datetime
from werkzeug.security import generate_password_hash  , check_password_hash
from wtforms import StringField, Form, validators, PasswordField
from hashlib import sha256

def create_app(config_file='settings.py'):
	app = Flask(__name__) # That will work like a placeholder for our app 
	app.config.from_pyfile(config_file)
	return app

app = create_app()
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///data.db"
db = SQLAlchemy(app)


def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))


@app.route("/")
def index():
	return render_template('layout.html')

Contacts_data = Contacts()
@app.route('/contacts')
def Contact():
	return render_template('contacts.html', Contacts = Contacts_data)


app.route('/contact/<id>/')
def Contact(id =2):
	return render_template(url_for('contact', id = id))
	

@app.route("/index")
def wlcm():
	return render_template('home.html')


class User(db.Model):
    id = db.Column(db.Integer , primary_key = True)
    username = db.Column(db.String(80) , unique = True , nullable = False )
    fullname = db.Column(db.String(120) , unique = True , nullable = False )
    email = db.Column(db.String(120) , unique = True , nullable = False )
    password_hash = db.Column(db.String(120))
    register_date = get_timestamp()

    def set_password(self , password):
        self.password_hash = generate_password_hash(password)

    def __repr__(self):
    	info = {'username' : self.username,
	    	'fullname' : self.fullname,
	    	'email': self.email,
	    	'password': self.password_hash}
    	return info

class RegisterForm(Form):
	name = StringField("Name", [validators.Length(min = 2, max = 50)])
	username = StringField('Username', [validators.Length(min= 4 , max = 20)])
	email = StringField('email', [validators.Length(min= 6, max = 50)])
	password = PasswordField('password')
	confirm = PasswordField('Confirm password')


@app.route('/register', methods = ['GET', 'POST'])
def register():
	form = RegisterForm(request.form)
	if request.method == 'POST' and form.validate():
		name = form.name.data
		email = form.email.data
		username = form.username.data
		password = form.password.data
		user = User(username = name, fullname= username, email = email, password_hash = password)
		db.session.add(user)
		db.session.commit()
		flash("YOU Are Now Registered and can log in , Success..!")
		return render_template('home.html')
	
	return render_template('register.html', form = form)

@app.route('/dashboard')
def dashboard():
	return render_template('dashboard.html')

@app.route('/login', methods = ['POST', 'GET'])
def login():
	if request.method == 'POST':
		name = request.form['username']
		password = request.form['password']
		res = User.query.filter_by(fullname = name, password_hash = password).first()

		if res :
			app.logger.info('Password Match, Success !')
			## to make session add this action 
			session['logged_in'] = True
			session['username'] = name
			return redirect(url_for('dashboard'))
		else :
			error = 'No User Found'
			return render_template('home.html' , error = error)
	return render_template('login.html')

@app.route('/hello/<name>')
def hello_name(name= "ROWIDA"):
   return 'Hello %s!' % name

@app.route('/logout')
def logout():
	session.clear()
	flash("You are loged out")
	return redirect(url_for('login'))

if __name__ == '__main__':
	app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
	app.run(debug = True)