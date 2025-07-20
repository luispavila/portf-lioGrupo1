# Portfólio de Jogos - API & Interface

Este é um projeto full-stack que apresenta um portfólio de mini-jogos interativos. O backend é construído com FastAPI e o frontend com React, com um sistema de comentários para cada jogo.

## ✨ Funcionalidades

- **Backend Robusto**: API RESTful para gerenciar jogos e comentários.
- **Frontend Interativo**: Interface reativa construída com React e Vite, estilizada com Tailwind CSS.
- **Jogos Clássicos**: Inclui implementações de Jogo da Cobrinha, Jogo da Velha e Ping Pong.
- **Banco de Dados Persistente**: Utiliza PostgreSQL orquestrado com Docker para armazenamento de dados.
- **Setup Simplificado**: Ambiente de desenvolvimento completo iniciado com um único script.

## 🛠️ Tecnologias Utilizadas

#### Backend
- **Framework**: FastAPI
- **Linguagem**: Python 3.11+
- **Gerenciador de Dependências**: Poetry
- **Banco de Dados**: PostgreSQL
- **ORM**: SQLAlchemy
- **Containerização**: Docker e Docker Compose

#### Frontend
- **Framework**: React (com TypeScript e Vite)
- **Estilização**: Tailwind CSS
- **Gerenciador de Pacotes**: npm

## 📂 Estrutura do Projeto

O projeto segue uma estrutura de monorepo, com o frontend e o backend separados em diretórios distintos na raiz.

/
├── backend/            # Todo o código da API FastAPI
├── src/                # Todo o código do frontend React
├── scripts/            # Scripts auxiliares (ex: seed.py)
├── postgres_data/      # (Ignorado) Dados do banco de dados Docker
├── .venv/              # (Ignorado) Ambiente virtual do Python (Poetry)
├── node_modules/       # (Ignorado) Dependências do Node.js
├── dev.sh              # Script principal para iniciar o ambiente de dev
├── docker-compose.yml  # Configuração do serviço PostgreSQL
├── package.json        # Dependências e scripts do frontend
├── pyproject.toml      # Dependências e configuração do backend (Poetry)
└── README.md           # Este arquivo


## ⚙️ Rodando o Projeto Localmente

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento completo na sua máquina.

#### Pré-requisitos
Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/products/docker-desktop/) e Docker Compose
* [Poetry](https://python-poetry.org/docs/#installation)
* [Node.js (LTS)](https://nodejs.org/en) (que inclui o `npm`)

#### Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <url_do_seu_repositorio>
    cd portf-lioGrupo1
    ```

2.  **Instale as dependências do Backend (Python):**
    O Poetry criará um ambiente virtual e instalará tudo o que a API precisa.
    ```bash
    poetry install
    ```

3.  **Instale as dependências do Frontend (JavaScript):**
    O npm irá baixar todas as bibliotecas do React e outras ferramentas.
    ```bash
    npm install
    ```

4.  **Torne o script de desenvolvimento executável (só precisa fazer isso uma vez):**
    ```bash
    chmod +x dev.sh
    ```

5.  **Execute o script de desenvolvimento unificado:**
    Este é o único comando que você precisará para rodar tudo.
    ```bash
    ./dev.sh
    ```

E pronto! O script iniciará o banco de dados, o populará com dados e subirá os servidores de backend e frontend simultaneamente.

-   🔗 A API estará acessível em **[http://localhost:8000](http://localhost:8000)**
-   📖 A documentação da API estará em **[http://localhost:8000/docs](http://localhost:8000/docs)**
-   🖥️ O site do portfólio estará acessível em **[http://localhost:5173](http://localhost:5173)** (ou a porta indicada no seu terminal)