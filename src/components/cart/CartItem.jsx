import { useCartContext } from "../../context/CartContext"

const CartItem = ({ prod }) => {
    const { removeItem, addQuantity, substractQuantity }  = useCartContext()
    return (
        <div className="w-[175px] sm:w-[85%] max-w-[1000px] py-0 px-8 pl-0 my-6 mx-auto flex flex-col justify-between items-start bg-white rounded-lg sm:flex-row">
            <div className="flex flex-col sm:flex-row w-[175px] sm:w-[unset]">
                <div className="w-[175px] mr-10">
                    <img src={prod.img} alt={prod.title} className="h-full w-full rounded-lg"/>
                </div>
                <div className="flex flex-col justify-between my-6">
                    <div>
                        <div className="w-full flex flex-row items-start justify-evenly mx-auto">
                            <p className="text-lg sm:text-xl font-semibold mr-6">{prod.title}</p>
                            <p className="text-lg sm:text-xl font-semibold">${prod.price}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start sm:justify-center">
                        <p className="ml-4 text-sm">{prod.description}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-auto">
                    <button onClick={ ()=> addQuantity(prod) } className="p-2 font-bold text-xl">+</button>
                    <p className="mx-4">x{prod.quantity}</p>
                    <button onClick={ ()=> substractQuantity(prod) } className="p-2 font-bold text-xl">-</button>
                </div>
            </div>
            <button onClick={ () => removeItem(prod) } className="h-[40px] flex items-center px-[12px] py-2 mt-8 rounded-lg bg-red-500 text-white hover:bg-red-600">
                <img src="https://img.icons8.com/metro/18/ffffff/delete.png"/>
            </button>
        </div>
    )
}

export default CartItem