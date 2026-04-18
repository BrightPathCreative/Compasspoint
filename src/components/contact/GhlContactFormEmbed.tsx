import Script from "next/script";

const FORM_EMBED_BASE = "https://links.brightpathcreative.com.au";
const FORM_ID = "THoD6WD69fNpPUCHkJHq";
const IFRAME_ID = `inline-${FORM_ID}`;

/** GoHighLevel inline form; redirect after submit is configured in GHL (e.g. /thank-you). */
export function GhlContactFormEmbed() {
  return (
    <>
      <div className="w-full overflow-hidden rounded-lg" style={{ minHeight: 746 }}>
        <iframe
          src={`${FORM_EMBED_BASE}/widget/form/${FORM_ID}`}
          className="block h-[746px] w-full max-w-full border-0"
          style={{ borderRadius: 8 }}
          id={IFRAME_ID}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Compasspoint Advisory Enquiry Form"
          data-height="746"
          data-layout-iframe-id={IFRAME_ID}
          data-form-id={FORM_ID}
          title="Compasspoint Advisory Enquiry Form"
        />
      </div>
      <Script src={`${FORM_EMBED_BASE}/js/form_embed.js`} strategy="afterInteractive" />
    </>
  );
}
