import { useState } from 'react';
import Button from './MyButton';
import Input from './MyInput';

export default function FormInput() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handelSubmit(event) {
    event.preventDefault();
    console.log(name, email);
  }

  return (
    <>
      <form onSubmit={handelSubmit} className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg" dir='rtl'>
        <div className="mb-4">
          <p>name: {name}</p>
          <p>email: {email}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
          <Input 
            inputType="text" 
            inputName="name" 
            InputValue={name}
            Isrequired={false}
            onChange={(event) => setName(event.target.value)} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">الايميل</label>
          <Input 
            inputType="text" 
            inputName="email" 
            InputValue={email} 
            Isrequired={true}
            onChange={(event) => setEmail(event.target.value)} 
          />
        </div>

        <div className="mb-6">
          <Button type="submit" color="green" />
        </div>
      </form>
    </>
  );
}
