import './App.css';
import { Navbar } from './componentes/Navbar';
import { CenterApp } from './componentes/CenterApp';
import { Footer } from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CenterApp/>
      <Footer/>
    </div>
  );
}

export default App;