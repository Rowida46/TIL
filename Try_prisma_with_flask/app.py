from typing import Optional
#from prisma.models import Url
from hashids import Hashids
from flask import request,Flask, render_template, request, flash, redirect, url_for, g
import jwt

secret_key = b'_5#y2L"F4Q8z\n\xec]/'

"""
auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmF0aW9uYWxfaWQiOiIxMjM0NTY3ODkxMDIzNCIsInVzZXJfdHlwZSI6ImZhbWlseV9hZG1pbiIsImlhdCI6MTY1NjM3NTkyNH0.Zao3CwT6WLFyV0C_8tIdyZ6UfIMdM5NDPp_QGNiRxU4"

auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hdGlvbmFsX2lkIjoiMzAwNDU2Nzg5MTAyMzQiLCJ1c2VyX3R5cGUiOiJmYW1pbHlfYWRtaW4iLCJpYXQiOjE2NTYzODI5MjF9.fObomJ8vX9gnTTbTQ86CecliQvZGPQvbofImdS871g4"

payload = jwt.decode(auth_token, secret_key)

print(payload)"""

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hdGlvbmFsX2lkIjoiMzAwNDU2Nzg5MTAyMzQiLCJ1c2VyX3R5cGUiOiJmYW1pbHlfYWRtaW4iLCJpYXQiOjE2NTYzODI5MjF9.fObomJ8vX9gnTTbTQ86CecliQvZGPQvbofImdS871g4"

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hdGlvbmFsX2lkIjoiMzAwNDU2Nzg5MTAyMzQiLCJ1c2VyX3R5cGUiOiJmYW1pbHlfYWRtaW4iLCJpYXQiOjE2NTYzODI5MjF9.fObomJ8vX9gnTTbTQ86CecliQvZGPQvbofImdS871g4"

import requests
app = Flask(__name__)


app.config['SERVER_NAME'] = 'rowida:5000'

@app.route('/')
def tst():
	#token = requests.get('http://api.never-lost.tech/user')
	#print("token", token)
	data = jwt.decode(token, secret_key)#, algorithms=["HS256"])


	return render_template('index.html')

#data = jwt.decode(token, secret_key)#, algorithms=["HS256"])

data = {
    "username": "shahy",
    "first_name": "shahy",
    "last_name": "nagah",
    "national_id": "41545678910234",
    "gender": "female",
    "user_type": "family_admin",
    "phone": "+201403549605",
    "email": "shahy@gmail.com",
    "address": "13st",
    "password":"shahy15"
}

import time

def get_access_token(endpoint,data):
    url = 'http://api.never-lost.tech'+endpoint
    print(url)
    headers = {
    'Content-Type' : 'application/json',
    'Host' : '<calculated when request is sent>',
    'Accept':  '*/*' ,
    'User-Agent' : 'PostmanRuntime/7.29.2',
    'Accept-Encoding' : 'gzip, deflate, br',
    "Connection" : 'keep-alive'
    }
    headers = { 
            "Content-Type": "application/json",
            "Accept": "*/*",
        }
    #response = requests.get(url = url, headers = headers)
    response = requests.post(url,json = data, headers = headers)
    print(response)

    
    return response.status_code

#print(get_access_token('/user' , data))


url = 'http://api.never-lost.tech/user'
response = requests.get(url = url)#, headers={'Authorization': 'access_token myToken'})
print(response.status_code)

#extensions


#response = requests.post(url, headers=headers, params=params)


="""
response = requests.post('https://httpbin.org/post', json={'id': 1, 'name': 'Jessa'})
print("Status code: ", response.status_code)
print("Printing Entire Post Request")
print(response.json())"""