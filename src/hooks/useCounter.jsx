import { useState } from "react"

export const useCounter = (stock, estadoInicial) => {
    const [counter, setCounter] = useState(estadoInicial)
    const [minMaxQty, setMinaxQty] = useState("")

    const increment = () => {
        setMinaxQty("")
        counter < stock ? setCounter((prev) => prev + 1) : setMinaxQty("Maximum stock reached.")
    }
    const decrement = () => {
        setMinaxQty("")
        counter > estadoInicial ? setCounter((prev) => prev - 1) : setMinaxQty("Minimum stock reached.")
    }
    return { counter, minMaxQty, increment, decrement }
}