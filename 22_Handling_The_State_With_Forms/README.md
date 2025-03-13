## نقاط وأهداف المشروع

- **تعلم إدارة الحالة:** التعرف على كيفية استخدام hook **useState** في إدارة بيانات النموذج سواء بشكل منفصل أو في كائن موحّد.
- **تحسين الأداء:** استخدام **useCallback** لتثبيت الدوال المُمررة كـ props وتقليل عمليات إعادة الرسم غير الضرورية.
- **إعادة الاستخدام:** إنشاء مكونات عامة مثل **MyButton** و **MyInput** لتسهيل عملية بناء واجهات مستخدم متناسقة.
- **تطبيق عملي:** بناء نماذج تفاعلية مع أحداث الإدخال والإرسال، مما يُساعد المطورين على فهم ديناميكيات React مع أمثلة عملية.



## نظرة عامة

يستخدم هذا المشروع مكونات React لإنشاء نماذج (Forms) متعددة بطرق مختلفة لإدارة حالة الحقول. سنستعرض ثلاث طرق:

- **الإصدار الأول:** استخدام hook منفصل (useState) لكل حقل.
- **الإصدار الثاني:** استخدام useState لمتغير حالة موحّد يحتوي على جميع الحقول.
- **الإصدار الثالث:** مثل الإصدار الثاني لكن مع استخدام **useCallback** لتحسين أداء تحديث الحالة عند تمرير الدالة كـ prop.

كما يحتوي المشروع على مكونات **MyButton** و **MyInput** كعناصر قابلة لإعادة الاستخدام مع تنسيق باستخدام Tailwind CSS.

---

## 1. إصدار النموذج الأول – استخدام useState منفصل لكل حقل

### الشرح

في هذا الإصدار يتم إنشاء حالة مستقلة لكل من حقل الاسم وحقل البريد الإلكتروني باستخدام hook **useState**.  
- **useState:** يسمح بتعريف حالة لكل متغير على حدة.  
- يتم تعريف دالة **handelSubmit** لمنع إعادة تحميل الصفحة عند الضغط على زر الإرسال وإظهار القيم في وحدة التحكم (console).

### الكود

```jsx
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
        <form onSubmit={handelSubmit} className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg" dir="rtl">
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

```

### النقاط الرئيسية

- **فصل الحالة:** لكل حقل حالة مستقلة مما يجعل الكود واضحًا وسهل الفهم في النماذج البسيطة.
- **التعامل مع الحدث:** دالة onChange تقوم بتحديث الحالة مباشرة عند تغيير قيمة الحقل.
- **التعامل مع الإرسال:** تمنع إعادة تحميل الصفحة وتعرض القيم في console.

---

## 2. إصدار النموذج الثاني – استخدام useState لمتغير حالة موحّد

### الشرح

في هذا الإصدار يتم استخدام كائن (Object) واحد لتخزين جميع بيانات النموذج داخل حالة واحدة.  
- بدلاً من إنشاء حالة لكل حقل على حدة، يتم استخدام كائن **FormData** يحتوي على خصائص مثل **name** و **email**.
- دالة **handelInputChange** تستخدم اسم الحقل (name) لتحديث القيمة المناسبة باستخدام تقنية الـ computed property names.

### الكود

```jsx
import { useState } from 'react';
import Button from './MyButton';
import Input from './MyInput';

export default function FormInput() {
  const [FormData, setFormData] = useState({
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
      <form onSubmit={handelSubmit} className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg" dir="rtl">
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
```

### النقاط الرئيسية

- **تجميع البيانات:** استخدام كائن موحّد لإدارة كل الحقول يجعل من السهل إضافة المزيد من الحقول في النماذج الكبيرة.
- **إعادة استخدام الدالة:** دالة واحدة (**handelInputChange**) لتحديث الحالة لجميع الحقول باستخدام اسم الحقل.
- **الحفاظ على الحالة السابقة:** باستخدام العامل spread (`...prevFormData`) لعدم فقدان القيم الأخرى أثناء التحديث.

---

## 3. إصدار النموذج الثالث – استخدام useCallback لتحسين الأداء

### الشرح

في هذا الإصدار يتم تحسين أداء النموذج باستخدام hook **useCallback** لتثبيت (memoize) دالة التغيير بحيث لا يتم إعادة إنشائها في كل عملية إعادة رسم (render).  
- **useCallback:** تساعد في تجنب إعادة إنشاء الدوال في كل مرة يُعاد فيها رندر المكون، مما يكون مفيدًا خاصة عند تمرير الدوال لمكونات فرعية.
- يستخدم أيضًا كائن **initialFormData** لتعريف الحالة الابتدائية وتسهيلاً لإعادة ضبط النموذج بعد الإرسال.

