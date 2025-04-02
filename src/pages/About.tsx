// import React from "react";
// import NavbarDefault from "../components/NavBar";
// import Slogan from "../components/Slogan";
import {
    Card,
  } from "@material-tailwind/react";
// import Square from "../components/Square";
import "../assets/syntez.css"
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";

import i1 from "../assets/img01.webp";
import i2 from "../assets/img02.webp";
import i3 from "../assets/img03.webp";
import i4 from "../assets/img04.webp";
import i5 from "../assets/img05.webp";
// import i6 from "../assets/img07.webp";


export default function About() {
  // const [openNav, setOpenNav] = React.useState(false);
  // const [brandId, setBrandId] = React.useState();

  // const [state, setState] = React.useState(); // common state
//   const onClick = (value: any) => {
//     console.log("Parent level::"+ value)
//     setState(value);
//     console.log("Set state::"+ state);
// }
  
 
  return (
     <>

              <div>
                     <Header />
                </div>
                
        <div>
        <Card className="h-[calc(110vh-2rem)] w-full max-w-[100rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
<h2>

        <div className="container w-[calc(100vw-2rem)] h-[calc(20vh-7rem)] ">
            <div className="item item1 ">A b o u t     U s </div>
            <div className="item item2 ">Who We are</div>
        </div>
</h2>

        
 

        <div className="md:grid h-[calc(100vh-2rem)]  grid-cols-1 content-stretch gap-4 ">
               
               <div className=" p-4 shadow-xl shadow-gray-400/5">
               
                <h2>
                A few words about us
                </h2>
                <div  className=" shadow-xl shadow-gray-400/5 flex items-stretch" >
                  <div className=" w-150 ">                <img src={i4} className="h-56 w-56 rounded-2xl object-cover justify-center"/>                  </div>
                  <div className="pl-8 text-2xl content-evenly chooseus">
When visiting our European restaurant, just brace yourself to immersing into enjoying a truly delicious and perfectly cooked dishes.
The world-renowned chef showcases exhilarating interpretations of European food in a breathtaking space architect Tadao Ando built as a respite from the non-stop chaos of New York City.</div>
                </div>
</div>
               <div className=" p-4 shadow-xl shadow-gray-400/5">
                <h2>
               Why Choose Us  
                </h2>

                <div  className=" shadow-xl shadow-gray-400/5 flex items-stretch" >
                  <div className=" w-150 ">                <img src={i5} className="h-56 w-56 rounded-2xl object-cover justify-center"/>                  </div>
                  <div className="pl-8 text-2xl content-evenly chooseus">
                  We welcome every person to visit our restaurant! Everyone can find its perfect table and try incredible dish from our chef! We work for people to deliver great mood, create cozy atmosphere and make your time awesome and fun! Delivering the best service is our core value, as people come to us to have a rest, and we’re providing their perfect residence.
                  </div>
                  </div>
                </div>


<div>
                <div className="pb-6"><h2>Testimonials</h2></div>
               <div className=" shadow-xl shadow-gray-400/5 flex items-stretch gap-4">

                  <Testimonial title="Excellent" desc="Oksana's food is excellent. Made with love and paired with perfect ingredients." footer="Jen 2023-04-03" img={i1} />
                  <Testimonial title="Treat" desc="Their Medovyk honey cake has a rich honey flavour with a subtle hint of coconut -a classic treat." footer="Paul 2023-10-30" img={i2} />
                  <Testimonial title="Authentic" desc="Authentic food for real people. There is taste and there is spirit." footer="Chrystia 2023-10-30" img={i3} />
                  
               </div>
               </div>

               
              </div>
        </Card>
        </div>
  </>
    )
  }