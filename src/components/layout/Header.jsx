import { NavLink } from "react-router-dom";

const Header = ()=>{
    return (
  <nav className="w-full bg-gray-900 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-3">
  <img
    src="/icon.png"
    className="h-10 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
  />
</div>

      {/* Right Section - Navigation Links */}
      <div className="flex space-x-10 text-lg font-medium">
        <NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink>
        <NavLink to="/movie" className="hover:text-blue-400 transition">Movies</NavLink>
        <NavLink to="/about" className="hover:text-blue-400 transition">About</NavLink>
        <NavLink to="/contact" className="hover:text-blue-400 transition">Contact Us</NavLink>
      </div>
    </div>
  </nav>
);

}

export default Header;