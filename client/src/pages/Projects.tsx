import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: {
      en: "JobWebSystem",
      ar: "نظام التوظيف الإلكتروني",
    },
    description: {
      en: "A full recruitment management platform where administrators can manage job listings through a dedicated dashboard, publish new opportunities, and oversee applications. Users can register, browse available jobs, and apply seamlessly through a structured workflow. Built with ASP.NET Core MVC following clean architecture principles for scalability and maintainability.",
      ar: "منصة متكاملة لإدارة التوظيف تتيح للأدمن إدارة الوظائف من خلال لوحة تحكم مخصصة، إضافة فرص جديدة ومتابعة طلبات التقديم. يمكن للمستخدمين التسجيل وتصفح الوظائف والتقديم عليها بسهولة ضمن نظام منظم. تم تطوير المشروع باستخدام ASP.NET Core MVC مع تطبيق مبادئ Clean Architecture لضمان قابلية التوسع وسهولة الصيانة.",
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
            className="grid lg:grid-cols-2 gap-10 bg-card rounded-3xl border border-white/10 overflow-hidden mb-12 shadow-2xl"
          >
            {/* IMAGE - UI ENHANCEMENT */}
            <div className="p-8 group relative flex items-center justify-center bg-white/[0.02]">
              <div className="absolute inset-0 bg-primary/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={project.imageUrl}
                  alt={project.title[lang]}
                  className="relative rounded-2xl w-full max-h-[400px] object-contain
                  transition-all duration-700 ease-out
                  group-hover:scale-[1.03] drop-shadow-2xl"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.description[lang]}
                </p>
              </div>

              {/* FEATURES */}
              <div className="space-y-3">
                <h4 className="text-primary font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {isRtl ? "المميزات" : "Key Features"}
                </h4>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {project.features[lang].map((f, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary/40 text-[10px]">●</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGIES + GITHUB INLINE */}
              <div className="space-y-4">
                <h4 className="text-primary font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {isRtl ? "التقنيات" : "Tech Stack"}
                </h4>

                <div className="flex flex-wrap items-center gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono font-medium transition hover:bg-primary/5 hover:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-6 py-2 rounded-xl
                    border border-primary/30
                    bg-primary/10
                    text-primary
                    text-xs font-bold
                    transition-all duration-500
                    flex items-center gap-2
                    hover:bg-primary
                    hover:text-primary-foreground
                    hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]
                    hover:-translate-y-0.5
                    active:scale-95"
                  >
                    GitHub
                    <Github
                      size={14}
                      className="group-hover:rotate-12 transition-transform duration-500"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
