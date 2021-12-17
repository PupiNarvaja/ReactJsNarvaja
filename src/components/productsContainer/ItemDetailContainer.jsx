import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {id} = useParams();

    useEffect(() => {
        getFetch
        .then((resp) => { const prod = resp.find((i) => i.id === parseInt(`${id}`));
        setItem(prod);
        })
    }, [id]);    
    
    return (<ItemDetail item={item} />)
}

export default ItemDetailContainer

// setItem(resp.find((item) => item.id === 0 ))})
