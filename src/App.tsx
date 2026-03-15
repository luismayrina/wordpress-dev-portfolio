/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  FileText, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  ChevronRight,
  Menu,
  X,
  Cpu,
  Layout,
  Database,
  Smartphone,
  Terminal,
  PenTool,
  Search,
  ShoppingBag,
  Globe,
  Sparkles,
  Framer as FramerIcon
} from 'lucide-react';
import { DEVELOPER_INFO, SKILLS, PROJECTS, EXPERIENCES, SOCIAL_LINKS, AI_TOOLS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'ai', 'work', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span>{DEVELOPER_INFO.name.split(' ')[0]}<span className="text-emerald-500">.</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  activeSection === item.id ? 'text-emerald-500' : 'text-zinc-500'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={DEVELOPER_INFO.resumeUrl}
              className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={DEVELOPER_INFO.resumeUrl}
                className="flex items-center gap-2 text-2xl font-bold text-emerald-500 underline underline-offset-8"
              >
                Download Resume <ChevronRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  Available for projects
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                  WordPress <br />
                  <span className="text-emerald-500">Developer</span>
                </h1>
                <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
                  {DEVELOPER_INFO.about}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#work" 
                    className="px-8 py-4 bg-black text-white font-medium rounded-2xl hover:scale-[1.02] transition-transform"
                  >
                    View My Work
                  </a>
                  <div className="flex items-center gap-4 px-4">
                    {SOCIAL_LINKS.map((link) => (
                      <a 
                        key={link.platform}
                        href={link.url}
                        className="p-3 bg-white border border-black/5 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors shadow-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getSocialIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl shadow-emerald-500/10">
                  <img 
                    src={DEVELOPER_INFO.profileImage} 
                    alt={DEVELOPER_INFO.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/2 -right-12 w-24 h-24 border border-emerald-500/20 rounded-full -z-10 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats / Highlight Section */}
        <section className="py-20 bg-white border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Projects Completed', value: '30+' },
              { label: 'Happy Clients', value: '20+' },
              { label: 'Web Solutions', value: '20' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Tech Section */}
        <section id="skills" className="py-32 px-6 bg-white text-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl font-bold tracking-tight">Core Tech</h2>
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 opacity-30">
                  <path d="M0 10C5 10 7.5 5 12.5 5C17.5 5 20 15 25 15C30 15 32.5 5 37.5 5C42.5 5 45 15 50 15C55 15 57.5 10 60 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-zinc-500 font-medium">My primary toolkit for building high-performance web solutions across various platforms.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SKILLS.map((skill, i) => {
                const colors = [
                  'text-blue-600', 'text-purple-600', 'text-amber-600', 'text-red-600',
                  'text-orange-600', 'text-yellow-600', 'text-cyan-600', 'text-orange-700'
                ];
                const icons = {
                  layout: <Layout size={24} />,
                  code: <Code2 size={24} />,
                  zap: <Cpu size={24} />,
                  terminal: <Code2 size={24} />,
                  database: <Database size={24} />,
                  flame: <Cpu size={24} />,
                  smartphone: <Smartphone size={24} />,
                  cloud: <Cpu size={24} />,
                  'shopping-bag': <ShoppingBag size={24} />,
                  globe: <Globe size={24} />
                };
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 bg-zinc-50 border border-black/5 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
                  >
                    <div className={`${colors[i % colors.length]} group-hover:scale-110 transition-transform`}>
                      {icons[skill.icon as keyof typeof icons] || <Code2 size={24} />}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-emerald-600 transition-colors">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Powered Section */}
        <section id="ai" className="py-32 px-6 bg-[#fafafa] text-[#1a1a1a] border-t border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl font-bold tracking-tight">AI Powered</h2>
                <div className="text-emerald-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                </div>
              </div>
              <p className="text-zinc-500 font-medium">Leveraging cutting-edge AI to accelerate development and enhance creativity.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Coding & Dev', icon: <Terminal className="text-emerald-600" size={20} />, tools: ['Antigravity', 'Cursor', 'GitHub Copilot'] },
                { title: 'Content Creation', icon: <PenTool className="text-pink-600" size={20} />, tools: ['ChatGPT', 'Gemini', 'Midjourney', 'Adobe Firefly'] },
                { title: 'Design & UI', icon: <Cpu className="text-blue-600" size={20} />, tools: ['Figma AI', 'Relume AI', 'Uizard', 'Framer'] },
                { title: 'SEO & Growth', icon: <Search className="text-orange-600" size={20} />, tools: ['ChatGPT', 'Gemini', 'RankMath', 'Surfer SEO'] },
              ].map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white border border-black/5 rounded-xl hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-8">
                    {group.icon}
                    <h3 className="text-xs font-black uppercase tracking-widest text-zinc-800">{group.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {group.tools.map(tool => (
                      <li key={tool} className="flex items-center gap-3 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-6 bg-zinc-900 text-white rounded-[3rem] mx-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
                <p className="text-zinc-400 max-w-md">
                  A collection of high-performance web solutions ranging from E-Commerce to Corporate platforms.
                </p>
              </div>
              <div className="hidden md:block">
                <Layout className="w-12 h-12 text-emerald-500 opacity-50" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md">
                      {project.category}
                    </span>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-16 flex items-center gap-3">
              <Briefcase className="text-emerald-500" />
              Experience
            </h2>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-black/5"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="text-emerald-600 font-medium">{exp.company}</div>
                    </div>
                    <div className="text-sm font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-zinc-500 flex gap-3 text-sm leading-relaxed">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto bg-emerald-500 rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                Let's build something <br /> amazing together.
              </h2>
              <p className="text-xl text-emerald-50 mb-12 max-w-xl mx-auto">
                Currently accepting new WordPress projects and collaborations. 
                Drop me a line and let's talk about your vision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="px-10 py-5 bg-white text-emerald-600 font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-3"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
                <div className="flex items-center gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.platform}
                      href={link.url}
                      className="w-12 h-12 bg-emerald-600/50 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-emerald-600 transition-all"
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-zinc-400 font-medium">
            © 2026 {DEVELOPER_INFO.name}.
          </div>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-emerald-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
