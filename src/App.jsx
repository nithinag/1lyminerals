import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderBot from './components/OrderBot';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Contact />
      </main>
      <Footer />
      <OrderBot />
    </div>
  );
}

export default App;
