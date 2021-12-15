import { useCounter } from '../../hooks/useCounter';

const ItemCount = ({stock, valorInicial}) => {

    const { counter, increment, decrement, addToCart, reset } = useCounter(stock, valorInicial);
    
    return (
        <div className="flex justify-center items-center flex-col w-40 h-40 mx-auto">
            <div className="flex flex-row justify-between items-center container">
                <button onClick={() => increment()} className="mt-2 px-4 py-1 border rounded-sm">+</button>
                <p>{counter}</p>
                <button onClick={() => decrement()} className="mt-2 px-4 py-1 border rounded-sm">-</button>
            </div>
            <button onClick={() => addToCart()} className="mt-2 px-4 py-1 border rounded-sm container">Add to cart</button>
            <button onClick={() => reset()} className="mt-2 px-4 py-1 border rounded-sm container">Reset</button>
        </div>
    );
}

export default ItemCount;

//  Esto es true? -----> Entonces hace esto --> Si no, hace esto.
// value > inicial ? setValue(value + 1) : alert("Compra maxima")


// useEffect(() => {
//     console.log("Llamada a la api")
// }, []) //Se ejecuta una sola vez si declaramos array vacio. Si le ponemos por ejemplo otro estado, detectará cuando este cambie y activa el efecto.

// api ----> Pedazo de código con funciones
// Callback ---> Función pasada por parametro.
