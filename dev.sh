#!/bin/bash

# Este script orquestra todo o ambiente de desenvolvimento.
# 1. Sobe o banco de dados com Docker Compose.
# 2. Semeia o banco com dados iniciais.
# 3. Inicia o servidor da API em segundo plano.
# 4. Inicia o servidor do Frontend em primeiro plano.
# Deve ser executado a partir da pasta raiz do projeto.

# Etapa 1: Iniciar o banco de dados com Docker Compose
echo "🚀 Etapa 1: Iniciando o banco de dados com Docker Compose..."
docker compose up -d

# Etapa 2: Aguardar o banco de dados
echo "⏳ Aguardando 5 segundos para o banco de dados iniciar completamente..."
sleep 5

# Etapa 3: Semear o banco de dados
echo "🌱 Etapa 3: Semeando o banco de dados com jogos e comentários..."
poetry run python scripts/seed.py

# Etapa 4: Iniciar o servidor FastAPI em SEGUNDO PLANO
echo "🐍 Etapa 4: Iniciando o servidor FastAPI em background em http://localhost:8000"
poetry run uvicorn backend.app.main:app --host 0.0.0.0 --reload --reload-exclude ./postgres_data/ &

# Etapa 5: Iniciar o servidor do Frontend em PRIMEIRO PLANO
echo "🎨 Etapa 5: Iniciando o servidor do Frontend (React)..."
# Entra na pasta do frontend e inicia o servidor de desenvolvimento
cd frontend && npm run dev