export default function InputRadio ({inputName,Isrequired,InputValue,onChange}) {
    return (
      <input type="radio" name={inputName} id={inputName} value={InputValue} onChange={onChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md " required={Isrequired}/>
    );
  }