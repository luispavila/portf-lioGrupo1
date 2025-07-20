#!/bin/bash

# Este script orquestra todo o ambiente de desenvolvimento.
# 1. Sobe o banco de dados com Docker Compose.
# 2. Semeia o banco com dados iniciais.
# 3. Inicia o servidor da API.
# Deve ser executado a partir da pasta raiz do projeto.

# Etapa 1: Iniciar o banco de dados com Docker Compose
echo "🚀 Etapa 1: Iniciando o banco de dados com Docker Compose..."
docker compose up -d

# Etapa 2: Aguardar o banco de dados
# Adicionamos uma pausa para garantir que o serviço do PostgreSQL esteja
# completamente pronto para aceitar conexões antes de tentar semear.
echo "⏳ Aguardando 5 segundos para o banco de dados iniciar completamente..."
sleep 5

# Etapa 3: Semear o banco de dados
echo "🌱 Etapa 3: Semeando o banco de dados com jogos e comentários..."
poetry run python scripts/seed.py

# Etapa 4: Iniciar o servidor FastAPI
# Esta será a última coisa a ser executada, pois o uvicorn prenderá o terminal.
echo "🐍 Etapa 4: Iniciando o servidor FastAPI em http://localhost:8000"
poetry run uvicorn backend.app.main:app --host 0.0.0.0 --reload --reload-exclude ./postgres_data/