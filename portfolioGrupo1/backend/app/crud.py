from sqlalchemy.orm import Session
from . import models, schemas

#Função para buscar comentários de um jogo específico
def get_comments_by_game(db: Session, game_id: int, skip: int = 0, limit: int = 100):
    return db.query(models.Comment).filter(models.Comment.game_id == game_id).offset(skip).limit(limit).all()

#Função para criar um novo comentário de um jogo específico
def create_game_comment(db: Session, comment: schemas.CommentCreate, game_id: int):

    #Criar um objeto do modelo do db com o esquema Pydantic
    db_comment = models.Comment(**comment.model_dump(), game_id=game_id)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment
# Funções CRUD para Jogos

def get_game(db: Session, game_id: int):
    # Retorna um único jogo pelo seu ID, carregando junto os comentários
    return db.query(models.Game).filter(models.Game.id == game_id).first()

def get_games(db: Session, skip: int = 0, limit: int = 100):
    # Retorna uma lista de jogos
    return db.query(models.Game).offset(skip).limit(limit).all()

def create_game(db: Session, game: schemas.GameCreate):
    # Cria um novo jogo no banco de dados
    db_game = models.Game(title=game.title)
    db.add(db_game)
    db.commit()
    db.refresh(db_game)
    return db_game