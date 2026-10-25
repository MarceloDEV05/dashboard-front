import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";

const chartData = [
  { month: "Jan", receita: 9000, despesas: 3000, saldo: 1000, receber: 4000 },
  { month: "Feb", receita: 10000, despesas: 4000, saldo: 2000, receber: 5000 },
  { month: "Mar", receita: 11000, despesas: 5000, saldo: 3000, receber: 6000 },
  { month: "Apr", receita: 12000, despesas: 6000, saldo: 4000, receber: 7000},
  { month: "May", receita: 13000, despesas: 7000, saldo: 5000, receber: 8000},
  { month: "Jun", receita: 14000, despesas: 8000, saldo: 6000, receber: 9000 },
];

const chartConfig = {
  receita: {
    label: "receita",
    color: "green",
  },
  despesas: {
    label: "despesas",
    color: "red",
  },
  saldo: {
    label: "saldo",
    color: "orange",
  },
  receber: {
    label: "receber",
    color: "blue",
  },
} satisfies ChartConfig;

export const FinanceChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-125 w-full rounded-2xl border-2 border-gray-300">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="receita" fill="var(--color-receita)" radius={4} width={60} />
        <Bar dataKey="despesas" fill="var(--color-despesas)" radius={4} />
        <Bar dataKey="saldo" fill="var(--color-saldo)" radius={4} />
        <Bar dataKey="receber" fill="var(--color-receber)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
