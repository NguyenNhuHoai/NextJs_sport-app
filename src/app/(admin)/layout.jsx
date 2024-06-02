import HeaderDashboard from "../../components/DashboardComponent/Header/HeaderDashboard";
import SideMenu from "../../components/DashboardComponent/SideMenu/SideMenu";

export default function CategoryLayout({ children }) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideMenu />
      </div>
      <div className="col-span-4">
        <HeaderDashboard />
        {children}

      </div>
    </div>
  );
}
