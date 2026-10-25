import { Save, Settings } from "lucide-react";

export const SettingsHeader = () => {
  return (
    <div>
      <div className="flex w-full justify-between px-2 ">
        <div>
          <h1 className="text-3xl font-bold flex gap-2 items-center"> 
                Configurações < Settings size={30} />
             </h1>

          <h2 className=" text-gray-600">
            Personalize as informações da sua barbearia e defina as preferências do sistema.
          </h2>
        </div>

        <div>
          <button className=" flex gap-1 font-semibold p-2 rounded-md bg-blue-500 text-white">
            <Save />Salvar Alterações
            </button>
        </div>
      </div>
    </div>
  );
};
