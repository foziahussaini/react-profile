// ProfileCard.jsx
import React from 'react';
import StatusBadge from './StatusBadge';

function ProfileCard({ name, phase, city, badge1, badge2, badge3 }) {
  return (
    <div className="w-full h-[380px] sm:w-80 rounded-2xl p-6 bg-zinc-200 shadow-[0_10px_16px_rgba(147,51,234,0.15)] dark:bg-gray-900 dark:shadow-[0_4px_15px_rgba(100,21,104,0.15)] transition-all duration-300 flex flex-col items-center">
      
      <div className="mb-4 flex justify-center">
        <div className="w-30 h-30 rounded-full bg-indigo-800 flex items-center justify-center text-2xl font-bold text-white shadow-md">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAIV-6zZZ384eL0y8n_BpukgC16KAairp0yVozKKA8Q&s=10" alt="profile"
          className='w-full h-full object-cover rounded-full'/>
        </div>
      </div>
      
      <p className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">{name}</p>
      <h3 className="text-gray-900 dark:text-purple-400 text-sm font-semibold text-center mt-2">{phase}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs text-center mt-6">{city}</p>

      <div className="flex flex-wrap justify-center gap-2 w-full mt-8">
        <StatusBadge text={badge1} />
        <StatusBadge text={badge2} />
        <StatusBadge text={badge3} />
      </div>
    </div>
  );
}

export default ProfileCard;
