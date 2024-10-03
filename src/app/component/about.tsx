import Image from "next/image";
import React from "react";

const About = ()=>{
    return(
        <div id="about">
            <section className="text-gray-600 body-font bg-cyan-950">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-[30px] w-[60rem]"
        alt="hero"
        width={500}
        height={200}
        src={require('../../../public/pictures/about.png')}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className=" title-font sm:text-4xl text-3xl  font-medium text-orange-500 ">
      𝗔𝗯𝗼𝘂𝘁 𝗨𝘀
      </h1>
      <p className="mt-9 text-1xl font-sans leading-7 text-white">
      Burger-Hub: According to legend, buger-hub invented the burger in 1990 at his small restaurant in New Haven,
                    Connecticut. He placed a beef patty between two slices of bread and added cheese and condiments,
                    creating the first hamburger sandwich.The Burger-Hub seems to have made its jump from plate to bun in the last decades of the 19th century, though the site of this transformation is highly contested. Lunch wagons, fair stands and roadside restaurants in Wisconsin, Connecticut, Ohio, New York and Texas have all been put forward as possible sites of the hamburger’s birth. Whatever its genesis, the burger-on-a-bun found its first wide audience at the 1904 St.
      </p>
      <div className="flex justify-center">
       
      </div>
    </div>
  </div>
</section>

<hr />
        </div>
    )
}

export default About