import React, { useEffect, useState, useRef } from 'react';
import { LeafIcon, MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
// Fun facts about carbon footprints
const funFacts = ['A single tree can absorb up to 48 pounds of CO2 per year! 🌳', 'Taking one less car trip per week reduces your carbon footprint by about 1% annually! 🚶‍♂️', 'A vegetarian meal saves around 1.5kg of CO2 compared to a meat-based meal! 🥗', 'LED bulbs use 90% less energy than traditional bulbs! 💡', 'Remote work can reduce your carbon footprint by up to 1,800 pounds of CO2 per year! 🏠', 'Recycling one aluminum can saves enough energy to power a TV for 3 hours! ♻️', 'A laptop uses 80% less energy than a desktop computer! 💻'];
export function AiBuddy({
  activeTab,
  footprintData,
  activities
}) {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [dailyFunFact, setDailyFunFact] = useState('');
  const chatContainerRef = useRef(null);
  // Generate contextual messages based on the current tab and data
  useEffect(() => {
    const messages = {
      dashboard: "👋 Welcome back! Let's check your eco-impact today.",
      activity: "Ready to log a new eco-friendly activity? I'm here to help! 🌱",
      charts: '📊 Your progress is looking great! Keep up the good work!',
      streaks: "🔥 You're on fire! Your eco-streaks are making a real difference.",
      tips: "💡 Looking for ways to improve? I've got some great tips for you!",
      compare: '🌍 See how you stack up against others in your community.'
    };
    setMessage(messages[activeTab] || messages.dashboard);
  }, [activeTab]);
  // Set daily fun fact
  useEffect(() => {
    const today = new Date().toDateString();
    const storedFact = localStorage.getItem('lastFunFact');
    const storedDate = localStorage.getItem('lastFunFactDate');
    if (storedDate !== today) {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setDailyFunFact(randomFact);
      localStorage.setItem('lastFunFact', randomFact);
      localStorage.setItem('lastFunFactDate', today);
      // Add fun fact to chat history
      setChatHistory(prev => [...prev, {
        type: 'ai',
        text: `📚 Daily Fun Fact: ${randomFact}`,
        timestamp: new Date()
      }]);
    } else if (storedFact) {
      setDailyFunFact(storedFact);
    }
  }, []);
  // Auto scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  const handleSendMessage = e => {
    e.preventDefault();
    if (!userInput.trim()) return;
    // Add user message to chat
    setChatHistory(prev => [...prev, {
      type: 'user',
      text: userInput,
      timestamp: new Date()
    }]);
    // Generate AI response based on user input
    const response = generateResponse(userInput.toLowerCase());
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'ai',
        text: response,
        timestamp: new Date()
      }]);
    }, 500);
    setUserInput('');
  };
  const generateResponse = input => {
    if (input.includes('help')) {
      return 'I can help you track your carbon footprint, provide eco-friendly tips, and celebrate your achievements! What would you like to know? 🌱';
    }
    if (input.includes('tip') || input.includes('advice')) {
      return "Here's a quick tip: Try using a reusable water bottle! It can save up to 156 plastic bottles annually. 💧";
    }
    if (input.includes('carbon') || input.includes('footprint')) {
      return 'Your carbon footprint is the total amount of greenhouse gases produced by your activities. Want to learn how to reduce it? 🌍';
    }
    return "I'm here to help you on your eco-friendly journey! Feel free to ask about carbon footprints, tips, or your progress. 🌱";
  };
  if (!isVisible) {
    return <button onClick={() => setIsVisible(true)} className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircleIcon size={24} />
      </button>;
  }
  return <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ${isMinimized ? 'w-16' : 'w-80'}`}>
        {/* Header */}
        <div className="bg-green-500 text-white p-3 flex items-center justify-between">
          <div className="flex items-center">
            <LeafIcon size={20} className="mr-2" />
            {!isMinimized && <span className="font-medium">Eco Buddy</span>}
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-green-600 rounded">
              {isMinimized ? <MessageCircleIcon size={16} /> : <span className="text-sm">−</span>}
            </button>
            <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-green-600 rounded">
              <XIcon size={16} />
            </button>
          </div>
        </div>
        {/* Chat Area */}
        {!isMinimized && <div className="flex flex-col h-96">
            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatHistory.map((chat, index) => <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {chat.type === 'ai' && <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="text-lg">🌱</span>
                    </div>}
                  <div className={`max-w-[80%] rounded-lg p-3 ${chat.type === 'user' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="text-sm">{chat.text}</p>
                  </div>
                </div>)}
            </div>
            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder="Ask me anything..." className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm" />
                <button type="submit" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <SendIcon size={16} />
                </button>
              </div>
            </form>
          </div>}
      </div>
    </div>;
}