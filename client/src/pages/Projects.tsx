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
      en: ".NET Full Stack Developer - Built backend architecture, database design, authentication system and admin dashboard.",
      ar: "مطور .NET Full Stack - قمت ببناء هيكلة المشروع وقاعدة البيانات ونظام تسجيل الدخول ولوحة تحكم الإدارة.",
    },

    // 👇 الصورة من public folder (VITE WAY)
    imageUrl: "/project-mockup.png",

    features: {
      en: [
        "User Registration & Login",
        "Browse available jobs",
        "Apply for jobs (prevent duplicate applications)",
        "View user's applications",
        "Admin dashboard to manage applications",
        "Accept / Reject job applications",
        "Modern UI with Bootstrap 5",
      ],
      ar: [
        "تسجيل المستخدمين وتسجيل الدخول",
        "تصفح الوظائف المتاحة",
        "التقديم على الوظائف مع منع التكرار",
        "عرض طلبات المستخدم",
        "لوحة تحكم للإدارة",
        "قبول أو رفض الطلبات",
        "واجهة حديثة باستخدام Bootstrap 5",
      ],
    },

    technologies: [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap 5",
      "Git & GitHub",
    ],

    tags: ["C#", ".NET", "ASP.NET Core", "SQL Server"],
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
              isRtl
                ? "مشاريع FullStack و Backend حقيقية"
                : "Real-world full stack and backend projects."
            }
          />

          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="px-5 py-2 bg-white/5 border border-white/10 rounded-full"
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
            <div className="p-6">
              <img
                src={project.imageUrl}
                alt={project.title[lang]}
                className="rounded-xl w-full h-full object-cover"
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
                    <span key={i} className="bg-primary/10 px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <a href={project.link} target="_blank">
                  <button className="px-6 py-3 bg-primary rounded-xl flex gap-2">
                    GitHub <Github size={16} />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
