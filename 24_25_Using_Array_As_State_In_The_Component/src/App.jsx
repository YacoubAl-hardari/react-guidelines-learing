import React, { useState } from "react";

function App() {
  const [names, setNames] = useState(["محمد", "حسين", "ماجد", "يعقوب", "نور"]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  
  function handleArray() {
    if (input.trim() !== "") {
      if (editIndex !== null) {
        setNames((prevNames) => prevNames.map((name, i) => (i === editIndex ? input : name)));
        setEditIndex(null);
      } else {
        setNames((prevNames) => [...prevNames, input]);
      }
      setInput("");
    }
  }

  function handleDelete(index) {
    setNames((prevNames) => prevNames.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setInput(names[index]);
    setEditIndex(index);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">إدارة الأسماء</h1>
        <ul className="list-disc list-inside space-y-2 mb-4">
          {names.map((name, index) => (
            <li key={index} className="text-gray-700 bg-gray-200 p-2 rounded flex justify-between items-center">
              {name}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-sm"
                >
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
                >
                  حذف
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="border border-gray-300 rounded p-2 flex-grow focus:outline-none focus:ring focus:border-blue-400"
            placeholder="أدخل اسمًا جديدًا"
          />
          <button
            onClick={handleArray}
            className={`px-4 py-2 rounded text-white ${editIndex !== null ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {editIndex !== null ? "تحديث" : "إضافة"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
