import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import {ItemList} from "./ItemList"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => { //usamos apis con useEffect.
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [2000]);

    return(
        <>
            <div className="m-20">
                <h3 className="font-mono max-w-s mx-auto text-4xl text-center">{greeting}</h3>
            </div>
            <div className="w-full flex flex-row flex-wrap my-0 mx-auto justify-evenly">
                {loading ? <h1 className="max-w-min mx-auto text-4xl">Loading...</h1> : <ItemList productos={productos} />}
            </div>
        </>
    )
};

export default ItemListContainer;