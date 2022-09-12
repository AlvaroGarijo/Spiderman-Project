import './App.css';
import { Navbar } from './componentes/Navbar';
import { InicioWeb } from './componentes/Navegacion/InicioWeb';
import { Footer } from './componentes/Footer';

function App() {
  return (
   
      <div className="App">
        <Navbar/>
        <InicioWeb/>
        <Footer/>
      </div>
   
  );
}

export default App;