import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main style={{background: "#1e3a2f", minHeight: "100vh"}}>
      <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", borderBottom: "0.5px solid rgba(255,255,255,0.08)"}}>
        <Link href="/" style={{display: "flex", alignItems: "center", gap: "14px", textDecoration: "none"}}>
          <Image src="/akura-logo.png" alt="Akura Health" width={100} height={100} style={{borderRadius: "50%"}} />
          <div>
            <p style={{color: "#faf7f2", fontWeight: 700, fontSize: "16px", margin: 0}}>AKURA HEALTH</p>
            <p style={{color: "rgba(250,247,242,0.4)", fontSize: "10px", margin: 0, letterSpacing: "0.12em", textTransform: "uppercase"}}>Making it easy to live well</p>
          </div>
        </Link>
        <div style={{display: "flex", gap: "28px", alignItems: "center"}}>
          <Link href="/#boxes" style={{color: "rgba(250,247,242,0.55)", fontSize: "13px", textDecoration: "none"}}>Our Boxes</Link>
          <Link href="/about" style={{color: "#faf7f2", fontSize: "13px", textDecoration: "none", borderBottom: "1px solid #c4613a", paddingBottom: "2px"}}>About</Link>
          <Link href="/business" style={{color: "rgba(250,247,242,0.55)", fontSize: "13px", textDecoration: "none"}}>For Business</Link>
          <Link href="/#waitlist" style={{background: "#c4613a", color: "#faf7f2", fontSize: "13px", fontWeight: 600, padding: "9px 22px", borderRadius: "999px", textDecoration: "none"}}>Join Waitlist</Link>
        </div>
      </nav>
      <section style={{padding: "96px 48px 80px", maxWidth: "960px", margin: "0 auto"}}>
        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(184,196,168,0.12)", border: "0.5px solid rgba(184,196,168,0.25)", padding: "6px 14px", borderRadius: "999px", marginBottom: "36px"}}>
          <span style={{color: "#b8c4a8", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase"}}>Our Story</span>
        </div>
        <h1 style={{color: "#faf7f2", margin: "0 0 28px"}}>
          Born from a belief<br />that wellness should<br /><span>feel like home.</span>
        </h1>
        <div style={{width: "100%", maxWidth: "600px", height: "1px", background: "rgba(250,247,242,0.15)", marginBottom: "36px"}}></div>
        <p style={{color: "rgba(250,247,242,0.65)", fontSize: "18px", lineHeight: 1.8, maxWidth: "600px", margin: 0}}>
          Akura means village in Akan. A word that speaks to community, care and belonging. That is the soul of everything we do.
        </p>
      </section>
      <section style={{background: "#faf7f2", padding: "80px 48px"}}>
        <div style={{maxWidth: "960px", margin: "0 auto"}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "72px"}}>
            <div>
              <p style={{color: "#1e3a2f", fontSize: "18px", lineHeight: 1.9, margin: "0 0 28px", fontWeight: 500}}>
                We are a wellness platform founded by two pharmacists who saw the same thing from different corners of healthcare. People trying their best to feel well, but overwhelmed by the noise.
              </p>
              <p style={{color: "rgba(30,58,47,0.7)", fontSize: "16px", lineHeight: 1.9, margin: "0 0 28px"}}>
                Too many products. Too much conflicting advice. Too little time. And almost no one asking what you actually need.
              </p>
              <p style={{color: "rgba(30,58,47,0.7)", fontSize: "16px", lineHeight: 1.9, margin: 0}}>
                So we built Akura Health. A place where clinical knowledge meets genuine care. Where every box is curated with intention, not just filled with trending supplements. Where wellness feels personal, premium and within reach.
              </p>
            </div>
            <div style={{background: "#1e3a2f", borderRadius: "24px", padding: "40px 36px"}}>
              <p style={{color: "rgba(250,247,242,0.4)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 24px"}}>Our Mission</p>
              <p style={{color: "#faf7f2", fontSize: "22px", fontWeight: 700, lineHeight: 1.5, margin: "0 0 24px"}}>
                To make it genuinely easy to live well. For everyone.
              </p>
              <div style={{width: "40px", height: "2px", background: "#c4613a", borderRadius: "2px", marginBottom: "24px"}}></div>
              <p style={{color: "rgba(250,247,242,0.55)", fontSize: "14px", lineHeight: 1.8, margin: 0}}>
                Pharmacist-founded. Evidence-informed. Built with community at its heart.
              </p>
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px"}}>
            <div style={{background: "white", borderRadius: "20px", padding: "36px", border: "0.5px solid rgba(30,58,47,0.08)"}}>
              <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px"}}>
                <div style={{width: "64px", height: "64px", borderRadius: "2px", background: "#1e3a2f", color: "#faf7f2", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-fraunces), serif", fontSize: "22px", fontWeight: 300, lineHeight: 1}}>
                  JW
                </div>
                <div>
                  <h3 style={{color: "#1e3a2f", margin: "0 0 4px"}}>Jo Wilson</h3>
                  <p style={{color: "#c4613a", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0}}>Co-Founder</p>
                </div>
              </div>
              <p style={{color: "rgba(30,58,47,0.7)", fontSize: "14px", lineHeight: 1.8, margin: 0}}>Pharmacist with wide experience across NHS and community settings. Jo brings deep clinical expertise and a genuine passion for education, access and doing things properly. She believes the best healthcare happens when people feel truly seen.</p>
            </div>
            <div style={{background: "white", borderRadius: "20px", padding: "36px", border: "0.5px solid rgba(30,58,47,0.08)"}}>
              <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px"}}>
                <div style={{width: "64px", height: "64px", borderRadius: "2px", background: "#1e3a2f", color: "#faf7f2", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-fraunces), serif", fontSize: "22px", fontWeight: 300, lineHeight: 1}}>
                  KP
                </div>
                <div>
                  <h3 style={{color: "#1e3a2f", margin: "0 0 4px"}}>Kim Pereira</h3>
                  <p style={{color: "#c4613a", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0}}>Co-Founder</p>
                </div>
              </div>
              <p style={{color: "rgba(30,58,47,0.7)", fontSize: "14px", lineHeight: 1.8, margin: 0}}>Pharmacist working in the pharmaceutical industry, Kim brings a rare blend of scientific rigour and genuine advocacy. She is passionate about wellness that works for every body and every background, and about building something that truly makes a difference.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{background: "#faf7f2", padding: "72px 48px"}}>
        <div style={{maxWidth: "960px", margin: "0 auto"}}>
          <p style={{color: "rgba(30,58,47,0.6)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px", textAlign: "center"}}>What we believe</p>
          <h2 style={{color: "#1e3a2f", margin: "0 0 52px", textAlign: "center"}}>Our values run through everything we make.</h2>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
            <div style={{background: "white", borderTop: "1px solid rgba(30,58,47,0.08)", borderRadius: "2px", padding: "32px 28px"}}>
              <span style={{fontSize: "28px", display: "block", marginBottom: "16px"}}>&#128300;</span>
              <h3 style={{color: "#1e3a2f", margin: "0 0 10px"}}>Evidence-informed</h3>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "13px", lineHeight: 1.75, margin: 0}}>Everything we curate is grounded in clinical knowledge. No fads. No fluff. Just what actually works.</p>
            </div>
            <div style={{background: "white", borderTop: "1px solid rgba(30,58,47,0.08)", borderRadius: "2px", padding: "32px 28px"}}>
              <span style={{fontSize: "28px", display: "block", marginBottom: "16px"}}>&#129309;</span>
              <h3 style={{color: "#1e3a2f", margin: "0 0 10px"}}>Community first</h3>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "13px", lineHeight: 1.75, margin: 0}}>Rooted in the meaning of our name. Wellness that brings people together and leaves no one behind.</p>
            </div>
            <div style={{background: "white", borderTop: "1px solid rgba(30,58,47,0.08)", borderRadius: "2px", padding: "32px 28px"}}>
              <span style={{fontSize: "28px", display: "block", marginBottom: "16px"}}>&#10024;</span>
              <h3 style={{color: "#1e3a2f", margin: "0 0 10px"}}>Beautifully simple</h3>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "13px", lineHeight: 1.75, margin: 0}}>Premium products and clear guidance. Making it genuinely easy to live well, without the overwhelm.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{background: "#1e3a2f", padding: "72px 48px", textAlign: "center"}}>
        <div style={{maxWidth: "600px", margin: "0 auto"}}>
          <h2 style={{color: "#faf7f2", margin: "0 0 20px"}}>Ready to start your wellness journey?</h2>
          <p style={{color: "rgba(250,247,242,0.55)", fontSize: "16px", lineHeight: 1.8, margin: "0 0 36px"}}>Join our waitlist and be the first to know when we launch.</p>
          <Link href="/#waitlist" style={{background: "#c4613a", color: "#faf7f2", fontSize: "15px", fontWeight: 600, padding: "14px 32px", borderRadius: "2px", textDecoration: "none", display: "inline-block"}}>Join the Waitlist</Link>
        </div>
      </section>
      <footer style={{background: "#1e3a2f", borderTop: "0.5px solid rgba(255,255,255,0.06)", padding: "24px 48px", textAlign: "center"}}>
        <p style={{color: "rgba(250,247,242,0.25)", fontSize: "12px", margin: 0}}>2026 Akura Health. Making it easy to live well.</p>
      </footer>
    </main>
  );
}
