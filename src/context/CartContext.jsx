import { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    
    const [cartList, setcartList] = useState([])
    
    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) { 
            const oldQuantity = cartList[index].cantidad
            cartList.splice(index, 1)
            setcartList([...cartList, { ...item, cantidad: item.cantidad + oldQuantity }])
        } else {
            setcartList([...cartList, item])
        }
    }

    const addQuantity = (item) => {
        if (item.stock > item.cantidad) {
            const index = cartList.findIndex(i => i.id === item.id)
            cartList.splice(index, 1)
            setcartList([...cartList , {...item, cantidad: item.cantidad + 1}])
        } else {
            console.log(item.stock)
        }
    }

    const substractQuantity = (item) => {
        if (item.cantidad > 1) {
            const index = cartList.findIndex(i => i.id === item.id)
            cartList.splice(index, 1)
            setcartList([...cartList , {...item, cantidad: item.cantidad - 1}])
        } else {
            console.log(item.cantidad) //CREAR CARTELES DE ERRORES PARA ACÁ Y EN EL FORM
        }
    }

    const removeItem = (item) => {
        setcartList( cartList.filter(prod => prod.id !== item.id) )
    }
    
    const deleteCart = () => {
        setcartList([])
    }
    
    const total = () => {
        const totalToPay = cartList.reduce((prev, curr) => prev + curr.cantidad * curr.price, 0)
        let moneyFormat = new Intl.NumberFormat('es-ES')
        return moneyFormat.format(totalToPay)
    }

    const cartCounter = () => {
        if (cartList.length > 0) {
            const cartCounter = cartList.reduce((prev, curr) => prev + curr.cantidad, 0)
            return cartCounter
        } else if (cartList.length === 0){
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
            addQuantity,
            substractQuantity,
            total
        }}>
            { children }
        </CartContext.Provider>
    )
}
