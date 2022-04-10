# Objective 

__Create a First FstAPI__ 

We will create a hands-on FastAPI Simple App and runit with & using  _uvicorn_ server




## To run 
clone the repository, install the pip requirements.txt



_excute_

```
uvicorn main:app --reload
```




### Folder structure & objective

- _With a separate database.py and models.py file_ : To establish db classes and tables.


- _models.py vs schemas.py_ : To avoid confusion between the SQLAlchemy models and the Pydantic models.
 	- AS`models.py` with the SQLAlchemy models.
 	- And the file `schemas.py` with the Pydantic models.
 	> Notice that we use schemas.py for the frontend and models.py to query our backend in this route.


- _load.py_
	Instead of using the app to load data, we load the database with a separate Python file



## referance 
- [FastAPI + SQLALCH Tutorial](https://us.hidester.com/proxy.php?u=eJwBagCV%2F3M6OTg6IgtRrzIcdZPAbacuy6NOTt04UUMGA5Q1D2kICVhDjTlo3sybQDqBy4uMfS9jfQzhD0nNiP1kNplgyEwk6Mta454Jm0o4RGz53iIEWiPczJlguZQCKRGQh5OzMxphKU3vG%2FVMIjvVYCv2&b=7)