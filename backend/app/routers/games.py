from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import typing as t

from .. import crud, schemas
from ..database import get_db

router = APIRouter(
    prefix="/games",
    tags=["Games"],
)

# Rota para CRIAR um novo jogo
@router.post("/", response_model=schemas.Game)
def create_new_game(game: schemas.GameCreate, db: Session = Depends(get_db)):
    # Aqui você poderia adicionar uma lógica para não criar jogos com títulos duplicados
    return crud.create_game(db=db, game=game)

# Rota para LISTAR todos os jogos
@router.get("/", response_model=list[schemas.Game])
def read_games(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    games = crud.get_games(db, skip=skip, limit=limit)
    return games