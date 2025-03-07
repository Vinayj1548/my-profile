import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "work.vinayjangid@gmail.com"; 
  const phone1 = "+919036135392"; 
  const phone2 = "+918949381125"; 
  const linkedin = "https://www.linkedin.com/in/vinay-jangid-742470240/"; 
  const github = "https://github.com/Vinayj1548"; 
  const whatsapp1 = `https://wa.me/${phone1.replace('+', '')}`; 
  const whatsapp2 = `https://wa.me/${phone2.replace('+', '')}`; 

  const handleEmailClick = () => {
    const subject = "Contact from Portfolio";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Card */}
          <Card className="bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-lg">Contact Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleEmailClick}
                className="w-full flex items-center gap-2 justify-start border-gray-600 hover:bg-gray-700 py-3 px-4"
              >
                <Mail className="h-5 w-5" />
                {email}
              </Button>
              <Button className="w-full flex items-center gap-2 justify-start border-gray-600 hover:bg-gray-700 py-3 px-4">
                <Phone className="h-5 w-5" />
                <a href={`tel:${phone1}`} className="text-white">{phone1}</a>
              </Button>
              <Button className="w-full flex items-center gap-2 justify-start border-gray-600 hover:bg-gray-700 py-3 px-4">
                <Phone className="h-5 w-5" />
                <a href={`tel:${phone2}`} className="text-white">{phone2}</a>
              </Button>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card className="bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-lg">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full border-gray-600 hover:bg-gray-700 py-3 px-4">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                  <SiLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button className="w-full border-gray-600 hover:bg-gray-700 py-3 px-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                  <SiGithub className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button className="w-full border-gray-600 hover:bg-gray-700 py-3 px-4">
                <a href={whatsapp1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                  <SiWhatsapp className="w-5 h-5" />
                  WhatsApp1
                </a>
              </Button>
              <Button className="w-full border-gray-600 hover:bg-gray-700 py-3 px-4">
                <a href={whatsapp2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                  <SiWhatsapp className="w-5 h-5" />
                  WhatsApp2
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
