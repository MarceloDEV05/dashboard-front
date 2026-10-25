import { CalendarCheck } from "lucide-react";

export const AppointmentsHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          Agendamentos <CalendarCheck size={30} />
        </h1>

        <p className="text-gray-600">
          Gerencie seus horários e Atendimentos.
        </p>
      </div>

      <div className="flex flex-col items-center text-white p-3 bg-black rounded-md">
        <button className="flex items-center font-bold">+Novo Agendamento</button>
      </div>
    </header>
  );
};
