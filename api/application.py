from fastapi import FastAPI, APIRouter
from home import home
app = FastAPI()

app.include_router(home.router)
