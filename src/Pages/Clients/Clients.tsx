import { ClientHeader } from "../../Components/Clients/ClientsHeader";
import { ClientsTable } from "../../Components/Clients/ClientsTable";
import { ClientStatus } from "../../Components/Clients/ClientStatus";

export const Clients = () => {
  return (
    <div>
      <ClientHeader />
      <ClientStatus />
      <ClientsTable />
    </div>
  );
};
