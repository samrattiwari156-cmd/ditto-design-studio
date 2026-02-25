import Layout from "@/components/Layout";
import contactHero from "@/assets/contact-hero.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import industries from "@/assets/industries.jpg";
import aiWelcome from "@/assets/ai-welcome.jpg";

const blogPosts = [
  { img: blog1, title: "STREAMLINED DELIVERY", date: "26 Jul 2024", excerpt: "By focusing on efficiency and standardized processes, Cybotic provides consistent and precise performance." },
  { img: blog2, title: "IDENTIFYING MARKET GAPS", date: "26 Jul 2024", excerpt: "Unlike typical staffing firms, Cybotic System approaches staffing and inclusive value propositions differently." },
  { img: blog3, title: "THE ROLE OF AI IN RECRUITMENT: SUPPLEMENTING, NOT REPLACING HUMAN INTERACTION", date: "26 Jul 2024", excerpt: "Cybotic System views AI's role primarily as an enhancement tool rather than replacing human interaction." },
  { img: industries, title: "CULTURE AND TALENT ENGAGEMENT: THE CORNERSTONES OF CYBOTIC SYSTEM", date: "18 Jul 2024", excerpt: "Cybotic System believes that a strong and vibrant culture and talent engagement is fundamental to success." },
  { img: aiWelcome, title: "STANDING OUT IN A CROWDED MARKET: CYBOTIC DIFFERENTIATORS", date: "29 Jul 2024", excerpt: "In an oversaturated HR staffing field, Cybotic System distinguishes itself through innovative AI approaches." },
  { img: blog1, title: "HUMAN-CENTRIC VALUES", date: "15 Jul 2024", excerpt: "Emphasizing the well-being and individuality of consultants, Cybotic fosters a more wholesome working environment." },
  { img: blog2, title: "FROM TECHNOLOGY TO STAFFING: A JOURNEY FUELED BY MARKET NEEDS", date: "30 Jul 2024", excerpt: "Cybotic System's foray into the staffing sector was driven by a desire to meet real market demands." },
  { img: blog3, title: "REVOLUTIONISING STAFFING WITH TECHNOLOGY AND EMPATHY: CYBOTIC SYSTEM'S VISION", date: "18 Jul 2024", excerpt: "In the systems space of HR staffing, where computers and algorithms dominate, Cybotic System emerges as a visionary." },
];

const Blog = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
      <img src={contactHero} alt="Blog" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">BLOG</h1>
        <p className="text-sm text-muted-foreground mt-2">HOME › <span className="text-primary">BLOG</span></p>
      </div>
    </section>

    {/* Blog Grid */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <div key={i} className="bg-primary-foreground rounded-lg overflow-hidden shadow-lg flex flex-col sm:flex-row group">
            <div className="sm:w-48 shrink-0 overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <span className="text-xs text-muted-foreground">Posted on {post.date}</span>
              <h3 className="font-heading font-bold text-foreground text-sm mt-1 leading-tight">{post.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
