def Contacts():
	Contact = [
		{'id' : 1,
			'name': "Rowida", 
			'phone' : '01141018480',
			},
		{'id' : 2,
			'name': "Dana", 
			'phone' : '01141018480',
			}, 

	]

	return Contact


"""cont = Contacts()
for con in cont:
	print(con['name'])"""

import os
# ...

from flask import Flask
app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
from flask_mail import Mail, Message
mail = Mail(app)
msg = Message('test subject', sender='rowidanagah462000@gmail.com',recipients=['you@example.com'])

msg.body = 'text body'
msg.html = '<b>HTML</b> body'
with app.app_context():
	mail.send(msg)