import { DashboardAppointments } from "../../Components/Dashboard/DashboardAppointments";
import { DashboardHeader } from "../../Components/Dashboard/DashboardHeader";
import { DashboardResumes } from "../../Components/Dashboard/DashboardResumes";
import { DashboardService } from "../../Components/Dashboard/DashboardService";

export const Home = () => {
  return (
    <div>
        <DashboardHeader />
        <DashboardResumes />
        <DashboardAppointments />
        <DashboardService />
    </div>
  );
};
