import { useCartContext } from "../../context/CartContext"
import Button from "../button/Button"

const Cart = () => {

    const { cartList, deleteCart, removeItem }  = useCartContext()

    return (
        <>
            <div>{ cartList.map(prod => <div key={prod.id} className="m-16"><button onClick={() => removeItem(prod)} className="border rounded-full px-2">X</button><ul><li>{prod.cantidad} {prod.tipo}</li></ul></div>) }</div>
            <div className="w-full mx-auto my-28 flex justify-evenly">
                <Button />
                <Button />
                <button onClick={deleteCart} className="px-8 py-2 border rounded">Delete cart</button>
            </div>
        </>
    )
}

export default Cart
