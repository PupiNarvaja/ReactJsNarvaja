import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import ItemSkeleton from "./ItemSkeleton"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    useEffect(() => {

        // const queryCollection = id ?

        const db = getFirestore()
        const queryCollection = collection(db, "products")
        if (id) {
            setLoading(true)
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() })).filter(prod => prod.category === id)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            setLoading(true)
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [id])

    return(
        <>
            <div className="m-20">
                <h3 className="font-mayorMonoDisplay font-semibold max-w-s mx-auto text-4xl text-center">{ greeting } { id }</h3>
            </div>
            <div className="w-full flex flex-row flex-wrap my-0 mx-auto justify-evenly">
                {loading ? <ItemSkeleton /> : <ItemList productos={productos} />}
            </div>
        </>
    )
}

export default ItemListContainer;