import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
import Contact from "./component/contact";


export default function Home() {
  return (
    <div>
      
        <Hero />
        <About/>
        <Contact/>
       
    </div>
  );
}
