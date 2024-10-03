import Image from "next/image";
import React from "react";

const Hero = () =>{
    return(
        <div>
            <section className="text-black body-font bg-cyan-950">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 ">
      𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐁𝐮𝐫𝐠𝐞𝐫-𝐇𝐮𝐛
        {/* <br className="hidden lg:inline-block" /> */}
        {/* Best Choice */}
      </h1>
      <h2 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-yellow-600 mt-1 ">
      𝐵𝑒𝓈𝓉 𝒞𝒽♡𝒾𝒸𝑒
      </h2>
      <p className="mb-8 leading-relaxed mt-5 font-light text-white">
       It's juicy, mealty, spicey, greasily. The bun should be slightly 
       crunchy an the outside and soft inside. The cheese should be
       happily mealting over the meat.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-700 border-10 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">
          Oder Now
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-[30px] w-[100rem] mt-7"
        alt="hero"
        width={500}
        height={500}
        src={require('../../../public/pictures/hero.png')}
      />
    </div>
  </div>
</section>

<hr/>
        </div>
    )
}

export default Hero