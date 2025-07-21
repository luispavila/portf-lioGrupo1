#!/bin/bash

# Script unificado para iniciar todo o ambiente de desenvolvimento.
# 1. Sobe o banco de dados com Docker Compose.
# 2. Semeia o banco com dados iniciais.
# 3. Inicia os servidores da API (backend) e da UI (frontend) em paralelo.

# Etapa 1: Iniciar o banco de dados
echo "🚀 Etapa 1: Iniciando o banco de dados com Docker Compose..."
docker compose up -d

# Etapa 2: Aguardar o banco de dados
echo "⏳ Aguardando 5 segundos para o banco de dados iniciar completamente..."
sleep 5

# Etapa 3: Semear o banco de dados
echo "🌱 Etapa 3: Semeando o banco de dados com dados iniciais..."
poetry run python scripts/seed.py

# Etapa 4: Iniciar os servidores de Backend e Frontend em paralelo
echo "🚀 Etapa 4: Iniciando servidores Backend e Frontend com concurrently..."

# O concurrently irá rodar os dois comandos ao mesmo tempo e mostrar a saída de ambos.
# Pressionar Ctrl+C irá encerrar os dois processos de forma limpa.
npx concurrently "poetry run uvicorn backend.app.main:app --host 0.0.0.0" "cd frontend && npm run dev"