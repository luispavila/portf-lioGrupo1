// frontend/src/App.jsx

import React from 'react';
import './App.css';
import Habilidade from "./habilidade.jsx";
import reactLogo from "./assets/react.svg";
import fastapiLogo from './assets/fastapi.svg';
import figmaLogo from './assets/figma.svg';
import pythonLogo from './assets/python.svg';
import javascriptLogo from './assets/javascript.svg';
import openglLogo from './assets/opengl.svg';
import cLogo from './assets/c.svg';
import c__Logo from './assets/c--.svg';
import postgresLogo from './assets/postgresql.svg';
import githubLogo from './assets/github.svg';


function App() {
  // Estilo em linha para deixar o texto vermelho

  return (
      <>
          <div className="container">
              <Habilidade nome="React" logo={reactLogo} link="https://react.dev" />
              <Habilidade nome="FastAPI" logo={fastapiLogo} link="https://fastapi.tiangolo.com/" />
              <Habilidade nome="Figma" logo={figmaLogo} link="https://www.figma.com/pt-br/" />
              <Habilidade nome="Python" logo={pythonLogo} link="https://www.python.org/" />
              <Habilidade nome='PostgreSQL' logo={postgresLogo} link="https://www.postgresql.org/" />
          </div>
          <div className="container">
              <Habilidade nome="JavaScript" logo={javascriptLogo} link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" />
              <Habilidade nome="OpenGL" logo={openglLogo}  link="https://www.opengl.org/" />
              <Habilidade nome="C++" logo={cLogo} link="https://learn.microsoft.com/pt-br/cpp/cpp/?view=msvc-170" />
              <Habilidade nome="C#" logo={c__Logo} link="https://learn.microsoft.com/pt-br/dotnet/csharp/" />
              <Habilidade nome="GitHub" logo={githubLogo} link="https://github.com/" />
          </div>
      </>
  );
}

export default App;