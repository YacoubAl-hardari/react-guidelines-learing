export default function InputCheckbox ({inputName,Isrequired,InputValue,onChange}) {
    return (
      <input type="checkbox" name={inputName} id={inputName} checked={InputValue} onChange={onChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md " required={Isrequired}/>
    );
  }