import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getFetch
        .then((resp) => { setItem(resp.find((item) => item.id === 0 ))})
        .catch(err => console.log(err))
        .finally(() => console.log("Petición completada."))
    }, [2000]);

    return <ItemDetail item={item} />
}

export default ItemDetailContainer
