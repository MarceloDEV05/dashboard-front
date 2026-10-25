import { Services } from "../fakeInfos/Services/Services.ts";
import { CircleDollarSign, Clock } from "lucide-react";

export const ServiceOptions = () => {
  return (
    <div className="grid grid-cols-4 pt-10">
      {Services.map((service, index) => (
        <div
          key={`${service.title}-${index}`}
          className="w-70 rounded-2xl p-2 shadow-2xl shadow-gray-400"
        >
          <div className="flex flex-col gap-2">
            <img
              src={service.img}
              alt={`Imagem do serviço: ${service.title}`}
              className="rounded-t-xl"
            />
            <h1 className="text-xl font-semibold px-3">{service.title}</h1>
            <p className="text-sm text-gray-500 line-clamp-4 lg:line-clamp-none px-3">
              {service.description}
            </p>
          </div>

          <div className="flex justify-between px-5 py-2 items-center">
            <p className="flex items-center gap-1 text-green-400">
              <CircleDollarSign size={15} />
              R${service.price},00
            </p>
            <span className="flex items-center gap-1 text-yellow-600">
              <Clock size={15} />
              {service.duration}min
            </span>
          </div>

          <div className="w-full flex justify-between gap-4">
            <button className="border-2 border-gray-200 w-full flex items-center justify-center p-2 rounded-md">
              Editar
            </button>
            <button className="bg-red-100 flex items-center w-full justify-center p-2 rounded-md text-red-600 font-bold">
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
