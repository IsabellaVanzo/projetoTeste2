import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function ComboDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
            datasets: [
                {
                    type: 'line',
                    label: 'Novos Clientes',
                    borderColor: '#673ab7', // Roxo
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [10, 8, 15, 12, 20, 18, 25] // Dados simulados
                },
                {
                    type: 'line',
                    label: 'Clientes Ativos',
                    borderColor: '#03a9f4', // Azul claro
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 55, 60, 65, 70, 75, 80] // Dados simulados
                },
                {
                    type: 'line',
                    label: 'Clientes Inativos',
                    borderColor: '#e91e63', // Rosa
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [20, 18, 15, 12, 10, 8, 5] // Dados simulados
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
