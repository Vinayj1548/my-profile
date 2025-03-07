import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiCplusplus, 
  SiC, SiPython, SiMongodb, SiNextdotjs, SiExpress, 
  SiTypescript, SiPostgresql, SiGit, SiFirebase 
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";

// Skill Data
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

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h2 className="text-3xl text-white font-bold mb-8" variants={fadeIn}>
          Skills
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.name} variants={fadeIn}>
              <Card className="bg-gray-800 shadow-md rounded-lg transition-all duration-200 transform hover:scale-105">
                <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
                  <skill.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${skill.color}`} />
                  <span className="font-medium text-gray-100 text-sm sm:text-base">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
