import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="applayout">
      <Navbar />
      <main className="mainlayout">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
