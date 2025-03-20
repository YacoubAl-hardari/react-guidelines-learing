import { useState } from 'react';

function App() {
  const inputs = {
    name: '',
    phone: '',
    checkbox: false,
    selectBox: '',
  };

  const [formInputs, setFormInput] = useState(inputs);
  const [errors, setErrors] = useState({});

  function handleFormInputs(event) {
    const { name, value, type, checked } = event.target;
    setFormInput((prevInputs) => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function validateForm() {
    let newErrors = {};

    if (!formInputs.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }

    if (!formInputs.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^\d{9,15}$/.test(formInputs.phone)) {
      newErrors.phone = 'رقم الهاتف غير صالح';
    }

    if (!formInputs.selectBox) {
      newErrors.selectBox = 'الرجاء اختيار نطاق الراتب';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      alert('تم الإرسال بنجاح');
      setFormInput(inputs);
    }
  }

  function isFormFilled() {
    return (
      formInputs.name.trim() !== '' &&
      formInputs.phone.trim() !== '' &&
      /^\d{9,15}$/.test(formInputs.phone) &&
      formInputs.selectBox !== ''
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" dir="rtl">
      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4 text-center">نموذج الإدخال</h2>

        <label className="block mb-2 text-gray-700">الاسم</label>
        <input
          type="text"
          name="name"
          value={formInputs.name}
          onChange={handleFormInputs}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="أدخل اسمك"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <label className="block mt-4 mb-2 text-gray-700">رقم الهاتف</label>
        <input
          type="number"
          name="phone"
          value={formInputs.phone}
          onChange={handleFormInputs}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="أدخل رقم هاتفك"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="employee"
            name="checkbox"
            checked={formInputs.checkbox}
            onChange={handleFormInputs}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="employee" className="ml-2 text-gray-700">
            هل أنت موظف؟
          </label>
        </div>

        <label className="block mt-4 mb-2 text-gray-700">الراتب</label>
        <select
          name="selectBox"
          value={formInputs.selectBox}
          onChange={handleFormInputs}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">اختر نطاق الراتب</option>
          <option value="1">أقل من 3000</option>
          <option value="2">3000 - 5000</option>
          <option value="3">5000 - 10000</option>
          <option value="4">أكثر من 10000</option>
        </select>
        {errors.selectBox && <p className="text-red-500 text-sm">{errors.selectBox}</p>}

        <button
          type="submit"
          disabled={!isFormFilled()}
          className={`w-full mt-4 py-2 rounded-lg ${
            isFormFilled()
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-red-400 text-red-700 cursor-not-allowed'
          }`}
        >
          إرسال
        </button>
      </form>
    </div>
  );
}

export default App;
