import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponente } from './components/EjercicioComponente';

function App() {

  const fecha = new Date();
  let year = fecha.getFullYear();
  console.log(year)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <EjercicioComponente year_actual = {year} />
       
        
        <h1>El estado en React - Hook useState</h1>

        <MiPrimerEstado />jh
      </header>
    </div>
  );
}

export default App;
