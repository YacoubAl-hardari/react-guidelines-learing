# الدرس الثامن من سلسلة دروس React JS

## مقدمة
في الدرس السابق، تحدثنا بشكل نظري ومفصل عن **المكونات (Components)** وكيفية تقسيم الصفحة. ما زلنا في مرحلة الفهم الأساسية، والآن سننتقل إلى موضوع **JSX** في React.

## ما هو JSX؟
**JSX** هو اختصار لـ **JavaScript XML**، وهو عبارة عن **دمج بين HTML و JavaScript**. عند كتابة كود **JSX**، فأنت عمليًا تكتب كود JavaScript بداخله HTML، ثم يتم تحويله إلى كود HTML النهائي الذي يراه المتصفح.

## قواعد أساسية في JSX
### 1. يجب إغلاق جميع التاجات
في HTML العادي، يمكن أحيانًا فتح عنصر بدون إغلاقه، مثل:
```html
<img src="image.jpg">
```
لكن في **JSX**، يجب دائمًا إغلاق جميع التاجات:
```jsx
<img src="image.jpg" />
```
إذا لم تفعل ذلك، ستحصل على خطأ **Syntax Error**.

### 2. يجب أن تحتوي `return` على عنصر واحد فقط
في **React**، عند استخدام `return` في **المكونات (Components)**، يجب أن يعود بعنصر واحد فقط. على سبيل المثال، الكود التالي سيؤدي إلى خطأ:
```jsx
return (
    <div>Hello</div>
    <div>World</div>
);
```
الحل هو وضع جميع العناصر داخل **عنصر واحد مغلف**، مثل `div`:
```jsx
return (
    <div>
        <div>Hello</div>
        <div>World</div>
    </div>
);
```
أو يمكنك استخدام **Fragment** بدلاً من `div`:
```jsx
return (
    <>
        <div>Hello</div>
        <div>World</div>
    </>
);
```

### 3. استخدام JavaScript داخل JSX
يمكنك استخدام **JavaScript expressions** داخل JSX عن طريق `{}`:
```jsx
const name = "Ahmed";
return <h1>Hello, {name}!</h1>;
```
أي كود JavaScript داخل `{}` سيتم تفسيره ككود JavaScript.

#### العمليات الحسابية داخل JSX
```jsx
const x = 10;
const y = 5;
return <h1>Sum: {x + y}</h1>;
```

#### استدعاء دوال داخل JSX
```jsx
function sayHello() {
    return "Hello World!";
}

return <h1>{sayHello()}</h1>;
```

#### استخدام الكائنات (Objects) داخل JSX
```jsx
const person = {
    name: "Yarab",
    email: "yarab@gmail.com"
};

return <h1>{person.name}</h1>;
```

## خلاصة
- **JSX** هو طريقة لكتابة HTML داخل JavaScript.
- يجب **إغلاق جميع التاجات** في JSX.
- يجب أن يحتوي `return` على **عنصر واحد فقط**.
- يمكنك استخدام **JavaScript expressions** داخل `{}`.

بهذا الشكل، تكون لديك قاعدة قوية لفهم **JSX** واستخدامه في React! 🚀
