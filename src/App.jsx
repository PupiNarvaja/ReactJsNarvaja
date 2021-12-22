import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import ItemListContainer from "./components/productsContainer/ItemListContainer";
import ItemDetailContainer from "./components/productsContainer/ItemDetailContainer"
import CartWidget from './components/cart/CartWidget';
import NavBar from "./components/navbar/NavBar";
import Cart from "./components/cart/Cart";

const App = () => {
    
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header" id="header">
                    <NavBar cartWidget={CartWidget}></NavBar>
                </header>

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={ <ItemListContainer greeting="this is Awesome" /> }
                    />
                    <Route
                        exact
                        path="/category/:id"
                        element={ <ItemListContainer /> }
                    />
                    <Route
                        exact
                        path="/item/:id"
                        element={ <ItemDetailContainer /> }
                    />
                    <Route
                        exact
                        path="/cart"
                        element={ <Cart /> }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

//  Esto es true? -----> Entonces hace esto --> Si no, hace esto.
// value > inicial ? setValue(value + 1) : alert("Compra maxima")


// useEffect(() => {
//     console.log("Llamada a la api")
// }, []) //Se ejecuta una sola vez si declaramos array vacio. Si le ponemos por ejemplo otro estado, detectará cuando este cambie y activa el efecto.

// api ----> Pedazo de código con funciones
// Callback ---> Función pasada por parametro.


// 2 Tipos de eventos: Los que se ejecutan solos y los que son consecuentes de una accion.

// props, cambios de estados u ocurra un evento RE-RENDERIZAN COSAS
//  Por eso usamos removeAddEventListener. 
// Dentro del return debemos incluir un remove, para DESMONTAR el evento.
// e.preventDefault()
// e.stopPropagation ---> Ya que los eventos suben, lo usamos poara que solo afecte el evento afecte solo al componente que queremos y no a sus ancestros.