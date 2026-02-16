import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Terminal, Zap, Target, Shield, Globe, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";

const projects = [
  { id: "01", title: "DARKFLOW AI", category: "MACHINE LEARNING", status: "LIVE" },
  { id: "02", title: "GRIDLOCK", category: "INFRASTRUCTURE", status: "BETA" },
  { id: "03", title: "PHANTOM OPS", category: "CYBERSECURITY", status: "LIVE" },
  { id: "04", title: "NEURAL CORE", category: "DEEP TECH", status: "STEALTH" },
  { id: "05", title: "VORTEX ENGINE", category: "DATA PIPELINE", status: "LIVE" },
  { id: "06", title: "SIGNAL MESH", category: "IOT PLATFORM", status: "BETA" },
];

const services = [
  { icon: Terminal, title: "PRODUCT ENGINEERING", desc: "Full-stack product development from zero to scale. We build what others can't." },
  { icon: Zap, title: "GROWTH SYSTEMS", desc: "Automated acquisition pipelines. Data-driven growth that compounds." },
  { icon: Target, title: "STRATEGIC ADVISORY", desc: "Battle-tested operators who've scaled to 8 figures. No theory, only execution." },
  { icon: Shield, title: "INFRASTRUCTURE", desc: "Cloud-native architecture built for millions. Zero downtime, infinite scale." },
];

const stats = [
  { value: "$240M+", label: "PORTFOLIO VALUE" },
  { value: "47", label: "VENTURES LAUNCHED" },
  { value: "99.9%", label: "UPTIME SLA" },
  { value: "12", label: "COUNTRIES" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 border-b border-border" />
        <div className="absolute top-20 right-8 text-muted-foreground/20 font-mono text-[12rem] leading-none select-none hidden lg:block">
          NX
        </div>
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="container relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-xs text-primary tracking-[0.3em] mb-6">
              [ DIGITAL VENTURE STUDIO ]
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-bold leading-[0.85] mb-8 tracking-tighter">
              WE BUILD
              <br />
              <span className="text-outline-primary">EMPIRES</span>
              <br />
              NOT APPS
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 font-sans leading-relaxed">
              A black-ops venture studio that engineers, funds, and scales
              digital products from concept to market dominance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-all duration-200 brutal-shadow group"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground text-foreground font-mono text-sm uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-all duration-200"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Floating console */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-80"
          >
            <div className="border border-border bg-card p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>SYSTEM_STATUS</span>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>{'>'} ventures.active: <span className="text-primary">47</span></p>
                <p>{'>'} revenue.total: <span className="text-primary">$240M</span></p>
                <p>{'>'} uptime: <span className="text-primary">99.97%</span></p>
                <p>{'>'} deployment: <span className="text-primary flicker">LIVE</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="border-b border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              {["PRODUCT", "ENGINEERING", "GROWTH", "DESIGN", "STRATEGY", "INFRASTRUCTURE", "AI/ML", "WEB3"].map((word) => (
                <span key={word + i} className="font-mono text-sm text-muted-foreground tracking-widest flex items-center gap-8">
                  {word} <span className="text-primary">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`py-12 px-6 text-center ${i < 3 ? "border-r border-border" : ""}`}
              >
                <div className="text-3xl md:text-5xl font-mono font-bold text-primary mb-2">{s.value}</div>
                <div className="text-xs font-mono text-muted-foreground tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs text-primary tracking-[0.3em]">[ 01 — PROJECTS ]</span>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mt-4 tracking-tighter">
                WHAT WE
                <br />
                <span className="text-outline">BUILD</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border p-8 group hover:bg-card transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">{p.id}</span>
                  <span className={`font-mono text-[10px] tracking-widest px-2 py-1 ${
                    p.status === "LIVE" ? "bg-primary/10 text-primary" :
                    p.status === "BETA" ? "bg-accent/10 text-accent" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-mono text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground tracking-widest">{p.category}</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground mt-6 group-hover:text-primary group-hover:translate-x-2 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <span className="font-mono text-xs text-primary tracking-[0.3em]">[ 02 — SERVICES ]</span>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mt-4 mb-16 tracking-tighter">
            CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-10 group hover:bg-card transition-colors duration-300"
              >
                <s.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-mono text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* War Room / Dashboard Preview */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <span className="font-mono text-xs text-primary tracking-[0.3em]">[ 03 — WAR ROOM ]</span>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mt-4 mb-16 tracking-tighter">
            COMMAND
            <br />
            <span className="text-outline">CENTER</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Console */}
            <div className="border border-border p-8 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">AI_COMMAND_CONSOLE</span>
              </div>
              <div className="font-mono text-sm space-y-2 text-muted-foreground">
                <p><span className="text-primary">$</span> nexus analyze --portfolio</p>
                <p className="text-foreground">→ Scanning 47 active ventures...</p>
                <p className="text-foreground">→ Revenue growth: <span className="text-primary">+34% MoM</span></p>
                <p className="text-foreground">→ New deployments: <span className="text-primary">12 this week</span></p>
                <p><span className="text-primary">$</span> nexus status --global</p>
                <p className="text-foreground">→ All systems <span className="text-primary flicker">OPERATIONAL</span></p>
                <p className="text-muted-foreground/50">{'>'} _</p>
              </div>
            </div>

            {/* Live Stats */}
            <div className="border border-border p-8 space-y-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">LIVE_METRICS</span>
              </div>
              {[
                { label: "ACTIVE USERS", value: "2.4M", bar: "75%" },
                { label: "API CALLS/S", value: "48K", bar: "60%" },
                { label: "REVENUE ARR", value: "$18M", bar: "85%" },
                { label: "TEAM SIZE", value: "120+", bar: "45%" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between font-mono text-xs mb-1">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="text-primary">{m.value}</span>
                  </div>
                  <div className="h-1 bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: m.bar }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="border border-border p-8 mt-0">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">GLOBAL_OPERATIONS</span>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {["NYC", "LON", "BER", "SFO", "TYO", "SYD", "DXB", "SGP"].map((city) => (
                <div key={city} className="border border-border p-3 text-center group hover:border-primary transition-colors">
                  <div className="h-2 w-2 rounded-full bg-primary mx-auto mb-2 animate-pulse" />
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-primary">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Statement */}
      <section className="py-32 border-b border-border">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-mono font-bold tracking-tighter mb-6"
          >
            EXECUTION IS
            <br />
            <span className="text-primary">EVERYTHING.</span>
          </motion.h2>
          <p className="font-mono text-lg text-muted-foreground mb-10">
            TAKE THE RISK.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-all duration-200 brutal-shadow group"
          >
            Start Building
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-mono font-bold text-xs">X</span>
                </div>
                <span className="font-mono text-sm font-bold tracking-tighter uppercase">NEXUS</span>
              </div>
              <p className="text-xs text-muted-foreground font-mono">DIGITAL VENTURE STUDIO</p>
            </div>
            <div className="flex flex-wrap gap-8">
              {["Projects", "Services", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="font-mono text-xs text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
            <p className="font-mono text-xs text-muted-foreground">© 2026 NEXUS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
