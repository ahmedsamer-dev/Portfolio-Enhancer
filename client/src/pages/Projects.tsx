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
      ar: "نظام التوظيف الإلكتروني"
    },
    description: {
      en: "A modern backend-driven job management system built with ASP.NET Core Web API, focusing on clean architecture, scalable design, and real-world API workflows. It provides a robust foundation for job listings, applications, and professional candidate tracking.",
      ar: "نظام حديث لإدارة الوظائف يعتمد على الخلفية البرمجية، تم بناؤه باستخدام ASP.NET Core Web API، مع التركيز على الهندسة النظيفة والتصميم القابل للتوسع. يوفر أساساً قوياً لقوائم الوظائف والتقديمات وتتبع المرشحين باحترافية."
    },
    problem: {
      en: "The need for a high-performance, maintainable recruitment platform that handles complex applicant workflows securely and efficiently.",
      ar: "الحاجة إلى منصة توظيف عالية الأداء وسهلة الصيانة تتعامل مع تدفقات عمل المتقدمين المعقدة بشكل آمن وفعال."
    },
    role: {
      en: ".NET Backend Developer - Architected the API and implemented clean architecture patterns.",
      ar: "مطور خلفية .NET - قمت بتصميم الـ API وتنفيذ أنماط الهندسة النظيفة (Clean Architecture)."
    },
    features: {
      en: [
        "Scalable RESTful API Design",
        "Clean Architecture (Onion Pattern)",
        "Secure User Authentication",
        "Automated Applicant Tracking"
      ],
      ar: [
        "تصميم RESTful API قابل للتوسع",
        "هندسة نظيفة (Onion Pattern)",
        "توثيق أمني للمستخدمين",
        "تتبع المتقدمين آلياً"
      ]
    },
    tags: ["C#", "ASP.NET Core", "Web API", "SQL Server", "Clean Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "https://github.com/ahmedsamer-dev/"
  }
];

export default function Projects() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const isRtl = lang === "ar";

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" dir={isRtl ? "rtl" : "ltr"}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <SectionHeader
            title={isRtl ? "مشاريع مميزة" : "Featured Work"}
            subtitle={isRtl ? "مجموعة مختارة من مشاريع الـ full-stack والـ backend التي تظهر خبرتي التقنية." : "A selection of full-stack and backend projects that showcase my technical expertise."}
            className={isRtl ? "text-right" : "text-left"}
          />
          
          <button 
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all font-mono text-sm flex items-center gap-2 group"
          >
            <span className={lang === "en" ? "text-primary font-bold" : "text-muted-foreground"}>EN</span>
            <div className="w-[1px] h-4 bg-white/10" />
            <span className={lang === "ar" ? "text-primary font-bold" : "text-muted-foreground"}>AR</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="aspect-video lg:aspect-auto w-full overflow-hidden relative bg-white/5 p-4 md:p-8">
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title[lang]}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/70 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors">
                      {project.title[lang]}
                    </h3>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 gap-8">
                    <section>
                      <h4 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {isRtl ? "نظرة عامة" : "Project Overview"}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description[lang]}
                      </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <section>
                        <h4 className="text-sm font-mono text-primary mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {isRtl ? "المميزات" : "Key Features"}
                        </h4>
                        <ul className="space-y-2">
                          {project.features[lang].map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="text-primary/50 text-[10px]">●</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {isRtl ? "دوري في المشروع" : "My Role"}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.role[lang]}
                        </p>
                      </section>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                      GitHub <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://wa.me/201009789873"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border border-white/10 text-xs font-bold rounded-xl hover:bg-white/5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                      {isRtl ? "لمزيد من التفاصيل تواصل معنا" : "Contact for details"} <ExternalLink className="w-3.5 h-3.5" />
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
