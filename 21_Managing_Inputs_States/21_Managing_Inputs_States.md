### الدرس 25: **إدارة الحالة في React باستخدام `useState`**

### أهداف الدرس:
1. **فهم استخدام `useState` في React**:
   - التعرف على كيفية إدارة الحالة (state) داخل مكونات React.
   - تعلم كيفية ربط الحقول النصية مع الحالة لتحديث البيانات بناءً على تفاعل المستخدم.

2. **تعلم كيفية التعامل مع الأحداث في React**:
   - تعلم كيفية استخدام دالة `onChange` لالتقاط تغييرات المدخلات (inputs) وتحديث الحالة.

3. **إنشاء مكونات تفاعلية**:
   - بناء مكونات React تتفاعل مع المستخدم، مثل تغيير النص عند الضغط على زر.

### الفوائد:
- **إدارة الحالة في المكونات**: باستخدام `useState`، يمكنك تخزين البيانات داخل المكونات وجعلها قابلة للتحديث بناءً على تفاعل المستخدم.
  
- **المرونة في التفاعل مع المستخدم**: من خلال استخدام `useState` مع الأحداث (مثل `onChange` و `onClick`)، يمكنك بناء تطبيقات تفاعلية ومُستخدمة بسهولة.
  
- **تحسين تجربة المستخدم**: التحديث الفوري للبيانات عند التفاعل مع المدخلات أو الأزرار يساهم في تحسين تجربة المستخدم وجعل التطبيق أكثر ديناميكية.

### الشرح مع الأمثلة:
#### 1. **المكون `MyInput`**:
```jsx
import { useState } from "react";

export default function MyInput() {
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
```
- في هذا المكون، قمنا باستخدام `useState` لإنشاء حالة `name`، حيث يتم تخزين النص المدخل من قبل المستخدم في الحقل النصي. وعند تغيير النص، يتم تحديث الحالة وعرض القيمة الجديدة في العنصر `<h1>`.

#### 2. **المكون `MyButton`**:
```jsx
import React from "react";
import {useState} from "react";

export default function MyButton() {
   const [name , setName] = useState('يعقوب');

   function changeName() {
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
            <button onClick={changeName}>اضغط لتغيير الاسم</button>
        </div>
    );
}
```
- في هذا المكون، يتم تغيير الاسم عند الضغط على الزر بين "يعقوب" و "محمد". نستخدم `useState` لتخزين الاسم وتغييره عند النقر على الزر.

#### 3. **المكون `App`**:
```jsx
import React from 'react';
import logo from './logo.svg';
import Button from './components/MyButton';
import Input from './components/MyInput';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>مرحبًا بك في React!</p>
        <Button />
        <Input />
      </header>
    </div>
  );
}

export default App;
```
- في المكون الرئيسي `App`، نقوم بدمج مكونات `MyButton` و `MyInput` معًا لعرض الزر والحقل النصي وتفاعل المستخدم معهما.

### الخلاصة:
- في هذا الدرس، تعلمنا كيفية استخدام **`useState`** لإدارة الحالة داخل مكونات React.
- قمنا ببناء مكونات تفاعلية مثل **حقل النص** الذي يتم تحديثه عند الكتابة، وزر يقوم بتغيير الاسم عند الضغط.
- باستخدام `useState` مع الأحداث مثل **`onChange`** و **`onClick`**، يمكنك بناء تطبيقات تفاعلية توفر تجربة مستخدم متميزة. 
