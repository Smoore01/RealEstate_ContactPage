import React, {useState} from "react"
import { Menu } from "lucide-react"
import { X } from "lucide-react"






const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
  

<nav className="bg-white shadow-md fixed w-full z-50">
  <div className="container mx-auto md:w-10/12 px-4 py-4 flex justify-between items-center">
    <img className='' src="./src/components/image/images/logo.svg" alt="Hillcrest Realty" />

   
    <div className="hidden md:flex flex-1 gap-5 justify-end">
      <a className="text-gray-600 hover:text-blue-600 hover:cursor-pointer" href="#">Services</a>
      <a className="text-gray-600 hover:text-blue-600 hover:cursor-pointer" href="#">Listings</a>
      <a className="text-gray-600 hover:text-blue-600 hover:cursor-pointer" href="#">About</a>
      <a className="text-gray-600 hover:text-blue-600 hover:cursor-pointer" href="#">Teams</a>
    </div>

    <button className="ml-5 rounded-2xl px-2 py-2 hidden md:block border b">Get Started</button>
    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button> 


        {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-500">
            Features
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-500">
            Careers
          </a>
          <a href="#" className="block text-gray-600 hover:text-blue-500">
            Community
          </a>
       
        </div>
      )} 

  </div>
</nav>
  )
}

export default Navbar