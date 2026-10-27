//import { Clock, ArrowUpRight, ChevronRight } from "lucide-react";

const services = [
  { name: "Corte Masculino", total: 32, percent: 80 },
  { name: "Corte + Barba", total: 22, percent: 55 },
  { name: "Barba", total: 14, percent: 35 },
];

export const DashboardService = () => {
  return (
    <div className="pt-5 pb-4">
      <section className="border border-gray-300 rounded-xl p-5">
        <p className="font-semibold text-xl p-2">Serviços mais procurados</p>
        {services.map((service) => (
            <div>
            <article key={service.name} className="p-3 mb-2 flex items-center justify-between gap-2">
                <span className="text-sm text-gray-700">{service.name}</span>
                <span className="text-sm font-semibold">{service.total}</span>
            </article>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full  rounded-full bg-gray-800" style={{width: `${service.percent}%`}}/>
            </div>

            </div>
        ))}
      </section>
    </div>
  );
};
