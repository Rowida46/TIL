import re 

# Question 1: -----------------------------------
regex = r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w+$' 
      
def check_email(email):  
    if(re.search(regex,email)):  
        return True          
    else:  
        return False 
      
def check_psw_upper(psw):
  result = any(char.isupper() for char in psw)
  return result

def check_psw_digit(psw):
  result = any(char.isdigit() for char in psw)
  return result

def check_psw_lower(psw):
  result = any(char.isupper() for char in psw)
  return result

def check_psw(psw):
  if(check_psw_digit(psw)
            and check_psw_upper(psw)
            and check_psw_lower(psw)
            and check_psw_digit(psw)
            and len(psw) >= 7):
    print("Valid password")
    return True
  else:
    print("Invalid password")    
    return False    

# New functions: ------------------------------------
def check_psw_equal(psw1, psw2):
  return psw1 == psw2

def check_credentials(email, psw1, psw2):
  return check_email(email) and check_psw(psw1) and check_psw_equal(psw1, psw2)


import pytest
"""


"""

#Tests to question 1: -------------------------------
def test_email1():
  email = "myname326@gmail.com"
  assert check_email(email) is True

def test_email2():
  email = "my.ownsite@acn.org"
  assert check_email(email) is True

def test_email3():
  email = "myname326.com"
  assert check_email(email) is False

def test_check_psw1():
  psw = "Qwert1234"
  assert check_psw(psw) is True

def test_check_psw2():
  psw = "qwert"
  assert check_psw(psw) is False

def test_check_psw3():
  psw = "QWERT55"
  assert check_psw(psw) is True


def test_check_psw4():
  psw = "Qwerty"
  assert check_psw(psw) is False
  
def test_check_psw5():
  psw = "551234"
  assert check_psw(psw) is False

def test_check_psw6():
  psw = "Qwerty$£@55"
  assert check_psw(psw) is True

def test_check_psw7():
  psw = "Qwerty$£@"
  assert check_psw(psw) is False

def test_check_psw8():
  psw = "Qwert5@"
  assert check_psw(psw) is True   

   

# TODO write the unit tests for the new functions, remove the comment notation and replace assert False with your code: ---------------------------- 
# 1. Test that two equal passwords return true

# New functions: ------------------------------------
def check_psw_equal(psw1, psw2):
  return psw1 == psw2

def test_psw_equal1():
  psw1 = "Qwert5@"
  psw2 = "Qwerty$£@"
  assert check_psw_equal(psw1, psw2) is False  


psw1 = "Qwert5@"
psw2 = "Qwerty$£@"


# 2. Test that the function is case sensitive
def test_psw_equal2():
  psw1 = "qwert"
  psw2 = "Qwert1234"
  assert check_psw_equal(psw1, psw2) is False

# 3. Test that two inequal passwords return false
def test_psw_equal3():
  psw1 = "Qwert5@"
  psw2 = "Qwerty$£@"
  assert check_psw_equal(psw1, psw2) is False  

# 4. Test that two equal passwords in the correct format and a correct email return true
def test_check_credentials1():
  email = "my.ownsite@acn.org"
  psw1 = "Qwerty$£@55"
  psw2 = "Qwerty$£@55"
  assert check_credentials(email, psw1, psw2) is True


# 5. Test that two inequal passwords in the correct format and a correct email return false
def test_check_credentials2():
  email = "my.ownsite@acn.org"
  psw1 = "Qwerty$£@55"
  psw2 = "Qwert5@"
  assert check_credentials(email, psw1, psw2) is False


# 6. Test that two equal passwords in the correct format and an incorrect email return false
def test_check_credentials3():
  email = "myname326.com"
  psw1 = "Qwerty$£@55"
  psw2 = "Qwerty$£@55"
  assert check_credentials(email, psw1, psw2) is False
print(test_check_credentials3())


