import { useState, useCallback } from 'react';
import Button from './MyButton';
import Input from './MyInput';

const initialFormData = {
  name: '',
  email: ''
};

export default function FormInput() {


  
  const [formData, setFormData] = useState(initialFormData);

  const handelInputChange = useCallback((event) => {

    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));


  }, []);


  function handelSubmit(event) {
    event.preventDefault();
    console.log(formData.name, formData.email);
    resetForm();
  }



  function resetForm() {
    setFormData(initialFormData);
  }


  return (
    <form onSubmit={handelSubmit} className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg" dir='rtl'>
      <div className="mb-4">
        <p>name: {formData.name}</p>
        <p>email: {formData.email}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
        <Input 
          inputType="text" 
          inputName="name" 
          value={formData.name}
          isRequired={false}
          onChange={handelInputChange} 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">الايميل</label>
        <Input 
          inputType="text" 
          inputName="email" 
          value={formData.email} 
          isRequired={true}
          onChange={handelInputChange} 
        />
      </div>

      <div className="mb-6">
        <Button type="submit" color="green" />
      </div>
    </form>
  );
}
