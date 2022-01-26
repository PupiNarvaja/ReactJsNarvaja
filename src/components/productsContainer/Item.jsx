import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "./Item.css"
export const Item = ({prod}) => {
    const { cartList, addToCart } = useCartContext()
    
    const index = cartList.findIndex(i => i.id === prod.id)

    const onAdd = (item) => {
        addToCart({...item, quantity: 1})
        Swal.fire({
            position: 'bottom',
            icon: 'success',
            title: item.title + ' was added to your cart.',
            showClass: {
                popup: 'animate__animated animate__fadeInUp animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown animate__faster'
            },
            showConfirmButton: false,
            backdrop: `rgba(0,0,0, 0.3)`,
            timer: 1800
        })
    }

    return (
        <div className="flex font-sans w-[85%] container mx-auto my-6 bg-white rounded-lg flex-col sm:max-w-lg sm:flex-row">
            <div className="flex-none w-[100%] h-80 relative sm:w-48 sm:h-[100%]">
                <Link to={`/item/${prod.id}`}><img src={prod.img} alt={prod.title} className="absolute inset-0 w-full h-full object-cover rounded-lg" /></Link>
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex flex-auto items-center text-xl font-bold text-gray-900">{prod.title}</h1>
                    
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-300 border border-gray-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="text-lg font-semibold text-gray-900">${prod.price}</div>
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <Link to={`/item/${prod.id}`}>
                            <button className="h-10 px-[.9rem] sm:px-6 font-semibold leading-4 rounded-lg text-black bg-special-yellow transition ease hover:shadow-lg" type="submit">View product</button>
                        </Link>
                        {index > -1 ?
                            <div className="flex flex-row justify-center items-center w-[100px] sm:w-[120px] h-10 px-[.9rem] sm:px-6 font-semibold leading-4 rounded-lg text-white bg-special-black">
                                <p className="mr-1">In </p>
                                <img src="https://img.icons8.com/material-outlined/20/ffffff/shopping-cart--v1.png" className="h-[20px]"/>
                            </div>
                            :
                            <button onClick={() => onAdd(prod)} className="h-10 px-[.9rem] sm:px-6 font-semibold leading-4 rounded-lg text-white bg-special-black transition ease hover:shadow-xl" type="button">Add to cart</button>
                        }
                    </div>
                </div>
                <p className="text-sm text-gray-700">Free shipping buying 2 or more products.</p>
            </form>
        </div>
    )
}