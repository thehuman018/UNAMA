import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Pages/Content';
import FormProfessor from './Pages/FormProfessor';
import FormEstudante from './Pages/FormEstudante';
import TabelaDados from './Components/TabelaDados';

function App() {
  const [professores, setProfessores] = useState([]);
  const [estudantes, setEstudantes] = useState([]);

  const addProfessor = (professor) => setProfessores([...professores, professor]);
  const addEstudante = (estudante) => setEstudantes([...estudantes, estudante]);

  return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
  );
}

export default App;
