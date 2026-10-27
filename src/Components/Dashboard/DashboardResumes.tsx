import {
  CalendarDays,
  Users,
  Wallet,
  Scissors,
} from "lucide-react";

const stats = [
  {
    title: "Agendamentos Hoje",
    value: "18",
    description: "Horários Marcados",
    icon: CalendarDays,
  },
  {
    title: "Total de clientes",
    value: "245",
    description: "Clientes cadastrados",
    icon: Users,
  },
  {
    title: "Faturamento Hoje",
    value: "R$ 680,00",
    description: "Receita do dia",
    icon: Wallet,
  },
  {
    title: "Serviços realizados",
    value: "12",
    description: "Atendimentos concluídos",
    icon: Scissors,
  },
];

export const DashboardResumes = () => {
  return (
    <div className="pt-10">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article
              key={stat.title}
              className="rounded-2xl border border-gray-200 p-5 bg-white transition hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-gray-500">{stat.title}</span>
              </div>
              <div className="rounded-xl p-2">
                <Icon size={20} className="texto-gray-700" />
              </div>

              <p className="mt-4 text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
