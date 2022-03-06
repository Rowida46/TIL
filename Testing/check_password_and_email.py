from re import search

# to check email format
regex = r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w+$' 

def check_email(email):
	if (search(regex, email)):
		return True
	else :
		return False

def check_password_upper(password):
	return any(ch.isupper() for ch in password)

def check_password_lower(password):
	return any(ch.islower() for ch in password)


def check_password_isdigit(password):
	return any(ch.isdigit() for ch in password)


# To sum up ...
def check_password(password):
	if (len(password) >= 7 
		and check_password_upper(password)
		and check_password_lower(password)
		and check_password_isdigit(password)):
		print("Valid Number")
		return True
	
	else :	
		print("Invalid password")

# To check equality
def check_password_matching(password1,password2):
	return password2 == password1

""" To check credentials we need to 
1- check whether it's a valid eemail
2- check if we are givven a valid password
3- with a matching password with the prev pass
"""
def check_credentials(email, password1, password2):
	return check_email(email) and check_password(password) and check_password_matching(password1, password2)





#Tests to question 1: -------------------------------
def test_email1():
  email = "myname326@gmail.com"
  assert check_email(email) is True

def test_email2():
  email = "my.ownsiet@acn.org"
  print(check_email(email))
  assert check_email(email), "Only Valid email are allowedd"

print(test_email2())

def test_email3():
  email = "myname326.com"
  assert check_email(email) is False

def test_check_psw1():
  psw = "Qwert1234"
  assert check_psw(psw) is True

def test_check_psw2():
  psw = "qwert"
  assert check_psw(psw) is False

# Test that two equal passwords in the correct format and a correct email return true
def test_check_credentials1():
  email = "my.ownsite@acn.org"
  psw1 = "Qwerty$£@55"
  psw2 = "Qwerty$£@55"
  assert check_credentials(email, psw1, psw2) is True


# Test that two inequal passwords in the correct format and a correct email return false
def test_check_credentials2():
  email = "my.ownsite@acn.org"
  psw1 = "Qwerty$£@55"
  psw2 = "Qwert5@"
  assert check_credentials(email, psw1, psw2) is False


# Test that two equal passwords in the correct format and an incorrect email return false
def test_check_credentials3():
  email = "myname326.com"
  psw1 = "Qwerty$£@55"
  psw2 = "Qwerty$£@55"
  assert check_credentials(email, psw1, psw2) is False
print(test_check_credentials3())


