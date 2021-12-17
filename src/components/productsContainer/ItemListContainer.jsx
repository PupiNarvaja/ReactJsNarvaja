import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import {ItemList} from "./ItemList"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    useEffect(() => {
        if (id) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.tipo === id)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

        console.log(id);
        console.log(getFetch);
        console.log(productos);
    }, [id]);

    return(
        <>
            <div className="m-20">
                <h3 className="font-mayorMonoDisplay font-semibold max-w-s mx-auto text-4xl text-center">{greeting}</h3>
            </div>
            <div className="w-full flex flex-row flex-wrap my-0 mx-auto justify-evenly">
                {loading ? <h1 className="max-w-min mx-auto text-4xl">Loading...</h1> : <ItemList productos={productos} />}
            </div>
        </>
    )
};

export default ItemListContainer;