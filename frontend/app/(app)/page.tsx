import { dashboardStats } from "@/data/dashboard";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-4 gap-4">
        {dashboardStats.map(stat => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
