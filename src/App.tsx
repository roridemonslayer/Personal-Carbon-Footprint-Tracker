import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import { SignupPage } from './components/SignupPage';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user') !== null;
  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};

// Main application component with tabs
const MainApp = ({ footprintData, activities, handleAddActivity }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
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
  );
};

// Landing page component
const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/signup');
  };
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection onGetStarted={handleGetStarted} />
    </>
  );
};

export function App() {
  const [activities, setActivities] = useState([]);
  const [footprintData, setFootprintData] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    total: 0
  });
  const [isMainApp, setIsMainApp] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
      setIsMainApp(true);
    }
    
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
  
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen bg-white">
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Signup page */}
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected app routes */}
          <Route 
            path="/app/*" 
            element={
              <ProtectedRoute>
                <MainApp 
                  footprintData={footprintData} 
                  activities={activities} 
                  handleAddActivity={handleAddActivity} 
                />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirect to app if logged in */}
          <Route 
            path="/dashboard" 
            element={
              localStorage.getItem('user') ? 
                <Navigate to="/app" replace /> : 
                <Navigate to="/signup" replace />
            } 
          />
          
          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
       
      </div>
    </BrowserRouter>
  );
}