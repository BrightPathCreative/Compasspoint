import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "CompassPoint Advisory - strategic consulting for Australian SMEs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#380729",
          color: "#f6f1e7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 999,
              border: "2px solid rgba(212,175,55,0.45)",
              boxShadow: "0 0 40px rgba(212,175,55,0.2)",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#d4af37",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          CompassPoint Advisory
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(246,241,231,0.82)",
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Strategic consulting for Australian SMEs
        </div>
      </div>
    ),
    { ...size },
  );
}
