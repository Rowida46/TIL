from datetime import date
from pydantic import BaseModel

"""The lineorm_mode = True allows the app to take ORM objects and translate them into responses 
    automatically. This automation saves us frommanually taking data out of ORM, 
    making it into a dictionary, then loading it in with Pydantic
"""

class Record(BaseModel):
    id: int
    date: date
    country: str
    cases: int
    deaths: int
    recoveries: int

    class Config:
        orm_mode = True