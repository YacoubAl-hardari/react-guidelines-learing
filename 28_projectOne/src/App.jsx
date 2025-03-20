import { useState } from 'react';

function App() {
  const inputs  =
  {
    name: '',
    phone: '',
    checkbox: false,
    selectBox: '',
  }
  const [formInputs, setFormInput] = useState(inputs);

  const [errors, setErrors] = useState({});

  function handleFormInputs(event) {

  }

  function validateForm() {

  }

  function handleSubmit(event) {


  }
  
  function isFormFilled() {
 
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" dir="rtl">
      <form className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">نموذج الإدخال</h2>

        <label className="block mb-2 text-gray-700">الاسم</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="أدخل اسمك"
        />

        <label className="block mt-4 mb-2 text-gray-700">رقم الهاتف</label>
        <input
          type="number"
          name="phone"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="أدخل رقم هاتفك"
        />

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="employee"
            name="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="employee" className="ml-2 text-gray-700">
            هل أنت موظف؟
          </label>
        </div>

        <label className="block mt-4 mb-2 text-gray-700">الراتب</label>
        <select
          name="selectBox"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">اختر نطاق الراتب</option>
          <option value="1">أقل من 3000</option>
          <option value="2">3000 - 5000</option>
          <option value="3">5000 - 10000</option>
          <option value="4">أكثر من 10000</option>
        </select>

        
        <button
  type="submit"
  className="w-full mt-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700" 
>
  إرسال
</button>



      </form>
    </div>
  );
}

export default App;
