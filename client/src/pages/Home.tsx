import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  const text = "Ahmed Samer";

  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* LEFT SIDE: Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-primary/80">
                  Welcome to my portfolio v1.0
                </span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-tight">
                  .NET <span className="text-primary">Full Stack</span>{" "}
                  Developer
                </h1>

                {/* Tech stack hint */}
                <p className="text-sm md:text-base uppercase tracking-[0.2em] text-primary/60 font-mono">
                  ASP.NET Core • C# • Web API • SQL Server
                </p>
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-10"
              >
                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Building{" "}
                  <span className="text-primary font-medium">
                    scalable APIs
                  </span>{" "}
                  with ASP.NET Core & Clean Architecture, and modern full-stack
                  web applications.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href="/projects"
                    className="group relative px-12 py-5 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-1 w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Projects{" "}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>

                  <Link
                    href="/contact"
                    className="px-10 py-4 text-foreground font-medium border border-white/10 rounded-xl hover:bg-white/5 transition-all hover:-translate-y-1 backdrop-blur-sm w-full sm:w-auto text-center"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group order-1 lg:order-2"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/40 transition-all duration-500" />

              {/* Image Frame */}
              <div className="relative aspect-square w-64 md:w-80 lg:w-[400px] rounded-2xl overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:border-primary/50">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="/profile.jpg"
                    alt="Ahmed Samer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
