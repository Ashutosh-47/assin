import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './Component/Search';
import Login from './Component/Login';
import Signup from './Component/Signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/home" element={<Search/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
