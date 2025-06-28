import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
      <Sidebar />
      <Topbar />

      {/* Main Content */}
      <main className="row-start-2 col-start-2 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
