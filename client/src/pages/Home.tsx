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

        <div className="container px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary/80">
              Welcome to my portfolio v1.0
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-bold mb-4 tracking-tight">
            .NET Full Stack Developer
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Building{" "}
              <span className="text-primary font-medium">scalable APIs</span>{" "}
              with ASP.NET Core & Clean Architecture, and modern full-stack web
              applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/projects"
                className="group relative px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/contact"
                className="px-10 py-4 text-foreground font-medium border border-white/10 rounded-xl hover:bg-white/5 transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
