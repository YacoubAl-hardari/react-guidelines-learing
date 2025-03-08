import MyHeader from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Post from "./components/Post";
import "./App.css";
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
