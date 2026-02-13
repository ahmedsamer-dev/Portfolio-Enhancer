import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: {
      en: "JobWebSystem",
      ar: "نظام التوظيف الإلكتروني",
    },
    description: {
      en: "Modern job management system built with ASP.NET Core MVC using clean architecture principles and scalable backend design.",
      ar: "نظام حديث لإدارة الوظائف مبني باستخدام ASP.NET Core MVC مع تطبيق مبادئ الهندسة النظيفة وقابلية التوسع.",
    },
    role: {
      en: ".NET Full Stack Developer - Built backend architecture and admin dashboard.",
      ar: "مطور .NET Full Stack - قمت ببناء هيكلة المشروع ولوحة التحكم.",
    },

    imageUrl: "/project-mockup.png",

    features: {
      en: [
        "User Registration & Login",
        "Browse available jobs",
        "Apply for jobs (prevent duplicate applications)",
        "Admin dashboard",
        "Accept / Reject applications",
      ],
      ar: [
        "تسجيل المستخدمين",
        "تصفح الوظائف",
        "منع التقديم المكرر",
        "لوحة تحكم الإدارة",
        "قبول ورفض الطلبات",
      ],
    },

    technologies: [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap 5",
    ],

    tags: ["C#", ".NET", "ASP.NET Core"],
    link: "https://github.com/ahmedsamer-dev/jobwebsystem",
  },
];

export default function Projects() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const isRtl = lang === "ar";

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-20" dir={isRtl ? "rtl" : "ltr"}>
        <div className="flex justify-between items-center mb-14">
          <SectionHeader
            title={isRtl ? "مشاريعي" : "Featured Projects"}
            subtitle={
              isRtl ? "مشاريع FullStack و Backend" : "Real-world projects"
            }
          />

          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:border-primary transition-all"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-10 bg-card rounded-3xl border border-white/10 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="p-6 group relative">
              {/* glow */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src={project.imageUrl}
                alt={project.title[lang]}
                className="relative rounded-xl w-full h-full object-contain
                transition-all duration-500
                group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 space-y-6">
              <h3 className="text-3xl font-bold">{project.title[lang]}</h3>

              <p className="text-muted-foreground">
                {project.description[lang]}
              </p>

              {/* FEATURES */}
              <div>
                <h4 className="text-primary font-mono mb-2">
                  {isRtl ? "المميزات" : "Features"}
                </h4>

                <ul className="space-y-1">
                  {project.features[lang].map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <h4 className="text-primary font-mono mb-2">Technologies</h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 border border-primary/20 px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <a href={project.link} target="_blank">
                <button
                  className="group px-8 py-3 rounded-xl
                  border border-primary/30
                  bg-primary/10
                  hover:bg-primary
                  text-primary
                  hover:text-black
                  transition-all duration-300
                  flex items-center gap-2
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]
                  hover:-translate-y-1"
                >
                  GitHub
                  <Github
                    size={16}
                    className="group-hover:rotate-12 transition"
                  />
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
