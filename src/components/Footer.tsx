import { motion } from 'framer-motion';
import { siteConfig, footerLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-container py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Pathivo" className="w-8 h-8" />
              <span className="font-display font-bold text-lg tracking-wider text-white">
                PATHIVO
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://pathivo.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Website"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {siteConfig.since} Pathivo. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">{siteConfig.icp.beian}</a>
            <a href="http://www.beian.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors flex items-center gap-1">
              <img src={`${import.meta.env.BASE_URL}beian-mps-icon.png`} alt="" className="w-4 h-4 inline" />
              {siteConfig.icp.mps}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
