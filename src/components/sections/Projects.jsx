import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";
import { Button } from "../../components/ui/button";
import proj1Img from "../../assets/screenshot.png";
import proj2Img from "../../assets/Screenshot3.png";

const projects = [
  {
    title: "Netflix Clone",
    description: "A modern web page built with HTML and CSS.",
    image: proj1Img,
    github: "https://github.com/Vinayj1548/Netflix-Clone",
    demo: "https://vinayj1548.github.io/Netflix-Clone/",
  },
  {
    title: "TExtUtils-React",
    description: "A react application with real-time features *(AI integration is to be done).",
    image: proj2Img,
    github: "https://github.com/Vinayj1548/TExtUtils-React",
    demo: "https://vinayj1548.github.io/TExtUtils-React/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-gray-800 shadow-md rounded-lg hover:scale-105 transition duration-300">
              <CardHeader>
                <CardTitle className="text-gray-100">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full aspect-[16/9] object-cover shadow-md"
                />
                <p className="text-gray-300">{project.description}</p>
                
                {/* Buttons for GitHub and Live Demo */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-600 hover:bg-gray-700 flex items-center gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-5 h-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 hover:bg-gray-700 flex items-center gap-2"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
