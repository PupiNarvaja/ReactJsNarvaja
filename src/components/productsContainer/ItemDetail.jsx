import { useState } from "react"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../itemcount/ItemCount"
import { NotFound } from "../NotFound/NotFound"

const ItemDetail = ({item}) => {

    const { cartList, addToCart } = useCartContext()
    
    const [goToCart, setgoToCart] = useState(false)

    const onAdd = (quantity) => {
        setgoToCart(true)
        addToCart({ ...item, quantity:quantity })
    }

    const index = cartList.findIndex(i => i.id === item.id)
    
    // If no price is returned it means no existing product is returned, so an error message will be shown.
    if (item.price === undefined) {
        return <NotFound />
    }

    return (
        <div className="flex flex-col justify-around items-center w-[85%] max-w-xs mx-auto my-6 pb-10 rounded-lg bg-white mt-20 md:flex-row md:max-w-[80%] md:p-8 md:justify-between lg:max-w-3xl lg:p-12">
            <img src={item.img} className="rounded-lg w-full md:w-[250px] py-auto"></img>
            <div className="h-[330px] md:w-[375px] md:pl-8 md:flex md:flex-col md:justify-between">
                <ul className="w-[200px] mx-auto mt-4">
                    <li className="font-sans font-bold py-2 text-xl md:pb-6 md:pt-0">{item.title}</li>
                    <li className="font-sans font-semibold py-2 text-xl">${item.price}</li>
                    <li className="font-sans font-semibold py-2 text-sm">{item.description}</li>
                </ul>

                {/* If the item is in cart, a button will be deployed linked to the cart page. Meanwhile if it is not in cart, there will be options such as add to cart, substract or increment quantity. */}
                { index > -1 ? (
                    <div className="flex flex-col items-center pb-6"><p className="text-sm text-green-500">Already in cart.</p><Link to="/cart"><button className="py-2 px-6 mt-4 mx-auto border rounded-lg bg-black text-white hover:bg-neutral-700">Go to cart</button></Link><Link to="/"><button className="py-2 px-6 mt-4 mx-auto border rounded-lg bg-black text-white hover:bg-neutral-700">Continue shopping</button></Link></div>
                ) : (
                    !goToCart ? <ItemCount stock={item.stock} valorInicial={1} onAdd={onAdd} /> : ""
                )}
            </div>
        </div>
    )
}
export default ItemDetail