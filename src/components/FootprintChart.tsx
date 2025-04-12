import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);
export function FootprintChart({
  activities
}) {
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('week');
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    if (activities.length === 0) {
      // Demo data for empty state
      generateDemoData();
      return;
    }
    const processedData = processActivitiesForChart(activities, timeRange);
    setChartData(processedData);
  }, [activities, timeRange, chartType]);
  const generateDemoData = () => {
    const labels = timeRange === 'week' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : timeRange === 'month' ? Array.from({
      length: 30
    }, (_, i) => `${i + 1}`) : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const transportationData = labels.map(() => Math.random() * 5 + 2);
    const energyData = labels.map(() => Math.random() * 4 + 1);
    const foodData = labels.map(() => Math.random() * 3 + 1);
    setChartData({
      labels,
      datasets: [{
        label: 'Transportation',
        data: transportationData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }, {
        label: 'Energy',
        data: energyData,
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2
      }, {
        label: 'Food',
        data: foodData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
      }]
    });
  };
  const processActivitiesForChart = (activities, range) => {
    // This would process real activity data
    // For now, we'll use demo data
    return generateDemoData();
  };
  const renderChart = () => {
    if (!chartData) return null;
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Carbon Footprint Over Time'
        }
      },
      scales: chartType !== 'doughnut' ? {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Carbon Emissions (kg CO₂e)'
          }
        }
      } : undefined
    };
    switch (chartType) {
      case 'line':
        return <Line data={chartData} options={options} height={300} />;
      case 'bar':
        return <Bar data={chartData} options={options} height={300} />;
      case 'doughnut':
        const doughnutData = {
          labels: ['Transportation', 'Energy', 'Food'],
          datasets: [{
            data: [chartData.datasets[0].data.reduce((a, b) => a + b, 0), chartData.datasets[1].data.reduce((a, b) => a + b, 0), chartData.datasets[2].data.reduce((a, b) => a + b, 0)],
            backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
          }]
        };
        return <Doughnut data={doughnutData} options={options} height={300} />;
      default:
        return <Line data={chartData} options={options} height={300} />;
    }
  };
  return <div>
      <h2 className="text-2xl font-bold mb-6">
        Carbon Footprint Visualization
      </h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-4 justify-between mb-6">
          <div className="flex space-x-2">
            <button onClick={() => setChartType('line')} className={`px-4 py-2 rounded-lg ${chartType === 'line' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Line
            </button>
            <button onClick={() => setChartType('bar')} className={`px-4 py-2 rounded-lg ${chartType === 'bar' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Bar
            </button>
            <button onClick={() => setChartType('doughnut')} className={`px-4 py-2 rounded-lg ${chartType === 'doughnut' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Doughnut
            </button>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setTimeRange('week')} className={`px-4 py-2 rounded-lg ${timeRange === 'week' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Week
            </button>
            <button onClick={() => setTimeRange('month')} className={`px-4 py-2 rounded-lg ${timeRange === 'month' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Month
            </button>
            <button onClick={() => setTimeRange('year')} className={`px-4 py-2 rounded-lg ${timeRange === 'year' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Year
            </button>
          </div>
        </div>
        <div className="h-80">{renderChart()}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Transportation</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {chartData ? chartData.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2) : '0'}{' '}
            kg
          </div>
          <p className="text-gray-500">CO₂e from travel activities</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Energy Usage</h3>
          <div className="text-3xl font-bold text-amber-500 mb-2">
            {chartData ? chartData.datasets[1].data.reduce((a, b) => a + b, 0).toFixed(2) : '0'}{' '}
            kg
          </div>
          <p className="text-gray-500">CO₂e from household energy</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Food Consumption</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">
            {chartData ? chartData.datasets[2].data.reduce((a, b) => a + b, 0).toFixed(2) : '0'}{' '}
            kg
          </div>
          <p className="text-gray-500">CO₂e from dietary choices</p>
        </div>
      </div>
    </div>;
}