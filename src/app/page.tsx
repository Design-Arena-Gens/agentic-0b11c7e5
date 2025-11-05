"use client";

import { useMemo, useState } from "react";

const DEFAULT_MESSAGE = "Sohan Jat, go to hell.";

const ALT_MESSAGES = [
  "Sohan Jat, jahannum mein jao.",
  "Sohan Jat, hell awaits you.",
  "Sohan Jat, tumhare liye hell hi theek hai."
];

function randomVariant(exclude: string) {
  const pool = ALT_MESSAGES.filter((variant) => variant !== exclude);
  return pool[Math.floor(Math.random() * pool.length)] ?? exclude;
}

export default function Home() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [status, setStatus] = useState<"idle" | "copied">("idle");

  const dmPreview = useMemo(
    () => ({
      recipient: "Sohan Jat",
      body: message.trim().length === 0 ? DEFAULT_MESSAGE : message.trim()
    }),
    [message]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dmPreview.body);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2500);
    } catch (error) {
      console.error("Failed to copy message", error);
      setStatus("idle");
    }
  };

  const handleRandomize = () => {
    setMessage(randomVariant(dmPreview.body));
    setStatus("idle");
  };

  return (
    <main
      style={{
        display: "grid",
        gap: "2rem",
        width: "min(640px, 90vw)",
        padding: "3rem 2.25rem",
        borderRadius: "24px",
        background: "rgba(15, 23, 42, 0.9)",
        boxShadow:
          "0 20px 45px rgba(15, 23, 42, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.02)"
      }}
    >
      <header style={{ display: "grid", gap: "0.75rem" }}>
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "rgba(148, 163, 184, 0.85)"
          }}
        >
          Instagram DM Composer
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "2.5rem",
            lineHeight: 1.05,
            color: "#f8fafc"
          }}
        >
          Drop the hell note for Sohan Jat in seconds.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "rgba(226, 232, 240, 0.78)"
          }}
        >
          Craft the exact punchline you want to hit send on. Copy it, paste it
          into Instagram, and the job&apos;s done.
        </p>
      </header>

      <section
        aria-label="Compose message"
        style={{
          display: "grid",
          gap: "1rem",
          padding: "1.5rem",
          borderRadius: "18px",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(17, 24, 39, 0.95))"
        }}
      >
        <label
          htmlFor="message"
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#e2e8f0"
          }}
        >
          Message for Sohan Jat
        </label>
        <textarea
          id="message"
          value={message}
          placeholder={DEFAULT_MESSAGE}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          style={{
            resize: "vertical",
            minHeight: "120px",
            borderRadius: "16px",
            border: "1px solid rgba(148, 163, 184, 0.2)",
            padding: "1.1rem",
            fontSize: "1.05rem",
            lineHeight: 1.55,
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            color: "#f1f5f9",
            outline: "none",
            boxShadow: "0 0 0 1px transparent",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease"
          }}
          onFocus={(event) => {
            event.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.8)";
            event.currentTarget.style.boxShadow =
              "0 0 0 1.5px rgba(96, 165, 250, 0.6)";
          }}
          onBlur={(event) => {
            event.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.2)";
            event.currentTarget.style.boxShadow = "0 0 0 1px transparent";
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap"
          }}
        >
          <button
            type="button"
            onClick={handleCopy}
            style={{
              flex: "1 1 160px",
              border: "none",
              borderRadius: "999px",
              padding: "0.85rem 1.4rem",
              fontWeight: 600,
              color: "#0f172a",
              background:
                status === "copied"
                  ? "linear-gradient(135deg, #34d399, #10b981)"
                  : "linear-gradient(135deg, #60a5fa, #2563eb)",
              boxShadow:
                status === "copied"
                  ? "0 12px 30px rgba(16, 185, 129, 0.35)"
                  : "0 12px 30px rgba(37, 99, 235, 0.35)",
              transition: "transform 0.15s ease, box-shadow 0.2s ease"
            }}
            onMouseDown={(event) => {
              event.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(event) => {
              event.currentTarget.style.transform = "scale(1)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "scale(1)";
            }}
          >
            {status === "copied" ? "Copied to clipboard" : "Copy message"}
          </button>
          <button
            type="button"
            onClick={handleRandomize}
            style={{
              flex: "0 0 auto",
              border: "1px solid rgba(148, 163, 184, 0.4)",
              borderRadius: "999px",
              padding: "0.85rem 1.4rem",
              fontWeight: 600,
              color: "#e0e7ff",
              background: "rgba(15, 23, 42, 0.6)",
              transition: "background 0.2s ease, border-color 0.2s ease"
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = "rgba(30, 41, 59, 0.85)";
              event.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.65)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "rgba(15, 23, 42, 0.6)";
              event.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.4)";
            }}
          >
            Spice it up
          </button>
        </div>
      </section>

      <section
        aria-label="Instagram message preview"
        style={{
          display: "grid",
          gap: "1.2rem",
          padding: "1.75rem",
          borderRadius: "22px",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.92))",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "auto 1.5rem -0.2rem auto",
            padding: "0.35rem 0.8rem",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.35), rgba(147, 51, 234, 0.35))",
            color: "rgba(226, 232, 240, 0.85)",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}
        >
          Preview
        </div>
        <div
          style={{
            display: "grid",
            gap: "0.35rem"
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(148, 163, 184, 0.75)"
            }}
          >
            To
          </span>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#f8fafc"
            }}
          >
            {dmPreview.recipient}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "0.75rem"
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.55), rgba(236, 72, 153, 0.55))",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#0f172a"
            }}
          >
            SJ
          </div>
          <div
            style={{
              maxWidth: "100%",
              padding: "1.1rem 1.3rem",
              borderRadius: "20px",
              borderEndEndRadius: "6px",
              background:
                "linear-gradient(135deg, rgba(96, 165, 250, 0.9), rgba(59, 130, 246, 0.9))",
              color: "#0f172a",
              fontSize: "1.05rem",
              lineHeight: 1.55,
              boxShadow: "0 12px 32px rgba(59, 130, 246, 0.25)"
            }}
          >
            {dmPreview.body}
          </div>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            color: "rgba(203, 213, 225, 0.75)"
          }}
        >
          Copy the message above, open Instagram, paste it in the chat with{" "}
          <strong style={{ color: "#e2e8f0" }}>{dmPreview.recipient}</strong>, and
          drop the hammer.
        </p>
      </section>
    </main>
  );
}
