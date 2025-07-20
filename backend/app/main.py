from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from . import models
from .routers import comments, games

# Criação das tabelas no banco de dados
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title= "API do Portifólio Grupo 1",)

# Conexões aceitaveis com o frontend
origins = [
    "http://localhost:5173", # Endereço padrão do Vite/React
    "http://localhost:3000", # Endereço padrão do Create React App
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Permite todos os métodos (GET, POST, etc)
    allow_headers=["*"], # Permite todos os cabeçalhos
)

# Inclui as rotas de comentários
app.include_router(comments.router)
app.include_router(games.router)

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à API do Portfólio de Jogos!"}