import { useState } from "react";

export const useCounter = (stock, estadoInicial) => {
    const [counter, setCounter] = useState(estadoInicial);
    const increment = () => {
        counter < stock ? setCounter((prev) => prev + 1) : console.log("Compra máxima alcanzada.");
    };
    const decrement = () => {
        counter > estadoInicial ? setCounter((prev) => prev - 1) : console.log("Compra mínima alcanzada.");
    };
    const addToCart = () => {
        setCounter(estadoInicial);
    };
    const reset = () => {
        setCounter(estadoInicial);
    };
    return { counter, increment, decrement, addToCart, reset };
};