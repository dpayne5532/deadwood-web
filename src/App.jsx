import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://api.deadwood.rest/frontend")
      .then(res => res.json())
      .then(data => {
        setQuote(data);
      })
      .catch(err => {
        console.error("Failed to fetch quote:", err);
      });
  }, []);

  return (
    <div style={styles.wrapper}>
      <main style={styles.main}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.accent}>Deadwood.REST</span>
        </h1>
        <p style={styles.tagline}>
          This site provides a profanity-rich REST API inspired by HBO’s <em>Deadwood</em>.
        </p>

        {quote && (
          <blockquote style={styles.quote}>
            “{quote.quote}”
            <footer style={styles.author}>— {quote.by}</footer>
          </blockquote>
        )}

        <h2 style={styles.subheading}>API Usage:</h2>
        <div style={styles.codeBlock}>
          <code>GET https://api.deadwood.rest</code><br />
          <code>GET https://api.deadwood.rest/bullock</code><br />
          <code>GET https://api.deadwood.rest/al</code><br />
          <code>GET https://api.deadwood.rest/jane</code><br />
          <code>GET https://api.deadwood.rest/joanie</code><br />
          <code>GET https://api.deadwood.rest/doc</code><br />
          <code>GET https://api.deadwood.rest/eb</code><br />
          <code>GET https://api.deadwood.rest/wildbill</code><br />
          <code>GET https://api.deadwood.rest/wu</code><br />
          <code>GET https://api.deadwood.rest/trixie</code>
        </div>

        <p style={styles.footer}>More endpoints coming soon.</p>
      </main>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#1e1e1e",
    color: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  main: {
    maxWidth: "720px",
    textAlign: "center",
    backgroundColor: "#2c2c2c",
    padding: "3rem",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  accent: {
    color: "#ffcc00",
  },
  tagline: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
  },
  quote: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    backgroundColor: "#444",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "2rem",
    lineHeight: "1.6",
    // whiteSpace: "pre-wrap",
    // fontFamily: "monospace",
    // fontVariantLigatures: "none",
  },
  author: {
    marginTop: "0.5rem",
    fontSize: "1rem",
    fontWeight: "500",
    textAlign: "right",
    display: "block",
    color: "#ffcc00",
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  codeBlock: {
    backgroundColor: "#333",
    padding: "1rem",
    borderRadius: "6px",
    textAlign: "left",
    fontFamily: "monospace",
    marginBottom: "1.5rem",
    lineHeight: "1.7",
    fontSize: "0.95rem",
  },
  footer: {
    color: "#bbb",
    fontStyle: "italic",
  },
};

export default App;
