import React, { useState } from 'react';
import { LightbulbIcon, CarIcon, HomeIcon, ShoppingBagIcon, LeafIcon } from 'lucide-react';
export function TipsSection({
  footprintData
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [{
    id: 'all',
    label: 'All Tips',
    icon: LeafIcon
  }, {
    id: 'transportation',
    label: 'Transportation',
    icon: CarIcon
  }, {
    id: 'energy',
    label: 'Energy',
    icon: HomeIcon
  }, {
    id: 'food',
    label: 'Food',
    icon: ShoppingBagIcon
  }];
  const tips = [{
    id: 1,
    category: 'transportation',
    title: 'Use public transportation',
    description: 'Taking buses or trains instead of driving alone can reduce your carbon emissions by up to 20%.',
    impact: 'high',
    icon: CarIcon
  }, {
    id: 2,
    category: 'transportation',
    title: 'Carpool with colleagues',
    description: 'Sharing rides to work can cut your commuting footprint in half.',
    impact: 'medium',
    icon: CarIcon
  }, {
    id: 3,
    category: 'transportation',
    title: 'Maintain proper tire pressure',
    description: 'Keeping your tires properly inflated can improve gas mileage by up to 3%.',
    impact: 'low',
    icon: CarIcon
  }, {
    id: 4,
    category: 'energy',
    title: 'Switch to LED bulbs',
    description: 'LED bulbs use up to 80% less energy than traditional incandescent bulbs.',
    impact: 'medium',
    icon: HomeIcon
  }, {
    id: 5,
    category: 'energy',
    title: 'Unplug electronics when not in use',
    description: "Standby power can account for 10% of your home's electricity use.",
    impact: 'low',
    icon: HomeIcon
  }, {
    id: 6,
    category: 'energy',
    title: 'Install a programmable thermostat',
    description: 'Smart temperature control can reduce your heating and cooling bills by 10-15%.',
    impact: 'high',
    icon: HomeIcon
  }, {
    id: 7,
    category: 'food',
    title: 'Eat less meat',
    description: 'Reducing meat consumption by just one day per week can significantly lower your carbon footprint.',
    impact: 'high',
    icon: ShoppingBagIcon
  }, {
    id: 8,
    category: 'food',
    title: 'Buy local produce',
    description: 'Local food travels shorter distances, reducing transportation emissions.',
    impact: 'medium',
    icon: ShoppingBagIcon
  }, {
    id: 9,
    category: 'food',
    title: 'Reduce food waste',
    description: 'Plan meals and properly store food to minimize waste and associated emissions.',
    impact: 'medium',
    icon: ShoppingBagIcon
  }];
  const filteredTips = selectedCategory === 'all' ? tips : tips.filter(tip => tip.category === selectedCategory);
  const getImpactColor = impact => {
    switch (impact) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <h2 className="text-2xl font-bold mb-6">
        Personalized Tips to Reduce Your Footprint
      </h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => {
        const Icon = category.icon;
        return <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center px-4 py-2 rounded-full transition-colors ${selectedCategory === category.id ? 'bg-green-100 text-green-700 font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              <Icon size={16} className="mr-2" />
              {category.label}
            </button>;
      })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map(tip => {
        const Icon = tip.icon;
        return <div key={tip.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="bg-green-50 p-2 rounded-lg mr-4">
                  <Icon size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{tip.title}</h3>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${getImpactColor(tip.impact)}`}>
                    {tip.impact === 'high' ? 'High Impact' : tip.impact === 'medium' ? 'Medium Impact' : 'Small Impact'}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">{tip.description}</p>
            </div>;
      })}
      </div>
    </div>;
}