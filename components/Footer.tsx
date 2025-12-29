import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/rumeshkumara" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/rumeshkumara" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/rumeshkumara" },
  { name: "Email", icon: Mail, href: "mailto:rumesh@example.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-accent-400 text-sm">
            <p>© {currentYear} Rumesh Kumara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
