import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu after selection on mobile
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 text-white border-b border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-12">
        {/* Logo */}
        <span className="text-xl font-bold">Portfolio</span>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          {["about", "skills", "projects", "contact"].map((item) => (
            <Button
              key={item}
              variant="outline"
              className="border-gray-600 hover:bg-gray-700 transition"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center bg-gray-900 py-4 border-t border-gray-800">
          {["about", "skills", "projects", "contact"].map((item) => (
            <Button
              key={item}
              variant="outline"
              className="border-gray-600 hover:bg-gray-700 w-4/5 my-1"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}
