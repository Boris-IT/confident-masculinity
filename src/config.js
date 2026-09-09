// ── Site-wide settings. Everything you'd want to change lives here. ──────────

export const SITE = {
  name: 'Confident Masculinity',
  tagline: 'Dating · Mindset · Presence',
  domain: 'https://confident-masculinity.com',
  publisher: 'Son of John B.V.',
  publisherUrl: 'https://www.sonofjohnlabel.com',
  contactUrl: 'https://www.sonofjohnlabel.com/pages/contact',
  // Article-level tag, shown under the byline the way magazines mark advertorial.
  // Names the commercial connection — required under the EU unfair-practices
  // rules (advertorial without disclosure is a per-se ban) and by Meta's
  // landing-page policy. This tag is the site's only disclosure of the
  // commercial connection, so it must stay on every partner article.
  partnerTag: 'Partner content',
};

// Tracking. Leave a value empty and its script simply isn't rendered.
// Nothing loads until the visitor accepts — see components/Consent.astro.
export const TRACKING = {
  metaPixelId: '',   // e.g. '123456789012345'
  ga4Id: '',         // e.g. 'G-XXXXXXXXXX'
  clarityId: 'yfivvm9a1j',   // Microsoft Clarity project id
};

// Appended to outbound shop links so Shopify attributes the session.
// Anything the visitor arrived with takes priority over these.
export const OUTBOUND_DEFAULTS = {
  utm_source: 'confidentmasculinity',
  utm_medium: 'advertorial',
};
