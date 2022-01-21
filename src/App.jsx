import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import ItemListContainer from "./components/productsContainer/ItemListContainer"
import ItemDetailContainer from "./components/productsContainer/ItemDetailContainer"
import Cart from "./components/cart/CartContainer"
import {CartContextProvider} from './context/CartContext'
import { NotFound } from './components/NotFound/NotFound'
import HeaderContainer from './components/header/HeaderContainer'

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
                            element={ <ItemListContainer greeting={ "these are our " }/> }
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
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    );
};

export default App; //<span className="bgHoverText">Awesome</span>

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



// Intercambiabilidad.
// Intecambiamos en un mismo componente la funcionabilidad.



// Context
// Nos permite hacer datos persistentes sin la necesidad de estar contastemente llamando a bases de datos.
// Nos crea estados y funciones globales persistentes

// export const ContextApp = createContext([]) valor inicial.
// provider provee estados y funciones que voy a guardar dentro del contexto.
// consumer es quien consume los estados y funciones.

// <ContextApp.Provider value={}> en value inyectamos los estados y las funciones que queramos usar. Estados abajo
//      <ItemListContainer>
// </ContextAp.Providerp>  ----- > dentro de el encerramos a quienes queremos que reciba los contextos. Ahora son hijos del context.

// createContext
// useContext
// .Provider

// const { algo que queramos pasar del contexto a acá } = useContext(ContextApp)
// Y podemos usar lo que pasemos del context.

// Técnicas de renderizado.

// 1_ Condicional con retorno temprano.
// 2_ Condicional con si si.
// 3_ ternario inline.  return <h2>{condition === true ? opcionA : opcionB}</h2> --------> Se crea un único componente ---> Mejor performance.
// 4_ ternario para aplicar styles. style= {{ color: condition ? 'red' : 'green' }} También aplica para CLASSNAME.

// Memo from react ----> Recomendado para listas largas y evitar largos re-renders. N o recomendado para listas sencillas.    USAR EN ITEMLIST!!!!!!
// Recibe 2 parametros o 1. si eees uno, poasa un componente. si son 2, es componente o funcion que evalua condiciones.