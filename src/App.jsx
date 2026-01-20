import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://api.deadwood.rest/frontend")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((err) => {
        console.error("Failed to fetch quote:", err);
      });
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.wantedPoster}>
        <div style={styles.posterBorder}>
          <div style={styles.cornerTL}>❧</div>
          <div style={styles.cornerTR}>❧</div>
          <div style={styles.cornerBL}>❧</div>
          <div style={styles.cornerBR}>❧</div>

          <main style={styles.main}>
            <div style={styles.headerDecor}>⚜ ─────── ✦ ─────── ⚜</div>

            <h1 style={styles.title}>Deadwood</h1>
            <div style={styles.subtitle}>.REST</div>

            <div style={styles.divider}>
              <span style={styles.star}>★</span>
              <span style={styles.dividerLine}></span>
              <span style={styles.star}>★</span>
            </div>

            <p style={styles.tagline}>
              A profanity-rich REST API<br />
              inspired by HBO's <em>Deadwood</em>
            </p>

            <div style={styles.ornament}>─── ◆ ───</div>

            {quote && (
              <blockquote style={styles.quote}>
                <span style={styles.quoteMarks}>"</span>
                {quote.quote}
                <span style={styles.quoteMarks}>"</span>
                <footer style={styles.author}>— {quote.by}</footer>
              </blockquote>
            )}

            <div style={styles.ornament}>─── ◆ ───</div>

            <h2 style={styles.subheading}>
              <span style={styles.bullet}>☆</span> Available Endpoints <span style={styles.bullet}>☆</span>
            </h2>

            <div style={styles.codeBlock}>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /bullock</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /al</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /jane</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /joanie</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /doc</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /eb</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /wildbill</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /wu</div>
              <div style={styles.endpoint}><span style={styles.method}>GET</span> /trixie</div>
            </div>

            <p style={styles.baseUrl}>Base: <code style={styles.urlCode}>https://api.deadwood.rest</code></p>

            <div style={styles.footerDecor}>⚜ ─────── ✦ ─────── ⚜</div>
            <p style={styles.footer}>More endpoints arriving by stagecoach</p>
          </main>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: `
      radial-gradient(ellipse at top, rgba(139,90,43,0.15), transparent 50%),
      radial-gradient(ellipse at bottom, rgba(0,0,0,0.4), transparent 70%),
      linear-gradient(180deg, #1a120b 0%, #0e0906 50%, #0a0604 100%)
    `,
    color: "#f4e9d8",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },

  wantedPoster: {
    background: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.03) 2px,
        rgba(0,0,0,0.03) 4px
      ),
      linear-gradient(180deg, #e8d5b0 0%, #d4bc8a 20%, #c9ae78 50%, #d4bc8a 80%, #e8d5b0 100%)
    `,
    padding: "8px",
    boxShadow: `
      0 4px 8px rgba(0,0,0,0.3),
      0 12px 40px rgba(0,0,0,0.5),
      inset 0 0 100px rgba(139,90,43,0.2)
    `,
    maxWidth: "700px",
    width: "100%",
  },

  posterBorder: {
    border: "3px solid #5c3d1e",
    padding: "2rem 2.5rem",
    position: "relative",
    background: `
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 1px,
        rgba(92,61,30,0.02) 1px,
        rgba(92,61,30,0.02) 2px
      ),
      linear-gradient(180deg, #dcc89a 0%, #c9b080 100%)
    `,
  },

  cornerTL: {
    position: "absolute",
    top: "8px",
    left: "12px",
    fontSize: "1.5rem",
    color: "#5c3d1e",
    transform: "rotate(180deg)",
    opacity: 0.7,
  },
  cornerTR: {
    position: "absolute",
    top: "8px",
    right: "12px",
    fontSize: "1.5rem",
    color: "#5c3d1e",
    transform: "rotate(-90deg)",
    opacity: 0.7,
  },
  cornerBL: {
    position: "absolute",
    bottom: "8px",
    left: "12px",
    fontSize: "1.5rem",
    color: "#5c3d1e",
    transform: "rotate(90deg)",
    opacity: 0.7,
  },
  cornerBR: {
    position: "absolute",
    bottom: "8px",
    right: "12px",
    fontSize: "1.5rem",
    color: "#5c3d1e",
    opacity: 0.7,
  },

  main: {
    textAlign: "center",
    color: "#2a1a0a",
  },

  headerDecor: {
    color: "#8b5a2b",
    fontSize: "0.9rem",
    letterSpacing: "0.3em",
    marginBottom: "1rem",
  },

  title: {
    fontFamily: "'Rye', Georgia, serif",
    fontSize: "3.5rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    margin: "0",
    color: "#2a1a0a",
    textShadow: "2px 2px 0 rgba(139,90,43,0.3)",
  },

  subtitle: {
    fontFamily: "'Rye', Georgia, serif",
    fontSize: "2rem",
    letterSpacing: "0.3em",
    color: "#5c3d1e",
    marginTop: "-0.5rem",
    marginBottom: "0.5rem",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    margin: "1rem 0",
  },

  star: {
    color: "#8b5a2b",
    fontSize: "1.2rem",
  },

  dividerLine: {
    width: "60px",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #8b5a2b, transparent)",
  },

  tagline: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    fontStyle: "italic",
    color: "#4a3520",
    lineHeight: "1.6",
  },

  ornament: {
    color: "#8b5a2b",
    fontSize: "0.85rem",
    letterSpacing: "0.2em",
    margin: "1.5rem 0",
  },

  quote: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    background: "linear-gradient(180deg, rgba(92,61,30,0.1), rgba(92,61,30,0.05))",
    padding: "1.5rem 2rem",
    margin: "0 0 0 0",
    lineHeight: "1.8",
    border: "1px solid rgba(92,61,30,0.3)",
    borderLeft: "4px solid #8b5a2b",
    color: "#3a2510",
    position: "relative",
  },

  quoteMarks: {
    fontFamily: "Georgia, serif",
    fontSize: "1.5rem",
    color: "#8b5a2b",
    fontWeight: "bold",
  },

  author: {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "600",
    textAlign: "right",
    display: "block",
    color: "#5c3d1e",
    fontStyle: "normal",
    letterSpacing: "0.05em",
  },

  subheading: {
    fontFamily: "'Rye', Georgia, serif",
    fontSize: "1.3rem",
    marginBottom: "1rem",
    marginTop: "0.5rem",
    letterSpacing: "0.1em",
    color: "#2a1a0a",
    textTransform: "uppercase",
  },

  bullet: {
    color: "#8b5a2b",
    fontSize: "1rem",
  },

  codeBlock: {
    background: "linear-gradient(180deg, #2a1a0a, #1f140a)",
    padding: "1rem 1.5rem",
    textAlign: "left",
    fontFamily: "'Courier New', monospace",
    marginBottom: "1rem",
    lineHeight: "1.6",
    fontSize: "0.85rem",
    color: "#d4bc8a",
    border: "2px solid #5c3d1e",
    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.5)",
  },

  endpoint: {
    padding: "0.25rem 0",
    borderBottom: "1px solid rgba(139,90,43,0.2)",
  },

  method: {
    color: "#c9a65a",
    fontWeight: "bold",
    marginRight: "0.75rem",
  },

  baseUrl: {
    fontSize: "0.9rem",
    color: "#5c3d1e",
    marginBottom: "1.5rem",
  },

  urlCode: {
    fontFamily: "'Courier New', monospace",
    background: "rgba(42,26,10,0.1)",
    padding: "0.2rem 0.5rem",
    border: "1px solid rgba(92,61,30,0.3)",
    color: "#3a2510",
  },

  footerDecor: {
    color: "#8b5a2b",
    fontSize: "0.9rem",
    letterSpacing: "0.3em",
    marginBottom: "0.5rem",
  },

  footer: {
    color: "#6b4a2d",
    fontStyle: "italic",
    fontSize: "0.9rem",
    margin: "0",
  },
};

export default App;
