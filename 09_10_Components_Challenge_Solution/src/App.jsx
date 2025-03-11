// src/App.jsx
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import './App.css';  

function App() {
    return (
        <div className="layout">
            <header>
                <Header title="Welcome to My App" />
            </header>

            <Sidebar>
                <Button color="red" size="small" text="call me" />
                <Button color="blue" size="small" text="email" />
                <Button color="blanchedalmond" size="small" text="phone" />
                <Button color="darkolivegreen" size="small" text="whatsapp" />
                <Button color="gray" size="small" text="facebook" />
                <Button color="green" size="small" text="Click Me!" />
                <Button color="darksalmon" size="small" text="test" />
                <Button color="red" size="small" text="Click Me!" />
                <Button color="darkolivegreen" size="small" text="easy to use" />
            </Sidebar>

            <div className="main-content">
                <div className="posts">
                    <Post title="Post 1" description="This is a description of Post 1." color="red" />
                    <Post title="Post 2" description="This is a description of Post 2." color="green" />
                    <Post title="Post 3" description="This is a description of Post 3." color="green" />
                    <Post title="Post 4" description="This is a description of Post 4." color="green" />
                    <Post title="Post 5" description="This is a description of Post 5." color="green" />
                </div>

                <footer>
                    <p>Footer Content</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
