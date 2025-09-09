import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BedDouble,
  ShieldCheck,
  Wrench,
  FileText,
  Wallet,
  Users2,
  BarChart3,
} from "lucide-react";

export default function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/10 via-transparent to-transparent" />
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                <ShieldCheck className="h-3.5 w-3.5" /> RBAC: Admin • Tenant •
                Staff
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                Areja’s Boarding House Management System
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Modern, responsive system built for real operations. Manage
                rooms, tenants, leases, billing, maintenance, and reservations
                with role‑based access.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link to="/dashboard">Go to Admin Dashboard</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/rooms">Browse Available Rooms</Link>
                </Button>
              </div>
              <div className="mt-6 text-xs text-muted-foreground">
                Backend: Laravel 11 API • Auth: Sanctum/JWT • Roles: Spatie
                Permissions • DB: MySQL
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border bg-card p-6 shadow-xl">
                <h3 className="font-semibold">Realtime KPIs</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Kpi
                    title="Occupancy Rate"
                    value="87%"
                    icon={<BedDouble className="h-4 w-4" />}
                  />
                  <Kpi
                    title="Monthly Income"
                    value="₱78,420"
                    icon={<Wallet className="h-4 w-4" />}
                  />
                  <Kpi
                    title="Unpaid Balances"
                    value="₱9,350"
                    icon={<FileText className="h-4 w-4" />}
                  />
                  <Kpi
                    title="Active Maintenance"
                    value="4"
                    icon={<Wrench className="h-4 w-4" />}
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <BarChart3 className="h-4 w-4" /> Power BI ready for executive
                  reporting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-12 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight">Core Modules</h2>
        <p className="text-muted-foreground mt-1">
          Designed for day‑to‑day operations
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Users2 className="h-5 w-5" />}
            title="Tenant Management"
            desc="Profiles, verification, emergency contacts, appliance declarations, and full history."
          />
          <Feature
            icon={<BedDouble className="h-5 w-5" />}
            title="Room Management"
            desc="CRUD for 8 rooms with type, rate, capacity, and status (Available/Reserved/Occupied/Maintenance)."
          />
          <Feature
            icon={<FileText className="h-5 w-5" />}
            title="Leases & Deposits"
            desc="Contracts linking tenants to rooms with 1‑month advance + 1‑month deposit policy and refunds."
          />
          <Feature
            icon={<Wallet className="h-5 w-5" />}
            title="Billing & Payments"
            desc="Automated monthly invoices, digital receipts, electricity check‑meters, equal split water bills."
          />
          <Feature
            icon={<Wrench className="h-5 w-5" />}
            title="Maintenance & Complaints"
            desc="Submit requests with photos, prioritize, assign to staff, and track status to completion."
          />
          <Feature
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Roles & Permissions"
            desc="Spatie roles: Admin (full), Tenant (self‑service), Staff (assigned jobs only)."
          />
        </div>
      </section>

      <section className="container py-12 md:py-16" id="security">
        <div className="rounded-2xl border bg-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Architecture</h3>
            <p className="text-muted-foreground mt-2">
              Backend powered by Laravel 11 with Sanctum/JWT and Spatie
              Permissions; modern React frontend; MySQL database. Clean
              separation via REST API.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link to="/reservations">Public Reservations</Link>
            </Button>
            <Button asChild>
              <Link to="/login">Staff / Tenant Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Kpi({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="mt-1 text-xl font-bold">{value}</p>
        </div>
        <div className="h-8 w-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-5">
      <div className="flex items-center gap-2 text-brand">
        <span className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
          {icon}
        </span>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
