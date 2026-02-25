import Layout from "@/components/Layout";
import contactHero from "@/assets/contact-hero.jpg";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const locations = [
  { region: "LOCATION (USA)", address: "5900 Balcones Dr STE, 100 Austin, Texas 78731, USA.", phone: "+1 301 245 8420", email: "info@cyboticsystems.com" },
  { region: "LOCATION (DUBAI)", address: "19th Floor, Aspln Commercial Tower, Sheikh Zayed Road, Dubai.", phone: "+1 301 245 8420", email: "info@cyboticsystems.com" },
  { region: "LOCATION (INDIA)", address: "301, Third floor, A-24, sector 63, Noida U.P. 201309, India.", phone: "+1 301 245 8420", email: "info@cyboticsystems.com" },
];

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
        <img src={contactHero} alt="Contacts" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">CONTACTS</h1>
          <p className="text-sm text-muted-foreground mt-2">HOME › <span className="text-primary">CONTACTS</span></p>
        </div>
      </section>

      {/* Locations */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.region}>
              <h3 className="font-heading font-bold text-primary text-xl mb-6">{loc.region}</h3>
              <div className="space-y-4 text-sm text-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={18} />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" size={18} />
                  <span>{loc.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.05!2d-97.757!3d30.355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzE4LjAiTiA5N8KwNDUnMjUuMiJX!5e0!3m2!1sen!2sus!4v1"
          className="w-full h-80 border-0"
          loading="lazy"
          title="Office Location"
        />
      </section>

      {/* Query Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-10">QUERY WITH US</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your name*"
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              placeholder="E-mail*"
              type="email"
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Subject"
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button className="w-full bg-gold-gradient text-primary-foreground font-heading font-bold py-3 rounded-md hover:opacity-90 transition-opacity">
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
