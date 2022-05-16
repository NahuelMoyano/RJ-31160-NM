import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './componentes/NavBar';
import { CartContextProvider } from './store/CartContext';
import CartView from './componentes/CartView' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path= "/" element= { <ItemListContainer titulo="Bienvenido a nuestra tienda" /> } />
            <Route path= "/category/:categoryid" element=  { <ItemListContainer titulo="Categorias de productos"/> } />
            <Route path= "/manga/:itemid" element= {<ItemDetailContainer id= {3} />} />
            <Route path= "/cart" element= {<CartView/>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;