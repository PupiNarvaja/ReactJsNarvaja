import { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) { //Se refresque todo y quede actualizado.

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
        if (cartList.includes(x => x.id === item.id) === true) {
            const index = cartList.findIndex(i => i.id === item.id)
            cartList.splice(index, 1)
            setcartList(cartList)
        } else {
            console.log("Producto NO removido!");
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

export default CartContextProvider
