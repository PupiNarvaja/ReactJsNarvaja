import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/cart/CartWidget';
import NavBar from "./components/navbar/NavBar";
import ItemCount from "./components/itemcount/ItemCount";

const App = () => {
    return (
        <div className="App">
            <header className="App-header" id="header">
                <NavBar cartWidget={CartWidget}></NavBar>

            </header>
            <ItemListContainer greeting="Bienvenido a This." />
            <ItemListContainer greeting="Nuestro sitio web está en construcción. ¡Vuelva pronto a ver si hay novedades!" />
            <ItemCount stock= {5} valorInicial={1}/>
        </div>
    );
};

export default App;
