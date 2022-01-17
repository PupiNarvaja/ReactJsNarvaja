import { useCartContext } from "../../context/CartContext"

const CartItem = ({ prod }) => {
    const { removeItem, addQuantity, substractQuantity }  = useCartContext()
    return (
        <div className="py-0 px-8 pl-0 my-6 mx-16 flex flex-row justify-between items-center bg-white rounded-lg">
            <div className="flex flex-row w-[60%]">
                <div className="w-[150px] mr-10">
                    <img src={prod.img} alt={prod.title} className="h-full w-full rounded-lg"/>
                </div>
                <div className="flex flex-col justify-between my-6">
                    <div>
                        <div className="flex flex-row items-start">
                            <p className="text-xl font-semibold mr-6">{prod.title}</p>
                            <p className="text-xl font-semibold">${prod.price}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mb-12">
                        <p>{prod.description}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <button onClick={ ()=> addQuantity(prod) } className="p-2 font-bold text-xl">+</button>
                    <p className="mx-4">x{prod.cantidad}</p>
                    <button onClick={ ()=> substractQuantity(prod) } className="p-2 font-bold text-xl">-</button>
                </div>
            </div>
            <button onClick={ () => removeItem(prod) } className="w-[160px] h-[40px] flex items-center px-[20px] py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Remove item
                <img src="https://img.icons8.com/metro/18/ffffff/delete.png" className="ml-2 my-auto"/>
            </button>
        </div>
    )
}

export default CartItem