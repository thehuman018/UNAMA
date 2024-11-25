import React, { useState } from "react";
import FormProfessor from './FormProfessor';  
import FormEstudante from './FormEstudante';  

const Content = () => {
    const [showFormProfessor, setShowFormProfessor] = useState(false);  
    const [showFormEstudante, setShowFormEstudante] = useState(false);  
    const [professores, setProfessores] = useState([]);  
    const [estudantes, setEstudantes] = useState([]);  
    const [showProfessorList, setShowProfessorList] = useState(false); 
    const [showEstudanteList, setShowEstudanteList] = useState(false); 

    const handleToggleProfessorForm = () => {
        setShowFormProfessor(prev => !prev);  
    };

    const handleToggleEstudanteForm = () => {
        setShowFormEstudante(prev => !prev);  
    };

    const addProfessor = (name, subject) => {
        const newProfessor = { name, subject };
        setProfessores(prev => [...prev, newProfessor]);
        setShowProfessorList(true); 
    };

    const addEstudante = (name, grade, subject, evaluation) => {
        const newEstudante = { name, grade, subject, evaluation }; 
        setEstudantes(prev => [...prev, newEstudante]);
        setShowEstudanteList(true);  
    };

    return (
        <main style={styles.content}>
            <h2>Bem-vindo ao seu relatório de histórico escolar!</h2>
            <p>
                O site de histórico escolar tem como objetivo auxiliar na medição de desempenho semestral dos alunos referente a cada nota de determinada disciplina,
                e assim, medir seu nível de competência para cada matéria, bem como seu risco de aprovação e reprovação.
                O site mostrará quanto cada aluno cadastrado no sistema obteve de nota nas seguintes matérias: <b>Sistemas Operacionais, Front-End, Back-End e Programação Orientada a Objetos</b>.<br />
                Cada disciplina terá seu respectivo professor (se este estiver cadastrado).
            </p>

            <div style={styles.buttonContainer}>
                <button onClick={handleToggleProfessorForm}>
                    {showFormProfessor ? "Cancelar Cadastro de Professor" : "Cadastrar Professor"}
                </button>

                <button onClick={handleToggleEstudanteForm}>
                    {showFormEstudante ? "Cancelar Cadastro de Estudante" : "Cadastrar Estudante"}
                </button>
            </div>

            {showFormProfessor && <FormProfessor addProfessor={addProfessor} />}
            {showFormEstudante && <FormEstudante addEstudante={addEstudante} />}

            <div style={styles.buttonContainer}>
                <button onClick={() => setShowProfessorList(prev => !prev)}>
                    {showProfessorList ? "Ocultar Lista de Professores" : "Consultar Professores Cadastrados"}
                </button>

                <button onClick={() => setShowEstudanteList(prev => !prev)}>
                    {showEstudanteList ? "Ocultar Lista de Estudantes" : "Consultar Estudantes Cadastrados"}
                </button>
            </div>

            {showProfessorList && (
                <div style={styles.listContainer}>
                    <h3>Professores Cadastrados</h3>
                    <ul>
                        {professores.map((professor, index) => (
                            <li key={index}>
                                <b>{professor.name}</b> - {professor.subject}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showEstudanteList && (
                <div style={styles.listContainer}>
                    <h3>Estudantes Cadastrados</h3>
                    <ul>
                        {estudantes.map((estudante, index) => (
                            <li key={index}>
                                <b>{estudante.name}</b> - {estudante.subject} - Nota: {estudante.grade} - Avaliação: {estudante.evaluation}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
};

const styles = {
    content: {
        padding: '20px',
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    listContainer: {
        marginTop: '20px',
        textAlign: 'left',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '20px auto',
    },
};

export default Content;
