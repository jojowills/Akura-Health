import Image from "next/image";
import Link from "next/link";

export default function Business() {
  return (
    <main style={{fontFamily: "sans-serif", background: "#1e3a2f", minHeight: "100vh"}}>
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
          <Link href="/about" style={{color: "rgba(250,247,242,0.55)", fontSize: "13px", textDecoration: "none"}}>About</Link>
          <Link href="/business" style={{color: "#faf7f2", fontSize: "13px", textDecoration: "none", borderBottom: "1px solid #c4613a", paddingBottom: "2px"}}>For Business</Link>
          <Link href="/#waitlist" style={{background: "#c4613a", color: "#faf7f2", fontSize: "13px", fontWeight: 600, padding: "9px 22px", borderRadius: "999px", textDecoration: "none"}}>Join Waitlist</Link>
        </div>
      </nav>

      <section style={{padding: "96px 48px 80px", maxWidth: "960px", margin: "0 auto", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", top: "-120px", right: "-120px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(196,97,58,0.06)"}}></div>
        <div style={{position: "absolute", bottom: "-60px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(184,196,168,0.05)"}}></div>
        <div style={{position: "absolute", top: "30%", right: "15%", width: "100px", height: "100px", borderRadius: "50%", border: "0.5px solid rgba(196,97,58,0.15)"}}></div>
        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(184,196,168,0.12)", border: "0.5px solid rgba(184,196,168,0.25)", padding: "6px 14px", borderRadius: "999px", marginBottom: "36px", position: "relative", zIndex: 1}}>
          <div style={{width: "6px", height: "6px", borderRadius: "50%", background: "#b8c4a8"}}></div>
          <span style={{color: "#b8c4a8", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase"}}>Corporate Wellness</span>
        </div>
        <h1 style={{color: "#faf7f2", fontSize: "clamp(40px,6vw,68px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 28px", position: "relative", zIndex: 1}}>
          Wellness that works<br />as hard as your<br /><span style={{color: "#c4613a"}}>team does.</span>
        </h1>
        <div style={{width: "64px", height: "4px", background: "#b8c4a8", borderRadius: "2px", marginBottom: "36px"}}></div>
        <p style={{color: "rgba(250,247,242,0.65)", fontSize: "18px", lineHeight: 1.8, maxWidth: "600px", margin: 0, position: "relative", zIndex: 1}}>
          Premium wellness boxes for teams who deserve better than a fruit bowl. Pharmacist-curated, beautifully presented and genuinely effective.
        </p>
      </section>

      <section style={{background: "#faf7f2", padding: "80px 48px", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "rgba(184,196,168,0.18)"}}></div>
        <div style={{position: "absolute", bottom: "-100px", left: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(196,97,58,0.05)"}}></div>
        <div style={{maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1}}>
          <p style={{color: "rgba(30,58,47,0.5)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px", textAlign: "center"}}>What we offer</p>
          <h2 style={{color: "#1e3a2f", fontSize: "36px", fontWeight: 800, margin: "0 0 52px", textAlign: "center", lineHeight: 1.2}}>Two ways to bring Akura<br />into your workplace.</h2>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "72px"}}>
            <div style={{background: "#1e3a2f", borderRadius: "24px", padding: "44px 40px", position: "relative", overflow: "hidden"}}>
              <div style={{position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(196,97,58,0.1)"}}></div>
              <div style={{position: "absolute", bottom: "-30px", left: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(184,196,168,0.06)"}}></div>
              <div style={{width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,97,58,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "24px", position: "relative", zIndex: 1}}>&#128197;</div>
              <h3 style={{color: "#faf7f2", fontWeight: 800, fontSize: "22px", margin: "0 0 12px", position: "relative", zIndex: 1}}>Monthly Subscription</h3>
              <div style={{width: "32px", height: "2px", background: "#c4613a", borderRadius: "2px", marginBottom: "16px", position: "relative", zIndex: 1}}></div>
              <p style={{color: "rgba(250,247,242,0.6)", fontSize: "15px", lineHeight: 1.8, margin: "0 0 24px", position: "relative", zIndex: 1}}>A recurring wellness ritual for your team. Each month, beautifully curated boxes land on their desks with products chosen to support their health and performance.</p>
              <ul style={{color: "rgba(250,247,242,0.55)", fontSize: "14px", lineHeight: 2, margin: 0, paddingLeft: "0", listStyle: "none", position: "relative", zIndex: 1}}>
                <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color: "#b8c4a8", fontSize: "16px"}}>&#10003;</span> Flexible team sizes</li>
                <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color: "#b8c4a8", fontSize: "16px"}}>&#10003;</span> Choose your wellness theme</li>
                <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color: "#b8c4a8", fontSize: "16px"}}>&#10003;</span> Cancel or pause anytime</li>
              </ul>
            </div>
            <div style={{background: "white", borderRadius: "24px", padding: "44px 40px", border: "0.5px solid rgba(30,58,47,0.08)", position: "relative", overflow: "hidden"}}>
              <div style={{position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(184,196,168,0.15)"}}></div>
              <div style={{width: "52px", height: "52px", borderRadius: "14px", background: "rgba(184,196,168,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "24px"}}>&#127873;</div>
              <h3 style={{color: "#1e3a2f", fontWeight: 800, fontSize: "22px", margin: "0 0 12px"}}>One-off Gifting</h3>
              <div style={{width: "32px", height: "2px", background: "#c4613a", borderRadius: "2px", marginBottom: "16px"}}></div>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "15px", lineHeight: 1.8, margin: "0 0 24px"}}>Make an occasion feel special. Whether it is an end of year gift, a team event or a wellbeing initiative, our one-off boxes are designed to impress.</p>
              <ul style={{color: "rgba(30,58,47,0.55)", fontSize: "14px", lineHeight: 2, margin: 0, paddingLeft: "0", listStyle: "none"}}>
                <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color: "#c4613a", fontSize: "16px"}}>&#10003;</span> Bespoke branding options</li>
                <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color: "#c4613a", fontSize: "16px"}}>&#10003;</span> Bulk order discounts</li>
                <li style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{color: "#c4613a", fontSize: "16px"}}>&#10003;</span> Personal message cards</li>
              </ul>
            </div>
          </div>

          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
            <div style={{background: "white", borderRadius: "20px", padding: "28px", border: "0.5px solid rgba(30,58,47,0.08)", textAlign: "center"}}>
              <p style={{color: "#c4613a", fontWeight: 800, fontSize: "36px", margin: "0 0 6px", letterSpacing: "-0.02em"}}>87%</p>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "13px", lineHeight: 1.6, margin: 0}}>of employees say wellness benefits impact their loyalty to their employer</p>
            </div>
            <div style={{background: "white", borderRadius: "20px", padding: "28px", border: "0.5px solid rgba(30,58,47,0.08)", textAlign: "center"}}>
              <p style={{color: "#c4613a", fontWeight: 800, fontSize: "36px", margin: "0 0 6px", letterSpacing: "-0.02em"}}>3x</p>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "13px", lineHeight: 1.6, margin: 0}}>return on investment seen by companies with strong employee wellness programmes</p>
            </div>
            <div style={{background: "white", borderRadius: "20px", padding: "28px", border: "0.5px solid rgba(30,58,47,0.08)", textAlign: "center"}}>
              <p style={{color: "#c4613a", fontWeight: 800, fontSize: "36px", margin: "0 0 6px", letterSpacing: "-0.02em"}}>62%</p>
              <p style={{color: "rgba(30,58,47,0.6)", fontSize: "13px", lineHeight: 1.6, margin: 0}}>of workers report feeling burnt out at work, making proactive wellness more important than ever</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: "#b8c4a8", padding: "80px 48px", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", top: "-60px", left: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(30,58,47,0.06)"}}></div>
        <div style={{position: "absolute", bottom: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(196,97,58,0.08)"}}></div>
        <div style={{maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1}}>
          <p style={{color: "rgba(30,58,47,0.6)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px", textAlign: "center"}}>Get in touch</p>
          <h2 style={{color: "#1e3a2f", fontSize: "36px", fontWeight: 800, margin: "0 0 16px", textAlign: "center", lineHeight: 1.2}}>Let us build something<br />great for your team.</h2>
          <p style={{color: "rgba(30,58,47,0.6)", fontSize: "16px", lineHeight: 1.8, margin: "0 0 48px", textAlign: "center"}}>Tell us a bit about your company and what you are looking for. We will be in touch within 48 hours.</p>
          <div style={{background: "white", borderRadius: "24px", padding: "48px", border: "0.5px solid rgba(30,58,47,0.08)"}}>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px"}}>
              <div>
                <label style={{color: "rgba(30,58,47,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px"}}>Your name</label>
                <input type="text" placeholder="Jane Smith" style={{width: "100%", padding: "13px 18px", borderRadius: "12px", border: "0.5px solid rgba(30,58,47,0.15)", fontSize: "14px", outline: "none", boxSizing: "border-box"}} />
              </div>
              <div>
                <label style={{color: "rgba(30,58,47,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px"}}>Company name</label>
                <input type="text" placeholder="Acme Ltd" style={{width: "100%", padding: "13px 18px", borderRadius: "12px", border: "0.5px solid rgba(30,58,47,0.15)", fontSize: "14px", outline: "none", boxSizing: "border-box"}} />
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px"}}>
              <div>
                <label style={{color: "rgba(30,58,47,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px"}}>Work email</label>
                <input type="email" placeholder="jane@acme.com" style={{width: "100%", padding: "13px 18px", borderRadius: "12px", border: "0.5px solid rgba(30,58,47,0.15)", fontSize: "14px", outline: "none", boxSizing: "border-box"}} />
              </div>
              <div>
                <label style={{color: "rgba(30,58,47,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px"}}>Team size</label>
                <select style={{width: "100%", padding: "13px 18px", borderRadius: "12px", border: "0.5px solid rgba(30,58,47,0.15)", fontSize: "14px", outline: "none", background: "white", boxSizing: "border-box"}}>
                  <option>1 to 10</option>
                  <option>11 to 50</option>
                  <option>51 to 200</option>
                  <option>200 plus</option>
                </select>
              </div>
            </div>
            <div style={{marginBottom: "20px"}}>
              <label style={{color: "rgba(30,58,47,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px"}}>What are you interested in?</label>
              <select style={{width: "100%", padding: "13px 18px", borderRadius: "12px", border: "0.5px solid rgba(30,58,47,0.15)", fontSize: "14px", outline: "none", background: "white", boxSizing: "border-box"}}>
                <option>Monthly subscription for my team</option>
                <option>One-off gifting</option>
                <option>Both subscription and gifting</option>
                <option>Not sure yet, tell me more</option>
              </select>
            </div>
            <div style={{marginBottom: "28px"}}>
              <label style={{color: "rgba(30,58,47,0.6)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px"}}>Anything else you would like us to know?</label>
              <textarea placeholder="Tell us about your team and what you are hoping to achieve..." style={{width: "100%", padding: "13px 18px", borderRadius: "12px", border: "0.5px solid rgba(30,58,47,0.15)", fontSize: "14px", outline: "none", minHeight: "120px", resize: "vertical", boxSizing: "border-box", fontFamily: "sans-serif"}}></textarea>
            </div>
            <button type="submit" style={{width: "100%", background: "#c4613a", color: "#faf7f2", fontSize: "15px", fontWeight: 600, padding: "16px", borderRadius: "12px", border: "none", cursor: "pointer"}}>Send Enquiry</button>
          </div>
        </div>
      </section>

      <footer style={{background: "#1e3a2f", borderTop: "0.5px solid rgba(255,255,255,0.06)", padding: "24px 48px", textAlign: "center"}}>
        <p style={{color: "rgba(250,247,242,0.25)", fontSize: "12px", margin: 0}}>2026 Akura Health. Making it easy to live well.</p>
      </footer>
    </main>
  );
}
