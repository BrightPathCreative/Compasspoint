export const GHL_FORM_EMBED_BASE = "https://links.brightpathcreative.com.au";
export const GHL_FORM_ID = "tzXubRShSEXaWhCYCdkQ";
export const GHL_FORM_HEIGHT_PX = 434;
export const GHL_FORM_IFRAME_ID = `inline-${GHL_FORM_ID}`;
export const GHL_FORM_WIDGET_URL = `${GHL_FORM_EMBED_BASE}/widget/form/${GHL_FORM_ID}`;
export const GHL_FORM_SCRIPT_URL = `${GHL_FORM_EMBED_BASE}/js/form_embed.js`;

/** Origins the embedded form fetches from; preconnect on /contact to cut handshake time. */
export const GHL_FORM_PRECONNECT_ORIGINS = [
  GHL_FORM_EMBED_BASE,
  "https://stcdn.leadconnectorhq.com",
  "https://services.leadconnectorhq.com",
  "https://fonts.gstatic.com",
] as const;
