// import React from "react";
import {
    Card,
    Typography,
  } from "@material-tailwind/react";

import i1 from "../assets/img01.webp";
import i2 from "../assets/img02.webp";
import i3 from "../assets/img03.webp";
import i4 from "../assets/img04.webp";
import i5 from "../assets/img05.webp";
import i6 from "../assets/img07.webp";
import Header from "../components/Header";
 

export default function Gallery() {
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
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[100rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
             <div className="md:grid h-100 md:grid-cols-3 content-stretch gap-4 ">
                    <div className=" p-4 shadow-xl shadow-blue-gray-900/5">
                    <figure className="relative h-96 w-full">
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={i1}
                              alt="nature image"
                            />

                          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Maryna Popovych
          </Typography>
          <Typography color="gray" className="mt-2 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Taste!
        </Typography>
                          </figcaption>
                   </figure>
                    
                    
                    </div>
                    <div className=" p-4 shadow-xl shadow-blue-gray-900/5"> 
                    <figure className="relative h-96 w-full">
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={i2}
                              alt="nature image"
                            />

                          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Maryna Popovych
          </Typography>
          <Typography color="gray" className="mt-2 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Taste!
        </Typography>
                          </figcaption>
                   </figure>
                   </div>
                  <div className=" p-4 shadow-xl shadow-blue-gray-900/5">
                  <figure className="relative h-96 w-full">
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={i3}
                              alt="nature image"
                            />

                          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Maryna Popovych
          </Typography>
          <Typography color="gray" className="mt-2 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Taste!
        </Typography>
                          </figcaption>
                   </figure></div>
                    <div className=" p-4 shadow-xl shadow-blue-gray-900/5">
                    <figure className="relative h-96 w-full">
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={i4}
                              alt="nature image"
                            />

                          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Maryna Popovych
          </Typography>
          <Typography color="gray" className="mt-2 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Taste!
        </Typography>
                          </figcaption>
                   </figure> </div>
                  <div className=" p-4 shadow-xl shadow-blue-gray-900/5">
                  <figure className="relative h-96 w-full">
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={i5}
                              alt="nature image"
                            />

                          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Maryna Popovych
          </Typography>
          <Typography color="gray" className="mt-2 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Taste!
        </Typography>
                          </figcaption>
                   </figure> </div>
                    <div className=" p-4 shadow-xl shadow-blue-gray-900/5"> 
                    <figure className="relative h-96 w-full">
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={i6}
                              alt="nature image"
                            />

                          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Maryna Popovych
          </Typography>
          <Typography color="gray" className="mt-2 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Taste!
        </Typography>
                          </figcaption>
                   </figure> </div>
             </div>
        </Card>
        </div>
  </>
    )
  }