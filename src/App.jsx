import "./App.css";
import ItemListContainer from "./components/productsContainer/ItemListContainer";
import ItemDetailContainer from "./components/productsContainer/ItemDetailContainer"
import CartWidget from './components/cart/CartWidget';
import NavBar from "./components/navbar/NavBar";
import ItemCount from "./components/itemcount/ItemCount";

const App = () => {
    return (
        <div className="App">
            <header className="App-header" id="header">
                <NavBar cartWidget={CartWidget}></NavBar>
            </header>
            <ItemListContainer greeting="Welcome to This." />
            <ItemCount stock= {5} valorInicial={1}/>
            <ItemDetailContainer />
        </div>
    );
};

export default App;
