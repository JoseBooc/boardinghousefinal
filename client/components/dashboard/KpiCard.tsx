import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function KpiCard({ title, value, change, icon, className }: { title: string; value: string; change?: string; icon?: ReactNode; className?: string; }) {
  const isNegative = change?.trim().startsWith("-");
  return (
    <div className={cn("rounded-xl border bg-card p-4 shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
          {change && (
            <p className={cn("mt-1 text-xs font-medium", isNegative ? "text-destructive" : "text-success")}>{change} this month</p>
          )}
        </div>
        <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}
