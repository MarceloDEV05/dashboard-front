import { CalendarCheck, UserRoundPlus, Users } from "lucide-react";

export const ClientStatus = () => {
  return (
    <div className="pt-20 w-full flex pb-15">
      <div className="flex justify-around gap-2 w-full items-center">
        <div className="w-60 p-3 flex flex-col ">
          <Users color="orange" />
          <h2 className="font-bold text-2xl">128</h2>
          <span>Clientes</span>
        </div>
        <div className=" w-60 p-3 flex flex-col ">
          <UserRoundPlus color="green" />
          <h2 className="font-bold text-2xl ">125</h2>
          <span>Novos no mês</span>
        </div>
        <div className="  w-60 p-3 flex flex-col ">
          <CalendarCheck color="blue" />
          <h2 className="font-bold text-2xl ">12</h2>
          <span>Ativos</span>
        </div>
      </div>
    </div>
  );
};
