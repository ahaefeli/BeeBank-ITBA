import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//## Import Pages ##
// Unlogged pages
import Index from './pages/index';
import Support from './pages/support';
import Faq from './pages/faq';

import Login from './pages/login';
import Register from './pages/register';

import Error from './pages/error';

// Logged pages
import Home from './pages/logged/home';
import Cuentas from './pages/logged/cuentas';
import Transferencias from './pages/logged/transferencias';
import Prestamos from './pages/logged/prestamos';
import Configuracion from './pages/logged/configuracion';

import './css/main/main.css'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/soporte' element={<Support />} />
          <Route exact path='/preguntas-frecuentes' element={<Faq />} />
  
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registro' element={<Register />} />
  
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/cuentas' element={<Cuentas />} />
          <Route exact path='/transferencias' element={<Transferencias />} />
          <Route exact path='/prestamos' element={<Prestamos />} />
          <Route exact path='/configuracion' element={<Configuracion />} />

  
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}