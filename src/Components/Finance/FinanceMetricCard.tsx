import type { LucideIcon } from "lucide-react";

type FinanceMetricCardProps = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  value: string;
  valueColor: string;
  description: string;
};

export const FinanceMetricCard = ({
  icon: Icon,
  iconColor,
  title,
  value,
  valueColor,
  description,
}: FinanceMetricCardProps) => {
  return (
    <div className="rounded-2xl border-2 border-gray-300 px-6 py-6">
      <div>
        <Icon color={iconColor} />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div>
        <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
