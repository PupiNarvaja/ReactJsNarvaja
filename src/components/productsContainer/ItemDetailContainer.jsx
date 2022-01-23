import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { ItemDetailSkeleton } from "./ItemDetailSkeleton"
import { NotFound } from "../NotFound/NotFound"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, "products", id)
        getDoc(queryDb)
        .then(resp => setItem({ id: resp.id, ...resp.data() }))
        .finally(() => setLoading(false))
    }, []);   

    return (loading ? <ItemDetailSkeleton /> : <ItemDetail item={item} />)
}

export default ItemDetailContainer
