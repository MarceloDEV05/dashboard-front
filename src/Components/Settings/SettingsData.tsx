export const SettingsData = () => {
    return(
        <div className="w-full pt-10 h-full pl-5">
            <div className="flex flex-col gap-y-5">
                <main className="shadow-2xl bg-gray-100 w-full flex h-115 rounded-2xl">
                    <div className="p-5 ">
                        <h1 className="font-bold text-2xl text-gray-700">Dados Da Barbearia</h1>
                        <p className="text-gray-400">Mantenha as informações da sua barbearia sempre atualizadas.</p>
                    </div>
                </main>

                <div className="flex gap-5 w-full">
                    <section className="shadow-2xl bg-gray-100 h-70 w-full rounded-2xl">
                        <h1>subjects - 1</h1>
                    </section>
                    <section  className="shadow-2xl bg-gray-100 h-70 w-full rounded-2xl">
                        <h1 >subjects - 2</h1>
                    </section>
                </div>
                
            </div>
        </div>
    )
}