import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1 ,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <div className="max-w-sm mx-auto bg-white mt-100 p-6 rounded-lg shadow-md space-y-4 text-center">
      <div className="text-lg font-semibold">
        Score: <span className="text-blue-600">{player.score}</span>
      </div>
      <button 
        onClick={handlePlusClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        +1
      </button>
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">First Name</label>
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">Last Name</label>
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
