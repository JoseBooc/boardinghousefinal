import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

export default function MiniAreaChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="h-28 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--brand))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--brand))" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Tooltip cursor={false} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
          <Area type="monotone" dataKey="value" stroke="hsl(var(--brand))" fill="url(#colorIncome)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
