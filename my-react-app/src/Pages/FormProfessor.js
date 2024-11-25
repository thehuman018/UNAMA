import React, { useState } from "react";

const FormProfessor = ({ addProfessor }) => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addProfessor(name, subject);
        setConfirmationMessage(`Cadastro realizado com sucesso! Nome: ${name}, Disciplina: ${subject}`);
        setName("");
        setSubject("");
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3>Cadastro de Professor</h3>

            <label>
                Nome:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Digite o nome do professor"
                />
            </label>

            <label>
                Disciplina:
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                >
                    <option value="">Selecione uma disciplina</option>
                    <option value="Sistemas Operacionais">Sistemas Operacionais</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Programação Orientada a Objetos">Programação Orientada a Objetos</option>
                </select>
            </label>

            <button type="submit">Cadastrar Professor</button>

            {confirmationMessage && <p style={styles.confirmation}>{confirmationMessage}</p>}
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '0 auto',
    },
    input: {
        marginBottom: '10px',
        padding: '8px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    confirmation: {
        marginTop: '15px',
        color: '#28a745',
        fontWeight: 'bold',
    }
};

export default FormProfessor;
