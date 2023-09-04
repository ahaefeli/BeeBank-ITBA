import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Pages
import Index from './pages/home';
import Support from './pages/support';
import Faq from './pages/faq';

import Login from './pages/login';
import Register from './pages/register';

import Error from './pages/error';

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
  
  
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}