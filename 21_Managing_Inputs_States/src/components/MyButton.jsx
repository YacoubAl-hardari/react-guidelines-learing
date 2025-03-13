import React from "react";
import {useState} from "react";

export default function MyButton() {
   const [name , setName] = useState('يعقوب');

   function changeName()
   {
    let finalName = '';
    if(name === 'يعقوب')
        finalName = setName('محمد')
        else 
    finalName = setName('يعقوب')

    return finalName;

   }

    return (
        <div>
                <h1>{name}</h1>
                {/* <button onClick={() => setName("حسين")}>اضغط لتغيير الاسم</button> */}
                <button onClick={changeName}>اضغط لتغيير الاسم</button>
        </div>
    );
}

