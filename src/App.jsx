import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { Home } from './pages/Home/Home';
import { LogIn } from './pages/LogIn/LogIn';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { SignIn } from './pages/SigIn/SigIn';
function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/Cuenta' element={<UserProfile
          photo = "/amewing.jpg"
          username ="cow27"
          fullName="Aldo Román Del Muro"
          birthDate="27/12/02"
          lenguages={["JavaScrpit","Python", "C++"]}
          experience="2 años o mas"/>}/>
          <Route path='/SigIn' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
