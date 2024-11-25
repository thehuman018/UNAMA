import React from "react";

const TabelaDados = ({ title, data }) => (
    <div>
        <h2>{title}</h2>
        {data.length === 0 ? (
            <p>Nenhum dado cadastrado</p>
        ) : (
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, idx) => (
                                <td key={idx}>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);

export default TabelaDados;