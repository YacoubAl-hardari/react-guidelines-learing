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
