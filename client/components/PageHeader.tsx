import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-md border-b border-[var(--color-nav-border)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-foreground hover:opacity-90 shrink-0"
        >
          <img
            src="/logo.png"
            alt="Puja's Nail Studio"
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">
            Puja's Nail Studio
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 flex-wrap justify-end">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/services">Services</Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/faq">FAQ</Link>
          </Button>
          <Button size="sm" asChild>
            <a href="/#booking">Book</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
