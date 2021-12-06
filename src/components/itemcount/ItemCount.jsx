import React, { useState } from 'react';

const ItemCount = ({stock, valorInicial}) => {

    const [counter, setCounter] = useState(valorInicial);
    
    const add = () => {
        if (counter < stock ) {
            setCounter(prev => prev + 1);
        }
    };

    const substract = () => {
        if (counter > valorInicial) {
            setCounter(prev => prev - 1);
        }
    };

    const addToCart = () => {
        console.log("Producto añadido con éxito!");
    };

    return (
        <div className="flex justify-center items-center flex-col w-40 h-40 mx-auto">
            <div className="flex flex-row justify-between items-center container">
                <button onClick={add} className="mt-2 px-4 py-1 border rounded-sm">+</button>
                <p>{counter}</p>
                <button onClick={substract} className="mt-2 px-4 py-1 border rounded-sm">-</button>
            </div>
            <button onClick={addToCart} className="mt-2 px-4 py-1 border rounded-sm container">Add to cart</button>
        </div>
    );
}

export default ItemCount;


// useEffect(() => {
//     console.log("Llamada a la api")
// }, []) //Se ejecuta una sola vez si declaramos arrya vacio. Si le ponemos por ejemplo otro estado, detectará cuando este cambie y activa el efecto.
