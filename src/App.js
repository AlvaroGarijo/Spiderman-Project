import './App.css';
import { CenterApp } from './componentes/CenterApp';
import { Footer } from './componentes/Footer';
import { Navbar } from './componentes/Navbar';

function App() {
  return (
    <div className="App">
     <h1>Spider-Man</h1>
      <Navbar/>
      <CenterApp/>
      <Footer/>
    </div>
  );
}

export default App;