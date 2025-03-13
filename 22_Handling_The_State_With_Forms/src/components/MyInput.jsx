export default function MyInput ({inputType, inputName,Isrequired,InputValue,onChange}) {
  return (
    <input type={inputType} name={inputName} id={inputName} value={InputValue} onChange={onChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required={Isrequired}/>
  );
}