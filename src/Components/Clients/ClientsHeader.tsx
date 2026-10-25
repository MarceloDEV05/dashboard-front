import { Users } from "lucide-react";

export const ClientHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          Clientes <Users size={30} />
        </h1>

        <p className="text-gray-600">Veja todos os clientes da barbearia.</p>
      </div>
    </header>
  );
};
