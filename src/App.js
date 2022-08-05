import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Customer from './components/customer/Customer';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Welcome />
      <About />
      <Customer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
