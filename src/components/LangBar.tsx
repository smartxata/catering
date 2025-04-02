import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  MobileNav,
  Card,

 } from "@material-tailwind/react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Slogan from "./Brand";

 
export default function LangbarDefault() {
  const [openLang, setOpenLang] = React.useState(false);

  const langs = {
    en: { nativeName: "English" },
    ua: { nativeName: "Українська" },
    fr: { nativeName: "Francaise" },
  };
 
  const {t, i18n} = useTranslation();
  const iconSize = "25px";
  
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenLang(false)
    );
  }, []);

  const langList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
       <svg xmlns="http://www.w3.org/2000/svg"  width={iconSize} height={iconSize} viewBox="0 0 36 36" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"/><path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"/><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"/><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"/></svg>
        <Link className="flex items-center  text-gray-400" to="/" onClick={()=>i18n.changeLanguage("en")}>
          {langs["en"].nativeName}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
       <svg xmlns="http://www.w3.org/2000/svg"  width={iconSize} height={iconSize} viewBox="0 0 36 36" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#005BBB" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"/><path fill="#FFD500" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36v9z"/></svg>
        <Link className="flex items-center  text-gray-400" to="/" onClick={()=>i18n.changeLanguage("ua")}>
        {langs["ua"].nativeName}

        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize}  viewBox="0 0 36 36" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"/><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"/><path fill="#EEE" d="M12 5h12v26H12z"/></svg>
        <Link className="flex items-center  text-gray-400" to="/" onClick={()=>i18n.changeLanguage("fr")}>
                {langs["fr"].nativeName}
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="mt-1 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 shadow-xl shadow-blue-gray-900/5 border-white"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
       
      <div className="container mx-auto flex ">
                  <Card 
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <Slogan value={t("brand").toUpperCase()}/> 
                  </Card>
        <Typography
          as="a"
          href="#"
          style={{ color: "white" }}
          className="mr-4 cursor-pointer py-1.5 font-medium"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          .
        </Typography>
        <div className="hidden lg:block inset-y-0 right-0 absolute">{langList}</div>
        <div className="flex items-center gap-x-1"></div>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenLang(!openLang)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {openLang ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
      </div>
        <MobileNav open={openLang}>
              <div className="container mx-auto">
                {langList}
              
              </div>
            </MobileNav>
    </Navbar>
  );
}
