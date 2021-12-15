const NavBar = ({cartWidget}) => {
    return (
        <div className="navbar flex justify-between w-10/12 mx-auto my-0">
            <div>
                <h1 className="text-5xl text-white glitch" data-text="This"></h1>
            </div>
            <div className="flex flex-flow flex-nowrap items-center">
                <ul className="flex flex-row flex-nowrap items-center">
                    <li className="mx-5 my-0 text-2xl cursor-pointer"><a href="#" className="font-mono text-white no-underline">Destacados</a></li>
                    <li className="mx-5 my-0 text-2xl cursor-pointer"><a href="#" className="font-mono text-white no-underline">Mi cuenta</a></li>
                    <li className="mx-5 my-0 text-2xl cursor-pointer"><a href="#" className="font-mono text-white no-underline">Carrito</a></li>
                    <div className="cart-bg">
                    { cartWidget() }
                    </div>
                </ul>
            </div>
        </div>
    )
};

import './NavBar.css';
export default NavBar;
