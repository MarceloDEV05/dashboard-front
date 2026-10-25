import { BellRing, Calendar, Clock, Palette, Settings, ShieldUser, UserGroup, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export const SettingsSideBar = () => {
  return (
    <div className="pt-10">
        <aside className="bg-gray-100 w-60 h-190 text-gray-700 border-gray-300 rounded-2xl shadow-2xl">
              <div className="flex flex-col justify-between items-center">
                <div className="flex flex-col items-center">
                  <nav>
                    <ul className="flex h-full flex-col gap-15 pt-10">
                      <li>
                        <Link to="/" className="flex items-center gap-1">
                          <Settings />
                          <span className="text-xl font-semibold">Geral</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/appointments" className="flex items-center gap-1">
                          <Calendar />
                          <span className="text-xl font-semibold">Funcionamento</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="flex items-center gap-1">
                          <Clock />
                          <span className="text-xl font-semibold">Agendamentos</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/clients" className="flex items-center gap-1">
                          <BellRing />
                          <span className="text-xl font-semibold">Notificações</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/finance" className="flex items-center gap-1">
                          <UserGroup />
                          <span className="text-xl font-semibold">Equipe</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings" className="flex items-center gap-1">
                          <Wallet />
                          <span className="text-xl font-semibold">Financeiro</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings" className="flex items-center gap-1">
                          <Palette />
                          <span className="text-xl font-semibold">Aparência</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings" className="flex items-center gap-1">
                          <ShieldUser />
                          <span className="text-xl font-semibold">Segurança</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>
    </div>
  );
};
