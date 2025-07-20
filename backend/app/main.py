from fastapi import FastAPI
from .database import engine
from . import models
from .routers import comments

# Criação das tabelas no banco de dados
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title= "API do Portifólio Grupo 1",)

# Inclui as rotas de comentários
app.include_router(comments.router)

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à API do Portfólio de Jogos!"}