const ctx = document.getElementById('aktivitasChart').getContext('2d');

new Chart(ctx, {
  type: 'bar', 
  
  data: {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    
    datasets: [
      {
        label: 'Aktivitas',
        data: [45, 60, 30, 55, 70, 40, 25], 
        backgroundColor: '#ff5722', 
        borderRadius: 5, 
        barPercentage: 0.6 
      },
      {
        label: 'Target',
        data: [40, 55, 25, 60, 65, 35, 20],
        backgroundColor: '#00a896', 
        borderRadius: 5,
        barPercentage: 0.6
      }
    ]
  },
  
 
  options: {
    responsive: true,
    maintainAspectRatio: false, 
    
    interaction: {
      mode: 'index', 
      intersect: false, 
    },
    
    plugins: {
      legend: {
        position: 'bottom', 
        labels: {
          usePointStyle: true, 
        }
      },
      tooltip: {
        enabled: true, 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        titleColor: '#000',
        bodyColor: '#000', 
        borderColor: '#ddd', 
        borderWidth: 1
      }
    },
    
    scales: {
      y: {
        beginAtZero: true, 
        grid: {
          borderDash: [5, 5] 
        }
      },
      x: {
        grid: {
          display: false 
        }
      }
    }
  }
});