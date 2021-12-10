import { useState } from "react";

export const useCounter = (stock, estadoInicial) => {
    const [counter, setCounter] = useState(estadoInicial);
    const increment = () => {
        counter < stock ? setCounter((prev) => prev + 1) : alert("Compra máxima alcanzada.");
    };
    const decrement = () => {
        counter > estadoInicial ? setCounter((prev) => prev - 1) : alert("Compra mínima alcanzada.");
    };
    const addToCart = () => {
        setCounter(estadoInicial);
    };
    const reset = () => {
        setCounter(estadoInicial);
    };
    return { counter, increment, decrement, addToCart, reset };
};