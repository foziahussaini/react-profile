import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full flex flex-col bg-white dark:bg-gradient-to-r from-olive-950 to-zinc-900 min-h-screen items-center p-8 transition-colors duration-300">
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-8 px-6 py-2.5 text-sm font-semibold rounded-xl shadow-lg bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Toggle to {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>

        <div className="flex flex-row justify-center gap-8 items-stretch w-full max-w-7xl">
          <ProfileCard 
            name="Fozia Hussaini" 
            phase="Frontend Developer" 
            city="Herat" 
            badge1="Active" 
            badge2="Remote" 
            badge3="Available" 
          />

          <ProfileCard 
            name="Gayathri" 
            phase="UI/UX Designer" 
            city="Madurai" 
            badge1="On Leave" 
            badge2="Hybrid" 
            badge3="Busy" 
          />

          <ProfileCard 
            name="Ali Reza" 
            phase="DevOps Engineer" 
            city="Kabul" 
            badge1="Active" 
            badge2="On-site" 
            badge3="Available" 
          />
        </div>

      </div>
    </div>
  );
}

export default App;
