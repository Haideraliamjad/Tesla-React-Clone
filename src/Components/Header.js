import "./Header.css"
import Logo from '../assets/teslaLogoSmall.svg'
function Header() {
    return (
       <nav className="navegation">
            <img className="logo" src={Logo} alt="Logo"/>
            <div className="links">
                <p>Model S</p> 
                <p>Model 3</p> 
                <p>Model X</p> 
                <p>Model Y</p> 
                <p>Solar Roof</p> 
                <p>Solar Panel</p> 
            </div>
            <div className="right">
                <p>Shop</p> 
                <p>Account</p> 
                <p>Menu</p>
            </div>
       </nav>
    )
}

export default Header
