import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemSkeleton from "./ItemSkeleton"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    //If a category is selected, the SPA will show only those products that match the chosen category.
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const queryCollection = id ?
            query(collection(db, "products"), where('category', '==', id))
        :
            query(collection(db, "products"))

        getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id])

    return(
        <>
            <div className="m-20">
                <h3 className="font-mayorMonoDisplay font-semibold max-w-s mx-auto text-4xl text-center">{ greeting } { id }</h3>
            </div>
            <div className="w-full flex flex-row flex-wrap my-0 mx-auto justify-evenly">
                {loading ? 
                    <ItemSkeleton />
                :
                    <ItemList products={products} />}
            </div>
        </>
    )
}

export default ItemListContainer