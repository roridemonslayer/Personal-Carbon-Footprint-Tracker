import React from 'react';
import { LineChart, BarChart, PieChart, Activity, Globe, Leaf } from 'lucide-react';

// Add onGetStarted prop to handle navigation
export const AboutSection = ({ onGetStarted }) => {
  return <section id="about" className="bg-white w-full py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Understand Your Environmental Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Siustawinfy provides powerful tools to track, analyze, and reduce
            your carbon footprint, helping you make more sustainable choices
            every day.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[{
          icon: <Activity size={32} className="text-emerald-500" />,
          title: 'Real-time CO2 Tracking',
          description: 'Monitor your carbon emissions in real-time with our advanced tracking technology.'
        }, {
          icon: <LineChart size={32} className="text-emerald-500" />,
          title: 'Detailed Analytics',
          description: 'Gain insights through comprehensive data visualization and reporting tools.'
        }, {
          icon: <Globe size={32} className="text-emerald-500" />,
          title: 'Global Impact',
          description: 'See how your efforts contribute to worldwide sustainability goals.'
        }, {
          icon: <Leaf size={32} className="text-emerald-500" />,
          title: 'Personalized Recommendations',
          description: 'Receive tailored suggestions to reduce your carbon footprint effectively.'
        }, {
          icon: <BarChart size={32} className="text-emerald-500" />,
          title: 'Progress Tracking',
          description: 'Set goals and track your progress toward a more sustainable lifestyle.'
        }, {
          icon: <PieChart size={32} className="text-emerald-500" />,
          title: 'Emission Breakdown',
          description: 'Understand the sources of your carbon emissions with detailed categorization.'
        }].map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Making a Difference Together
            </h3>
            <p className="text-white/90">
              Join thousands of users already reducing their carbon footprint
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            value: '10K+',
            label: 'Active Users'
          }, {
            value: '2.5M',
            label: 'Kg of CO2 Saved'
          }, {
            value: '150+',
            label: 'Countries'
          }, {
            value: '87%',
            label: 'Reduction Rate'
          }].map((stat, index) => <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>)}
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Reduce Your Carbon Footprint?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Siustawinfy today and take the first step toward a more
            sustainable future.
          </p>
          <button 
            onClick={onGetStarted} 
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-medium transition-colors text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>;
};