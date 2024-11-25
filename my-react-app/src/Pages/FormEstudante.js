import React, { useState } from 'react';

const FormEstudante = ({ addEstudante }) => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [evaluation, setEvaluation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (grade < 0 || grade > 10) {
            alert('A nota deve ser entre 0 e 10!');
            return;
        }

        if (name && grade && subject && evaluation) {
            addEstudante(name, grade, subject, evaluation);
            setName('');
            setGrade('');
            setSubject('');
            setEvaluation('');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3>Cadastro de Estudante</h3>
            <div style={styles.formGroup}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="grade">Nota (0-10):</label>
                <input
                    type="number"
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                    min="0"
                    max="10"
                />
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="subject">Disciplina:</label>
                <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                >
                    <option value="">Selecione a Disciplina</option>
                    <option value="Sistemas Operacionais">Sistemas Operacionais</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Programação Orientada a Objetos">Programação Orientada a Objetos</option>
                </select>
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="evaluation">Avaliação:</label>
                <select
                    id="evaluation"
                    value={evaluation}
                    onChange={(e) => setEvaluation(e.target.value)}
                    required
                >
                    <option value="">Selecione a Avaliação</option>
                    <option value="1ª Avaliação">1ª Avaliação</option>
                    <option value="2ª Avaliação">2ª Avaliação</option>
                    <option value="3ª Avaliação">3ª Avaliação</option>
                    <option value="4ª Avaliação">4ª Avaliação</option>
                </select>
            </div>
            <button type="submit" style={styles.submitButton}>Cadastrar Estudante</button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    submitButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    },
};

export default FormEstudante;
