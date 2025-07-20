from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

#configurações iniciais
from .database import Base

class Game(Base):
    __tablename__ = 'games'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    
    # Relacionamento com a tabela de reviews
    comments = relationship("Comment", back_populates="game")

class Comment(Base):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True, index=True)
    author_name = Column(String, default='Anônimo')
    content = Column(Text, nullable=False)
    time_created = Column(DateTime(timezone=True), server_default=func.now())

    # Ligando comentário ao jogo
    game_id = Column(Integer, ForeignKey('games.id'))

    # Relacionamento com a tabela de jogos
    game = relationship("Game", back_populates="comments")