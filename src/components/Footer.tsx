import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <h4 className="text-lg font-heading font-bold text-foreground mb-4">ABOUT US</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We are a first generation, AI empowered solutions company which offers a variety of business services to give an edge to our clients utilising the power of a smart amalgamation of Artificial Intelligence and Human skills.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            We are strategically based in various key locations across the globe to ensure we can provide a more localised experience to our clients.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-heading font-bold text-foreground mb-4">SOLUTIONS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Recruitment", "Custom Development", "Remote Accounting Services", "Virtual Assistant Services"].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-heading font-bold text-foreground mb-4">RPO</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Offshore Dedicated Recruiters", "24*7 Sourcing IT"].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social */}
      <div className="text-center border-t border-border pt-8">
        <h4 className="text-lg font-heading font-bold text-foreground mb-4">FOLLOW US</h4>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-primary hover:text-gold-light transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-primary hover:text-gold-light transition-colors"><Linkedin size={24} /></a>
        </div>
        <p className="text-xs text-muted-foreground">Copyright © 2024. Cybotic System. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
