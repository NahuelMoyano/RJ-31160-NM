import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>prueba de reactjs</h1><br/>
      <ItemListContainer  titulo= "Hola Mundo"/>
      <ItemCount stock={10} initial={1}/> 
    </div>
  );
}

export default App;
