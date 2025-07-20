import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in text-gray-900"> Olá, sou o</span>
            <span className="text-blue-600 opacity-0 animate-fade-in delay-200">
              {" "}
              
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2 opacity-0 animate-fade-in delay-300">
              {" "}
              Toninho DevPlay
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in delay-500">
            Neste portfólio você vai encontrar jogos autorais, projetos experimentais, e protótipos malucos criados com muito café,
            inspiração em jogos retrô e uma pitada de genialidade caótica. Aqui, cada projeto é um portal — e cada portal é uma nova
            aventura.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in delay-700">
            <a 
              href="#projects" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Meus Projetos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-blue-600" />
      </div>
    </section>
  );
};