import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader 
          title="Featured Work" 
          subtitle="A selection of projects that showcase my skills in tackling complex problems."
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-96 w-full rounded-2xl bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-300"
              >
                {/* Image Section */}
                <div className="aspect-video w-full overflow-hidden relative">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {project.imageUrl && (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-20">
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      View Source <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
