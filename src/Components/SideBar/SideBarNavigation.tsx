import {
  BadgeDollarSign,
  Bolt,
  CalendarClock,
  House,
  Scissors,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const navigationItems: {
  to: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { to: "/", label: "Dashboard", icon: House },
  { to: "/appointments", label: "Agendamentos", icon: CalendarClock },
  { to: "/services", label: "Serviços", icon: Scissors },
  { to: "/clients", label: "Clientes", icon: Users },
  { to: "/finance", label: "Financeiro", icon: BadgeDollarSign },
  { to: "/settings", label: "Configurações", icon: Bolt },
];

export const SideBarNavigation = () => {
  return (
    <ul className="flex h-full flex-col gap-5 pt-40">
      {navigationItems.map(({ to, label, icon: Icon }) => (
        <li key={to}>
          <Link to={to} className="flex items-center gap-1">
            <Icon size={20} />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
