import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "JobWebSystem",
    description: "A modern backend-driven job management system built with ASP.NET Core Web API, focusing on clean architecture, scalable design, and real-world API workflows. It provides a robust foundation for job listings, applications, and professional candidate tracking.",
    tags: ["C#", "ASP.NET Core", "Web API", "SQL Server", "Clean Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "https://github.com/ahmedsamer-dev/"
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          title="Featured Work"
          subtitle="A selection of full-stack and backend projects that showcase my technical expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col shadow-2xl h-full"
            >
              {/* Image Section / Mockup Container */}
              <div className="aspect-video w-full overflow-hidden relative bg-white/5 p-4">
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-inner relative">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto space-y-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider font-bold text-primary/70 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-0.5 transition-all"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-white/10 text-xs font-bold rounded-xl hover:bg-white/5 hover:-translate-y-0.5 transition-all"
                    >
                      GitHub <Github className="w-3.5 h-3.5" />
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
