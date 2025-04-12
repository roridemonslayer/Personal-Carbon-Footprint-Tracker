import React from 'react';
import { CarIcon, HomeIcon, ShoppingBagIcon, TrendingDownIcon } from 'lucide-react';
export function Dashboard({
  footprintData
}) {
  const {
    daily,
    weekly,
    monthly,
    total
  } = footprintData;
  const metrics = [{
    label: 'Daily Footprint',
    value: daily.toFixed(2),
    unit: 'kg CO₂e',
    icon: <CarIcon size={24} className="text-blue-500" />,
    bgColor: 'bg-blue-50'
  }, {
    label: 'Weekly Footprint',
    value: weekly.toFixed(2),
    unit: 'kg CO₂e',
    icon: <HomeIcon size={24} className="text-green-500" />,
    bgColor: 'bg-green-50'
  }, {
    label: 'Monthly Footprint',
    value: monthly.toFixed(2),
    unit: 'kg CO₂e',
    icon: <ShoppingBagIcon size={24} className="text-amber-500" />,
    bgColor: 'bg-amber-50'
  }, {
    label: 'Total Reduction',
    value: '12.8',
    unit: '%',
    icon: <TrendingDownIcon size={24} className="text-teal-500" />,
    bgColor: 'bg-teal-50'
  }];
  return <div>
      <h2 className="text-2xl font-bold mb-6">
        Your Carbon Footprint Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => <div key={index} className={`${metric.bgColor} rounded-xl p-6 shadow-sm border border-gray-100`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{metric.label}</p>
                <p className="text-2xl font-bold mt-1">
                  {metric.value}{' '}
                  <span className="text-sm font-normal">{metric.unit}</span>
                </p>
              </div>
              <div className="p-2 rounded-full bg-white shadow-sm">
                {metric.icon}
              </div>
            </div>
          </div>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Recent Activities</h3>
          {total > 0 ? <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <CarIcon size={16} className="mr-2 text-blue-500" />
                  <span>Car commute</span>
                </div>
                <div className="text-gray-600">2.4 kg CO₂e</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <HomeIcon size={16} className="mr-2 text-green-500" />
                  <span>Electricity usage</span>
                </div>
                <div className="text-gray-600">1.8 kg CO₂e</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <ShoppingBagIcon size={16} className="mr-2 text-amber-500" />
                  <span>Food consumption</span>
                </div>
                <div className="text-gray-600">3.2 kg CO₂e</div>
              </div>
            </div> : <div className="text-center py-6 text-gray-500">
              No activities logged yet. Add your first activity to see your
              carbon footprint!
            </div>}
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Quick Tips</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>
                Try carpooling or public transport to reduce transportation
                emissions.
              </span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Unplug electronics when not in use to save energy.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>
                Eat locally sourced food to reduce the carbon footprint of your
                meals.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}