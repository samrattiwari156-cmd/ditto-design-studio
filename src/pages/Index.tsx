import Layout from "@/components/Layout";
import heroBrain from "@/assets/hero-brain.jpg";
import aiWelcome from "@/assets/ai-welcome.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import industries from "@/assets/industries.jpg";
import { Building2, Users, Monitor, Headphones, ChevronRight, Phone, MapPin, Lightbulb, Trophy, Globe } from "lucide-react";

const services = [
  { icon: Building2, title: "IMPACT ACCOUNTANT", desc: "Providing advanced AI-driven accounting services using latest technologies and industry best practices." },
  { icon: Monitor, title: "CUSTOM DEVELOPMENT", desc: "We understand your unique needs and provide tailored technology solutions designed specifically for your business." },
  { icon: Users, title: "REVOLUTIONARY STAFFING", desc: "We revolutionize staffing by blending AI and human expertise to deliver exceptional talent solutions." },
  { icon: Headphones, title: "VIRTUAL ASSISTANT SERVICES", desc: "Our AI-powered virtual assistants streamline your operations and boost your productivity significantly." },
];

const whyChoose = [
  { icon: Trophy, title: "STATE OF THE ART FACILITIES", desc: "Modern infrastructure with cutting-edge technology platforms." },
  { icon: Users, title: "EXPERIENCED PROFESSIONALS", desc: "Industry veterans with decades of combined expertise." },
  { icon: MapPin, title: "GLOBAL PRESENCE", desc: "Strategically located across continents for localized service." },
  { icon: Lightbulb, title: "INNOVATIVE SOLUTIONS", desc: "AI-powered approaches that transform business operations." },
];

const industryList = [
  "ENGINEERING / MANUFACTURING", "ACCOUNTING", "RETAIL", "MANUFACTURING",
  "ENERGY OIL", "IT / AUTOMOTIVE / OIL", "BANKING", "TECHNOLOGY", "LEGAL", "E-MAIL",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBrain} alt="AI Brain" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-primary font-display text-sm tracking-[0.3em] mb-4 animate-fade-in-up">GET SMART TODAY</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            YOUR <span className="text-gold-gradient">+</span> HIRING
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            AI-powered solutions for recruitment, staffing, and business operations
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-all group">
              <s.icon className="text-primary mb-4" size={36} />
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <button className="text-xs font-semibold text-primary border border-primary px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">WELCOME TO CYBOTIC SYSTEM</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cybotic System is a next-generation AI-powered solutions company that delivers innovative business services across recruitment, custom development, accounting, and virtual assistance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We harness the power of Artificial Intelligence combined with human expertise to transform how businesses operate and grow in the modern digital landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to innovation and excellence drives us to continuously evolve our services, ensuring our clients always stay ahead of the competition.
            </p>
          </div>
          <div className="relative">
            <img src={aiWelcome} alt="AI Technology" className="rounded-lg w-full shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold">
              AI Loves You
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">WHY CHOOSE US</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Choosing the right partner is critical, and at Cybotic System we combine cutting-edge AI technology with deep industry knowledge to deliver unmatched results for our clients worldwide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-all">
                <w.icon className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-heading font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Phone */}
      <section className="bg-gold-gradient py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Phone className="text-primary-foreground" size={28} />
            <span className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">+91-120-4441131</span>
          </div>
          <p className="text-primary-foreground/80 text-lg">(Call us for your best solution)</p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12">OUR TEAM</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { img: team1, name: "Rakesh Sharma", role: "Founder, Managing Director" },
              { img: team2, name: "Prerna Kapoor", role: "Co-Founder, Director" },
            ].map((t) => (
              <div key={t.name} className="w-64">
                <img src={t.img} alt={t.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-lg" />
                <h3 className="font-heading font-bold text-foreground text-lg">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">INDUSTRIES WE SERVE</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ul className="space-y-3">
              {industryList.map((ind, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-heading text-sm border-b border-border pb-2">
                  <span className="text-primary font-bold">{i + 1}.</span>
                  {ind}
                </li>
              ))}
            </ul>
            <div className="relative">
              <img src={industries} alt="Industries" className="rounded-lg w-full shadow-xl" />
              <div className="absolute inset-0 bg-primary/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-12 text-center">OUR BLOG</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: blog1, title: "THE ROLE OF AI IN RECRUITMENT: SUPPLEMENTING, NOT REPLACING HUMAN INTERACTION", date: "26 Jul 2024" },
              { img: blog2, title: "IDENTIFYING MARKET GAPS", date: "26 Jul 2024" },
              { img: blog3, title: "STREAMLINED DELIVERY", date: "26 Jul 2024" },
            ].map((b) => (
              <div key={b.title} className="bg-primary-foreground rounded-lg overflow-hidden shadow-lg group">
                <div className="overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted-foreground">{b.date}</span>
                  <h3 className="font-heading font-bold text-foreground text-sm mt-2 leading-tight">{b.title}</h3>
                  <a href="/blog" className="text-primary text-xs font-semibold mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">OUR CLIENTS</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["DuPont", "Ghost Power", "Wells Fargo", "Sheas Valet"].map((c) => (
              <div key={c} className="bg-card border border-border rounded-lg px-8 py-4 text-foreground font-heading font-bold text-lg hover:border-primary transition-colors">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
