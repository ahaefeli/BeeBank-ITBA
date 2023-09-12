import Image from 'next/image'
import Link from 'next/link'

import PublicNavBar from '../../generalContent/publicNav'
import HomeContent from '../../dedicatedContent/homeContent'
import Footer from '../../generalContent/footer'

export default function Home() {

  return (<>

    <main>
      <PublicNavBar />
      <HomeContent />
      <Footer />
    </main>

  </>
  )
}

/*export default function App() {
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






import '../css/dedicated/home-content.css';

export default function Index() {
  return (
    <div className='ReactContent'>

    </div>
  );*/


