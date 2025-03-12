// import React from "react";
import NavbarDefault from "../components/NavBar";
import Slogan from "../components/Slogan";
import {
  Button,
    Card,
    // Typography,
  } from "@material-tailwind/react"; 
 
import bgGB_Flag from '../assets/gb-flag.png';
import bgUA_Flag from '../assets/ua-flag.png';
import bgFR_Flag from '../assets/fr-flag.jpg';

import { useTranslation } from "react-i18next";

export default function MyMenu() {
  // const [openNav, setOpenNav] = React.useState(false);
  // const [brandId, setBrandId] = React.useState();

  // const [state, setState] = React.useState(); // common state
//   const onClick = (value: any) => {
//     console.log("Parent level::"+ value)
//     setState(value);
//     console.log("Set state::"+ state);
// }


interface lng_set {
    nativeName: string,
    flag: string,
}
 
const langs: Record<string, lng_set>  = {
  en: {nativeName: 'English', flag: bgGB_Flag} as lng_set,
  ua: {nativeName: 'Українська', flag: bgUA_Flag},
  fr: {nativeName: 'French', flag: bgFR_Flag}
}

const {t,  i18n} = useTranslation();
 
   return (
      <>
  <div>

<blockquote className="text-center text-2xl  font-semibold text-gray-900 italic dark:text-white">
    <span className="pr-4">
            A social enterprise powered by the
    </span>

  <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500">
    <span className="relative text-yellow-300 dark:text-yellow-300"> spirit and soul </span>
  </span>
  <span className="pl-4">
  of Ukraine.

    </span>
</blockquote></div>
           <div>
          
               <div className="flex items-center gap-x-1">
                  <Card className="h-[calc(10vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <Slogan value={t("brand").toUpperCase()}/> 
                  </Card>
                  <div className="flex items-center gap-x-1 " >
        {Object.keys(langs).map((lng: string)=>
            <Button fullWidth variant="text" type="submit" size="sm" key={lng} onClick={()=>i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage===lng } 
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  className="bg-opacity-0"
            
            
            ><span  style={{backgroundImage: "url(" + langs[lng].flag + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity:0
               }}>

                   </span>
{     
  langs[lng].nativeName  
}   
       </Button>
            )}
              
        </div>
               </div>

           
               <div > 
                   <NavbarDefault /> 
               </div>
 
               <div className="mt-5">
               </div>
         </div>
        
   </>
     )
   }