import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Terminal, Server } from "lucide-react";

const skills = [
  // Backend Development
  { id: 1, category: "Backend Development", name: "ASP.NET Core" },
  { id: 2, category: "Backend Development", name: "Web API Development" },
  { id: 3, category: "Backend Development", name: "RESTful API Design" },
  { id: 4, category: "Backend Development", name: "Clean Architecture" },
  // Programming Languages
  { id: 5, category: "Programming Languages", name: "C#" },
  { id: 6, category: "Programming Languages", name: "OOP Principles" },
  { id: 7, category: "Programming Languages", name: "SOLID Design" },
  // Database Management
  { id: 8, category: "Database Management", name: "SQL Server" },
  { id: 9, category: "Database Management", name: "T-SQL Queries" },
  {
    id: 10,
    category: "Database Management",
    name: "Database Design & Schema Modeling",
  },
  // Developer Tools
  { id: 11, category: "Developer Tools", name: "Git & GitHub" },
  { id: 12, category: "Developer Tools", name: "Visual Studio" },
  { id: 13, category: "Developer Tools", name: "Postman" },
];

export default function Skills() {
  const categories = [
    {
      id: "Backend",
      label: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      color: "text-primary",
    },
    {
      id: "Programming",
      label: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      color: "text-accent",
    },
    {
      id: "Database",
      label: "Database Management",
      icon: <Database className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      id: "Tools",
      label: "Developer Tools",
      icon: <Terminal className="w-5 h-5" />,
      color: "text-orange-500",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="A comprehensive list of the technologies and tools I use to build robust, full-stack applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, index) => {
            const categorySkills = skills.filter(
              (s) => s.category === cat.label,
            );
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-white/5 rounded-2xl p-10 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div
                      className={`p-3.5 rounded-xl bg-white/5 ${cat.color} group-hover:scale-110 transition-transform shadow-inner`}
                    >
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold">
                      {cat.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.id}
                        variant="secondary"
                        className="px-4 py-2 text-xs bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border-white/5 font-mono font-medium rounded-lg"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
