export default function InputFile({ inputName, onChange, isRequired }) {
    return (
      <input 
        type="file" 
        name={inputName} 
        id={inputName} 
        accept="image/*"
        onChange={onChange} 
        className="block w-full px-4 py-2 border border-gray-300 rounded-md"
        required={isRequired}
      />
    );
  }
  