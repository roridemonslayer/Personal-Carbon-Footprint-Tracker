import React, { useState } from 'react';
import { AchievementBadge } from './AchievementBadge';
import { FlameIcon, TrophyIcon, LeafIcon, CarIcon, SaladIcon, BoxIcon } from 'lucide-react';
export function EcoStreaks() {
  // In a real app, these would come from a backend
  const [currentStreaks] = useState({
    noCar: 3,
    vegetarianMeals: 5,
    energySaving: 2
  });
  const [achievements] = useState([{
    id: 1,
    title: 'Green Commuter',
    description: '3 days without using a car',
    icon: CarIcon,
    unlocked: true,
    date: '2024-01-15',
    color: 'text-blue-500'
  }, {
    id: 2,
    title: 'Plant Power',
    description: '5 days of vegetarian meals',
    icon: SaladIcon,
    unlocked: true,
    date: '2024-01-14',
    color: 'text-green-500'
  }, {
    id: 3,
    title: 'Energy Saver',
    description: 'Reduced energy usage for 2 days',
    icon: BoxIcon,
    unlocked: false,
    progress: 66,
    color: 'text-amber-500'
  }]);
  return <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Eco Streaks</h2>
        <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
          <TrophyIcon size={20} className="mr-2" />
          <span className="font-medium">Level 3 Eco Warrior</span>
        </div>
      </div>
      {/* Current Streaks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">Car-Free Days</h3>
              <p className="text-gray-500">Current Streak</p>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <CarIcon size={24} className="text-blue-500" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-blue-500 mr-3">
              {currentStreaks.noCar}
            </div>
            <div className="flex">
              {[...Array(currentStreaks.noCar)].map((_, i) => <FlameIcon key={i} size={24} className="text-orange-500 -ml-1" style={{
              filter: 'drop-shadow(0 0 2px rgba(251, 146, 60, 0.3))'
            }} />)}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress to next badge</span>
              <span className="font-medium">3/5 days</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{
              width: '60%'
            }}></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">Vegetarian Meals</h3>
              <p className="text-gray-500">Current Streak</p>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <SaladIcon size={24} className="text-green-500" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-green-500 mr-3">
              {currentStreaks.vegetarianMeals}
            </div>
            <div className="flex">
              {[...Array(currentStreaks.vegetarianMeals)].map((_, i) => <FlameIcon key={i} size={24} className="text-orange-500 -ml-1" style={{
              filter: 'drop-shadow(0 0 2px rgba(251, 146, 60, 0.3))'
            }} />)}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress to next badge</span>
              <span className="font-medium">5/7 days</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{
              width: '71%'
            }}></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">Energy Saving</h3>
              <p className="text-gray-500">Current Streak</p>
            </div>
            <div className="p-2 bg-amber-50 rounded-lg">
              <div size={24} className="text-amber-500" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-amber-500 mr-3">
              {currentStreaks.energySaving}
            </div>
            <div className="flex">
              {[...Array(currentStreaks.energySaving)].map((_, i) => <FlameIcon key={i} size={24} className="text-orange-500 -ml-1" style={{
              filter: 'drop-shadow(0 0 2px rgba(251, 146, 60, 0.3))'
            }} />)}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress to next badge</span>
              <span className="font-medium">2/3 days</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{
              width: '66%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Recent Achievements</h3>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map(achievement => <AchievementBadge key={achievement.id} {...achievement} />)}
        </div>
      </div>
    </div>;
}