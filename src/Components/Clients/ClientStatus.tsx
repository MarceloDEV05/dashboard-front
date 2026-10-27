import { CalendarCheck, UserRoundPlus, Users } from "lucide-react";
import { Clients } from "../fakeInfos/Clients/Clients";

export const ClientStatus = () => {
  const userActives = Clients.filter((client) => client.isActive === "Ativo")

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const newMonthClients = Clients.filter((client) => {
    const registerDate = new Date(client.createdAt)

    return registerDate.getMonth() === currentMonth && registerDate.getFullYear() === currentYear;

  })
  const totalNewClients = newMonthClients.length


  return (
    <div className="pt-20 w-full flex pb-15">
      <div className="flex justify-around gap-2 w-full items-center">
        <div className="w-60 p-3 flex flex-col ">
          <Users color="orange" />
          <h2 className="font-bold text-2xl">{Clients.length}</h2>
          <span>Clientes</span>
        </div>
        <div className=" w-60 p-3 flex flex-col ">
          <UserRoundPlus color="green" />
          <h2 className="font-bold text-2xl ">{totalNewClients}</h2>
          <span>Novos no mês</span>
        </div>
        <div className="  w-60 p-3 flex flex-col ">
          <CalendarCheck color="blue" />
          <h2 className="font-bold text-2xl ">{userActives.length}</h2>
          <span>Ativos</span>
        </div>
      </div>
    </div>
  );
};
