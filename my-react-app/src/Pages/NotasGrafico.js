import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const NotasGrafico = ({ notas }) => {
    const data = {
        labels: ['1ª Avaliação', '2ª Avaliação', '3ª Avaliação', '4ª Avaliação'],
        datasets: [
            {
                label: 'Notas do Estudante',
                data: notas,  
                fill: false,  
                borderColor: 'rgba(75,192,192,1)', 
                tension: 0.1,  
                pointRadius: 5,  
                pointBackgroundColor: 'rgba(75,192,192,1)', 
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Variação das Notas nas 4 Avaliações',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Nota: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                min: 0, 
                max: 10,
            }
        }
    };

    return (
        <div>
            <h3>Variação das Notas do Estudante</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default NotasGrafico;
