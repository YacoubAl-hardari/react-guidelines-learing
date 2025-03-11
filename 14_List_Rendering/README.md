
# الدرس 18: التعامل مع القوائم في React

## أهداف الدرس
- فهم كيفية إدارة وعرض القوائم في React.
- تعلم أهمية فصل البيانات عن مكونات واجهة المستخدم.
- استكشاف استخدام دالة `map` لعرض القوائم بشكل ديناميكي.

## الفوائد
- **القدرة على التوسع**: إدارة مجموعات بيانات كبيرة بسهولة دون الحاجة لتحديث واجهة المستخدم يدويًا.
- **سهولة الصيانة**: تبسيط الكود عن طريق فصل منطق البيانات عن عرض واجهة المستخدم.
- **المرونة**: تحديث وتعديل القوائم بسهولة مع تغييرات بسيطة في الكود.

## الخلاصة
في هذا الدرس، ناقشنا كيفية التعامل مع القوائم في React بشكل فعال. بدلًا من إنشاء عناصر واجهة المستخدم يدويًا لكل عنصر في القائمة، يمكننا استخدام نهج يعتمد على البيانات. عن طريق تخزين بيانات القائمة في مصفوفة واستخدام دالة `map`، يمكننا إنشاء مكونات واجهة المستخدم بشكل ديناميكي. هذا النهج أكثر قابلية للتوسع والصيانة، خاصة في المشاريع الكبيرة.

## المشكلة
في التحديات السابقة، رأينا كيفية عرض مجموعة من المنشورات أو الأزرار يدويًا. ومع ذلك، هذا النهج غير عملي ولا يمكن توسيعه، خاصة في المشاريع الكبيرة. إنشاء عناصر واجهة المستخدم يدويًا لكل عنصر في القائمة يستغرق وقتًا طويلاً وعرضة للأخطاء. النهج الأفضل هو تخزين البيانات في مصفوفة واستخدام حلقة (مثل `map`) لإنشاء عناصر واجهة المستخدم بشكل ديناميكي.

## الحل
يتضمن الحل فصل البيانات عن واجهة المستخدم. نقوم بتخزين بيانات القائمة في مصفوفة واستخدام دالة `map` للتنقل عبر المصفوفة وإنشاء عناصر واجهة المستخدم المقابلة. بهذه الطريقة، إضافة عنصر جديد إلى القائمة يتطلب فقط إضافته إلى المصفوفة، وسيتم تحديث واجهة المستخدم تلقائيًا.

### مثال على الكود
```jsx
// src/App.jsx 
import React from 'react';
import TaskUI from './components/ui/ToDoLi';
import './App.css';  

function App() {
    const tasks = [
        { id: 1, title: "إنهاء الواجبات المدرسية" },
        { id: 2, title: "طهي العشاء" },
        { id: 3, title: "الدراسة" },
        { id: 4, title: "تنظيف الغرفة" },
        { id: 5, title: "قراءة كتاب" },
        { id: 6, title: "شراء البقالة" },
        { id: 7, title: "ممارسة الرياضة" },
        { id: 8, title: "زيارة الأصدقاء" },
        { id: 9, title: "ترتيب المكتب" },
        { id: 10, title: "إعداد تقرير العمل" },
        { id: 11, title: "صيانة السيارة" },
        { id: 12, title: "التخطيط للأسبوع القادم" },
        { id: 13, title: "حضور اجتماع" },
        { id: 14, title: "مشاهدة فيلم وثائقي" },
        { id: 15, title: "التسوق عبر الإنترنت" }
    ];

    return (
        <div className="layout">
            <TaskUI tasks={tasks} />
        </div>
    );
}

export default App;
```

```jsx
// src/components/ui/ToDoLi
export default function ToDoList({ tasks, addTask, removeTask }) {
  return (
    <div className="todo-container">
      <h2 className="todo-title">قائمة المهام</h2>

      <div className="todo-input-container">
        <input type="text" className="todo-input" placeholder="إضافة مهمة جديدة..." />
        <button className="todo-add-btn">إضافة</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>
            <span>{task.title}</span>
            <button className="todo-delete-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```css
/* App.css */
.todo-container {
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: auto;
    text-align: center;
}

.todo-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
}

.todo-input-container {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
}

.todo-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
}

.todo-add-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.todo-add-btn:hover {
    background-color: #45a049;
}

.todo-list {
    padding: 0;
    list-style: none;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f4f6;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 8px;
    transition: background 0.3s ease, transform 0.2s ease;
}

.todo-item:hover {
    background-color: #e5e7eb;
    transform: scale(1.02);
}

.todo-delete-btn {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #ff4d4d;
    transition: color 0.3s;
}

.todo-delete-btn:hover {
    color: #cc0000;
}
```

## النقاط الرئيسية
- **العرض الديناميكي**: استخدام دالة `map` لعرض القوائم بشكل ديناميكي.
- **فصل المهام**: فصل منطق البيانات عن واجهة المستخدم لسهولة الصيانة.
- **القدرة على التوسع**: إضافة أو إزالة العناصر من القائمة بسهولة دون تعديل كود واجهة المستخدم.

