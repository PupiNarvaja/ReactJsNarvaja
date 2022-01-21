const MenuButton = ({ handleOpen, open }) => {

    return !open ? (
        <button onClick={handleOpen} className="block md:hidden p-[12px] bg-special-yellow rounded-lg"><img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"/></button>
    ) : (
        <button onClick={handleOpen} className="block md:hidden p-[12px] bg-special-yellow rounded-lg"><img src="https://img.icons8.com/ios-glyphs/24/000000/multiply.png"/></button>
    )
}

export default MenuButton