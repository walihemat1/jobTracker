import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-full  bg-gray-100 border-r p-4 overflow-y-auto row-start-1 row-span-2">
      {/* Sidebar content goes here */}
      <nav className="p-4">
        <ul>
          <SidebarItem to="/dashboard">Dashbaord</SidebarItem>
          <SidebarItem to="/alljobs">Jobs</SidebarItem>
          <SidebarItem to="/create-job">Add Job</SidebarItem>
          <SidebarItem to="/settings">Settings</SidebarItem>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
