import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

export function Layout() {
  return (
    <div className="flex">
      <div className="fixed flex-1">
        <SideBar />
      </div>
      <div className="flex-1 pl-70 p-8 w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
}
