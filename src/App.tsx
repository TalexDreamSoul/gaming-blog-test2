/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Gamepad2, Code2, Cpu, MonitorPlay, Layers, ChevronRight, Github, Twitter, Mail } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 mix-blend-difference text-white">
    <div className="font-display font-bold text-xl tracking-tighter">
      Z<span className="opacity-50">.DEV</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
      <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
      <a href="#skills" className="hover:opacity-60 transition-opacity">Engine</a>
      <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
    </div>
    <button className="px-5 py-2 text-sm font-medium border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
      Init Contact
    </button>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 atmospheric-glow opacity-60 z-0 pointer-events-none" />
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 max-w-5xl"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-sm md:text-base text-white/50 mb-6 tracking-widest uppercase"
        >
          UE5 Game Development Engineer
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl lg:text-[10vw] font-bold leading-[0.85] tracking-tighter text-gradient mix-blend-plus-lighter"
        >
          CRAFTING <br />
          IMMERSIVE <br />
          REALITIES.
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40"
      >
        <div className="w-8 h-[1px] bg-white/40" />
        Scroll to initialize
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border border-white/10 relative">
           <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover filter grayscale opacity-80"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter mb-6">ARCHITECT OF DIGITAL WORLDS.</h2>
          <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            <p>
              I am a Game Development Engineer specializing in Unreal Engine 5, C++, and high-performance real-time rendering. My focus is on writing robust architecture and pushing the bleeding edge of graphics technology boundaries.
            </p>
            <p>
              Currently optimizing large-scale environments, architecting scalable gameplay systems, and diving deep into engine source to extract maximum performance.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <div className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black cursor-pointer transition-colors">
              View Resume
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { icon: <Gamepad2 className="w-6 h-6" />, title: "Unreal Engine 5", desc: "Nanite, Lumen, Lyra, BP to C++." },
    { icon: <Code2 className="w-6 h-6" />, title: "C++ & Blueprints", desc: "Core systems, gameplay architecture." },
    { icon: <Cpu className="w-6 h-6" />, title: "Optimization", desc: "Profiling, memory management, multithreading." },
    { icon: <MonitorPlay className="w-6 h-6" />, title: "Graphics API", desc: "Shaders, compute, HLSL/GLSL." },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-gradient mb-4">ENGINE & CORE</h2>
          <p className="text-white/50 max-w-xl text-lg">Harnessing cutting-edge technology to push the boundaries of real-time rendering and gameplay performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i}
              className="glass-panel p-8 rounded-3xl group hover:bg-white/[0.08] transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{skill.title}</h3>
              <p className="text-white/50 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "PROJECT: OMEGA",
      type: "AAA ACTION RPG / UE5",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop",
      desc: "Architected scalable combat systems and integrated procedural animation using Motion Matching in Unreal Engine 5."
    },
    {
      title: "VERTEX RENDERER",
      type: "CUSTOM ENGINE / C++",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      desc: "Developed a custom graphics pipeline with Vulkan showcasing deferred rendering, PBR, and real-time ray tracing."
    }
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-gradient mb-16">DEPLOYMENTS</h2>
        
        <div className="space-y-24">
          {projects.map((proj, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              key={i} 
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl mb-8">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-widest text-white/50 mb-3">{proj.type}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{proj.title}</h3>
                </div>
                <div className="max-w-md text-white/60">
                  <p>{proj.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-white/10 mt-32">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-display font-bold tracking-tighter text-2xl text-white/50">
        Z.DEV <span className="text-white/20 ml-2">© 2026</span>
      </div>
      <div className="flex gap-6">
        <Github className="w-5 h-5 text-white/40 hover:text-white transition-colors cursor-pointer" />
        <Twitter className="w-5 h-5 text-white/40 hover:text-white transition-colors cursor-pointer" />
        <Mail className="w-5 h-5 text-white/40 hover:text-white transition-colors cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <div className="fixed inset-0 atmospheric-glow pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Footer />
      </div>
    </div>
  );
}
