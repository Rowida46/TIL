import requests
import json

url = 'http://api.never-lost.tech/user'
data = {
  "username" : "thisisusername",
  "first_name": "testfirstname",
  "last_name": "lastname",
  "national_id": "12345888809876",
  "user_type": "normal",
  "gender": "female",
  "phone": "+201006001947",
  "email": "testefing@gmail.com",
  "address": "fsdfad",
  "password": "helloworld",
}
print(data)
res = requests.post(url= url, json=data)
print(res.text)


"""
[POST] /user (request body[{username:string, first_name:string, 
last_name: string, national_id: string{14}(only numbers), user_type: string, gender: string, phone: string{13}(only numbers, start with +20), 
email: string, address: string, password: string}])"""

first_name = request.form['fn']
        last_name = request.form['ln']
        email = request.form['email_']
        national_id = request.form['national_id']
        gender = request.form['gender_']
        phone = request.form['number']
        if session['id'] == '2' or session['id'] == '3':
            payment_method = request.form['payment_mth']
        password = request.form['password']
        birthdate = request.form['birthdate']

data = {
  "username" : first_name + last_name  ,
  "first_name": first_name,
  "last_name": last_name,
  "national_id": national_id,
  "user_type": user_type,
  "gender": "female" if gender == 2 else "male",
  "phone": "2" + phone,
  "email": email,
  "address": "fsdfad",
  "password":password,
}

get_access_token(first_name, last_name, national_id, 
    user_type= "normal" if session['id'] == '1' else "family_admin", gender, phone,password )


status_code, token = get_access_token(first_name, last_name, national_id, 
              user_type= "normal" if session['id'] == '1' else "family_admin",
               gender, phone,password )