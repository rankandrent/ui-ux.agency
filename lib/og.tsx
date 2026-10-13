import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Branded 1200×630 social card, rendered at build time */
export function ogImage(title: string, eyebrow = "UI UX design services") {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(120% 120% at 100% 0%, #0B2A6B 0%, #1B232E 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#5B8DF5" }}>{eyebrow}</div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 60 : 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
          ui-ux<span style={{ color: "#0755E9" }}>.agency</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
