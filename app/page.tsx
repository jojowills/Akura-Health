import Image from "next/image";

export default function Home() {
  return (
    <main style={{fontFamily: "sans-serif", background: "#1e3a2f", minHeight: "100vh"}}>
      <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", borderBottom: "0.5px solid rgba(255,255,255,0.08)"}}>
        <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
          <Image src="/akura-logo.png" alt="Akura Health" width={100} height={100} style={{borderRadius: "50%"}} />
          <div>
            <p style={{color: "#faf7f2", fontWeight: 700, fontSize: "16px", margin: 0, letterSpacing: "0.05em"}}>AKURA HEALTH</p>
            <p style={{color: "rgba(250,247,242,0.4)", fontSize: "10px", margin: 0, letterSpacing: "0.12em", textTransform: "uppercase"}}>Making it easy to live well</p>
          </div>
        </div>
        <div style={{display: "flex", gap: "28px", alignItems: "center"}}>
          <a href="#about" style={{color: "rgba(250,247,242,0.55)", fontSize: "13px", textDecoration: "none"}}>About</a>
          <a href="#boxes" style={{color: "rgba(250,247,242,0.55)", fontSize: "13px", textDecoration: "none"}}>Our Boxes</a>
          <a href="#business" style={{color: "rgba(250,247,242,0.55)", fontSize: "13px", textDecoration: "none"}}>For Business</a>
          <a href="#waitlist" style={{background: "#c4613a", color: "#faf7f2", fontSize: "13px", fontWeight: 600, padding: "9px 22px", borderRadius: "999px", textDecoration: "none"}}>Join Waitlist</a>
        </div>
      </nav>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "520px"}}>
        <div style={{padding: "72px 48px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden"}}>
          <div style={{position: "absolute", top: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(184,196,168,0.05)"}}></div>
          <div style={{position: "absolute", bottom: "40px", right: "0px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(196,97,58,0.07)"}}></div>
          <div style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(184,196,168,0.12)", border: "0.5px solid rgba(184,196,168,0.25)", padding: "6px 14px", borderRadius: "999px", marginBottom: "32px", width: "fit-content", position: "relative", zIndex: 1}}>
            <div style={{width: "6px", height: "6px", borderRadius: "50%", background: "#b8c4a8"}}></div>
            <span style={{color: "#b8c4a8", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase"}}>Launching 2026</span>
          </div>
          <h1 style={{color: "#faf7f2", fontSize: "clamp(40px,5vw,58px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 8px", position: "relative", zIndex: 1}}>
            Wellness,<br />made<br /><span style={{color: "#c4613a"}}>simple.</span>
          </h1>
          <div style={{width: "48px", height: "3px", background: "#b8c4a8", borderRadius: "2px", margin: "22px 0 24px", position: "relative", zIndex: 1}}></div>
          <p style={{color: "rgba(250,247,242,0.6)", fontSize: "15px", lineHeight: 1.75, margin: "0 0 36px", maxWidth: "340px", position: "relative", zIndex: 1}}>
            Premium wellness boxes curated by pharmacists — built around what your body actually needs. Evidence-informed. Beautifully delivered.
          </p>
          <div id="waitlist" style={{display: "flex", gap: "10px", maxWidth: "420px", position: "relative", zIndex: 1}}>
            <input type="email" placeholder="your@email.com" style={{flex: 1, background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "13px 22px", color: "#faf7f2", fontSize: "14px", outline: "none"}} />
            <button type="submit" style={{background: "#c4613a", color: "#faf7f2", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "999px", border: "none", curso "pointer", whiteSpace: "nowrap"}}>Join Waitlist</button>
          </div>
          <p style={{color: "rgba(250,247,242,0.25)", fontSize: "11px", margin: "12px 0 0", letterSpacing: "0.03em", position: "relative", zIndex: 1}}>No spam. Unsubscribe anytime.</p>
        </div>
        <div style={{background: "#162e24", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "48px 44px", gap: "16px", position: "relative", overflow: "hidden"}}>
          <div style={{position: "absolute", top: "-70px", right: "-70px", width: "260px", height: "260px", borderRadius: "50%", background: "rgba(196,97,58,0.08)"}}></div>
          <div style={{position: "absolute", bottom: "-50px", left: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(184,196,168,0.06)"}}></div>
          <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "300px", height: "300px", borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.03)"}}></div>
          <div style={{width: "100%", background: "rgba(250,247,242,0.04)", border: "0.5px solid rgba(250,247,242,0.08)", borderRadius: "16px", padding: "22px 24px", position: "relative", zIndex: 1}}>
            <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "10px", background: "rgba(196,97,58,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0}}>🌿</div>
              <div>
                <p style={{color: "#faf7f2", fontWeight: 600, fontSize: "14px", margin: "0 0 3px"}}>Weight &amp; Metabolic Health</p>
                <p style={{color: "rgba(250,247,242,0.4)", fontSize: "12px", margin: 0, lineHeight: 1.5}}>Evidence-based metabolic support</p>
              </div>
            </div>
          </div>
          <div style={{widt "100%", background: "#c4613a", borderRadius: "16px", padding: "22px 24px", position: "relative", zIndex: 1}}>
            <div style={{position: "absolute", top: "-11px", right: "20px", background: "#faf7f2", color: "#c4613a", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", padding: "3px 12px", borderRadius: "999px"}}>MOST POPULAR</div>
            <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "10px", background: "rgba(250,247,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0}}>🌙</div>
              <div>
                <p style={{color: "#faf7f2", fontWeight: 600, fontSize: "14px", margin: "0 0 3px"}}>Stress &amp; Sleep Support</p>
                <p style={{color: "rgba(250,247,242,0.7)", fontSize: "12px", margin: 0, lineHeight: 1.5}}>Wind down and wake up restored</p>
              </div>
            </div>
          </div>
          <div sle={{width: "100%", background: "rgba(250,247,242,0.04)", border: "0.5px solid rgba(250,247,242,0.08)", borderRadius: "16px", padding: "22px 24px", position: "relative", zIndex: 1}}>
            <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "10px", background: "rgba(184,196,168,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0}}>🧠</div>
              <div>
                <p style={{color: "#faf7f2", fontWeight: 600, fontSize: "14px", margin: "0 0 3px"}}>Focus &amp; Concentration</p>
                <p style={{color: "rgba(250,247,242,0.4)", fontSize: "12px", margin: 0, lineHeight: 1.5}}>Sharpen your mind naturally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background: "#b8c4a8", padding: "36px 48px", display: "flex", justifyContent: "center", gap: "72px", alignItems: "center"}}>
        <div ste={{textAlign: "center"}}>
          <p style={{color: "#1e3a2f", fontWeight: 800, fontSize: "20px", margin: "0 0 4px", letterSpacing: "-0.02em"}}>Pharmacist</p>
          <p style={{color: "rgba(30,58,47,0.55)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0}}>Founded</p>
        </div>
        <div style={{width: "0.5px", height: "36px", background: "rgba(30,58,47,0.2)"}}></div>
        <div style={{textAlign: "center"}}>
          <p style={{color: "#1e3a2f", fontWeight: 800, fontSize: "20px", margin: "0 0 4px", letterSpacing: "-0.02em"}}>Evidence</p>
          <p style={{color: "rgba(30,58,47,0.55)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0}}>Informed</p>
        </div>
        <div style={{width: "0.5px", height: "36px", background: "rgba(30,58,47,0.2)"}}></div>
        <div style={{textAlign: "center"}}>
          <p style={{color: "#1e3a2f", fontWeight: 800, fontSize: "20px", margin: "0 0 4px", letterSpacing: "-0.02em"}}>Premium</p>
          <p style={{color: "rgba(30,58,47,0.55)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0}}>Curated</p>
        </div>
      </div>
      <footer style={{background: "#1e3a2f", borderTop: "0.5px solid rgba(255,255,255,0.06)", padding: "24px 48px", textAlign: "center"}}>
        <p style={{color: "rgba(250,247,242,0.25)", fontSize: "12px", margin: 0}}>© 2026 Akura Health. Making it easy to live well.</p>
      </footer>
    </main>
  );
}
