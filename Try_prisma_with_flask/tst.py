import requests
import json


data = {
    "username": "nadarowida",
    "first_name": "nadarowida",
    "last_name": "nmohamd",
    "national_id": "41047677610234",
    "gender": "female",
    "user_type": "family_admin",
    "phone": "+201403549605",
    "email": "ndohamed@gmail.com",
    "address": "13st",
    "password":"nada"
}

auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksIm5hdGlvbmFsX2lkIjoiNDEwNDU2Nzg5MTAyMzQiLCJ1c2VyX3R5cGUiOiJmYW1pbHlfYWRtaW4iLCJpYXQiOjE2NTY0MzIyNTB9.WmBi8mgJ4WH3BO3Pk7m3axsCyg5O5-NmSzUtbbJORWA"

url = 'http://api.never-lost.tech/user/'

headers = {'Authorization': 'Bearer '+ auth_token}
headers["Authorization"] = "Bearer {auth_token}"

response = requests.get(url, headers=headers)
print(response.status_code)
print(json.loads(response.text))


headers = {
        'Content-Type' : 'application/json',
        'User-Agent': 'PostmanRuntime/7.29.2', 
        'Accept' : '*/*',
        'Accept-Encoding' : 'gzip, deflate, br',
        'Connection' : 'keep-alive'
       
    }

"""
 'User-Agent': 'PostmanRuntime/7.29.2', 
        'Accept' : '*/*',
        'Accept-Encoding' : 'gzip, deflate, br',
        'Connection' : 'keep-alive'
"""
"""{'Content-Type': 'text/html', 'Content-Encoding': 'gzip', 
'Last-Modified': 'Tue, 03 Dec 2019 20:09:44 GMT', 
'Accept-Ranges': 'bytes', 
'ETag': '"0b4799a15aad51:0"', 'Vary': 'Accept-Encoding', 'Server': 'Microsoft-IIS/8.5',
 'Content-Length': '3386'}
"""
data = {
            "username": "nadarowida",
            "first_name": "nadarowida",
            "last_name": "nmohamd",
            "national_id": "41047677610234",
            "gender": "female",
            "user_type": "mormal",
            "phone": "+201403549605",
            "email": "ndohamed@gmail.com",
            "address": "13st",
            "password":"nada"
        }

#print(response.headers)

url = 'http://api.never-lost.tech/user'

data = {
    "username": "grg",
    "first_name": "grg",
    "last_name": "nmohamd",
    "national_id": "41917677610234",
    "gender": "female",
    "user_type": "normal",
    "phone": "+201403549605",
    "email": "ndohamed@gmail.com",
    "address": "13st",
    "password":"nada"
}


headers = {
            'Content-Type' : 'application/json',
            'accept' : '*/*'
        }

url = 'http://api.never-lost.tech/user'

import json
res = requests.post(url, headers = headers, data= json.dumps(data))
print(res.status_code)


