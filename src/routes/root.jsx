import Section1 from "../components/Section1Component";
import Navbar2 from "../components/NavbarComponent";
import "../index.css"
import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <>
      <Navbar2/>
      <div className="mt-24">
        <Outlet />
      </div>
    </>
  )
}