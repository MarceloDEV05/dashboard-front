import { AppointmentsHeader } from "../../Components/Appointments/AppointmentsHeader";
import { AppointmentStatus } from "../../Components/Appointments/AppointmentsStatus";
import { AppointmentsTable } from "../../Components/Appointments/AppoitmentsTable";

export const Appointments = () => {
  return (
    <div className="h-full w-full">
      <AppointmentsHeader />
      <AppointmentStatus />
      <AppointmentsTable />
    </div>
  );
};
