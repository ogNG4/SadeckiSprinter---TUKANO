import DesktopNavbar from "./DesktopNavbar/DesktopNavbar"
export default function Layout({children}){

    return(
        <>
         <DesktopNavbar/>
         <main>{children}</main>
        </>
       
    )
}