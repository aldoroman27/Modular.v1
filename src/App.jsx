import './App.css'
//Utilizamos la librería de BrowserRouter para poder utilizar las rutas dentro de nuestra app
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Esta parte es donde importamos las rutas de nuestra aplicación.
import { NavBar } from './components/navbar';
import { Home } from './pages/Home/Home';
import { LogIn } from './pages/LogIn/LogIn';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { SignIn } from './pages/SigIn/SigIn';
import { Cursos } from './pages/Cursos/Cursos';
import { examenPosicionamiento } from './pages/examenPosicionamiento/examenPosicionamiento';
import { Ejercicios } from './pages/Ejercicios/Ejercicios';

//Dentro de nuestra función App es donde vamos a definir nuestras rutas de la aplicación.
function App() {
  return (
    <div className="App">
      {/*Además de eso vamos a envolver dentro de nuestra App los componentes que queremos que se reciclen dentro de este mismo*/}
      <Router>
        {/*En este caso tenemos envuelto en el componente de la barra de navegación, que siempre va a estar presente en nuestra app*/}
        <NavBar />
        {/*Aquí es donde tenemos definidas las rutas de nuestra aplicación, se indica la ruta y el elemento que vamos a utilizar*/}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/Cuenta' element={<UserProfile/>}/>
          <Route path='/SigIn' element={<SignIn />} />
          <Route path='/Cursos' element={<Cursos />} />
          <Route path='/Examenposicionamiento' element={<examenPosicionamiento/>}/>
          <Route path='/Ejercicios' element={<Ejercicios/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
