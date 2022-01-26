import { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    
    const [cartList, setcartList] = useState([])
    
    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) { 
            const oldQuantity = cartList[index].quantity
            cartList.splice(index, 1)
            setcartList([...cartList, { ...item, quantity: item.quantity + oldQuantity }])
        } else {
            setcartList([...cartList, item])
        }
    }

    const addQuantity = (item) => {
        if (item.stock > item.quantity) {
            item.quantity += 1
            setcartList([...cartList])
        } else {
            Swal.fire({
                position: 'bottom',
                icon: 'warning',
                title: 'Maximum quantity selected.',
                showClass: {
                    popup: 'animate__animated animate__fadeInUp animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster'
                },
                showConfirmButton: false,
                backdrop: `rgba(0,0,0, 0.3)`,
                timer: 1600
            })
        }
    }

    const substractQuantity = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setcartList([...cartList])
        } else {
            Swal.fire({
                position: 'bottom',
                icon: 'warning',
                title: 'Minimum quantity selected.',
                showClass: {
                    popup: 'animate__animated animate__fadeInUp animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster'
                },
                showConfirmButton: false,
                backdrop: `rgba(0,0,0, 0.3)`,
                timer: 1600
            })
        }
    }

    const removeItem = (item) => {
        setcartList( cartList.filter(prod => prod.id !== item.id) )
    }
    
    const deleteCart = () => {
        setcartList([])
    }
    
    const total = () => {
        const totalToPay = cartList.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
        let moneyFormat = new Intl.NumberFormat('es-ES')
        return moneyFormat.format(totalToPay)
    }

    const cartCounter = () => {
        if (cartList.length > 0) {
            const cartCounter = cartList.reduce((prev, curr) => prev + curr.quantity, 0)
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
