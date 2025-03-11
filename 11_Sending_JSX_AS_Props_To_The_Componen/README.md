1- npm install 
2- npm run start 

### التحدي:

1. **التحدي الأساسي**: بناء تطبيق باستخدام **React** و **CSS Grid** مع إنشاء مكونات متعددة مثل الأزرار، الرأس، المنشورات، الشريط الجانبي، وتنسيق صفحة الويب باستخدام خصائص تصميمية مثل الألوان والأحجام المتنوعة.
   
2. **الهدف**: تمثل هذه الصفحة واجهة مستخدم منظمة باستخدام **React** و **CSS Grid Layout** التي تُنظم المكونات في تصميم مرن وذو استجابة. يمكن تخصيص الأزرار وتغيير الألوان والأحجام لتناسب تفضيلات المستخدم.

3. **الاستفادة**: 
   - **تعلم كيفية تنظيم المكونات** في **React** باستخدام خصائص مثل `props` و **component composition**.
   - **تعزيز المعرفة باستخدام CSS Grid** لإنشاء تصميمات مرنة.
   - **تحسين المهارات في التعامل مع الأزرار والألوان الديناميكية**.
   - **تعلم تقسيم المهام في واجهات المستخدم** باستخدام مكونات صغيرة ومرنة.

---

### نقاط الكود:

1. **Button Component**:
   - مكون زر مرن يعتمد على `props` لتحديد اللون والحجم والنص.
   - يتم استخدام الأصناف `color` و `size` لتخصيص مظهر الزر.
   
   ```jsx
   export default function Button({ color, size, text }) {
       return (
           <button className={`btn ${color} ${size}`}>
               {text}
           </button>
       );
   }
   ```

2. **Header Component**:
   - مكون رأس يحتوي على `title` يتم تمريره عبر `props`.
   - يظهر العنوان داخل عنصر `<h1>`.
   
   ```jsx
   export default function Header({ title }) {
       return (
           <header>
               <h1>{title}</h1>
           </header>
       );
   }
   ```

3. **Post Component**:
   - مكون للمنشورات يعرض العنوان (`title`) والوصف (`description`) مع تغيير اللون بناءً على `props`.
   - يستخدم CSS لتحديد الألوان المختلفة.

   ```jsx
   export default function Post({ title, description, color }) {
       return (
           <div className="post">
               <h2 className={`post-title ${color}`}>{title}</h2>
               <p>{description}</p>
               <hr />
           </div>
       );
   }
   ```

4. **Sidebar Component**:
   - مكون الشريط الجانبي الذي يحتوي على عنوان ثابت وقائمة من الأزرار يتم تمريرها كـ `children`.
   
   ```jsx
   export default function Sidebar({ children }) {
       return (
           <div className="sidebar">
               <h2>Sidebar</h2>
               {children}
           </div>
       );
   }
   ```

5. **App Component**:
   - مكون رئيسي يقوم بتجميع جميع المكونات الأخرى معًا في تطبيق واحد.
   - يستخدم **CSS Grid** لتحديد تخطيط الصفحة.
   - يحتوي على رأس وشريط جانبي ومحتوى رئيسي (منشورات).
   
   ```jsx
   function App() {
       return (
           <div className="layout">
               <header>
                   <Header title="Welcome to My App" />
               </header>

               <Sidebar>
                   <Button color="red" size="small" text="call me" />
                   {/* More buttons */}
               </Sidebar>

               <div className="main-content">
                   <div className="posts">
                       <Post title="Post 1" description="This is a description of Post 1." color="red" />
                       {/* More posts */}
                   </div>

                   <footer>
                       <p>Footer Content</p>
                   </footer>
               </div>
           </div>
       );
   }
   ```

6. **CSS Layout**:
   - **CSS Grid** يتم استخدامه لتنظيم الهيكل العام للصفحة (رأس، شريط جانبي، محتوى رئيسي).
   - **إعداد الألوان والأحجام للأزرار** لتتناسب مع الألوان المختلفة (أحمر، أخضر، أزرق...).
   
   ```css
   .layout {
       display: grid;
       grid-template-columns: 250px 1fr;
       grid-template-rows: auto 1fr;
       grid-template-areas:
           "header header"
           "sidebar main";
       height: 100vh;
   }
   ```

---

### خلاصة:
التطبيق هو واجهة مستخدم تستخدم **React** و **CSS Grid** لتنظيم محتويات مختلفة في تصميم مرن. تم استخدام مكونات صغيرة ومحددة (مثل الزر، الرأس، المنشور) لزيادة التفاعل مع المستخدم مع الحفاظ على التنظيم والتنقل السهل.
