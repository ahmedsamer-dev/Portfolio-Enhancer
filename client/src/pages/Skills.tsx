import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useSkills } from "@/hooks/use-skills";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Database, Code, Terminal, Server } from "lucide-react";

export default function Skills() {
  const { data: skills, isLoading } = useSkills();

  const categories = [
    { id: "Programming", icon: <Code className="w-5 h-5" />, color: "text-primary" },
    { id: "Backend", icon: <Server className="w-5 h-5" />, color: "text-accent" },
    { id: "Database", icon: <Database className="w-5 h-5" />, color: "text-blue-500" },
    { id: "Tools", icon: <Terminal className="w-5 h-5" />, color: "text-orange-500" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="A comprehensive list of the technologies and tools I use to build robust applications."
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-48 w-full rounded-2xl bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, index) => {
              const categorySkills = skills?.filter(s => s.category === cat.id) || [];
              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg bg-white/5 ${cat.color}`}>
                        {cat.icon}
                      </div>
                      <h3 className="text-xl font-display font-bold">{cat.id}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge 
                          key={skill.id} 
                          variant="secondary" 
                          className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 transition-colors border-white/5 font-mono font-normal"
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
        )}
      </div>
    </Layout>
  );
}
