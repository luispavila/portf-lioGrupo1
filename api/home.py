from fastapi import FastAPI, APIRouter

router = APIRouter(
    prefix="/home",
    tags=["home"],
)

@router.get("/")
async def home():
    return {"Status": "OK"}