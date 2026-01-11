import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <main className="bg-light">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        
        </Routes>
       </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
