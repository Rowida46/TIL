from flask import Flask, render_template, url_for, session, logging, request, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from data import Contacts
from datetime import datetime
from werkzeug.security import generate_password_hash  , check_password_hash
from wtforms import StringField, Form, validators, PasswordField
from hashlib import sha256
from wtforms import Form, BooleanField, StringField, PasswordField, validators, TextAreaField, IntegerField
from wtforms.validators import ValidationError, DataRequired, Length
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo, Length


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


app.route('/contact/<id:String>')
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
    

class Article(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	auther = db.Column(db.String(120))
	title = db.Column(db.String(120), nullable = False)
	body = db.Column(db.String(400), nullable = False)
	time_stamp = get_timestamp()


"""
	https://github.com/imdhruv99/Flask-LogIn-Register
	https://stackabuse.com/flask-form-validation-with-flask-wtf/
	https://github.com/yrachid/flask-hands-on
"""


class RegisterForm(Form):
	name = StringField("Name", [validators.Length(min = 2, max = 50)])
	username = StringField('Username', [validators.Length(min= 4 , max = 20)])
	email = StringField('email', [validators.Length(min= 6, max = 50)])
	password = PasswordField('password',
	 	validators = [DataRequired() , 
		EqualTo('password', message='Both password fields must be equal!')])
	confirm = PasswordField('Confirm password')

class ArticleForm(Form):
	title = StringField("Title", [validators.Length(min = 2, max = 50)])
	body = StringField('Content', [validators.Length(min= 4 , max = 200)])
	auther = StringField('Auther', [validators.Length(min= 6, max = 50)])



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

@app.route('/dashboard')
def dashboard():
	articles = Article.query.all()
	
	return render_template('dashboard.html')

@app.route('/add', methods= ['POST' , 'GET'])
def add_article():
	form = ArticleForm(request.form)
	if request.method == 'POST' and form.validate:
		title = form.title.data
		content = form.body.data
		auther = form.auther.data
		article = Article(title = title, auther = auther, body = content)
		db.session.add(article)
		db.session.commit()
		flash("YOU Are Adding a New Article , Success..!")
		return redirect(url_for('dashboard'))
	return render_template('add_article.html', form = form)


Contacts_data = Contacts()

@app.route('/view_articles')
def Contact():
	articles = Article.query.all()
	if articles:
		return render_template('view_articles.html', articles = articles)
	else :
		msg = "No Articles added yet"
		return render_template('view_articles.html', msg = msg)

@app.route('/view_article/<id>')
def view_article_here(id):
	##return render_template('view_article.html', id = id)
	article = Article.query.filter_by(id = id).first()
	print(article.body, article.title)
	if article:
		return render_template('view_article.html', article = article)
	else :
		return render_template('dashboard.html')

@app.route('/edit_article/<id>', methods =['POST', 'GET'])
def edit_article(id):
	fetch = Article.query.get(id)
	form = ArticleForm(request.form)
	# Poulate article from field
	form.title.data, form.body.data = fetch.title, fetch.body
	if request.method == 'POST' and form.validate:
		if form.body.data:
			fetch.body = request.form['body']
		if form.auther.data:
			print("validators")
			fetch.auther = request.form['auther']
		if form.title.data:
			print("HOLA")
			fetch.title = request.form['title']

		db.session.commit()
		flash("YOU Are Editin an exiting Article , Success..!")
		return redirect(url_for('dashboard'))
	return render_template('edit_article.html', form = form)


@app.route('/delet_article/<id>', methods =['POST', 'GET'])
def delet_article(id):
	my_row = Article.query.filter_by(id = id).first()

	# delete the row from db session if it exists
	if my_row :
	    db.session.delete(my_row)
	    db.session.commit()
	    flash("YOU Are Deleting an exiting Article , Success..!")

	return render_template('dashboard.html')
@app.route('/logout')
def logout():
	session.clear()
	flash("You are loged out")
	return redirect(url_for('login'))

if __name__ == '__main__':
	app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
	db.create_all()
	app.run(debug = True)