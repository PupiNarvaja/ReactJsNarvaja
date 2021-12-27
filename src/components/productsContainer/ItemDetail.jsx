import { useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

import ItemCount from "../itemcount/ItemCount";

const ItemDetail = ({item}) => {

    const { cartList, addToCart } = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad);
        setgoToCart(true);
        addToCart({ ...item, cantidad:cantidad }) // ---> Le agregamos una nueva propiedad al objeto producto.
    }
    
    const [goToCart, setgoToCart] = useState(false);
    
    console.log(cartList);
    return (
        <div className="flex flex-col justify-around items-center w-[85%] max-w-xs mx-auto my-6 pb-10 rounded-lg bg-white md:flex-row md:max-w-[80%] md:p-8 md:justify-between lg:max-w-6xl lg:p-12">
            <img src={item.imagen} className="rounded-lg w-full md:w-[250px] py-auto"></img>
            <div className=" md:w-[375px] md:pl-5 md:flex md:flex-col md:justify-between">
                <ul className="w-[200px] mx-auto">
                    <li className="font-sans font-bold py-2 text-xl md:pb-6 md:pt-0">{item.title}</li>
                    <li className="font-sans font-semibold py-2 text-xl">${item.precio}</li>
                    <li className="font-sans font-semibold py-2 text-sm">{item.descripcion}</li>
                </ul>
                {goToCart ? <Link to="/cart" > <button className="py-2 px-6 mt-6 border rounded-lg bg-black text-white">Go to cart</button></Link> : <ItemCount stock={item.stock} valorInicial={1} onAdd={onAdd} />}
            </div>
        </div>
    )
}
export default ItemDetail