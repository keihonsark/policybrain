'use client';

import { useEffect, useState } from 'react';

const APP_URL = 'https://app.policybrain.app';
const SIGNIN_URL = 'https://app.policybrain.app/login?from_url=https%3A%2F%2Fapp.policybrain.app%2Fdashboard';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="logo">
            <span className="logo-mark">P</span>
            <span>PolicyBrain</span>
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>

          <div className="nav-cta">
            <a href={SIGNIN_URL} className="nav-signin">Sign In</a>
            <a href={APP_URL} className="btn btn-primary">Get Started →</a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href={SIGNIN_URL}>Sign In</a>
          <a href={APP_URL} className="btn btn-primary">Get Started →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="badge fade-in">
              <span className="badge-dot"></span>
              Insurance Organization Platform
            </div>
            <h1 className="fade-in">
              All Your Policies.<br />
              <span className="gradient-text">One Place.</span>
            </h1>
            <p className="hero-sub fade-in">
              Stop digging through email folders and spreadsheets. PolicyBrain
              organizes every policy across your entities, assets, and renewals
              in one modern dashboard.
            </p>
            <div className="hero-buttons fade-in">
              <a href={APP_URL} className="btn btn-primary btn-lg">Get Started Free →</a>
              <a href="#pricing" className="btn btn-secondary btn-lg">View Pricing</a>
            </div>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="mockup fade-in">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="browser-url">app.policybrain.app — Dashboard</div>
            </div>
            <div className="mockup-body">
              <aside className="mockup-sidebar">
                <div className="mockup-sidebar-title">Workspace</div>
                <ul className="mockup-nav">
                  <li className="active"><span className="mockup-nav-dot"></span>Dashboard</li>
                  <li><span className="mockup-nav-dot"></span>Entities</li>
                  <li><span className="mockup-nav-dot"></span>Policies</li>
                  <li><span className="mockup-nav-dot"></span>Assets</li>
                  <li><span className="mockup-nav-dot"></span>Expenses</li>
                  <li><span className="mockup-nav-dot"></span>Renewals</li>
                </ul>
              </aside>
              <div className="mockup-main">
                <div className="mockup-h">Overview</div>
                <div className="mockup-stats">
                  <div className="mockup-stat">
                    <div className="mockup-stat-label">Entities</div>
                    <div className="mockup-stat-val">3</div>
                  </div>
                  <div className="mockup-stat">
                    <div className="mockup-stat-label">Policies</div>
                    <div className="mockup-stat-val">6</div>
                  </div>
                  <div className="mockup-stat">
                    <div className="mockup-stat-label">Premium</div>
                    <div className="mockup-stat-val cyan">$82k</div>
                  </div>
                </div>
                <div className="mockup-section-title">Upcoming Renewals</div>
                <div className="mockup-renewals">
                  <div className="mockup-renewal">
                    <div className="mockup-renewal-info">
                      <div className="mockup-renewal-title">BOP — Hartford</div>
                      <div className="mockup-renewal-sub">Acme Holdings LLC</div>
                    </div>
                    <div className="mockup-tag tag-red">4d</div>
                  </div>
                  <div className="mockup-renewal">
                    <div className="mockup-renewal-info">
                      <div className="mockup-renewal-title">Home — Chubb</div>
                      <div className="mockup-renewal-sub">Personal</div>
                    </div>
                    <div className="mockup-tag tag-yellow">12d</div>
                  </div>
                  <div className="mockup-renewal">
                    <div className="mockup-renewal-info">
                      <div className="mockup-renewal-title">Commercial Auto — Travelers</div>
                      <div className="mockup-renewal-sub">Acme Holdings LLC</div>
                    </div>
                    <div className="mockup-tag tag-cyan">18d</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label fade-in">Core Features</span>
            <h2 className="section-title fade-in">
              Everything your insurance portfolio needs
            </h2>
            <p className="section-sub fade-in">
              Stop piecing things together with spreadsheets, folders, and
              calendar reminders. PolicyBrain gives you one structured home
              for every policy you own.
            </p>
          </div>

          <div className="features-grid stagger">
            <div className="card feature-card span-2 fade-in">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9.4 8 10 4.5-.6 8-5 8-10V6l-8-4Z"/></svg>
              </div>
              <h3 className="feature-title">Policy Tracking</h3>
              <p className="feature-desc">
                Every policy's premium, coverage, carrier, and renewal date —
                organized, searchable, and always up to date.
              </p>
              <div className="premium-visual">
                <div className="premium-row">
                  <div className="premium-row-top"><span>BOP — Hartford</span><span>$38,400</span></div>
                  <div className="premium-bar"><div className="premium-bar-fill" style={{ width: '75%' }}></div></div>
                </div>
                <div className="premium-row">
                  <div className="premium-row-top"><span>Commercial Auto</span><span>$24,100</span></div>
                  <div className="premium-bar"><div className="premium-bar-fill" style={{ width: '50%' }}></div></div>
                </div>
                <div className="premium-row">
                  <div className="premium-row-top"><span>Home — Chubb</span><span>$19,600</span></div>
                  <div className="premium-bar"><div className="premium-bar-fill" style={{ width: '40%' }}></div></div>
                </div>
              </div>
            </div>

            <div className="card feature-card fade-in">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>
              </div>
              <h3 className="feature-title">Smart Reminders</h3>
              <p className="feature-desc">
                Never miss a renewal. Automated 90, 60, and 30-day alerts for
                every policy in your portfolio.
              </p>
            </div>

            <div className="card feature-card fade-in">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>
              </div>
              <h3 className="feature-title">Expense Insights</h3>
              <p className="feature-desc">
                See total premium spend across all entities, trend by month,
                and catch coverage drift before it costs you.
              </p>
            </div>

            <div className="card feature-card fade-in">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>
              </div>
              <h3 className="feature-title">Asset Tracking</h3>
              <p className="feature-desc">
                Link properties, vehicles, and equipment directly to the
                policies that cover them. See what's protected at a glance.
              </p>
            </div>

            <div className="card feature-card fade-in">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg>
              </div>
              <h3 className="feature-title">PDF Extraction</h3>
              <p className="feature-desc">
                Upload a declarations page and our AI pulls coverage, premium,
                effective dates, and carrier info automatically.
              </p>
            </div>

            <div className="card feature-card fade-in">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="feature-title">Multi-Entity Management</h3>
              <p className="feature-desc">
                Manage personal, LLC, trust, and corporate policies side by
                side. Everything tagged and organized by entity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label fade-in">How it works</span>
            <h2 className="section-title fade-in">Up and running in minutes</h2>
            <p className="section-sub fade-in">
              No implementation project. No training. Just sign up and start
              organizing.
            </p>
          </div>

          <div className="steps stagger">
            <div className="step fade-in">
              <div className="step-num">01</div>
              <h3 className="step-title">Create your account</h3>
              <p className="step-desc">
                Sign up in under a minute and set up the entities you want to
                track — personal, LLCs, trusts, corporations.
              </p>
            </div>
            <div className="step fade-in">
              <div className="step-num">02</div>
              <h3 className="step-title">Add your policies</h3>
              <p className="step-desc">
                Enter policies manually or drop in a declarations PDF — our AI
                extracts the data and populates every field for you.
              </p>
            </div>
            <div className="step fade-in">
              <div className="step-num">03</div>
              <h3 className="step-title">Stay ahead of renewals</h3>
              <p className="step-desc">
                Get automatic reminders, see total spend, and walk into every
                renewal conversation fully prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="container">
          <div className="section-header center">
            <span className="section-label fade-in">Pricing</span>
            <h2 className="section-title fade-in">Simple, honest pricing</h2>
            <p className="section-sub fade-in">
              Start free forever. Upgrade when you want us to handle the setup
              for you.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="price-card fade-in">
              <div className="price-name">Free</div>
              <div className="price-amount">
                <span className="big">$0</span>
                <span className="per">forever</span>
              </div>
              <div className="price-setup hidden">placeholder</div>
              <ul className="price-list">
                <li>Full dashboard access</li>
                <li>Manage policies, entities & assets</li>
                <li>Renewal tracking & alerts</li>
                <li>AI PDF extraction</li>
                <li>Expense insights</li>
              </ul>
              <a href={APP_URL} className="btn btn-secondary btn-block btn-lg">Get Started Free</a>
            </div>

            <div className="price-card featured fade-in">
              <div className="price-tag">RECOMMENDED</div>
              <div className="price-name">Managed Setup</div>
              <div className="price-amount">
                <span className="big">$9.99</span>
                <span className="per">/mo</span>
              </div>
              <div className="price-setup">+ $199 one-time setup</div>
              <ul className="price-list">
                <li>Everything in Free</li>
                <li>Professional data setup</li>
                <li>Full support & onboarding</li>
                <li>Priority renewal monitoring</li>
                <li>Dedicated specialist</li>
              </ul>
              <a href={APP_URL} className="btn btn-primary btn-block btn-lg">Get Managed Setup →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Your insurance deserves a system, not a spreadsheet.</h2>
            <a href={APP_URL} className="btn btn-primary btn-lg">Get Started Free →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-copy">© 2026 PolicyBrain. All rights reserved.</div>
          <ul className="footer-links">
            <li><a href="https://app.policybrain.app/legal/terms">Terms</a></li>
            <li><a href="https://app.policybrain.app/legal/general-terms">General Terms</a></li>
            <li><a href="https://app.policybrain.app/legal/privacy">Privacy</a></li>
            <li><a href="https://app.policybrain.app/legal/disclaimer">Disclaimer</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
