import { Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from "./Pages/Calendar/Calendar";
import CompletedTasks from "./Pages/CompleteTask/CompletedTasks";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import ToDo from "./Pages/ToDo/ToDo";

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completedTasks" element={<CompletedTasks />} />
        <Route path="/todo" element={<ToDo />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
