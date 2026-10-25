import { TrendingUp, TrendingDown, Wallet, Clock } from "lucide-react";
import { FinanceChart } from "./FinanceChart";
import { FinanceMetricCard } from "./FinanceMetricCard";

const financeMetrics = [
  {
    icon: TrendingUp,
    iconColor: "green",
    title: "Receitas",
    value: "R$12.750",
    valueColor: "text-green-600",
    description: "Serviços e vendas",
  },
  {
    icon: TrendingDown,
    iconColor: "red",
    title: "Despesas",
    value: "R$3.450",
    valueColor: "text-red-600",
    description: "Custos e pagamentos",
  },
  {
    icon: Wallet,
    iconColor: "gold",
    title: "Receitas",
    value: "R$7.750",
    valueColor: "text-yellow-600",
    description: "Receitas menos despesas",
  },
  {
    icon: Clock,
    iconColor: "blue",
    title: "A receber",
    value: "R$750",
    valueColor: "text-blue-600",
    description: "Valores Pendentes",
  },
];

export const FinanceDatas = () => {
  return (
    <div className="flex w-full flex-col gap-3 pt-15">
      <div className="grid grid-cols-2 gap-5">
        {financeMetrics.map((metric) => (
          <FinanceMetricCard
            key={`${metric.title}-${metric.description}`}
            {...metric}
          />
        ))}
      </div>
      <FinanceChart />
    </div>
  );
};
