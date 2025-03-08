### 📝 **الدرس التاسع: إضافة الأنماط في JSX**  


في هذا الدرس، تم التعمق في كيفية **إضافة الأنماط (Styles) في JSX** عند بناء المكونات (Components) في React.  

#### 🔹 **الفرق بين HTML و JSX في التعامل مع الأنماط**  
- في **HTML**، يتم استخدام `style` كـ **attribute** داخل العنصر، وتتم كتابة القيم كسلسلة نصية (String) مباشرةً:  
  ```html
  <h1 style="background-color: orange;">Hello World</h1>
  ```
- في **JSX**، يتم استخدام **كائن (Object) JavaScript** لتمثيل الأنماط، ويتم تمريره داخل `{}` كقيمة لـ `style`:  
  ```jsx
  <h1 style={{ backgroundColor: "orange" }}>Hello World</h1>
  ```

---

#### 🔹 **الطريقة الصحيحة لتنسيق العناصر في JSX**  
1️⃣ **إنشاء كائن (Object) للأنماط وتخزينه في متغير**  
   - يتم تعريف كائن يحتوي على خصائص CSS ولكن بأسلوب camelCase بدلًا من **kebab-case**.  
   ```jsx
   const style = {
       backgroundColor: "yellow",
       color: "blue",
       fontSize: "24px",
       padding: "10px"
   };
   ```
   - يتم استدعاء هذا المتغير داخل `style={}` عند تطبيق النمط على العنصر:
   ```jsx
   <h1 style={style}>Hello, my first React component!</h1>
   ```

2️⃣ **تمرير كائن الأنماط مباشرة داخل JSX**  
   - يمكن تعريف الأنماط مباشرة داخل `style={{}}` بدلًا من تخزينها في متغير مسبقًا.  
   ```jsx
   <p style={{ color: "green" }}>This is a simple example of a React component.</p>
   ```

3️⃣ **استخدام المتغيرات لتوحيد الأنماط**  
   - يمكن استخدام **متغير واحد** لإعادة استخدام نفس النمط لعناصر متعددة.  
   ```jsx
   const buttonStyle = {
       backgroundColor: "green",
       color: "white",
       fontSize: "24px",
       padding: "10px",
       borderRadius: "5px",
       cursor: "pointer"
   };
   ```
   - ثم تطبيق النمط على **زر Button** بنفس الطريقة:
   ```jsx
   <button style={buttonStyle} onClick={() => alert("Button Clicked")}>Click Me</button>
   ```

---

### 🎯 **نقاط مهمة في JSX والأنماط**  
✔ **خاصية `style` في JSX تأخذ كائن JavaScript وليس سلسلة نصية.**  
✔ **يتم استخدام camelCase لكتابة خصائص CSS داخل الكائن.**  
✔ **يمكن تعريف كائن أنماط خارجي وإعادة استخدامه لتجنب تكرار الأكواد.**  
✔ **يتم تمرير الدوال إلى `onClick` بدون استدعائها (أي بدون `()` في JSX).**  

---

### ✅ **كود التطبيق العملي**  
```jsx
export default function SayHelloFromMyFirstComponent() {
    const style = {
        backgroundColor: "yellow",
        color: "blue",
        fontSize: "24px",
        padding: "10px"
    };

    const buttonStyle = {
        backgroundColor: "green",
        color: "white",
        fontSize: "24px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <>
            <h1 style={style}>Hello, my first React component!</h1>
            <p style={{ color: "green" }}>This is a simple example of a React component.</p>
            <button style={buttonStyle} onClick={() => alert("Button Clicked")}>Click Me</button>
        </>
    );
}
```

🎉 **الآن أصبح لديك فهم واضح لكيفية تطبيق الأنماط داخل JSX في React!** 🚀