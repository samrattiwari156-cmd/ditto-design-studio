import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import heroBrain from "@/assets/hero-brain.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import welcomeBrain from "@/assets/welcome-brain.jpg";
import welcomeAi from "@/assets/welcome-ai.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import { Calculator, ShieldCheck, Users, Handshake, ChevronRight, ChevronLeft, Phone, Lightbulb, Trophy, Globe, Cpu } from "lucide-react";

const heroSlides = [
  { img: heroBrain, title: "YOUR + HIRING", subtitle: "AI-powered solutions for recruitment, staffing, and business operations" },
  { img: hero2, title: "SMART RECRUITMENT", subtitle: "Leveraging artificial intelligence to find the perfect talent for your business" },
  { img: hero3, title: "GLOBAL SOLUTIONS", subtitle: "Connecting businesses with top talent across continents" },
];

const services = [
  { icon: Calculator, title: "REMOTE ACCOUNTING SERVICES", desc: "With the advancement of technology and developing trends, there has been a rapid shift from in-house to remote accounting solutions." },
  { icon: ShieldCheck, title: "CUSTOM DEVELOPMENT", desc: "Customized with a specific set of services to directly address the company's goals, requirements and recruiting challenges." },
  { icon: Users, title: "RECRUITING & STAFFING", desc: "A revolutionary change in the industry of recruitment services and redefining the dimensions of recruitment process outsourcing in India & USA." },
  { icon: Handshake, title: "VIRTUAL ASSISTANT SERVICES", desc: "Virtual assistant services encompass a wide range of tasks that can be performed remotely to support individuals, businesses, or organizations." },
];

const whyChoose = [
  { title: "STATE OF THE ART FACILITIES", desc: "Cybotic System: Revolutionizing Recruitment with Cutting-Edge Technology ..." },
  { title: "AI EMPOWERED", desc: "At Cybotic System, we leverage the power of artificial intelligence (AI) to revolutionize the recruitment process, ..." },
  { title: "PEOPLE ORIENTED", desc: "Cybotic System prioritizes understanding and catering to the needs, aspirations, and concerns of individuals involved in the ..." },
  { title: "SEASONED PROFESSIONALS", desc: "Recruiters at Cybotic System help clients with their pedestrian walk, they engage in the primary ..." },
];

