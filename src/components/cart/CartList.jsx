import CartItem from './CartItem'

const CartList = ({ cartList }) => {
    return (
        <>
            { cartList.map(prod => <CartItem key={prod.id} prod={prod}/>) }
        </>
    )
}
export default CartList