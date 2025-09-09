import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <section className="container py-20 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{description ?? "This module will be implemented next. Keep prompting to flesh this out."}</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button asChild variant="outline"><Link to="/">Back to Home</Link></Button>
        <Button asChild><Link to="/dashboard">Go to Dashboard</Link></Button>
      </div>
    </section>
  );
}
