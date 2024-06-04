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
                    label: 'Novos Cadastros',
                    borderColor: '#4caf50', // Verde
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [15, 20, 25, 30, 35, 40, 45] // Dados simulados
                },
                {
                    type: 'bar',
                    label: 'Total de Produtos',
                    backgroundColor: '#c8e6c9', // Verde claro
                    data: [100, 120, 140, 160, 180, 200, 220], // Dados simulados
                    borderColor: 'white',
                    borderWidth: 2
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
