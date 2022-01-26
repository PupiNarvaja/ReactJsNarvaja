import { Link } from 'react-router-dom'

const Menu = ({ open, handleOpen, cartWidget }) => {

    return open ? (
        <div className="navWrapper animate__animated animate__slideInRight z-20 w-full h-[100vh] flex flex-col justify-start items-center bg-black fixed top-[100px] right-0">
            <nav>
                <ul className="flex font-sans flex-col flex-nowrap items-center mt-20">
                    <li className="my-5 text-2xl cursor-pointer"><Link to="/" onClick={handleOpen} className="font-sans text-white no-underline">Home</Link></li>
                    <li className="my-5 text-2xl cursor-pointer"><Link to="/category/jackets" onClick={handleOpen} className="font-sans text-white no-underline">Jackets</Link></li>
                    <li className="my-5 text-2xl cursor-pointer"><Link to="/category/shirts" onClick={handleOpen} className="font-sans text-white no-underline">Shirts</Link></li>
                </ul>
                <div className="flex justify-center mt-8" onClick={handleOpen}>
                { cartWidget() }
                </div>
            </nav>
            <img src="https://res.cloudinary.com/this/image/upload/v1642439961/favicon_de_react_rkozq5.png" className="absolute bottom-60" alt="logo" />
        </div>) : (
        <div className="right-[-100%] hidden"></div>
    )
}
import './Menu.css'
export default Menu