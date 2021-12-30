import { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => { //Se refresque todo y quede actualizado.

    const [cartList, setcartList] = useState([])
    
    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) { 
            const oldCantidad = cartList[index].cantidad
            cartList.splice(index, 1)
            setcartList([...cartList, { ...item, cantidad: item.cantidad + oldCantidad }])
        } else {
            setcartList([...cartList, item])
        }
    }

    const removeItem = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) {
            cartList.splice(index, 1)
            setcartList(cartList)
        }
    }

    const deleteCart = () => {
        setcartList([])
    }

    const total = () => {
        const totalToPay = cartList.reduce((prev, curr) => prev + curr.cantidad * curr.price, 0)
        let formatoDeMoneda = new Intl.NumberFormat('es-ES')
        return formatoDeMoneda.format(totalToPay)
    }

    const cartCounter = () => {
        if (cartList.length > 0) {
            const cartCounter = cartList.reduce((prev, curr) => prev + curr.cantidad, 0)
            console.log("Hay algo");
            return cartCounter
        } else if (cartList.length === 0){
            console.log("No hay nada");
            return ""
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            cartCounter,
            addToCart,
            removeItem,
            deleteCart,
            total
        }}>
            { children }
        </CartContext.Provider>
    )
}
