import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className="p-2 cursor-pointer">
                <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" alt="cart widget" />
            </div>
        </Link>
    )
}
export default CartWidget;