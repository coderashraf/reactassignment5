import './App.css';
import Header from './Components/Header';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Contact from './Components/Contact';
import Students from './Components/Students';
import { StudentsDesc } from './Components/StudentsDesc';
import StudentDataCompo from './Components/StudentDataCompo';
function App() {
  return (
    <StudentDataCompo>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path='/student-desc' element={<StudentsDesc/>}/>
          <Route path='/student-desc/:stuId' element={<StudentsDesc/>}/>
        </Routes>
      </div>
    </StudentDataCompo>
  );
}

export default App;
