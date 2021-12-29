import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Button from "../button/Button"

const Cart = () => {

    const { cartList, deleteCart, addToCart, removeItem }  = useCartContext()

    const [total, setTotal] = useState(0)
    // const reducer = (previousValue, currentValue) => previousValue + currentValue
        const pricePerProd = (cartList.map(prod => prod.precio * prod.cantidad))
        console.log(pricePerProd);
    
    const showTotal = () => {
        useEffect(() => {
            setTotal(...total + pricePerProd)
        }, [addToCart, removeItem])
        
        console.log(total);
    }
  



    // total = 0 ? "" : total = pricePerProd.reduce()
    
    // useEffect(() => {
    //     setTotal(totalToPay.reduce(pricePerProd))
    //     console.log(pricePerProd);
    // }, [cartList])


    // Verifica si el cart está vacío retorna esto. Caso contrario, retorna el listado de los productos dentro del cart.
    if (cartList.length === 0) {
        return  (<div className="flex flex-col mt-20 mx-auto w-max">
                    <h2 className="font-sans font-thin text-2xl">It seems like your cart is empty.</h2>
                    <div className="mx-auto">
                        <Link to="/"><button className="h-10 px-4 mt-12 mx-auto w-60 font-semibold leading-4 rounded-lg text-black bg-special-yellow transition ease hover:shadow-lg">Go back to main page.</button></Link>
                    </div>
                </div>)
    }

    return (
        <div className="mt-16">
            <div>{ cartList.map(prod => <div key={prod.id} className="py-8 px-8 my-6 mx-16 flex flex-row justify-between bg-white rounded-lg">
                <div className="flex flex-row justify-evenly w-40">
                    <p>{prod.cantidad}</p>
                    <p>{prod.tipo}</p>
                    <p>${prod.precio}</p>
                </div>
                <button onClick={() => removeItem(prod)} className="flex px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Remove item
                    <img src="https://img.icons8.com/metro/18/ffffff/delete.png" className="ml-2 my-auto"/>
                </button>
            </div>) }</div>
            <div className="w-full mx-auto my-28 flex justify-evenly">
                <button onClick={deleteCart} className="px-8 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Delete cart</button>
                <h2 className="text-2xl">Total: ${  }</h2>
            </div>
        </div>
    )
}

export default Cart