### الكود

```jsx
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
    <form onSubmit={handelSubmit} className="max-w-sm mx-auto p-6 mt-100 bg-white shadow-lg rounded-lg" dir="rtl">
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
```

### النقاط الرئيسية

- **تحسين الأداء:** استخدام useCallback يساعد في تثبيت دالة **handelInputChange** بحيث لا تتغير مراجعها عند كل إعادة رسم.
- **إعادة ضبط النموذج:** عند الإرسال، يتم إعادة ضبط الحالة إلى القيم الابتدائية باستخدام دالة **resetForm**.
- **إدارة حالة موحّدة:** مشابه للإصدار الثاني، لكن مع تحسين الأداء بفضل useCallback.

---


# توثيق الإصدارات

## FormV1.md
```markdown
# النموذج - الإصدار الأول

## المميزات
- إدارة حالة منفصلة لكل حقل
- استخدام useState بشكل أساسي
- عرض القيم المحدثة في الوقت الحقيقي

## البنية
```jsx
const [name, setName] = useState('');
const [email, setEmail] = useState('');
```

## نقاط القوة
- بساطة الفهم للمبتدئين
- تحكم مباشر في كل حقل

## نقاط الضعف
- يصبح معقدًا مع زيادة الحقول
- تكرار الكود

## الاستخدام
```jsx
import FormV1 from './components/FormV1';
```

```

## FormV2.md
```markdown
# النموذج - الإصدار الثاني

## المميزات
- إدارة حالة موحدة باستخدام كائن
- دالة معالجة موحدة للتغييرات
- تحسين قابلية الصيانة

## البنية
```jsx
const [FormData, setFormData] = useState({
  name: '',
  email: ''
});
```

## التحسينات عن V1
- تقليل عدد حالات useState
- كود أكثر تنظيماً
- سهولة إضافة حقول جديدة

## الاستخدام
```jsx
import FormV2 from './components/FormV2';
```

```

## FormV3.md
# النموذج - الإصدار الثالث

## المميزات
- استخدام useCallback لتحسين الأداء
- إعادة تعيين النموذج بعد الإرسال
- كود أكثر كفاءة

## البنية
```jsx
const handelInputChange = useCallback((event) => {
  // معالجة التغيير
}, []);
```

## التحسينات عن V2
- منع إعادة إنشاء الدوال غير الضرورية
- إعادة تعيين الحقول بعد الإرسال
- استخدام القيم الابتدائية بشكل منظم

## الاستخدام
```jsx
import FormV3 from './components/FormV3';
```

## مكونات MyButton و MyInput

### MyButton

تُستخدم هذه المكوّنات لإنشاء زر إرسال مع تنسيق جاهز باستخدام Tailwind CSS.  
- **المتغيرات:**  
  - **type:** نوع الزر (مثلاً submit).
  - **color:** لتحديد لون الخلفية الذي يتم استخدامه في إنشاء الفئات (classes).

#### الكود

```jsx
export default function MyButton({ type, color }) {
  return (
    <button type={type} className={`w-full px-4 py-2 bg-${color}-600 text-white rounded-md shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}>
      إرسال
    </button>
  );
}
```

---

### MyInput

مكون لإدخال البيانات يُستخدم مع النماذج، حيث يتم تمرير الخصائص مثل نوع الإدخال، الاسم، القيمة، والخاصية الخاصة بالاجبار (required).

#### الكود

```jsx
export default function MyInput({ inputType, inputName, Isrequired, InputValue, onChange }) {
  return (
    <input
      type={inputType}
      name={inputName}
      id={inputName}
      value={InputValue}
      onChange={onChange}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      required={Isrequired}
    />
  );
}
```

---

## مكون App

هذا المكون يقوم باستيراد النماذج المختلفة (يُمكنك تفعيل الإصدار الذي تفضله) ومن ثم عرضه. في المثال الحالي يتم استخدام الإصدار الثالث.

#### الكود

```jsx
// import FormV1 from './components/form_v1'
// import FormV2 from './components/form_v2'
import FormV3 from './components/form_v2'

function App() {
  return (
    <>
      {/* <FormV1/> */}
      {/* <FormV2/> */}
      <FormV3/>
    </>
  );
}

export default App;
```
