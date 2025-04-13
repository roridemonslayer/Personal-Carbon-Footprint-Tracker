import React from 'react';
import { HomeIcon, ActivityIcon, BarChartIcon, LightbulbIcon, UsersIcon, FlameIcon } from 'lucide-react';
export function Layout({
  children,
  activeTab,
  setActiveTab
}) {
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: HomeIcon
  }, {
    id: 'activity',
    label: 'Log Activity',
    icon: ActivityIcon
  }, {
    id: 'charts',
    label: 'Charts',
    icon: BarChartIcon
  }, {
    id: 'streaks',
    label: 'Eco Streaks',
    icon: FlameIcon
  }, {
    id: 'tips',
    label: 'Tips',
    icon: LightbulbIcon
  }, {
    id: 'compare',
    label: 'Compare',
    icon: UsersIcon
  }];
  return <div className="flex flex-col md:flex-row min-h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <div className="bg-white shadow-md md:w-64 w-full md:min-h-screen">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-green-600 flex items-center">
            <span className="bg-green-600 text-white rounded-full p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
           Sustainify 
          </h1>
          <p className="text-gray-500 text-sm">
            Personal Carbon Footprint Tracker
          </p>
        </div>
        <nav className="p-2">
          <ul>
            {navItems.map(item => {
            const Icon = item.icon;
            return <li key={item.id} className="mb-2">
                  <button onClick={() => setActiveTab(item.id)} className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                    <Icon size={18} className="mr-2" />
                    {item.label}
                  </button>
                </li>;
          })}
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-grow p-6 md:p-8">{children}</div>
    </div>;
}