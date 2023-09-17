import Section1 from "../components/Section1Component";
import NavbarComponent from "../components/NavbarComponent";
import "../index.css"
import { Outlet } from "react-router-dom";
import Navbar2Component from "../components/Navbar2Component";

export default function Root() {

  return (
    <>
      <NavbarComponent/>

      {/* <Navbar2Component/> */}
      <div className="mt-24">
        <Outlet />
      </div>
    </>
  )
}