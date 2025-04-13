import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ActivityForm } from './components/ActivityForm';
import { FootprintChart } from './components/FootprintChart';
import { TipsSection } from './components/TipsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { EcoStreaks } from './components/EcoStreaks';
import { AiBuddy } from './components/AiBuddy';
import { calculateFootprint } from './utils/carbonCalculator';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activities, setActivities] = useState([]);
  const [footprintData, setFootprintData] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    total: 0
  });
  const [isMainApp, setIsMainApp] = useState(true); // State to toggle between app versions

  useEffect(() => {
    if (activities.length > 0) {
      const calculatedFootprint = calculateFootprint(activities);
      setFootprintData(calculatedFootprint);
    }
  }, [activities]);

  const handleAddActivity = activity => {
    setActivities([...activities, {
      ...activity,
      id: Date.now()
    }]);
  };

  // Consolidated return with conditional rendering
  return (
    <div className="relative w-full min-h-screen bg-white">
      {isMainApp ? (
        // Original app with tabs
        <>
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            {activeTab === 'dashboard' && <Dashboard footprintData={footprintData} />}
            {activeTab === 'activity' && <ActivityForm onAddActivity={handleAddActivity} />}
            {activeTab === 'charts' && <FootprintChart activities={activities} />}
            {activeTab === 'tips' && <TipsSection footprintData={footprintData} />}
            {activeTab === 'compare' && <ComparisonSection footprintData={footprintData} />}
            {activeTab === 'streaks' && <EcoStreaks />}
          </Layout>
          <AiBuddy activeTab={activeTab} footprintData={footprintData} activities={activities} />
        </>
      ) : (
        // Landing page structure
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
        </>
      )}
      
      {/* Toggle button to switch between versions */}
      <button 
        onClick={() => setIsMainApp(!isMainApp)}
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Switch to {isMainApp ? 'Landing Page' : 'Main App'}
      </button>
    </div>
  );
}