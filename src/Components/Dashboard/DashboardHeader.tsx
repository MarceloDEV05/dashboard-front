export const DashboardHeader = () => {
  const date = new Date();
  const getToday = date.getDay();

  const daysWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const today = daysWeek[getToday];

  return (
    <header className="flex items-center justify-between">
      <div>
        <p>{today} - Visão Geral</p>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-600">Aqui esta o resumo da sua barbearia.</p>
      </div>
    </header>
  );
};
