import { useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "../itemcount/ItemCount"

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad);
        setgoToCart(true);
    }

    const [goToCart, setgoToCart] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center mx-auto mb-6 py-10 max-w-[350px] border-[1px] border-gray-100">
            <img src={item.imagen} className="max-w-xs"></img>
            <ul className="w-[200px] mx-auto">
                <li>{item.tipo}</li>
                <li>{item.precio}</li>
                <li>{item.descripcion}</li>
            </ul>
            {goToCart ? <Link to="/cart" > <button> Go to cart</button></Link> : <ItemCount stock={item.stock} valorInicial={1} onAdd={onAdd} />}
            
        </div>
    )
}
export default ItemDetail