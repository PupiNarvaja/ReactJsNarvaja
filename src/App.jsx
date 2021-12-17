import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import ItemListContainer from "./components/productsContainer/ItemListContainer";
import ItemDetailContainer from "./components/productsContainer/ItemDetailContainer"
import CartWidget from './components/cart/CartWidget';
import NavBar from "./components/navbar/NavBar";
import ItemCount from "./components/itemcount/ItemCount";

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
                        element="cart cart cart cart cart cart cart cart cart cart cart cart"
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
// (<ItemCount stock={5} valorInicial={1} />))