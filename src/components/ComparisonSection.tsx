import React from 'react';
import { Bar } from 'react-chartjs-2';
import { UsersIcon, TrendingDownIcon, GlobeIcon, UserIcon } from 'lucide-react';
export function ComparisonSection({
  footprintData
}) {
  // Sample data for comparison
  const comparisonData = {
    labels: ['Your Footprint', 'National Average', 'Global Average', 'Sustainable Goal'],
    datasets: [{
      label: 'Carbon Footprint (tons CO₂e/year)',
      data: [12.3, 16.1, 4.8, 2.0],
      backgroundColor: ['rgba(75, 192, 192, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(34, 197, 94, 0.7)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(34, 197, 94, 1)'],
      borderWidth: 1
    }]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} tons`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Carbon Footprint (tons CO₂e/year)'
        }
      }
    }
  };
  return <div>
      <h2 className="text-2xl font-bold mb-6">Compare Your Carbon Footprint</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
        <h3 className="font-semibold text-lg mb-4">
          Your Footprint vs. Averages
        </h3>
        <div className="h-80 mb-6">
          <Bar data={comparisonData} options={options} />
        </div>
        <div className="text-center text-sm text-gray-500">
          Based on annual carbon emissions per person
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">How You Compare</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-green-50 p-2 rounded-full mr-4">
                <TrendingDownIcon size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium">23% below national average</p>
                <p className="text-sm text-gray-500">
                  You're doing better than most people in your country!
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-amber-50 p-2 rounded-full mr-4">
                <GlobeIcon size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="font-medium">156% above global average</p>
                <p className="text-sm text-gray-500">
                  There's still room for improvement compared to global
                  citizens.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-50 p-2 rounded-full mr-4">
                <UserIcon size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium">515% above sustainable level</p>
                <p className="text-sm text-gray-500">
                  To fight climate change, we need to reach 2 tons per person.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Community Standings</h3>
          <div className="relative pt-1 mb-6">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100">
                  Your Rank
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  Top 30%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
              <div style={{
              width: '70%'
            }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  1
                </div>
                <span>Sarah L.</span>
              </div>
              <div className="font-medium">1.8 tons/year</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="bg-gray-300 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  2
                </div>
                <span>Miguel R.</span>
              </div>
              <div className="font-medium">2.3 tons/year</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="bg-amber-700 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  3
                </div>
                <span>Aisha K.</span>
              </div>
              <div className="font-medium">3.1 tons/year</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  12
                </div>
                <span className="font-medium">You</span>
              </div>
              <div className="font-medium">12.3 tons/year</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}