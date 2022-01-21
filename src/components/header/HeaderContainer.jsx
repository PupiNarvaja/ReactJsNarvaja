import { useState } from "react"
import { Link } from 'react-router-dom'
import NavBar from "../navbar/NavBar"
import CartWidget from '../cart/CartWidget'
import MenuButton from "../menu/MenuButton"
import Menu from "../menu/Menu"

const HeaderContainer = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <>
            <header className="fixed z-10 flex items-center justify-between w-full nunito top-0 bg-black h-[100px] px-6 md:px-20" id="header">
                <Link to="/">
                    <div>
                        <h1 className="roboto italic text-6xl h-full w-[100px] left-20 text-white">This</h1>
                    </div>
                </Link>
                <NavBar cartWidget={CartWidget} open={open}/>
                <MenuButton handleOpen={handleOpen} open={open} />
                <Menu open={open} handleOpen={handleOpen} cartWidget={CartWidget} />   
            </header>
            <div className="h-[100px]"></div>
        </>
    )
}

export default HeaderContainer