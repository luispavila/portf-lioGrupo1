#!/bin/bash

echo "🚀 Iniciando o servidor FastAPI em modo de desenvolvimento..."

poetry run uvicorn backend.app.main:app --reload --reload-exclude postgres_data