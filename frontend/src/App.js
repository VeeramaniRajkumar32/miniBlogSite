import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from './pages/Register';
import Dashboard from './pages/Dashboard';
import { SingalPost } from './pages/Blogs/SingalPost';
function App() {
  return (
    <>
  <Router>
        <div ClassName="container">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/singalPost" element={<SingalPost/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
