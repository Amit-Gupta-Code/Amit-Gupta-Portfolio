import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Globe, Zap, Shield, Database, Code2, LineChart, Activity, Command, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LOG_MESSAGES = [
  "Initializing AmitOS v4.0...",
  "Loading Laravel High-Performance Core...",
  "Injecting AI Automation Scripts...",
  "Syncing Android Native Modules...",
  "Optimizing Google Cloud Handlers...",
  "Securing Authentication Vaults...",
  "Mapping Global Client Network...",
  "System Ready. Amit Dev is Online.",
];

/** Live "developer console" dashboard shown as the hero visual. */
export function ArchitectConsole() {
  const [logs, setLogs] = useState<string[]>([LOG_MESSAGES[0]]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index < LOG_MESSAGES.length) {
        setLogs((prev) => [...prev, LOG_MESSAGES[index]].slice(-5));
        index++;
      } else {
        index = 1;
        setLogs([LOG_MESSAGES[0]]);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 w-full max-w-6xl mx-auto text-left">
        {/* Left Column: System Status */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-dark p-6 rounded-[2rem] border-white/5 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">System Vitals</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Real-time Performance</p>
              </div>
            </div>

            <div className="space-y-8 flex-1">
              {[
                { label: "Laravel Efficiency", value: 98, color: "bg-red-500" },
                { label: "Android Runtime", value: 95, color: "bg-green-500" },
                { label: "AI Decision Speed", value: 92, color: "bg-violet-500" },
                { label: "System Uptime", value: 99, color: "bg-brand-blue" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="text-white">{stat.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      animate={{ width: `${stat.value}%` }}
                      className={`h-full ${stat.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                <span>Live Console</span>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
              <div className="bg-black/40 rounded-xl p-4 min-h-[120px] font-mono text-xs space-y-2">
                <AnimatePresence mode="popLayout">
                  {logs.map((log, i) => (
                    <motion.p
                      key={log + i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-brand-blue/80 flex gap-2"
                    >
                      <span className="text-muted-foreground">❯</span> {log}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Visual Core */}
        <div className="lg:col-span-5 order-first lg:order-none">
          <div className="relative glass rounded-[3rem] px-4 py-12 sm:px-8 flex items-center justify-center border-white/10 overflow-hidden group max-w-md mx-auto lg:max-w-none lg:h-full">
            <div className="absolute inset-0 bg-glow-blue opacity-10 group-hover:opacity-20 transition-opacity" />
            
            {/* Square stage keeps the rings and orbit circular whatever the card's shape */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] max-w-[30rem] aspect-square pointer-events-none" aria-hidden="true">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-brand-blue/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[12.5%] border border-dashed border-brand-violet/20 rounded-full"
              />

              {/* Orbiting Icons: the ring spins, each icon counter-spins to stay upright */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { Icon: Database, pos: "top-0 left-1/2" },
                  { Icon: Smartphone, pos: "top-1/2 left-full" },
                  { Icon: Code2, pos: "top-full left-1/2" },
                  { Icon: Globe, pos: "top-1/2 left-0" },
                ].map(({ Icon, pos }) => (
                  <div key={pos} className={`absolute ${pos} -translate-x-1/2 -translate-y-1/2`}>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="p-3 sm:p-4 glass-dark rounded-full text-brand-blue border-brand-blue/20 shadow-lg shadow-brand-blue/10"
                    >
                      <Icon className="size-5 sm:size-6" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Central Identity Card */}
            <div className="relative z-10 text-center space-y-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/10 overflow-hidden mx-auto shadow-2xl relative">
                <img 
                  src="https://api.dareloop.app/amit-gupta-portfolio-2.png" 
                  alt="Amit Dev"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent mix-blend-overlay"></div>
                
                {/* Scanner Effect */}
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-px bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,1)] z-20"
                />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Amit Dev</h3>
                <Badge variant="outline" className="text-brand-blue border-brand-blue/30 px-6 py-1 rounded-full uppercase tracking-tighter bg-brand-blue/5">
                  Authorized Architect
                </Badge>
              </div>

              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p className="text-[10px] text-muted-foreground uppercase opacity-60">Years Exp</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">120+</p>
                  <p className="text-[10px] text-muted-foreground uppercase opacity-60">Repos</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">50k+</p>
                  <p className="text-[10px] text-muted-foreground uppercase opacity-60">Devs Taught</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Elements */}
        <div className="lg:col-span-3 space-y-6">
           <div className="glass-dark p-6 rounded-[2rem] border-white/5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-violet/10 text-brand-violet rounded-xl">
                  <Command size={24} />
                </div>
                <h4 className="text-white font-bold">Capabilities</h4>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Frontend", desc: "React, Next.js, Vue", icon: LineChart },
                  { label: "Backend", desc: "Laravel, Node, Go", icon: Zap },
                  { label: "Mobile", desc: "Kotlin, Flutter", icon: Smartphone },
                  { label: "Automation", desc: "Python, AI Agents", icon: Cpu },
                ].map((cap) => (
                  <motion.div
                    key={cap.label}
                    whileHover={{ x: 10 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-center group cursor-default"
                  >
                    <div className="p-2 bg-white/5 text-muted-foreground group-hover:text-brand-blue transition-colors">
                      <cap.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{cap.label}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                 <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-4">Security Protocol</p>
                 <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                    <Shield className="text-brand-blue" size={20} />
                    <span className="text-xs text-white/80">Every project protected by enterprise-grade security standards.</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Live status banner */}
      <div className="mt-10 text-center">
         <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-white/5 text-xs text-muted-foreground animate-pulse">
            <Activity size={14} className="text-brand-blue" />
            Amit is currently optimizing local government SaaS portal...
         </div>
      </div>
    </>
  );
}
