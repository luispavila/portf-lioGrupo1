from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import crud, models, schemas
from ..database import get_db

router = APIRouter(
    prefix="/games/{game_id}/comments",
    tags=["comments"],
)

# Rota que lista todos os comentários de um jogo específico
@router.get("/", response_model=list[schemas.Comment])
def read_comments_for_game(game_id: int,db: Session = Depends(get_db)):
    comments = crud.get_comments_by_game(db=db, game_id=game_id)
    return comments

# Rota para criar um novo comentário para um jogo específico
@router.post("/", response_model=schemas.Comment)
def create_comment_for_game(game_id: int, comment: schemas.CommentCreate, db:Session = Depends(get_db)):
    db_game = db.query(models.Game).filter(models.Game.id == game_id).first()
    if db_game is None:
        raise HTTPException(status_code=404, detail="Game not found")
    return crud.create_game_comment(db=db, comment=comment, game_id=game_id)