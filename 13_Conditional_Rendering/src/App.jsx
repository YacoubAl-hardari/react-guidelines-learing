// src/App.jsx
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import './App.css';  

function App() {
    const descriptionPost = "This is a description of Post 1.";
    const showHeader = 0 ;
    return (
        <div className="layout">

            {IsShowHeader(showHeader)}

            <Sidebar>
            <Button color="purple" hover="btn-hover" size="small" text="Dashboard" icon="📊" />
                <Button color="blue" size="medium" text="Messages" icon="✉️" />
                <Button color="green" size="large" text="Settings" />
            </Sidebar>

            <div className="main-content">
                <div className="posts">
                  
                    <Post title="" description={descriptionPost} color="red">
                        <p>Some extra content inside the post!</p>
                    </Post>

                    <Post title="Second Post" description="Another post with custom content." color="blue">
                        <h3>Special Announcement</h3>
                    </Post>

                    <Post title="Third Post" color="green">
                        <p>This post has no description but has children content!</p>
                    </Post>
                </div>

                <footer>
                    <p>Footer Content</p>
                </footer>
            </div>
        </div>
    );
}

export default App;



function IsShowHeader(showHeader) 
{
    if(showHeader == 1) 
    return (
            <header>
                <Header title="Welcome to My App" />
            </header>
            
        
        
    );
}