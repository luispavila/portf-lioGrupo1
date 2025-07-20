from sqlalchemy.orm import Session
from . import models, schemas

#Função para buscar comentários de um jogo específico
def get_comments_by_game(db: Session, game_id: int, skip: int = 0, limit: int = 100):
    return db.query(models.Comment).filter(models.Comment.game_id == game_id).offset(skip).limit(limit).all()

#Função para criar um novo comentário de um jogo específico
def create_comment(db: Session, comment: schemas.CommentCreate, game_id: int):

    #Criar um objeto do modelo do db com o esquema Pydantic
    db_comment = models.Comment(**comment.model_dumb(), game_id=game_id)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment