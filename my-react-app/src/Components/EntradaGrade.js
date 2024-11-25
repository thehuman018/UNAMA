import React, { useState } from "react";
import FormEstudante from "./FormEstudante";

const EntradaGrade = ({ estudantes, updateEntradaGrade }) => {
    const [selectedeEstudante, selectedestudantes ] = useState('');
    cosnt [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEntradaGrade(selectedeEstudante, subject, grade);
        setSubject('');
        setGrade('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Lançar Nota</h2>
            <select>
                value={selectedeEstudante}
                onChange={(e) => selectedeEstudante(e.target.value)}
                required
            <option value="">Selecione o aluno</option>
            {estudantes.map((FormEstudante, index) => (
                <option key={index} value={estudantes.name}>
                    {estudantes.name}
                </option>
            ))}
            </select>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
                <option value="">Selecione a matéria</option>
                <option value="Sistemas Operacionais">Sistemas Operacionais</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="POO">Programação Orientada a Objetos</option>
            </select>
            <input>
                type="number"
                placeholder="Nota"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
            </input>
            <button type="submit">Salvar Nota</button>
        </form>
    );
};

export default EntradaGrade;