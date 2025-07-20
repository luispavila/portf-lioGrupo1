# API do Portfólio de Jogos (Grupo 1)

Este repositório contém o backend para uma aplicação de portfólio de jogos. A API é construída com FastAPI e gerencia jogos e comentários, utilizando um banco de dados PostgreSQL orquestrado com Docker.

## 🚀 Funcionalidades

- **Gerenciamento de Jogos**: Endpoints para criar e listar jogos.
- **Sistema de Comentários**: Endpoints para criar e listar comentários associados a cada jogo.
- **Ambiente de Desenvolvimento Unificado**: Com um único script, todo o ambiente (banco de dados e API) é iniciado e configurado.
- **Banco de Dados Semeado**: O script de desenvolvimento popula o banco com dados iniciais (3 jogos e 12 comentários) para facilitar testes e demonstrações.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Python 3.11+
- **Framework**: FastAPI
- **Gerenciador de Dependências**: Poetry
- **Servidor ASGI**: Uvicorn
- **Banco de Dados**: PostgreSQL
- **ORM**: SQLAlchemy
- **Validação de Dados**: Pydantic
- **Containerização**: Docker e Docker Compose

## ⚙️ Rodando o Projeto Localmente

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento na sua máquina.

#### Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/products/docker-desktop/) e Docker Compose
* [Poetry](https://python-poetry.org/docs/#installation)

#### Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <url_do_seu_repositorio>
    cd portf-lioGrupo1
    ```

2.  **Instale as dependências Python com Poetry:**
    Este comando irá criar um ambiente virtual (`.venv`) e instalar todas as bibliotecas necessárias listadas no arquivo `poetry.lock`.
    ```bash
    poetry install
    ```

3.  **Torne o script de desenvolvimento executável:**
    Você só precisa fazer isso uma vez.
    ```bash
    chmod +x /dev.sh
    ```

4.  **Execute o script "mágico" de desenvolvimento:**
    Este é o único comando que você precisará usar para iniciar todo o ambiente.
    ```bash
    ./dev.sh
    ```

E pronto! O script fará o seguinte automaticamente:
* Iniciará o contêiner do PostgreSQL com Docker Compose.
* Aguardará 5 segundos para o banco de dados ficar pronto.
* Executará o script `seed.py` para popular o banco com jogos e comentários.
* Iniciará o servidor da API com auto-reload em `http://localhost:8000`.

Você pode acessar a documentação interativa da API em **[http://localhost:8000/docs](http://localhost:8000/docs)**.

## 📖 Endpoints da API

A API expõe os seguintes endpoints principais:

#### Games
* `GET /games/`: Lista todos os jogos no banco de dados.
* `POST /games/`: Cria um novo jogo.
    * **Corpo da requisição**: `{"title": "Nome do Jogo"}`

#### Comments
* `GET /games/{game_id}/comments/`: Lista todos os comentários para um jogo específico.
* `POST /games/{game_id}/comments/`: Adiciona um novo comentário a um jogo específico.
    * **Corpo da requisição**: `{"author_name": "Nome do Autor", "content": "Seu comentário aqui"}`

---