import NavBar from "../navbar/NavBar"
import CartWidget from '../cart/CartWidget'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className="App-header" id="header">
            <NavBar cartWidget={CartWidget} />
        </header>
    )
}

import './Header.css'
export default Header