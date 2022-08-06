import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [menushow,setmenushow]=React.useState(false)
  return (
    <>
        <nav className="flex justify-between bg-cyan-600 h-10 py-1.5">
      <div className="class li">
          <Link to="/" className=""><img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg" alt="Cocktail" className="h-7 mx-2 rounded-md" /></Link>
      </div>
        <ul className="hidden md:visible lg:flex space-x-4 font-bold font-mono text-lg text-white ">
          <li><Link to="/" className="">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" className="mr-4">Contact</Link></li>
        </ul>
        <ul className="visible  lg:hidden ">
            <button className={`mx-4 my-auto text-white text-xl `} onClick={()=>{
              console.log(menushow)
              setmenushow(!menushow)
            }}><AiOutlineMenu></AiOutlineMenu></button>
        </ul>
      </nav>
      <div className={`bg-cyan-500 contaniernav transition-all overflow-hidden
      ease-in-out duration-400 ${menushow?"h-28":"h-0"} lg:hidden font-bold font-mono text-lg text-white`}>
         <ul className="list-none space-y-2">
         <li><button onClick={()=>{
           setmenushow(!menushow)
         }}><Link to="/" className="">Home</Link></button></li>
          <li><button onClick={()=>{
            setmenushow(!menushow)
          }}><Link to="/about">About</Link></button></li>
          <li><button onClick={()=>{
            setmenushow(!menushow)
          }}><Link to="/contact" className="mr-4">Contact</Link></button></li>
         </ul>
      </div>
    </>
  )
}

export default NavBar