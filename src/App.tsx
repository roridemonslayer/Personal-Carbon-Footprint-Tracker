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
export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activities, setActivities] = useState([]);
  const [footprintData, setFootprintData] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    total: 0
  });
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
  return <>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'dashboard' && <Dashboard footprintData={footprintData} />}
        {activeTab === 'activity' && <ActivityForm onAddActivity={handleAddActivity} />}
        {activeTab === 'charts' && <FootprintChart activities={activities} />}
        {activeTab === 'tips' && <TipsSection footprintData={footprintData} />}
        {activeTab === 'compare' && <ComparisonSection footprintData={footprintData} />}
        {activeTab === 'streaks' && <EcoStreaks />}
      </Layout>
      <AiBuddy activeTab={activeTab} footprintData={footprintData} activities={activities} />
    </>;
}