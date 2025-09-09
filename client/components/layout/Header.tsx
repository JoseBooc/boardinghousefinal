import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  Building2,
  LayoutDashboard,
  DoorOpen,
  Wrench,
  CalendarClock,
  CreditCard,
  Users2,
  Settings,
} from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/rooms", label: "Rooms", icon: Building2 },
  { to: "/tenants", label: "Tenants", icon: Users2 },
  { to: "/maintenance", label: "Maintenance", icon: Wrench },
  { to: "/reservations", label: "Reservations", icon: CalendarClock },
  { to: "/billing", label: "Billing", icon: CreditCard },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4">
        <button
          className="sm:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-lg tracking-tight"
        >
          <DoorOpen className="h-6 w-6 text-brand" />
          <span>Areja’s Boarding House</span>
        </Link>
        <nav
          className={cn(
            "hidden sm:flex items-center gap-1 ml-4",
            open && "flex",
          )}
        >
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30",
                    (isActive || pathname.startsWith(item.to)) &&
                      "bg-accent/40 text-foreground",
                  )
                }
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="outline">
            <Link to="/rooms">Browse Rooms</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
