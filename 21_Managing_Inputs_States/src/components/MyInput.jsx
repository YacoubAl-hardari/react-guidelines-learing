import { useState } from "react";
export default function MyInput () {
    let [name, setName] = useState('');

    function handelNameChange(event) {
        setName(event.target.value);
    }
  return (
    <>
      <input type="text" value={name} onChange={handelNameChange} />
      <h1>{name}</h1>
    </>
  );
}