const industryList = [
  { name: "ENGINEERING", desc: "Engineering is a 'broad' term that is not limited to civil or electrical engineering but it involves electronics and computer science engineering as well. At Cybotic System, we have an accredited team of technical recruiters who are responsible for hiring engineering professionals from all streams." },
  { name: "INFORMATION TECHNOLOGY", desc: "Our IT recruitment specialists source top-tier technology professionals across software development, cybersecurity, data science, and cloud computing." },
  { name: "ACCOUNTING", desc: "We provide skilled accounting professionals including CPAs, financial analysts, and bookkeepers to streamline your financial operations." },
  { name: "HEALTHCARE", desc: "Our healthcare staffing solutions cover medical professionals, administrative staff, and specialized healthcare IT personnel." },
  { name: "MANUFACTURING", desc: "From plant managers to quality control specialists, we supply manufacturing talent that keeps your operations running efficiently." },
  { name: "HOSPITALITY", desc: "We staff hospitality businesses with experienced managers, chefs, front-desk personnel, and event coordinators." },
  { name: "PHARMACEUTICAL", desc: "Our pharma recruitment covers research scientists, regulatory affairs specialists, and clinical trial coordinators." },
  { name: "BFSI", desc: "Banking, Financial Services and Insurance sector recruitment including analysts, underwriters, and compliance officers." },
  { name: "TECHNOLOGY", desc: "Cutting-edge technology talent including AI/ML engineers, blockchain developers, and DevOps specialists." },
  { name: "Retail", desc: "Retail staffing solutions from store managers to supply chain specialists and e-commerce professionals." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredWhy, setHoveredWhy] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Layout>
      {/* Hero Carousel */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/60" />
          </div>
        ))}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <p className="text-primary font-display text-sm tracking-[0.3em] mb-4 animate-fade-in-up">GET SMART TODAY</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {heroSlides[currentSlide].title.includes("+") ? (
                <>YOUR <span className="text-gold-gradient">+</span> HIRING</>
              ) : (
                <span className="text-gold-gradient">{heroSlides[currentSlide].title}</span>
              )}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>
        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          <ChevronRight size={24} />
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-foreground/30"}`} />
          ))}
        </div>
      </section>

      {/* Services Cards - overlapping hero */}
      <section className="section-dark relative -mt-20 z-10 pb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative border border-border p-8 text-center transition-all duration-300 ${
                hoveredCard === i ? "bg-gold text-primary-foreground" : "bg-background"
              }`}
            >
              {/* Circle icon at top */}
              <div className={`mx-auto -mt-16 mb-6 w-24 h-24 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                hoveredCard === i ? "border-primary-foreground bg-primary-foreground/10" : "border-primary/50 bg-background"
              }`}>
                <s.icon size={36} className={`transition-colors duration-300 ${hoveredCard === i ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              <h3 className={`font-heading font-bold text-lg mb-4 transition-colors duration-300 ${
                hoveredCard === i ? "text-primary-foreground" : "text-foreground"
              }`}>{s.title}</h3>
              <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${
                hoveredCard === i ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>{s.desc}</p>
              <button className={`text-xs font-semibold border px-5 py-2 transition-colors ${
                hoveredCard === i
                  ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-gold"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}>
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section - with circle grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-8 italic">WELCOME TO CYBOTIC SYSTEM</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a first generation, AI empowered solutions company which offers a variety of business services to give an edge to our clients utilising the power of a smart amalgamation of Artificial intelligence and Human skills
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are strategically based in various key locations across the globe to ensure we can provide a more localised experience to our clients.
            </p>
            <h3 className="font-heading font-bold text-foreground text-lg mb-3">Artificial Intelligence is at the core of all that we do</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand evolution and try to be ahead of times in respect to utilising Artificial Intelligence in all service offerings to optimise the delivery done by our teams.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We have internally designed AI applications which help our teams increase productivity, reduce waste and generate savings for our clients. You get access to the power of AI without investing in building or procuring the technology when working with us.
            </p>
          </div>
          {/* Circle grid - 4 quadrants */}
          <div className="flex justify-center">
            <div className="relative w-[420px] h-[420px]">
              {/* Circular clipping container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                  {/* Top-left: icon + gold bg */}
                  <div className="bg-gold flex flex-col items-center justify-center p-4 text-center">
                    <Lightbulb size={32} className="text-primary-foreground mb-2" />
                    <p className="text-primary-foreground font-heading font-bold text-sm leading-tight">Our Expertise is earned through our experience</p>
                  </div>
                  {/* Top-right: brain image */}
                  <div className="overflow-hidden">
                    <img src={welcomeBrain} alt="Brain knowledge" className="w-full h-full object-cover" />
                  </div>
                  {/* Bottom-left: AI image */}
                  <div className="overflow-hidden">
                    <img src={welcomeAi} alt="AI Technology" className="w-full h-full object-cover" />
                  </div>
                  {/* Bottom-right: icon + gold bg */}
                  <div className="bg-gold flex flex-col items-center justify-center p-4 text-center">
                    <Users size={32} className="text-primary-foreground mb-2" />
                    <p className="text-primary-foreground font-heading font-bold text-sm leading-tight">Our Team for your management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">WHY CHOOSE US</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed text-sm">
            We make long-lasting and mutually fruitful relationships with clients with competent staffing services. Choose a Cybotic System firm in the USA for flawless and premium recruitment. Unlock top talents with seasoned recruiters and remain stress-free! We handle it all – sourcing, screening, and hiring. We analyse each candidate and then bring you the best as per your customer needs. We hire across borders for improved efficiency along with using the latest technology to source candidates.
          </p>
          <p className="text-muted-foreground mb-12 text-sm">With us now, you can say goodbye to hiring headaches; and hello to success!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {whyChoose.map((w, i) => (
              <div
                key={w.title}
                onMouseEnter={() => setHoveredWhy(i)}
                onMouseLeave={() => setHoveredWhy(null)}
                className={`border border-border p-8 text-center transition-all duration-300 ${
                  hoveredWhy === i ? "bg-gold text-primary-foreground" : "bg-background"
                }`}
              >
                <h3 className={`font-heading font-bold text-lg mb-4 transition-colors duration-300 ${
                  hoveredWhy === i ? "text-primary-foreground" : "text-foreground"
                }`}>{w.title}</h3>
                <div className={`w-10 h-0.5 mx-auto mb-4 transition-colors duration-300 ${hoveredWhy === i ? "bg-primary-foreground" : "bg-primary"}`} />
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
                  hoveredWhy === i ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>{w.desc}</p>
                <button className={`text-sm font-heading font-bold transition-colors ${
                  hoveredWhy === i ? "text-primary-foreground" : "text-foreground"
                }`}>
                  Read More
                </button>
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

      {/* Industries We Serve - Interactive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center">INDUSTRIES WE SERVE</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            {/* Left - clickable list */}
            <ul className="space-y-0">
              {industryList.map((ind, i) => (
                <li
                  key={i}
                  onClick={() => setActiveIndustry(i)}
                  className={`cursor-pointer flex items-center gap-3 font-heading text-sm py-3 px-4 border-l-4 transition-all ${
                    activeIndustry === i
                      ? "border-primary text-primary font-bold"
                      : "border-border text-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {i + 1}. {ind.name}
                </li>
              ))}
            </ul>
            {/* Right - detail + image */}
            <div className="flex h-full min-h-[400px]">
              <div className="bg-gold flex-1 p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-primary-foreground text-xl mb-4">
                  {activeIndustry + 1}. {industryList[activeIndustry].name}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                  {industryList[activeIndustry].desc}
                </p>
                <button className="self-start text-sm font-semibold border border-primary-foreground text-primary-foreground px-6 py-2 hover:bg-primary-foreground hover:text-gold transition-colors">
                  Know More
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <img src={engineeringImg} alt={industryList[activeIndustry].name} className="w-full h-full object-cover" />
              </div>
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
