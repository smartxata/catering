import Card from "@material-tailwind/react/components/Card";

  
import Stars from "./Stars";

  export default function Testimonial( props: any) {
        
    return (
                <>
                   <Card className="h-[calc(30vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
           
           
           
 
                    <div className="content-center justify-center">
                            <img src={props.img} className="h-36 w-36 rounded-full object-cover justify-center"/>
                            <div className="flex justify-items-start justify-center"> 
                                        <Stars />  <Stars />  <Stars />  <Stars />  <Stars />
                            </div>
                            <div> <h3 className="text-2xl pt-5 pb-5">{props.title}</h3> </div>
                            <div> <span className="sm pb-5">{props.desc}</span> </div>
                            <div className="absolute inset-x-0 bottom-0 content-baseline sm bg-gray-50"> <span className="align-bottom sm">{props.footer}</span> </div>
                    </div>
              
           </Card>
                
                
                </>
            );
 }

 