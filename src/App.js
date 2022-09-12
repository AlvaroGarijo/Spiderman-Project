import './App.css';
import { Navbar } from './componentes/Navbar';
import { RoutersApp } from './routes/RoutersApp';
import { FooterApp } from './componentes/FooterApp';

function App() {
  return (
   
      <div className="App">
        <Navbar/>
        <RoutersApp/>
        <FooterApp/>
      </div>
   
  );
}

export default App;