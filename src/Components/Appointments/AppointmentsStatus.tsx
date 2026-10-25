export const AppointmentStatus = () => {
  return (
    <div className="pt-20 w-full flex gap-6 pb-15">
      <div className="flex justify-around w-full items-center gap-5">
        <div className="w-30 p-2 flex flex-col">
          <h2>Total</h2>
          <span className="font-bold text-2xl">128</span>
        </div>
        <div className="w-30 p-2 flex flex-col">
          <h2>Confirmados</h2>
          <span className="font-bold text-2xl text-green-400">86</span>
        </div>
        <div className="w-30 p-2 flex flex-col">
          <h2>Pendentes</h2>
          <span className="font-bold text-2xl text-orange-400">12</span>
        </div>
      </div>
    </div>
  );
};
