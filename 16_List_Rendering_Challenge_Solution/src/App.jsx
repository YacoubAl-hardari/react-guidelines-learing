// src/App.jsx
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import './App.css';  

function App() {

    const posts = [
        {
            id: 1,
            title: "عنوان المدونة 1",
            description: "وصف المدونة 1",
            date: "2025-03-10",
            color: "red" // ✅ تم إضافة لون
        },
        {
            id: 2,
            title: "عنوان المدونة 2",
            description: "وصف المدونة 2",
            date: "2025-03-11",
            color: "blue"
        },
        {
            id: 3,
            title: "عنوان المدونة 3",
            description: "وصف المدونة 3",
            date: "2025-03-12",
            color: "green"
        }
    ];
    

    const buttons = [
        {
            id:1,
            color: 'red',
            hover: 'btn-hover',
            size: 'small',
            text: 'Home'
        },
        {
            id:2,
            color: 'blue',
            hover: '',
            size: 'small',
            text: 'Posts'
        },

    ];
    return (
        <div className="layout">
            <header>
                <Header title="Welcome to My App" />
            </header>

            <Sidebar>
                {buttons.map((button) => 

                <Button color={button.color} size= {button.size} text= {button.text} icon="✉️" />
                
                )}
            </Sidebar>

            <div className="main-content">
                <div className="posts">
                  {posts.map((post)=>   
                    <Post key={post.id} title={post.title} description={post.description} color={post.color}>
                          <p>تاريخ النشر: {post.date}</p>
                    </Post>
                )}
                   
                </div>

                <footer>
                    <p>Footer Content</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
