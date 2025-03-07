import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiCplusplus, 
  SiC , SiPython, SiMongodb, SiNextdotjs, SiExpress, 
  SiTypescript, SiPostgresql, SiGit, SiFirebase 
} from "react-icons/si";
import { FaDatabase , FaJava } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
  { name: "C", icon: SiC, color: "text-gray-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "NoSQL", icon: FaDatabase, color: "text-gray-400" },
  { name: "REST API", icon: SiExpress, color: "text-gray-400" },
  { name: "MATLAB", icon: TbMathFunction, color: "text-red-600" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="bg-gray-800 shadow-lg p-2 rounded-md">
              <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
                <span className="font-medium text-gray-100 text-sm">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
