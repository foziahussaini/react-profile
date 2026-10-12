import React from 'react';

function StatusBadge({ text }) {
  return (
    <span className=" bg-purple-100 text-purple-800 text-[9px] font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
      {text}
    </span>
  );
}

export default StatusBadge;