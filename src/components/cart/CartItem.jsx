import { useCartContext } from "../../context/CartContext"

const CartItem = ({ prod }) => {
    const { removeItem, addQuantity, substractQuantity }  = useCartContext()
    return (
        <div className="py-8 px-8 my-6 mx-16 flex flex-row justify-between bg-white rounded-lg">
            <div className="flex flex-row justify-evenly w-80">
                {/* <img src={prod.img} alt={prod.title} className="h-full w-20"/> */}
                <p>{prod.title}</p>
                <p>${prod.price}</p>
                <p>x{prod.cantidad}</p>
                <button onClick={ ()=> addQuantity(prod) } className="p-2 font-bold text-xl">+</button>
                <button onClick={ ()=> substractQuantity(prod) } className="p-2 font-bold text-xl">-</button>
            </div>
            <button onClick={ () => removeItem(prod) } className="flex px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Remove item
                <img src="https://img.icons8.com/metro/18/ffffff/delete.png" className="ml-2 my-auto"/>
            </button>
        </div>
    )
}

export default CartItem