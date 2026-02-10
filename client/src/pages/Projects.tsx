import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {

  // ✅ Static projects data (no backend needed)
  const projects = [
    {
      id: 1,
      title: "JobWebSystem",
      description:
        "Backend-focused job management system built with ASP.NET Core Web API using clean architecture principles and scalable API design.",
      tags: ["C#", "ASP.NET Core", "Web API", "SQL Server"],
      link: "https://github.com/yourusername/jobwebsystem",
      imageUrl: "/project-preview.png"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills in tackling complex problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col shadow-2xl"
            >
              {/* Image Section */}
              <div className="aspect-video w-full overflow-hidden relative bg-white/5 p-4">
                <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-8 line-clamp-3 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="space-y-6">
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider font-bold text-primary/70 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-white/10 text-xs font-bold rounded-lg hover:bg-white/5 transition-all"
                    >
                      GitHub <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
