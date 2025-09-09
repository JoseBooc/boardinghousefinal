import { useMemo } from "react";
import KpiCard from "@/components/dashboard/KpiCard";
import MiniAreaChart from "@/components/dashboard/MiniAreaChart";
import { BedDouble, Receipt, TriangleAlert, Wrench } from "lucide-react";

export default function Dashboard() {
  const incomeSeries = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        name: `M${i + 1}`,
        value: Math.round(60000 + Math.random() * 20000),
      })),
    [],
  );

  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Overview of occupancy, revenue, dues, and maintenance.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Occupancy Rate"
          value="87%"
          change="+5%"
          icon={<BedDouble className="h-5 w-5" />}
        />
        <KpiCard
          title="Monthly Income"
          value="₱78,420"
          change="+12%"
          icon={<Receipt className="h-5 w-5" />}
        />
        <KpiCard
          title="Unpaid Balances"
          value="₱9,350"
          change="-3%"
          icon={<TriangleAlert className="h-5 w-5" />}
        />
        <KpiCard
          title="Active Maintenance"
          value="4"
          icon={<Wrench className="h-5 w-5" />}
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Monthly Income</h2>
              <p className="text-sm text-muted-foreground">Jan – Dec</p>
            </div>
          </div>
          <div className="mt-4">
            <MiniAreaChart data={incomeSeries} />
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold">Maintenance Queue</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between">
              <span>Leaky faucet – Rm 3</span>
              <span className="rounded-full bg-warning/20 text-warning px-2 py-0.5">
                Pending
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>AC cleaning – Rm 5</span>
              <span className="rounded-full bg-info/20 text-info px-2 py-0.5">
                In Progress
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Door lock – Rm 2</span>
              <span className="rounded-full bg-info/20 text-info px-2 py-0.5">
                In Progress
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Bulb replacement – Rm 7</span>
              <span className="rounded-full bg-success/20 text-success px-2 py-0.5">
                Completed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
