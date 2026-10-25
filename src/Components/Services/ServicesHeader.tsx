export const ServicesHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Serviços</h1>

        <p className="text-gray-600">
          Confira todos os serviços oferecidos pela barbearia e seus preços.
        </p>
      </div>

      <div className="flex flex-col items-center text-white p-3 bg-black rounded-md">
        <button className="flex items-center font-bold">+Novo Serviço</button>
      </div>
    </header>
  );
};
