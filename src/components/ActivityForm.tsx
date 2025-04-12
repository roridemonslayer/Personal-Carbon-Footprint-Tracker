import React, { useState } from 'react';
import { CarIcon, HomeIcon, ShoppingBagIcon, PlaneIcon } from 'lucide-react';
export function ActivityForm({
  onAddActivity
}) {
  const [formData, setFormData] = useState({
    type: 'transportation',
    subtype: 'car',
    value: '',
    unit: 'km',
    date: new Date().toISOString().split('T')[0]
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.value) return;
    onAddActivity({
      ...formData,
      value: parseFloat(formData.value),
      timestamp: new Date().toISOString()
    });
    // Reset form
    setFormData({
      ...formData,
      value: ''
    });
  };
  const getSubtypeOptions = () => {
    switch (formData.type) {
      case 'transportation':
        return [{
          value: 'car',
          label: 'Car'
        }, {
          value: 'bus',
          label: 'Bus'
        }, {
          value: 'train',
          label: 'Train'
        }, {
          value: 'plane',
          label: 'Airplane'
        }, {
          value: 'bike',
          label: 'Bicycle (0 emissions)'
        }, {
          value: 'walk',
          label: 'Walking (0 emissions)'
        }];
      case 'energy':
        return [{
          value: 'electricity',
          label: 'Electricity'
        }, {
          value: 'gas',
          label: 'Natural Gas'
        }, {
          value: 'heating',
          label: 'Heating Oil'
        }];
      case 'food':
        return [{
          value: 'meat',
          label: 'Meat'
        }, {
          value: 'dairy',
          label: 'Dairy'
        }, {
          value: 'vegetables',
          label: 'Vegetables'
        }, {
          value: 'processed',
          label: 'Processed Foods'
        }];
      default:
        return [];
    }
  };
  const getUnitOptions = () => {
    switch (formData.type) {
      case 'transportation':
        return [{
          value: 'km',
          label: 'Kilometers'
        }, {
          value: 'miles',
          label: 'Miles'
        }];
      case 'energy':
        return [{
          value: 'kwh',
          label: 'kWh'
        }, {
          value: 'm3',
          label: 'Cubic Meters'
        }, {
          value: 'liter',
          label: 'Liters'
        }];
      case 'food':
        return [{
          value: 'kg',
          label: 'Kilograms'
        }, {
          value: 'servings',
          label: 'Servings'
        }];
      default:
        return [];
    }
  };
  const getTypeIcon = () => {
    switch (formData.type) {
      case 'transportation':
        return <CarIcon size={24} className="text-blue-500" />;
      case 'energy':
        return <HomeIcon size={24} className="text-amber-500" />;
      case 'food':
        return <ShoppingBagIcon size={24} className="text-green-500" />;
      default:
        return null;
    }
  };
  return <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">Log Your Activity</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Activity Type
              </label>
              <div className="relative">
                <select name="type" value={formData.type} onChange={handleChange} className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                  <option value="transportation">Transportation</option>
                  <option value="energy">Energy Usage</option>
                  <option value="food">Food Consumption</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Specific Activity
              </label>
              <select name="subtype" value={formData.subtype} onChange={handleChange} className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                {getSubtypeOptions().map(option => <option key={option.value} value={option.value}>
                    {option.label}
                  </option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Value
              </label>
              <div className="flex">
                <input type="number" name="value" value={formData.value} onChange={handleChange} placeholder="Enter amount" min="0" step="0.01" className="block w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-green-500 focus:border-green-500" />
                <select name="unit" value={formData.unit} onChange={handleChange} className="block px-4 py-3 border border-gray-300 border-l-0 rounded-r-lg bg-gray-50 focus:ring-green-500 focus:border-green-500">
                  {getUnitOptions().map(option => <option key={option.value} value={option.value}>
                      {option.label}
                    </option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Date
              </label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button type="submit" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
              Add Activity
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Carbon Impact Preview</h3>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          {formData.value ? <div className="flex items-center justify-between">
              <div className="flex items-center">
                {getTypeIcon()}
                <div className="ml-4">
                  <p className="font-medium">
                    {getSubtypeOptions().find(opt => opt.value === formData.subtype)?.label || formData.subtype}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {formData.value} {formData.unit} on {formData.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">
                  {(formData.value * (formData.subtype === 'car' ? 0.2 : formData.subtype === 'electricity' ? 0.5 : 0.3)).toFixed(2)}{' '}
                  kg CO₂e
                </p>
                <p className="text-xs text-gray-500">
                  Estimated carbon footprint
                </p>
              </div>
            </div> : <p className="text-center text-gray-500 py-4">
              Enter your activity details to see the estimated carbon impact
            </p>}
        </div>
      </div>
    </div>;
}