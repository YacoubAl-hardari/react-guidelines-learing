import { useState } from 'react';
import Button from './MyButton';
import Input from './MyInput';

export default function FormInput() {
  const [FormData,setFormData] = useState({
    name: '',
    email: ''
  });



  function handelInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }


  function handelSubmit(event) {
    event.preventDefault();
    console.log(FormData.name, FormData.email);
  }

  return (
    <>
      <form onSubmit={handelSubmit} className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg" dir='rtl'>
        <div className="mb-4">
          <p>name: {FormData.name}</p>
          <p>email: {FormData.email}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
          <Input 
            inputType="text" 
            inputName="name" 
            InputValue={FormData.name}
            Isrequired={false}
            onChange={handelInputChange} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">الايميل</label>
          <Input 
            inputType="text" 
            inputName="email" 
            InputValue={FormData.email} 
            Isrequired={true}
            onChange={handelInputChange} 
          />
        </div>

        <div className="mb-6">
          <Button type="submit" color="green" />
        </div>
      </form>
    </>
  );
}
