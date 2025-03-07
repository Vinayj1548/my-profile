import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <Card className="bg-gray-800 shadow-lg max-w-5xl mx-auto">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Image Section */}
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="Professional workspace"
                  className="rounded-lg shadow-lg w-full md:w-11/12 object-cover"
                />
              </div>

              {/* About Me Text & Code Section */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in front-end development, with expertise in React, Node.js,
                  and modern web technologies. My programming skills are improving day by day, 
                  and I'm always eager to learn new things and take on challenging projects.
                </p>

                {/* Code Block for User Profile */}
                <div className="bg-gray-700 text-green-300 p-4 rounded-lg shadow-lg overflow-x-auto text-sm">
                  <h2 className="text-lg font-bold text-gray-100 mb-2">🚀 The Code Alchemist 🔥</h2>
                  <pre className="whitespace-pre-wrap">
                    <code>
{`const user = {
  name: "Aspiring Full-Stack Developer",
  skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "C", "C++", "Python", "Java", "DSA"],
  experience: {
    role: "Junior Web Developer",
    projects: ["Dynamic Web Apps", "Frontend UI/UX", "Optimized Code"],
    tools: ["Vite", "Tailwind CSS", "REST APIs", "Git"]
  },
  mission: "Craft seamless user experiences with scalable, efficient code.",
  futureGoals: ["Master Full-Stack Dev", "Contribute to Open Source", "Crack Industry Interviews"]
};

console.log("🚀 Ready to build and break things to innovate! 🔥");`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
