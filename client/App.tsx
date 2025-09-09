import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import Placeholder from "@/pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/rooms"
              element={
                <Placeholder
                  title="Room Management"
                  description="Create, update, and monitor the 8 rooms with capacity, rate, and status."
                />
              }
            />
            <Route
              path="/tenants"
              element={
                <Placeholder
                  title="Tenant Management"
                  description="Profiles, verification, emergency contacts, and appliance declarations."
                />
              }
            />
            <Route
              path="/maintenance"
              element={
                <Placeholder
                  title="Maintenance & Complaints"
                  description="Submit, assign, and track requests: Pending → In Progress → Completed."
                />
              }
            />
            <Route
              path="/reservations"
              element={
                <Placeholder
                  title="Reservations & Booking"
                  description="Public availability, online reservation requests, and approvals."
                />
              }
            />
            <Route
              path="/billing"
              element={
                <Placeholder
                  title="Billing & Payments"
                  description="Monthly invoices, utility monitoring, and digital receipts."
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Placeholder
                  title="System & User Settings"
                  description="Manage roles, users, penalty rates, grace periods, and utility rates."
                />
              }
            />
            <Route
              path="/login"
              element={
                <Placeholder
                  title="Sign In"
                  description="Authentication will be handled by Laravel (Breeze/Jetstream) in the backend."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
