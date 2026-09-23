"use client"
import { C, GitIcon, GithubIcon, Java, Javascript, Laravel, MariadbIcon, Mysql, NetlifyIcon, NextjsIcon, NodejsIcon, Php, Postgresql, RedisIcon, StrapiIcon, TailwindIcon, VercelIcon, VisualStudioCode, WordpressIconAlt, _React } from "@dev.icons/react";

export default function Techstacks() {
  const techstacks = [
    {
      category: "Languages",
      items: [
        { name: "C", icon: C },
        { name: "Java", icon: Java },
        { name: "JavaScript", icon: Javascript },
        { name: "PHP", icon: Php }
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "Laravel", icon: Laravel },
        { name: "Next.js", icon: NextjsIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "React", icon: _React }
      ]
    },
    {
      category: "Database and CMS",
      items: [
        { name: "MariaDB", icon: MariadbIcon },
        { name: "MySQL", icon: Mysql },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Redis", icon: RedisIcon },
        { name: "Strapi", icon: StrapiIcon },
        { name: "WordPress", icon: WordpressIconAlt }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: GitIcon },
        { name: "GitHub", icon: GithubIcon },
        { name: "Netlify", icon: NetlifyIcon },
        { name: "Vercel", icon: VercelIcon },
        { name: "VS Code", icon: VisualStudioCode },
        {name: "Node.js", icon: NodejsIcon},
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto p-10">
      <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techstacks.map((category) => (
          <div 
            key={category.category} 
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-4 font-display">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.name}
                    className="relative group flex flex-col items-center px-4 py-3 bg-white/10 rounded-lg hover:bg-white/70 transition-colors min-w-17.5 cursor-pointer"
                  >
                    {/* Speech Bubble Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="relative bg-gray-800 text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg font-display">
                        {item.name}
                        {/* Triangle pointer */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                      </div>
                    </div>
                    
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}