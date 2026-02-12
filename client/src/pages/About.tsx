import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Code2, Database, Server, Cpu, Terminal } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: ".NET Full Stack Development",
      description: "Building end-to-end web applications with ASP.NET Core and modern frontend technologies."
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Clean Architecture",
      description: "Implementing decoupled, maintainable, and testable system designs using industry best practices."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "SQL Server & Data",
      description: "Designing efficient database schemas, writing optimized queries, and managing data integrity."
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: "Scalable Web APIs",
      description: "Developing high-performance RESTful services that follow security and performance guidelines."
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader 
          title="About Me" 
          subtitle="I am a dedicated .NET Full Stack Developer focused on building robust, scalable, and efficient software solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg text-muted-foreground space-y-6"
          >
            <p className="text-xl leading-relaxed">
              As a <span className="text-primary font-medium">.NET Full Stack Developer</span>, I specialize in architecting the backbone of modern web applications. My focus is on the .NET ecosystem, where I leverage C# and ASP.NET Core to build secure, fast, and reliable backend systems.
            </p>
            <p>
              I am deeply passionate about <span className="text-foreground font-medium">Clean Architecture</span> and SOLID principles. I believe that great software isn't just about functional code—it's about creating systems that are readable, maintainable, and built to evolve with business needs.
            </p>
            <p>
              My expertise spans across the full stack, from designing optimized SQL Server databases and high-performance Web APIs to implementing intuitive user interfaces. I am committed to continuous learning and staying at the forefront of the .NET ecosystem to deliver top-tier software solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3 blur-2xl" />
            <div className="relative bg-card border border-white/5 rounded-2xl p-10 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground flex items-center gap-3">
                <Terminal className="w-6 h-6 text-primary" />
                Technical Philosophy
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Clean Architecture",
                  "SOLID Principles",
                  "Scalable Web APIs",
                  "Optimized SQL",
                  "Performance Tuning",
                  "Secure by Design",
                  "Responsive UI",
                  "Testable Code"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                    <span className="text-foreground/70 group-hover:text-foreground transition-colors font-mono text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all duration-300 group shadow-lg"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
