import sys
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# --- Configuração para importar módulos do seu projeto ---
# Adiciona o diretório raiz do projeto ao path do Python
# para que possamos importar os módulos do backend
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.insert(0, project_root)

from backend.app.database import Base
from backend.app.models import Game, Comment

# --- Configuração do Banco de Dados ---
# Use a mesma URL de conexão do seu arquivo database.py
SQLALCHEMY_DATABASE_URL = "postgresql://portfolio_user:supersecretpassword@localhost:5433/portfolio_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def seed_database():
    print("Iniciando o processo de seeding...")
    
    # Cria as tabelas se elas não existirem
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    try:
        # --- Limpa dados existentes para evitar duplicatas ---
        print("Limpando tabelas existentes...")
        db.query(Comment).delete()
        db.query(Game).delete()
        db.commit()

        # --- Criação dos Jogos ---
        print("Criando os jogos...")
        
        jogo_cobrinha = Game(id=1, title="Jogo da Cobrinha")
        jogo_da_velha = Game(id=2, title="Jogo da Velha")
        ping_pong = Game(id=3, title="Ping Pong")
        
        db.add_all([jogo_cobrinha, jogo_da_velha, ping_pong])
        db.commit()
        
        # --- Criação dos Comentários ---
        print("Criando os comentários...")

        # Comentários para o Jogo da Cobrinha
        comentarios_cobrinha = [
            Comment(content="Nostalgia pura! Adorei a jogabilidade.", game_id=jogo_cobrinha.id),
            Comment(content="Muito desafiador, não consigo parar de jogar!", game_id=jogo_cobrinha.id),
            Comment(content="Um clássico que nunca envelhece. Ótima implementação.", game_id=jogo_cobrinha.id),
            Comment(content="Poderia ter um ranking de pontuação, mas é muito bom!", game_id=jogo_cobrinha.id),
        ]

        # Comentários para o Jogo da Velha
        comentarios_velha = [
            Comment(content="Simples e divertido, perfeito para passar o tempo.", game_id=jogo_da_velha.id),
            Comment(content="Joguei contra um amigo e foi bem disputado. Funciona perfeitamente.", game_id=jogo_da_velha.id),
            Comment(content="A interface é limpa e fácil de usar. Bom trabalho!", game_id=jogo_da_velha.id),
            Comment(content="Um ótimo exercício de lógica. Gostei muito.", game_id=jogo_da_velha.id),
        ]

        # Comentários para o Ping Pong
        comentarios_ping_pong = [
            Comment(content="Os controles são bem responsivos, parabéns!", game_id=ping_pong.id),
            Comment(content="Me lembrou os tempos de Atari. Muito legal!", game_id=ping_pong.id),
            Comment(content="A física da bolinha está bem realista. Viciante!", game_id=ping_pong.id),
            Comment(content="Seria legal um modo de dois jogadores, mas o modo contra a IA já é ótimo.", game_id=ping_pong.id),
        ]
        
        db.add_all(comentarios_cobrinha)
        db.add_all(comentarios_velha)
        db.add_all(comentarios_ping_pong)
        
        db.commit()
        
        print("✅ Seeding concluído com sucesso!")
        
    except Exception as e:
        print(f"❌ Ocorreu um erro durante o seeding: {e}")
        db.rollback()
    finally:
        db.close()

# Executa a função se o script for chamado diretamente
if __name__ == "__main__":
    seed_database()