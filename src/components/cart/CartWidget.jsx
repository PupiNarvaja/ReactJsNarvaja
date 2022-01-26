import { Link } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { cartCounter }  = useCartContext()

    return (
        <Link to="/cart">
            <div className="flex flex-row justify-between w-max py-2 px-2 cursor-pointer bg-special-yellow rounded-lg">
                <p className="w-max">{ cartCounter() }</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" alt="cart widget"/>
            </div>
        </Link>
    )
}
export default CartWidget