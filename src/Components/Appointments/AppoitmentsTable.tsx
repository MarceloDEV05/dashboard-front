import { Search } from "lucide-react";
import { Clients } from "../fakeInfos/Clients/Clients.ts";

export const AppointmentsTable = () => {
  return (
    <div className="border h-full p-3 flex flex-col gap-5 rounded-2xl">
      <div className="flex gap-3 p-2 border rounded-xl">
        <Search />
        <input
          type="search"
          placeholder="Pesquisar Agendamentos..."
          className="w-full outline-none"
        />
      </div>
      {Clients.map((client) => (
        <div
          key={`${client.nome}-${client.hora}`}
          className="flex w-full items-center justify-between border-y px-3 py-3"
        >
          <div>
            <h1>{client.nome}</h1>
            <p>{client.servico}</p>
          </div>

          <div>
            <p>{client.hora}</p>
            <span>{client.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
