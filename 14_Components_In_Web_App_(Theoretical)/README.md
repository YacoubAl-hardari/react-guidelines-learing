
## **الدرس السابع: فهم المكونات (Components) في React**  

السلام عليكم،  
حياكم الله في الدرس السابع من سلسلة دروس **JavaScript**. بعد أن تحدثنا كثيرًا عن **المكونات (Components)**، حان الوقت لنغوص في التفاصيل ونفهم كيف ننظر إلى المواقع من منظور **تقسيمي**، حيث يتكون كل جزء من الموقع من مكونات منفصلة ومستقلة.  

### **المفهوم الأساسي للمكونات في React**  
عند بناء موقع إلكتروني، يمكننا تقسيمه إلى مكونات (Components) بحيث يكون كل جزء عبارة عن مكون مستقل. لنفترض أن لدينا موقعًا يحتوي على:  
- **Header (الهيدر)**: الجزء العلوي من الصفحة.  
- **Posts (المقالات/التدوينات)**: مجموعة من المقالات أو المنشورات.  
- **Sidebar (القائمة الجانبية)**: تحتوي على عناصر مثل **التصنيفات، الوسوم (الهاشتاقات)، وغيرها**.  

### **تجزئة الموقع إلى مكونات**  
عند تحليل الموقع باستخدام React، نجد أن كل عنصر مستقل يمكن تحويله إلى **مكون (Component)** يمكن إعادة استخدامه بسهولة.  

مثلاً:  
- **الهيدر (Header)** سيكون عبارة عن مكون مستقل يتم تعريفه في ملف منفصل، مثل:  
  ```jsx
  function MyHeader() {
      return <header>هذا هو الهيدر</header>;
  }
  export default MyHeader;
  ```  
- **القائمة الجانبية (Sidebar)** ستكون في ملف آخر، مثل:  
  ```jsx
  function Sidebar() {
      return <aside>القائمة الجانبية</aside>;
  }
  export default Sidebar;
  ```  
- **المقالات (Post)** ستكون أيضًا مكونًا مستقلًا:  
  ```jsx
  function Post() {
      return (
          <div className="post">
              <h2>عنوان التدوينة</h2>
              <p>محتوى التدوينة...</p>
          </div>
      );
  }
  export default Post;
  ```  

### **استخدام المكونات داخل مكون رئيسي (App Component)**  
كل هذه المكونات يتم استدعاؤها داخل **المكون الرئيسي** (App Component)، والذي يمثل الصفحة الكاملة:  
```jsx
import MyHeader from "./MyHeader";
import Sidebar from "./Sidebar";
import Post from "./Post";

function App() {
    return (
        <div className="app">
            <MyHeader />
            <div className="content">
                <Sidebar />
                <main>
                    <Post />
                    <Post />
                    <Post />
                </main>
            </div>
        </div>
    );
}

export default App;
```  

### **تفصيل مكونات داخل مكونات أخرى**  
يمكننا أيضًا تقسيم بعض المكونات إلى مكونات أصغر. مثلاً، يمكننا إنشاء **مكون خاص بالبروفايل (Profile)** لإعادة استخدامه داخل المكون **Post**:  
```jsx
function Profile({ name, image }) {
    return (
        <div className="profile">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}

export default Profile;
```  
ثم نستخدمه داخل **مكون Post**:  
```jsx
import Profile from "./Profile";

function Post() {
    return (
        <div className="post">
            <Profile name="أحمد" image="/path-to-image.jpg" />
            <h2>عنوان التدوينة</h2>
            <p>محتوى التدوينة...</p>
        </div>
    );
}

export default Post;
```  

```
/* تعيين الخط الأساسي وتنسيق الصفحة */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* تصميم الحاوية الرئيسية */
.app {
  max-width: 900px;
  margin: 20px auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

/* تصميم الهيدر */
header {
  background: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
}

/* تنسيق المحتوى */
.content {
  display: flex;
  padding: 20px;
}

/* تصميم القائمة الجانبية */
aside {
  width: 250px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
}

/* تنسيق المنشورات */
main {
  flex: 1;
  margin-left: 20px;
}

.post {
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.post h2 {
  color: #333;
  margin-bottom: 10px;
}

.post p {
  color: #555;
}

/* تصميم مكون البروفايل */
.profile {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.profile img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile h3 {
  margin: 0;
  font-size: 1rem;
  color: #007bff;
}



```
### **خلاصة الدرس**  
1. **المواقع تتكون من مكونات مستقلة**، كل جزء يمكن فصله إلى **Component** خاص به.  
2. يمكن **إعادة استخدام المكونات**، مثل تكرار مكون **Post** لعرض عدة تدوينات.  
3. يمكن **تداخل المكونات**، مثل استخدام مكون **Profile** داخل **Post**.  
4. **المكون الرئيسي (App Component)** يجمع كل المكونات معًا لإنشاء الموقع النهائي.  

بهذا الشكل، يصبح الموقع **منظمًا، قابلًا لإعادة الاستخدام، وأسهل في الصيانة والتطوير**. 🚀  
