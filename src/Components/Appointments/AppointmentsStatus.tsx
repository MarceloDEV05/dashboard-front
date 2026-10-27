import { Clients } from "../fakeInfos/Clients/Clients";

export const AppointmentStatus = () => {
  const totalClients = Clients.length
  const confirmedClients = Clients.filter((client) =>  client.status === "Confirmado")
  const pendentClients = Clients.filter((client) => client.status === "Aguardando")


  return (
    <div className="pt-20 w-full flex gap-6 pb-15">
      <div className="flex justify-around w-full items-center gap-5">
        <div className="w-30 p-2 flex flex-col">
          <h2 className="text-gray-500 font-semibold">Total</h2>
          <span className="font-bold text-2xl">{totalClients}</span>
        </div>
        <div className="w-30 p-2 flex flex-col">
          <h2 className="text-gray-500 font-semibold">Confirmados</h2>
          <span className="font-bold text-2xl text-green-400">{confirmedClients.length}</span>
        </div>
        <div className="w-30 p-2 flex flex-col">
          <h2 className="text-gray-500 font-semibold">Pendentes</h2>
          <span className="font-bold text-2xl text-orange-400">{pendentClients.length}</span>
        </div>
      </div>
    </div>
  );
};
