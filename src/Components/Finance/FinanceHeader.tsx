import { BadgeDollarSign } from "lucide-react";

export const FinanceHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold flex gap-2 items-center">
             Financeiro <BadgeDollarSign size={30}/>
             </h1>

        <h2 className=" text-gray-600">
          Acompanhe receitas, despesas e movimentações.
        </h2>
      </div>
    </div>
  );
};
