import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Button from "../button/Button"
import { useState } from "react"
import CartList from "./CartList"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, Timestamp, updateDoc, writeBatch } from 'firebase/firestore'
import { UserForm } from "../form/UserForm"
import { data } from "autoprefixer"

const Cart = () => {
    const { cartList, deleteCart, total }  = useCartContext()
    
    const totalToPay = cartList.reduce((prev, curr) => prev + curr.cantidad * curr.price, 0)
    
    const [warning, setWarning] = useState("")
    const [dataForm, setDataForm] = useState({
        name:"", email: "", phone: "", confirmation: ""
    })
    
    const handleChange = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        })
    }

    const placeOrder = (e) => {
        // It verifies that the inputs are empty. Shows a warning message if true.
        if (dataForm.name === "" || dataForm.email === "" || dataForm.phone === "" || dataForm.confirmation === "") {
            e.preventDefault()
            setWarning(<div className="w-[440px] px-8 py-6 bg-amber-50 border-l-4 border-l-amber-400"> 
                <p className="text-amber-500 flex flex-row"><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/18/000000/external-warning-weather-dreamstale-lineal-dreamstale.png" className="h-4 mr-1"/>There are empty fields. Please fill them.</p>
            </div>)
        } else if (dataForm.confirmation !== dataForm.email) {
            // It verifies that both e-mails are equal. Shows a warning message if true.
            e.preventDefault()
            setWarning(<div className="w-[440px] px-8 py-6 bg-amber-50 border-l-4 border-l-amber-400"> 
                <p className="text-amber-500 flex flex-row"><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/18/000000/external-warning-weather-dreamstale-lineal-dreamstale.png" className="h-4 mr-1"/>The e-mails are different. Please make sure they match.</p>
            </div>)
        } else {
            // If everything is correct, it proceeds to place the order.
            e.preventDefault()
            setWarning(<div><img src="https://img.icons8.com/material-outlined/24/000000/spinner--v2.png" alt="loading icon"/></div>)
            let order = {}
            order.buyer = dataForm
            order.total = totalToPay
            order.date  = Timestamp.fromDate(new Date())
            order.products = cartList.map(prod => {
                const id = prod.id;
                const title = prod.title;
                const price = prod.price;
                const quantity = prod.cantidad;
                
                return {id, title, quantity, price}
            })
            // POST the order data to the data base.
            const db = getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection, order)
            .then(resp => 
                Swal.fire({
                    title: 'Congratulations!',
                    text: "Order placed successfully! Your purchase's ID is: " + resp.id,
                    imageUrl: 'https://res.cloudinary.com/this/image/upload/v1642439961/favicon_de_react_rkozq5.png',
                    imageWidth: 124,
                    imageHeight: 85,
                    imageAlt: 'Custom image',
                })
            )
            .catch(err => console.log(err))
            .finally(deleteCart)
        }
        
        
        //Update.
        // const docModifier = doc(db, "products", idDelProductoComprado)
        // updateDoc(docModifier, {
            //     stock: 2
            // })
            // .then(resp => console.log("modified."))
            // const batch = writeBatch(db)
            // batch.update(docModifier, {
                //     stock: 90
                // })
                // batch.update(docModifier, {
                    //     stock: 99
                    // })
                    // batch.commit()
                    
                }
                
                const items = []
                
                // If the cart is empty, it returns this. 
                if (cartList.length === 0) {
                    return  (<div className="flex flex-col mt-20 mx-auto w-max">
                    <h2 className="font-sans font-thin text-2xl">It seems like your cart is empty.</h2>
                    <div className="mx-auto">
                        <Link to="/"><button className="h-10 px-4 mt-12 mx-auto w-60 font-semibold leading-4 rounded-lg text-black bg-special-yellow transition ease hover:shadow-lg">Go back to main page.</button></Link>
                    </div>
                </div>)
    }
    // Otherwise, it returns this.
    return (
        <div className="mt-16">
            <CartList cartList={cartList} />
            <div className="w-full mx-auto my-28 flex justify-evenly">
                <button onClick={deleteCart} className="flex h-10 px-8 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Delete cart</button>
                <h2 className="text-2xl mr-8">Total: ${ total() }</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full mb-40">
                <h2 className="text-xl">Let's make 'em yours!</h2>
                <div className="w-full flex">
                    <span className="m-0 relative left-0 w-[50%] h-6 border-r border-black"></span>
                </div>
                <div className="w-full border-t border-black rounded-2xl flex justify-center">
                    <UserForm placeOrder={placeOrder} handleChange={handleChange} dataForm={dataForm} warning={warning}/> 
                </div>
            </div>
        </div>
    )
}

export default Cart