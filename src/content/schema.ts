export type Locale = 'en' | 'ar';
export type SiteContent = {
  locale: Locale;
  nav: {
    how: string;
    prototype: string;
    evidence: string;
    team: string;
    partner: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    status: string;
    primary: string;
    secondary: string;
    imageNote: string;
  };
  what: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    questions: [string, string, string, string];
    flow: [
      { title: string; detail: string },
      { title: string; detail: string },
      { title: string; detail: string },
    ];
    status: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    body: string;
    points: [string, string, string];
    imageNote: string;
  };
  does: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: [string, string, string, string, string];
    descriptions: [string, string, string, string, string];
  };
  intelligence: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: [string, string, string, string];
    descriptions: [string, string, string, string];
    note: string;
  };
  product: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: [string, string, string];
    captions: [string, string, string];
    note: string;
  };
  evidence: {
    eyebrow: string;
    title: string;
    intro: string;
    testTitle: string;
    testNote: string;
    gpsTitle: string;
    hrvTitle: string;
    proxyNote: string;
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    pillars: [string, string, string, string];
    descriptions: [string, string, string, string];
    imageNote: string;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: [string, string, string, string, string, string];
    now: string;
    future: string;
  };
  team: { eyebrow: string; title: string; body: string };
  partnership: {
    eyebrow: string;
    title: string;
    body: string;
    audiences: string;
    pending: string;
  };
  footer: {
    status: string;
    privacy: string;
    evidence: string;
    contact: string;
    rights: string;
  };
  evidencePage: {
    title: string;
    lead: string;
    engineering: string;
    component: string;
    dataset: string;
    metric: string;
    scope: string;
    limitation: string;
    prototype: string;
    lastReview: string;
  };
  privacyPage: {
    title: string;
    lead: string;
    collectTitle: string;
    collect: string;
    analyticsTitle: string;
    analytics: string;
    contactTitle: string;
    contact: string;
    limitsTitle: string;
    limits: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    evidenceTitle: string;
    evidenceDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
};
