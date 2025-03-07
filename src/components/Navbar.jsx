import { Button } from "../components/ui/button";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-gray-900 text-white backdrop-blur">
      <div className="mx-auto container flex h-16 items-center justify-between">
        <span className="text-xl font-bold">Portfolio</span>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-gray-600 hover:bg-gray-700"
            onClick={() => scrollToSection("about")}
          >
            About
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 hover:bg-gray-700"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 hover:bg-gray-700"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 hover:bg-gray-700"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}
