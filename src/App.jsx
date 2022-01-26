import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./components/productsContainer/ItemListContainer"
import ItemDetailContainer from "./components/productsContainer/ItemDetailContainer"
import Cart from "./components/cart/CartContainer"
import {CartContextProvider} from './context/CartContext'
import { NotFound } from './components/NotFound/NotFound'
import HeaderContainer from './components/header/HeaderContainer'
import "./App.css"

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={ <ItemListContainer greeting={ "this is Awesome" } /> }
                        />
                        <Route
                            exact
                            path="/category/:id"
                            element={ <ItemListContainer greeting={ "these are our " } /> }
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
                        {/* <Route
                            exact
                            path="/favorites"
                            element={ <Cart /> }
                        /> */}
                        <Route
                            exact
                            path="*"
                            element={ <NotFound /> }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App