from pydantic import BaseSettings


class Settings(BaseSettings):
    verbose: bool = True
    database_url: str = "tinydb://~/.local/share/pyscrobbler/database.tinydb"