import { Search } from "lucide-react";
import { Clients } from "../fakeInfos/Clients/Clients.ts";


export const AppointmentsTable = () => {

  return (
    <div className="pb-10">
    <section className="border border-gray-300 p-3 flex flex-col gap-5 rounded-2xl">
      <div className="flex gap-3 p-2 border border-gray-300 rounded-xl">
        <Search />
        <input
          type="search"
          placeholder="Pesquisar Agendamentos..."
          className="w-full outline-none"
        />
      </div>
      {Clients.map((client) => (
        <article
          key={`${client.client}-${client.time}`}
          className="flex flex-wrap border border-gray-100 rounded-xl w-full items-center justify-between px-5 py-5"
        >
          <div className="p-3">
            <h1 className="font-semibold text-xl text-gray-600">{client.client}</h1>
            <p className="text-gray-400">{client.service}</p>
          </div>

          <div>
            <p className="font-bold text-gray-500">{client.time}</p>
            <span className={`rounded-xl font-semibold ${client.status === "Confirmado" ? "bg-green-100 text-green-700 p-1" : "bg-orange-100 text-orange-700 p-1"}`}>{client.status}</span>
          </div>
        </article>
      ))}
    </section>
    </div>
  );
};
