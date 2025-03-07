import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import profileImage from "../../assets/prof.jpg";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 bg-gray-900 text-white">
      <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto px-4">
        
        {/* Avatar (Auto Resizing) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-6"
        >
          <Avatar className="w-36 h-36 sm:w-48 sm:h-48 border-4 border-blue-500">
            <AvatarImage src="#" alt="Your Name" />
            <AvatarFallback>
              <img src={profileImage} alt="Profile" className="rounded-full" />
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Name & Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Vinay Jangid
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto"
        >
          Jr. Web Developer & Designer
        </motion.p>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-3 text-lg sm:text-xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
