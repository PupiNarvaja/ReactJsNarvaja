import { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => { //Se refresque todo y quede actualizado.

    const [cartList, setcartList] = useState([])
    
    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldCantidad = cartList[index].cantidad 
            console.log(oldCantidad);
            cartList.splice(index, 1)
            setcartList([...cartList, { ...item, cantidad: item.cantidad + oldCantidad }])
        } else {
            setcartList([...cartList, item])
        }
        // const oldCantidad = cartList[index].cantidad 
        // console.log(oldCantidad);
        // cartList.splice(index, 1)
        // setcartList([...cartList, { ...item, cantidad: item.cantidad + oldCantidad }]) :
        // setcartList([...cartList, item])
    }

    const removeItem = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) {
            cartList.splice(index, 1)
            setcartList(cartList)
            console.log(cartList);
        }
    }

    const deleteCart = () => {
        setcartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            deleteCart
        }}>
            { children }
        </CartContext.Provider>
    )
}
