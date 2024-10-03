import React from "react";
import Link from "next/link";

const Navbar = () =>{
    return(
        <div className="bg-green-800 z-50 sticky top-0"> 
            <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div>
      <Link href={"/"} className="ml-10 text-2xl text-white">𝐵𝓊𝓇𝑔𝑒𝓇-𝐻𝓊𝒷 </Link>
      </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-black">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-black">About</Link>
      <Link href={"#contact"} className="mr-5 hover:text-black">Contact Us</Link>
    </nav>
  </div>
</header>
 </div>
   
)}

export default Navbar