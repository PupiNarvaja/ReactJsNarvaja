import CartWidget from '../cart/CartWidget';
const NavBar = () => {
    return (
        <div className="navbar flex justify-between w-10/12 mx-auto my-0">
            <h1 className="text-5xl text-white">This</h1>
            <div className="flex flex-flow flex-nowrap items-center">
                <ul className="flex flex-row flex-nowrap items-center">
                    <li className="mx-5 my-0 text-2xl cursor-pointer"><a href="#" className="text-white no-underline">Destacados</a></li>
                    <li className="mx-5 my-0 text-2xl cursor-pointer"><a href="#" className="text-white no-underline">Mi cuenta</a></li>
                    <li className="mx-5 my-0 text-2xl cursor-pointer"><a href="#" className="text-white no-underline">Carrito</a></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    )
};

import React from 'react';
import './NavBar.css';
export default NavBar;
