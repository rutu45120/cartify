import Logo from "../Components/Logo"
import NavMenu from "../Components/NavMenu"
import SearchBar from "../Components/SearchBar"


const Navbar = () => {
  return (
    <nav className="
     shadow shadow-gray-400
       bg-gra
    w-screen
    h-18
     flex justify-between items-center px-10
    ">
     <Logo/>
     <SearchBar/>
     <NavMenu/>
    </nav>
  )
}

export default Navbar