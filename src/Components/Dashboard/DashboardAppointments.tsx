const appointments = [
  {
    id: 1,
    time: "17:00",
    client: "Mario Sergio",
    service: "Corte degradê",
    barber: "Gustavo",
    status: "Confirmado",
  },
  {
    id: 2,
    time: "18:00",
    client: "Marcelo Cardoso",
    service: "Corte + Barba",
    barber: "Guilherme",
    status: "Confirmado",
  },
  {
    id: 3,
    time: "19:00",
    client: "Lucas Cardiel",
    service: "Corte Social",
    barber: "Guilherme",
    status: "Aguardando",
  },
];

export const DashboardAppointments = () => {
  return (
    <div className="pt-5">
      <section className="border rounded-xl border-gray-300">
        <p className="font-semibold text-2xl p-2">Proximos Agendamentos</p>
        {appointments.map((appointment) => (
          <article
            key={appointment.id}
            className="flex flex-wrap items-center justify-between
          gap-4 rounded-xl border border-gray-100 p-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-600 rounded-xl text-white font-semibold text-sm">
                {appointment.time}
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  {appointment.client}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {appointment.service}
                </p>
                <p className="text-xs mt-1 text-gray-400">
                  Barbeiro: {appointment.barber}
                </p>
              </div>
            </div>

            <span
              className={` rounded-full px-3 py-1 text-xs font-medium 
                ${appointment.status === "Confirmado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                `}
            >
              {appointment.status}
            </span>
          </article>
        ))}
      </section>
    </div>
  );
};
