from typing import Optional
from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI, Response


app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
def set_item(item :Item):
	return item


@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: str):
    return items[item_id]

from fastapi.encoders import jsonable_encoder

@app.put("/items/{item_id}", response_model=Item)
async def update_item(item_id: str, item: Item):
    update_item_encoded = jsonable_encoder(item)
    items[item_id] = update_item_encoded
    return update_item_encoded

@app.get("/")
def read_root():
	return {"hela" : "dana"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

skip, limit =0,10
print(fake_items_db[skip : skip + limit])
@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]