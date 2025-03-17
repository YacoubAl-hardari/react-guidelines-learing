# Try out some challenges

1. Fix incorrect state updates  
2. Find and fix the mutation  
3. Update an object with Immer  

---

## Challenge 1 of 3: Fix incorrect state updates  

This form had a few bugs:  
- Clicking the `+1` button did not update the score immediately.  
- Editing the first name caused the score to update unexpectedly.  
- Editing the last name caused the score to reset or disappear.  

### Issues and Fixes  

1. **Score Update Not Working**  
   - **Issue**: The function `handlePlusClick` directly mutated the `player` object (`player.score++`), which React does not track properly for state updates.  
   - **Fix**: Use `setPlayer` with a new object while spreading the previous state and incrementing `score` correctly.  

2. **Editing First Name Makes Score Update**  
   - **Issue**: The `setPlayer` call inside `handleFirstNameChange` did not retain the `score` value properly.  
   - **Fix**: Spread the entire `player` object when updating `firstName` so that other properties (like `score`) are not lost.  

3. **Editing Last Name Resets the Score**  
   - **Issue**: The `setPlayer` function inside `handleLastNameChange` was missing the spread operator for the `player` object, causing `score` and `firstName` to be lost.  
   - **Fix**: Use `{ ...player, lastName: e.target.value }` to keep all existing properties.  

### Corrected Code  

```jsx
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
