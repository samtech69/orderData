import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ users }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (users) {
      const ctx = document.getElementById('BarChart');

      const months = [...new Set(users.map(order => order.month))]; // Get unique months
      const deliveredCounts = months.map(month => users.find(order => order.month === month && order.status === 'DELIVERED')?.count || 10);
      const ndrCounts = months.map(month => users.find(order => order.month === month && order.status === 'NDR')?.count || 0);
      const rtoCounts = months.map(month => users.find(order => order.month === month && order.status === 'RTO')?.count || 0);

      if (chart) {
        chart.destroy();
      }

      setChart(new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [
            {
              label: 'DELIVERED',
              data: deliveredCounts,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            },
            {
              label: 'NDR',
              data: ndrCounts,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: 'RTO',
              data: rtoCounts,
              backgroundColor: 'rgba(255, 205, 86, 0.2)',
              borderColor: 'rgba(255, 205, 86, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }));
    }
  }, [users]);

  return (
    <>
    </>

  );
};

export default BarChart;
