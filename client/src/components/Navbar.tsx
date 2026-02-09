import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-mono font-bold text-xl tracking-tighter hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
            <span className="text-muted-foreground group-hover:text-primary transition-colors">&lt;</span>
            Ahmed Samer
            <span className="text-muted-foreground group-hover:text-primary transition-colors">/&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "relative px-1 py-2 text-sm font-medium transition-colors duration-300",
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(0,255,255,0.7)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-white/5"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-md transition-colors",
                  location === link.href 
                    ? "bg-primary/10 text-primary border-l-2 border-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
