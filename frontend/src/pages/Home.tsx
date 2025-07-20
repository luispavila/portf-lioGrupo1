import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import Habilidade from "@/components/Habilidade";
import { Comments } from "@/components/Comments"; // <-- Importa o novo componente
import "@/components/habilidade.css";

// Logos...
import reactLogo from "@/assets/react.svg";
import fastapiLogo from "@/assets/fastapi.svg";
import figmaLogo from "@/assets/figma.svg";
import pythonLogo from "@/assets/python.svg";
import postgresLogo from "@/assets/postgresql.svg";
import unityLogo from "@/assets/unity.svg";
import javascriptLogo from "@/assets/javascript.svg";
import openglLogo from "@/assets/opengl.svg";
import cLogo from "@/assets/c.svg";
import c__Logo from "@/assets/c--.svg";
import githubLogo from "@/assets/github.svg";
import unrealLogo from "@/assets/unreal.svg";

// Componentes de Jogo
import SnakeGame from "@/pages/SnakeGame";
import TicTacToe from "@/pages/TicTacToe";
import PingPong from "@/pages/PingPong";

// Mapeamento para renderizar os componentes de jogo e ícones dinamicamente
const GameComponents = {
  "Jogo da Cobrinha": SnakeGame,
  "Jogo da Velha": TicTacToe,
  "Ping Pong": PingPong,
};

const GameIcons = {
  "Jogo da Cobrinha": { icon: "🐍", gradient: "from-blue-400 to-purple-500" },
  "Jogo da Velha": { icon: "❌⭕", gradient: "from-green-400 to-blue-500" },
  "Ping Pong": { icon: "🏓", gradient: "from-yellow-400 to-pink-500" },
};

const Home = () => {
  // --- MUDANÇAS AQUI ---
  const [games, setGames] = useState<any[]>([]); // Armazena a lista de jogos vinda da API
  const [activeGameId, setActiveGameId] = useState<number | null>(null); // Controla qual jogo está ativo

  // Efeito para buscar os jogos da API quando o componente é montado
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:8000/games/");
        const data = await response.json();
        setGames(data); // Armazena os jogos no estado
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };
    fetchGames();
  }, []); // O array vazio [] garante que isso rode apenas uma vez
  // --- FIM DAS MUDANÇAS ---

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <ThemeToggle />
      <HeroSection />

      {/* Seção Sobre Mim (sem alterações) */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Olá! Meu nome é Toninho DevPlay e sou apaixonado por mundos que não existem... ainda!
              Desde pequeno, transformo papel e lápis em labintos, monstros e aventuras. Hoje, como desenvolvedor de jogos,
              uso linhas de código para dar vida a essas ideias — criando experiências imersivas que misturam diversão, desafio e um toque
              de loucura criativa.
              Adoro pixel art, narrativas envolventes e mecânicas que surpreendem. Se o jogo for estranho, engraçado
              ou cheio de segredos, provavelmente fui eu que fiz. 😄
            </p>
          </div>
        </div>
      </section>

      {/* Seção Habilidades (sem alterações) */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Minhas Habilidades
            </h2>
          </div>
          <div className="container">
            <Habilidade nome="React" logo={reactLogo} link="https://react.dev" />
            <Habilidade nome="FastAPI" logo={fastapiLogo} link="https://fastapi.tiangolo.com/" />
            <Habilidade nome="Figma" logo={figmaLogo} link="https://www.figma.com/pt-br/" />
            <Habilidade nome="Python" logo={pythonLogo} link="https://www.python.org/" />
            <Habilidade nome='PostgreSQL' logo={postgresLogo} link="https://www.postgresql.org/" />
            <Habilidade nome='Unity' logo={unityLogo} link="https://unity.com/pt" />
          </div>
          <div className="container">
            <Habilidade nome="JavaScript" logo={javascriptLogo} link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" />
            <Habilidade nome="OpenGL" logo={openglLogo}  link="https://www.opengl.org/" />
            <Habilidade nome="C++" logo={cLogo} link="https://learn.microsoft.com/pt-br/cpp/cpp/?view=msvc-170" />
            <Habilidade nome="C#" logo={c__Logo} link="https://learn.microsoft.com/pt-br/dotnet/csharp/" />
            <Habilidade nome="GitHub" logo={githubLogo} link="https://github.com/" />
            <Habilidade nome='Unreal Engine' logo={unrealLogo} link='https://www.unrealengine.com/pt-BR' />
          </div>
        </div>
      </section>

      {/* Seção de Projetos - AGORA DINÂMICA */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Meus Projetos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Alguns dos meus trabalhos mais recentes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* --- MUDANÇA PRINCIPAL AQUI --- */}
            {/* Loop dinâmico que cria um card para cada jogo vindo da API */}
            {games.map((game: any) => {
              const GameComponent = GameComponents[game.title as keyof typeof GameComponents];
              const gameDisplay = GameIcons[game.title as keyof typeof GameIcons] || { icon: "🕹️", gradient: "from-gray-400 to-gray-600" };
              const isGameActive = activeGameId === game.id;

              return (
                <div key={game.id} className="flex flex-col space-y-4">
                  {/* Card do Jogo */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <div className="w-full flex items-center justify-center" style={{ minHeight: '28rem', height: '28rem' }}>
                      {!isGameActive ? (
                        <div className={`w-full h-full bg-gradient-to-br ${gameDisplay.gradient} flex items-center justify-center text-5xl text-white`}>{gameDisplay.icon}</div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {GameComponent && <GameComponent />}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col items-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{game.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">Um jogo clássico feito em React.</p>
                      <button 
                        onClick={() => setActiveGameId(isGameActive ? null : game.id)} 
                        className={`${isGameActive ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg transition-colors block text-center`}
                      >
                        {isGameActive ? 'Fechar' : 'Jogar'}
                      </button>
                    </div>
                  </div>

                  {/* Card de Comentários */}
                  <div className="w-full">
                    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-4 flex flex-col items-center">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">Comentários</h3>
                      {/* INSERINDO O SISTEMA DE COMENTÁRIOS AQUI! */}
                      <Comments gameId={game.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Contato (sem alterações) */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Pronto para transformar sua ideia em realidade? 
              Entre em contato comigo e vamos conversar sobre seu próximo projeto!
            </p>
            <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 inline-block text-center">
              Fale Comigo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;