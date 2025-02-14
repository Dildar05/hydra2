import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-black text-white'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
