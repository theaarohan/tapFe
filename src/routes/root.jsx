import Section1 from "../components/Section1";
import Navbar2 from "../components/Navbar2";
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