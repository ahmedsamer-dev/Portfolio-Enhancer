import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Code2, Database, Server, Cpu } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Clean Architecture",
      description: "Building maintainable systems with separation of concerns and SOLID principles."
    },
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: "Backend Development",
      description: "Expertise in .NET Core, ASP.NET APIs, and high-performance server-side logic."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "Database Design",
      description: "Optimized SQL schemas, Entity Framework Core, and data integrity management."
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: "Scalable Systems",
      description: "Architecting solutions that grow with business needs without compromising performance."
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader 
          title="About Me" 
          subtitle="I am a passionate C# developer dedicated to building robust and efficient software solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg text-muted-foreground"
          >
            <p>
              My journey in software development is driven by a fascination with how things work under the hood. As a C# specialist, I focus on the backbone of applications—ensuring they are secure, fast, and reliable.
            </p>
            <p>
              I believe that great software is not just about writing code that works; it's about writing code that speaks. Readable, testable, and maintainable code is my signature.
            </p>
            <p>
              When I'm not coding, I'm constantly learning new technologies, refining my understanding of system design, and exploring the latest in the .NET ecosystem.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3 blur-xl" />
            <div className="relative bg-card border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Technical Philosophy</h3>
              <ul className="space-y-4">
                {["Performance First", "Secure by Design", "Maintainable Codebase", "Continuous Improvement"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80 font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card border border-white/5 rounded-xl hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
