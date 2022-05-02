import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>prueba de reactjs</h1><br/>
      {/* <ItemListContainer  titulo= "Hola Mundo"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
