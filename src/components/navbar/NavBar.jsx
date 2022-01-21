import { Link } from 'react-router-dom'

const NavBar = ({ cartWidget }) => {
    return (
        <nav className="navbar hidden md:flex flex-row flex-nowrap items-center">
            <ul className="flex font-sans flex-row flex-nowrap items-center">
                <li className="mx-5 my-0 text-2xl cursor-pointer"><Link to="/" className="font-sans text-white no-underline">Featured</Link></li>
                <li className="mx-5 my-0 text-2xl cursor-pointer"><Link to="/category/jackets" className="font-sans text-white no-underline">Jackets</Link></li>
                <li className="mx-5 my-0 text-2xl cursor-pointer"><Link to="/category/shirts" className="font-sans text-white no-underline">Shirts</Link></li>
                <div className="cart-bg">
                { cartWidget() }
                </div>
            </ul>
        </nav>
    )
}

import './NavBar.css'
export default NavBar