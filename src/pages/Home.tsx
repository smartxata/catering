// import React from "react";
import {
    Card,
  } from "@material-tailwind/react";
import Square from "../components/Square";
import Background from "../assets/home.jpg"
import Header from "../components/Header";
 

export default function Home() {
  // const [openNav, setOpenNav] = React.useState(false);
  // const [brandId, setBrandId] = React.useState();

  // const [state, setState] = React.useState(); // common state
//   const onClick = (value: any) => {
//     console.log("Parent level::"+ value)
//     setState(value);
//     console.log("Set state::"+ state);
// }
  
const bgHome = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'right',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}
 
  return (
     <>

              <div>
                     <Header />
                </div>
                
        <div>
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[100rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
             <div className="grid h-226 grid-cols-2 content-stretch gap-1 " >
               <div className=" p-4 w-75" >
              
                  <Square title="Catering!" supSlogan="Like Home..." subSlogan="... just better"/>
              </div>
              <div className=" p-4 " style={bgHome}> </div>
              </div>
        </Card>
        </div>
  </>
    )
  }