# Here is the file that defines our database connection using SQLAlchemy.

import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



SQLALCHEMY_DATABASE_URL = 'sqlite:///data.db'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

""" Sessions used to:
	- Handle threads errors
	- Initializing a new session object is also referred to as “checking out” a connection. 
	- SqlAlchemy has a pool option that remove the connections when they are no longer needed.
	> The FastAPI docs include a get_db() function that allows a route to use the same session 
	  through a request and then close it when the request is finishe
"""
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# define your database models once! Using SQLAlchemy’s declarative_base()
Base = declarative_base() 