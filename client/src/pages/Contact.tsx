import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Mail, Phone, Github, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "ahmedsameryt@gmail.com",
      href: "mailto:ahmedsameryt@gmail.com",
      color: "text-primary"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />, // WhatsApp alternative icon
      title: "WhatsApp",
      value: "+20 100 978 9873",
      href: "https://wa.me/201009789873",
      color: "text-green-500"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      value: "ahmedsamer-dev",
      href: "https://github.com/ahmedsamer-dev/",
      color: "text-white"
    }
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <SectionHeader 
            title="Let's Connect" 
            subtitle="Interested in working together or have a question? I'm just a message away."
            className="flex flex-col items-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300 group"
            >
              <div className={`p-4 bg-white/5 rounded-full mb-6 ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{method.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors font-mono text-sm">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <div className="px-8 py-2 bg-background rounded-full text-sm text-muted-foreground">
              Based in Egypt • Available for Remote Work
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
