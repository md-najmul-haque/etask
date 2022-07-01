import { Routes, Route } from "react-router-dom";
import './App.css';
import CompletedTasks from "./Pages/CompletedTask/CompletedTasks";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completedTasks" element={<CompletedTasks />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
