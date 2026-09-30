import type { SiteContent } from './schema';

export const en = {
  locale: 'en',
  nav: {
    how: 'How it works',
    prototype: 'Prototype',
    evidence: 'Evidence',
    team: 'Team',
    partner: 'Partnerships',
    menu: 'Explore',
  },
  hero: {
    eyebrow: 'WISAM · safety in the context of a person’s routine',
    title: 'Location alone is not enough. Is this normal for them?',
    body: 'WISAM brings together available location, movement, and other signals. It compares location with a person’s routine and shows caregivers what changed, when the signal arrived, and what needs review.',
    status: 'Functional software prototype · simulated wearable telemetry',
    primary: 'What is WISAM?',
    secondary: 'See the evidence',
    imageNote: 'Illustrative image; not a WISAM deployment or patient.',
  },
  what: {
    eyebrow: 'The product',
    title: 'What is WISAM?',
    lead: 'WISAM is an AI-supported safety software system designed for people living with dementia and those who care for them.',
    body: 'It does more than show a location. WISAM puts device signals alongside a person’s routine, compares GPS with a personal baseline, and combines available results and safety rules into context a caregiver can review.',
    questions: [
      'Is this place familiar for them?',
      'What changed?',
      'How recent and reliable is the signal?',
      'Does someone need to review this?',
    ],
    flow: [
      {
        title: 'Wearable and location signals',
        detail: 'GPS · HRV · IMU motion · SOS · device status',
      },
      {
        title: 'AI and personal analytics',
        detail: 'Baseline · routine change · anomaly checks · risk fusion',
      },
      {
        title: 'Information for people',
        detail: 'Status · alerts · signal time · emergency profile',
      },
    ],
    status:
      'Current stage: the software path runs from signal ingestion to alerts in demonstration interfaces. Wearable telemetry is simulated today; connecting a physical device is the next technical step.',
  },
  problem: {
    eyebrow: 'The problem',
    title: 'An alert alone does not explain the situation.',
    body: 'GPS can tell you where someone is. It cannot explain whether that place is usual for them, when the last signal arrived, or whether something else changed. WISAM is designed to put those questions in context.',
    points: [
      'Is this place or route usual?',
      'When did the last signal arrive?',
      'Did something else change at the same time?',
    ],
    imageNote: 'An ordinary familiar route · illustrative scene',
  },
  does: {
    eyebrow: 'How it works',
    title: 'From a signal to a clearer human decision.',
    intro:
      'Each alert follows five simple steps. Signal timing and missing data stay visible throughout.',
    steps: ['Sense', 'Understand routine', 'Detect change', 'Add context', 'Support action'],
    descriptions: [
      'Available location, motion, HRV, and SOS signals enter the software pathways.',
      'GPS is compared with a person’s usual pattern; HRV can use its own baseline.',
      'Components and safety rules flag a change or request for help that may need attention.',
      'The last update, connectivity, and gaps remain visible so unknown is not mistaken for safe.',
      'The interface presents status and alerts for a person to review and decide what to do next.',
    ],
  },
  intelligence: {
    eyebrow: 'How the intelligence works',
    title: 'Intelligence that reads context, not a signal in isolation.',
    intro:
      'Each pathway checks the data it has, then combines results and safety rules into one state for review.',
    labels: [
      'GPS · HRV · IMU · SOS',
      'Personal baseline',
      'Anomaly, safety logic + late risk fusion',
      'Caregiver / responder context',
    ],
    descriptions: [
      'Separate location, heart-rate variability, motion, and SOS pathways enter the prototype.',
      'Observations are read against a baseline for the individual, with gaps kept visible.',
      'Safety rules and anomaly pathways contribute to a later combined risk context.',
      'The software organizes what was observed for a caregiver or responder to review.',
    ],
    note: 'Current end-to-end operation uses simulated wearable inputs. Unknown or stale data is not treated as safe.',
  },
  product: {
    eyebrow: 'The caregiver experience',
    title: 'When something changes, caregivers need the right context quickly.',
    intro:
      'These real app captures follow the review journey: current status, alert details, then emergency information a responder may need. The screens use demonstration data.',
    cards: [
      'What is the current status?',
      'What changed, and when?',
      'What might a responder need?',
    ],
    captions: [
      'Prototype interface · simulated/demo status',
      'Prototype interface · simulated/demo alert',
      'Prototype interface · demonstration emergency profile',
    ],
    note: 'Prototype screens with demonstration data; live location from a physical watch is not connected yet.',
  },
  evidence: {
    eyebrow: 'What we tested',
    title: 'We tested what we built.',
    intro:
      'The software passed 72 automated tests: 45 for the backend and API, and 27 for AI services. We also evaluated the GPS and HRV components separately on specific tasks using public data.',
    testTitle: 'Automated engineering tests',
    testNote:
      '45 backend/API + 27 AI-service tests in the reported verification run. Engineering coverage, not clinical validation.',
    gpsTitle: 'GPS component evaluation',
    hrvTitle: 'HRV component evaluation',
    proxyNote:
      'These are results for specific technical components. See the datasets, methods, and limits on the evidence page.',
    cta: 'See the evidence, methods, and limits',
  },
  why: {
    eyebrow: 'When an alert arrives',
    title: 'What does the caregiver see?',
    pillars: ['Status', 'Change', 'Data quality', 'Next step'],
    descriptions: [
      'An at-a-glance view of available status instead of separate signals.',
      'What differed from the usual route, or which request for help arrived?',
      'The last update, connectivity, and gaps in the available data.',
      'Details for review and contact; the software does not decide for the caregiver.',
    ],
    imageNote: 'Caregiver context · illustrative scene, screen not shown',
  },
  roadmap: {
    eyebrow: 'From prototype to pilot',
    title: 'We built the system. The next stage is proving it in the real world.',
    intro:
      'We are at stage three, evaluating technical evidence. A physical-device integration and controlled field pilot come next.',
    steps: [
      'Functional prototype',
      'Wearable integration',
      'Controlled validation',
      'Caregiver usability',
      'Supervised pilot',
      'Broader validation',
    ],
    now: 'Current',
    future: 'Planned',
  },
  team: {
    eyebrow: 'People behind WISAM',
    title: 'Meet the WISAM team',
    body: 'The people developing the software prototype and preparing its next technical stage.',
  },
  partnership: {
    eyebrow: 'Work with WISAM',
    title: 'Build the next stage of WISAM with us.',
    body: 'Wearable, research, care, and pilot-funding partners can help move WISAM from software prototype to a controlled field test.',
    audiences: 'Healthcare · Research · Care organizations · Wearables · Pilot partners',
    pending: 'wisam.sa.2030@gmail.com',
  },
  footer: {
    status: 'Software prototype · simulated telemetry',
    privacy: 'Privacy',
    evidence: 'Evidence',
    contact: 'Contact',
    rights: 'WISAM. A software prototype in development.',
  },
  evidencePage: {
    title: 'What did we build, and how did we test it?',
    lead: 'This page shows the software we built, how we evaluated GPS and HRV, each task’s results, and the limits of their interpretation.',
    engineering: 'Engineering verification',
    component: 'Component evaluation',
    dataset: 'Dataset',
    metric: 'Measured result',
    scope: 'Scope',
    limitation: 'Limitation',
    prototype: 'Prototype status',
    lastReview: 'Evidence reviewed',
  },
  privacyPage: {
    title: 'Privacy on this website.',
    lead: 'This public site is a static informational website. It does not offer accounts, a contact form, or a patient-data service.',
    collectTitle: 'Information you provide',
    collect:
      'The website does not ask you to submit personal or health information. The product screenshots use demonstration data; they are not live patient records.',
    analyticsTitle: 'Site analytics',
    analytics:
      'This website currently uses no visitor analytics or advertising trackers. If site analytics are added later, this page will be updated before they are enabled.',
    contactTitle: 'Contact',
    contact:
      'Contact WISAM at wisam.sa.2030@gmail.com. Email conversations are handled outside this informational website.',
    limitsTitle: 'Scope',
    limits:
      'This page covers the public website. It is not a privacy notice for a deployed WISAM care service; no such public service is represented here.',
  },
  meta: {
    homeTitle: 'WISAM | Personal context for safety signals',
    homeDescription:
      'WISAM is safety software for people living with dementia and caregivers. It puts location, routine, and alerts into context for review. Explore the prototype and its evidence.',
    evidenceTitle: 'Evidence and limitations — WISAM',
    evidenceDescription:
      'Engineering tests, GPS and HRV component evaluations, datasets, scope, and limitations of the WISAM software prototype.',
    privacyTitle: 'Website privacy — WISAM',
    privacyDescription: 'What the WISAM information website collects and how to contact us.',
  },
} satisfies SiteContent;
