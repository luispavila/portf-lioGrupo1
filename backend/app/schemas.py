from pydantic import BaseModel
from datetime import datetime

# Esquemas para Comentários

#Esquema base
class CommentBase(BaseModel):
    author_name: str | None = "Anônimo"
    content: str

# Esquema de criação de comentário
class CommentCreate(CommentBase):
    pass

# Esquema para leitura de comentário no bd
class Comment(CommentBase):
    id: int
    game_id: int
    time_created: datetime

    class Config:
        from_attributes = True # Antigamente orm_mode = True

# Esquema para Jogos

# Esquema para a criação de jogos
class GameBase(BaseModel):
    title: str

class GameCreate(GameBase):
    pass

class Game(GameBase):
    id: int

    class Config:
        from_attributes = True

class GameWithComments(Game):
    comments: list[Comment] = []