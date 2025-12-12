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
      <main style={styles.main}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.accent}>Deadwood.REST</span>
        </h1>

        <div style={styles.rule}>✦</div>

        <p style={styles.tagline}>
          A profanity-rich REST API inspired by HBO’s <em>Deadwood</em>.
        </p>

        {quote && (
          <blockquote style={styles.quote}>
            “{quote.quote}”
            <footer style={styles.author}>— {quote.by}</footer>
          </blockquote>
        )}

        <h2 style={styles.subheading}>API Endpoints</h2>

        <div style={styles.codeBlock}>
          <code>GET https://api.deadwood.rest</code>
          <br />
          <code>GET https://api.deadwood.rest/bullock</code>
          <br />
          <code>GET https://api.deadwood.rest/al</code>
          <br />
          <code>GET https://api.deadwood.rest/jane</code>
          <br />
          <code>GET https://api.deadwood.rest/joanie</code>
          <br />
          <code>GET https://api.deadwood.rest/doc</code>
          <br />
          <code>GET https://api.deadwood.rest/eb</code>
          <br />
          <code>GET https://api.deadwood.rest/wildbill</code>
          <br />
          <code>GET https://api.deadwood.rest/wu</code>
          <br />
          <code>GET https://api.deadwood.rest/trixie</code>
        </div>

        <p style={styles.footer}>More endpoints coming soon.</p>
      </main>
    </div>
  );
}

const styles = {
  wrapper: {
    background: `
      radial-gradient(circle at top, rgba(255,200,120,0.08), transparent 60%),
      linear-gradient(180deg, #1a120b, #0e0906)
    `,
    color: "#f4e9d8",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },

  main: {
    maxWidth: "760px",
    textAlign: "center",
    background: "linear-gradient(180deg, #3a2616, #2a1b11)",
    padding: "3rem",
    borderRadius: "12px",
    border: "2px solid #6b4a2d",
    boxShadow: `
      0 0 0 4px #1b120a,
      0 20px 40px rgba(0,0,0,0.8)
    `,
  },

  title: {
    fontSize: "3rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "0.75rem",
    color: "#f6e3b4",
    textShadow: "2px 2px 0 #000",
  },

  accent: {
    color: "#d4a24c",
  },

  rule: {
    fontSize: "1.5rem",
    color: "#a67c3a",
    marginBottom: "1.5rem",
  },

  tagline: {
    fontSize: "1.15rem",
    marginBottom: "2.5rem",
    fontStyle: "italic",
    color: "#e8d7b1",
  },

  quote: {
    fontSize: "1.35rem",
    fontStyle: "italic",
    background: "linear-gradient(180deg, #4b321f, #3a2616)",
    padding: "1.5rem",
    borderRadius: "10px",
    marginBottom: "2.5rem",
    lineHeight: "1.7",
    borderLeft: "6px solid #a67c3a",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.6)",
  },

  author: {
    marginTop: "0.75rem",
    fontSize: "1.05rem",
    fontWeight: "600",
    textAlign: "right",
    display: "block",
    color: "#d4a24c",
  },

  subheading: {
    fontSize: "1.75rem",
    marginBottom: "1rem",
    marginTop: "2rem",
    letterSpacing: "0.05em",
    color: "#f6e3b4",
    textTransform: "uppercase",
  },

  codeBlock: {
    background: "linear-gradient(180deg, #1c1c1c, #0f0f0f)",
    padding: "1.25rem",
    borderRadius: "8px",
    textAlign: "left",
    fontFamily: "'Courier New', monospace",
    marginBottom: "2rem",
    lineHeight: "1.8",
    fontSize: "0.95rem",
    color: "#e6d3a3",
    border: "1px solid #6b4a2d",
    boxShadow: "inset 0 0 8px rgba(0,0,0,0.8)",
  },

  footer: {
    color: "#cbb98a",
    fontStyle: "italic",
    fontSize: "0.95rem",
  },
};

export default App;
