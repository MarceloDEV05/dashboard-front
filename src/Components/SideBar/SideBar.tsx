import { LogIn, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { SideBarNavigation } from "./SideBarNavigation";

export const SideBar = () => {
  const user = "Marcelo Cardoso";

  return (
    <aside className="min-h-screen w-60 bg-gray-950 text-white">
      <div className="flex flex-col justify-between py-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="p-8 text-3xl">
            <Link to="/">MYDASH</Link>
            <p className="text-xs">by SalesTech</p>
          </h1>

          <nav>
            <SideBarNavigation />
          </nav>
        </div>

        <div className="flex flex-col w-40 items-center absolute bottom-5">
          <div className="border-b-2 pb-2 w-full items-center justify-center flex gap-2">
            <User size={20} />
            {user}
          </div>
          {user ? (
            <button className="flex items-center gap-1 pt-2">
              Sair <LogOut size={20} />
            </button>
          ) : (
            <button className="flex items-center gap-1">
              Entrar <LogIn size={20} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
