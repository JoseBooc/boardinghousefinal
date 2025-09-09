export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Areja’s Boarding House. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#security" className="hover:text-foreground">Security</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
