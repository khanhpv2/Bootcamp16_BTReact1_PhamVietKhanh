import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Content from './Component/Content';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
          < Header />
          <div className='bg-danger w-100' style={{height:'3px'}}></div>
          <div className='bg-dark'>
          < Nav />
          </div>
          <Content />
          <Footer />
    </div>
  );
}

export default App;
