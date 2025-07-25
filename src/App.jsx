import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { Home } from './pages/Home/Home';
import { LogIn } from './pages/LogIn/LogIn';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { SignIn } from './pages/SigIn/SigIn';
import { Cursos } from './pages/Cursos/Cursos';
function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/Cuenta' element={<UserProfile/>}/>
          <Route path='/SigIn' element={<SignIn />} />
          <Route path='/Cursos' element={<Cursos />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
