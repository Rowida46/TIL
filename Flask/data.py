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
"""msg = Message('test subject', sender='rowidanagah462000@gmail.com',recipients=['you@example.com'])

msg.body = 'text body'
msg.html = '<b>HTML</b> body'
with app.app_context():
	mail.send(msg)"""

app.config['FLASKY_MAIL_SUBJECT_PREFIX'] = '[Flasky]'
app.config['FLASKY_MAIL_SENDER'] = 'Flasky Admin <flasky@example.com>'
def send_email(to, subject, template, **kwargs):
 msg = Message(app.config['FLASKY_MAIL_SUBJECT_PREFIX'] + subject,
 sender=app.config['FLASKY_MAIL_SENDER'], recipients=[to])
 msg.body = render_template(template + '.txt', **kwargs)
 msg.html = render_template(template + '.html', **kwargs)
 mail.send(msg)
