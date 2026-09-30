export type WebsiteAsset = Readonly<{
  id: string;
  filename: string;
  type: 'editorial-photo' | 'product-capture' | 'brand-mark' | 'team-portrait' | 'concept-render';
  status: 'generated' | 'existing-product' | 'existing-brand' | 'user-supplied';
  routes: readonly string[];
  sections: readonly string[];
  altEn: string;
  altAr: string;
  aspectRatio: string;
  dimensions: string;
  generated: boolean;
  generationPrompt?: string;
  copyrightNotes: string;
  approvedForPublicUse: boolean;
}>;

const sharedRoutes = ['/', '/ar/'];

export const assets = {
  hero: {
    id: 'hero',
    filename: '/media/hero-family-v2.webp',
    type: 'editorial-photo',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['hero'],
    altEn: 'Illustrative scene of an older Saudi man and his adult daughter together at home',
    altAr: 'مشهد توضيحي لرجل سعودي كبير في السن وابنته البالغة معًا في المنزل',
    aspectRatio: '16:9',
    dimensions: '1600×900',
    generated: true,
    generationPrompt:
      'Dignified everyday Saudi grandfather and adult daughter at home, matched to approved fictional character references; calm cinematic photorealism; no medical or product claims.',
    copyrightNotes:
      'AI-generated editorial scene. Must remain labelled illustrative and never be presented as a WISAM user or patient.',
    approvedForPublicUse: true,
  },
  heroMobile: {
    id: 'heroMobile',
    filename: '/media/hero-family-mobile-v2.webp',
    type: 'editorial-photo',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['hero'],
    altEn: 'Illustrative scene of an older Saudi man and his adult daughter together at home',
    altAr: 'مشهد توضيحي لرجل سعودي كبير في السن وابنته البالغة معًا في المنزل',
    aspectRatio: '650:812',
    dimensions: '650×812',
    generated: true,
    generationPrompt:
      'Portrait composition of the approved fictional grandfather and daughter, derived from the wide hero; no product claims.',
    copyrightNotes:
      'AI-generated editorial crop, with the same illustrative disclosure as the desktop image.',
    approvedForPublicUse: true,
  },
  neighborhood: {
    id: 'neighborhood',
    filename: '/media/story-neighborhood.webp',
    type: 'editorial-photo',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['problem'],
    altEn:
      'Illustrative scene of an older Saudi man walking independently along a familiar neighborhood path',
    altAr: 'مشهد توضيحي لرجل سعودي كبير في السن يسير باستقلالية في مسار مألوف بحيه',
    aspectRatio: '4:3',
    dimensions: '1280×960',
    generated: true,
    generationPrompt:
      'The approved fictional Saudi grandfather walking comfortably along a familiar quiet neighborhood path in natural morning light; no devices or medical claims.',
    copyrightNotes:
      'AI-generated fictional editorial scene. It is not a WISAM user, patient, or live location view.',
    approvedForPublicUse: true,
  },
  caregiver: {
    id: 'caregiver',
    filename: '/media/story-caregiver.webp',
    type: 'editorial-photo',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['why'],
    altEn:
      'Illustrative scene of an adult Saudi daughter calmly checking a phone at home; the screen is not visible',
    altAr: 'مشهد توضيحي لابنة سعودية بالغة تتفقد هاتفًا بهدوء في المنزل دون ظهور شاشته',
    aspectRatio: '4:3',
    dimensions: '1280×960',
    generated: true,
    generationPrompt:
      'The approved fictional Saudi daughter naturally looking at an ordinary phone at home, its screen turned away; no invented WISAM UI or data.',
    copyrightNotes:
      'AI-generated fictional editorial scene. The phone screen is not shown and implies no live app behavior.',
    approvedForPublicUse: true,
  },
  mark: {
    id: 'mark',
    filename: '/media/wisam-logo.svg',
    type: 'brand-mark',

    status: 'user-supplied',
    routes: [
      '/',
      '/ar/',
      '/evidence/',
      '/ar/evidence/',
      '/plans/',
      '/ar/plans/',
      '/partners/',
      '/ar/partners/',
      '/privacy/',
      '/ar/privacy/',
    ],
    sections: ['navigation', 'footer'],
    altEn: 'WISAM purple heart-pin symbol',
    altAr: 'شعار وسام البنفسجي على شكل دبوس وخَفق قلب',
    aspectRatio: '798:1014',
    dimensions: 'SVG viewBox 798×1014',
    generated: false,
    copyrightNotes:
      'Production SVG recreation of the new purple heart-pin image supplied by the user; silhouette, concentric center, heart and tonal palette are preserved. Source retained locally in design/brand-source.',
    approvedForPublicUse: true,
  },
  markDark: {
    id: 'markDark',
    filename: '/media/wisam-logo-on-dark.svg',
    type: 'brand-mark',

    status: 'user-supplied',
    routes: ['/', '/ar/', '/partners/', '/ar/partners/'],
    sections: ['dark-background', 'footer'],
    altEn: 'WISAM symbol for dark backgrounds',
    altAr: 'شعار وسام للخلفيات الداكنة',
    aspectRatio: '798:1014',
    dimensions: 'SVG viewBox 798×1014',
    generated: false,
    copyrightNotes:
      'Higher-contrast derivative of the user-supplied purple symbol for dark surfaces.',
    approvedForPublicUse: true,
  },
  markCompact: {
    id: 'markCompact',
    filename: '/media/wisam-logo-compact.svg',
    type: 'brand-mark',

    status: 'user-supplied',
    routes: ['/', '/ar/'],
    sections: ['compact-brand'],
    altEn: 'Compact WISAM purple heart-pin symbol',
    altAr: 'رمز وسام البنفسجي المختصر',
    aspectRatio: '798:1014',
    dimensions: 'SVG viewBox 798×1014',
    generated: false,
    copyrightNotes:
      'Small-scale simplification of the user-supplied logo: the heart and purple pin are retained.',
    approvedForPublicUse: true,
  },
  mapMarker: {
    id: 'mapMarker',
    filename: '/media/wisam-map-marker.svg',
    type: 'brand-mark',

    status: 'user-supplied',
    routes: ['/', '/ar/'],
    sections: ['map-marker'],
    altEn: 'WISAM location marker',
    altAr: 'علامة موقع وسام',
    aspectRatio: '798:1014',
    dimensions: 'SVG viewBox 798×1014; legible at 20–32px',
    generated: false,
    copyrightNotes:
      'Map-scale symbol derived from the user-supplied purple heart-pin mark. The live native app renders a matching path in LocationView.tsx.',
    approvedForPublicUse: true,
  },
  mapMarkerSelected: {
    id: 'mapMarkerSelected',
    filename: '/media/wisam-map-marker-selected.svg',
    type: 'brand-mark',

    status: 'user-supplied',
    routes: ['/', '/ar/'],
    sections: ['map-marker'],
    altEn: 'Selected WISAM location marker',
    altAr: 'علامة موقع وسام المحددة',
    aspectRatio: '954:1110',
    dimensions: 'SVG viewBox 954×1110',
    generated: false,
    copyrightNotes: 'Selected state adds a visible ring while preserving the heart-pin symbol.',
    approvedForPublicUse: true,
  },
  wearableConcept: {
    id: 'wearableConcept',
    filename: '/media/watch-angle-01.webp',
    type: 'concept-render',

    status: 'generated',
    routes: ['/', '/ar/'],
    sections: ['wearable-experience'],
    altEn:
      'Illustrative six-sided neutral smartwatch concept with a woven strap and a heart symbol on its dark face',
    altAr: 'تصوّر توضيحي لساعة ذكية محايدة سداسية الشكل بسوار منسوج ورمز قلب على شاشتها الداكنة',
    aspectRatio: '10:11',
    dimensions: '1000×1100 transparent WebP',
    generated: true,
    generationPrompt:
      'Original six-sided neutral premium smartwatch concept with woven strap: black unbranded hardware, dark face, restrained violet heart accent; transparent background; no external watch branding, real product screen, patient data, or claim of WISAM-manufactured hardware.',
    copyrightNotes:
      'AI-generated concept visualization only. It is not a WISAM hardware product or evidence of completed watch integration.',
    approvedForPublicUse: true,
  },
  wearableFront: {
    id: 'wearableFront',
    filename: '/media/watch-angle-02.webp',
    type: 'concept-render',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['wearable-experience'],
    altEn: 'Front view of the neutral six-sided watch concept',
    altAr: 'منظر أمامي لتصور الساعة السداسية المحايدة',
    aspectRatio: '10:11',
    dimensions: '1000×1100 transparent WebP',
    generated: true,
    generationPrompt: 'Same original watch concept, front angle, transparent studio render.',
    copyrightNotes: 'Illustrative concept angle; not physical hardware or completed integration.',
    approvedForPublicUse: true,
  },
  wearableThreeQuarter: {
    id: 'wearableThreeQuarter',
    filename: '/media/watch-angle-03.webp',
    type: 'concept-render',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['wearable-experience'],
    altEn: 'Three-quarter view of the neutral six-sided watch concept',
    altAr: 'منظر مائل لتصور الساعة السداسية المحايدة',
    aspectRatio: '10:11',
    dimensions: '1000×1100 transparent WebP',
    generated: true,
    generationPrompt:
      'Same original watch concept, opposite three-quarter angle, transparent studio render.',
    copyrightNotes: 'Illustrative concept angle; not physical hardware or completed integration.',
    approvedForPublicUse: true,
  },
  wearableSide: {
    id: 'wearableSide',
    filename: '/media/watch-angle-04.webp',
    type: 'concept-render',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['wearable-experience'],
    altEn: 'Side view of the neutral six-sided watch concept',
    altAr: 'منظر جانبي لتصور الساعة السداسية المحايدة',
    aspectRatio: '10:11',
    dimensions: '1000×1100 transparent WebP',
    generated: true,
    generationPrompt: 'Same original watch concept, side profile, transparent studio render.',
    copyrightNotes: 'Illustrative concept angle; not physical hardware or completed integration.',
    approvedForPublicUse: true,
  },
  wearableBack: {
    id: 'wearableBack',
    filename: '/media/watch-angle-05.webp',
    type: 'concept-render',

    status: 'generated',
    routes: sharedRoutes,
    sections: ['wearable-experience'],
    altEn: 'Back view of the neutral six-sided watch concept',
    altAr: 'منظر خلفي لتصور الساعة السداسية المحايدة',
    aspectRatio: '10:11',
    dimensions: '1000×1100 transparent WebP',
    generated: true,
    generationPrompt:
      'Same original watch concept, rear angle, transparent studio render with no invented sensors.',
    copyrightNotes: 'Illustrative concept angle; not physical hardware or completed integration.',
    approvedForPublicUse: true,
  },
  homeAr: {
    id: 'homeAr',
    filename: '/media/product-home-ar.webp',
    type: 'product-capture',

    status: 'existing-product',
    routes: sharedRoutes,
    sections: ['prototype'],
    altEn: 'Arabic caregiver home prototype showing a calm status view',
    altAr: 'واجهة مقدّم الرعاية العربية في النموذج الأولي، تعرض الحالة الهادئة',
    aspectRatio: '390:844',
    dimensions: '780×1688 source, optimized web copy',
    generated: false,
    copyrightNotes:
      'Real WISAM production-code visual QA capture; demo data and schematic location. No values altered.',
    approvedForPublicUse: true,
  },
  alertAr: {
    id: 'alertAr',
    filename: '/media/product-alert-ar.webp',
    type: 'product-capture',

    status: 'existing-product',
    routes: sharedRoutes,
    sections: ['prototype'],
    altEn: 'Arabic prototype alert decision screen',
    altAr: 'شاشة قرار التنبيه العربية في النموذج الأولي',
    aspectRatio: '390:844',
    dimensions: '780×1688 source, optimized web copy',
    generated: false,
    copyrightNotes: 'Real WISAM production-code visual QA capture; demo data. No values altered.',
    approvedForPublicUse: true,
  },
  responderAr: {
    id: 'responderAr',
    filename: '/media/product-responder-ar.webp',
    type: 'product-capture',

    status: 'existing-product',
    routes: sharedRoutes,
    sections: ['prototype'],
    altEn: 'Arabic responder emergency profile prototype',
    altAr: 'الملف العربي التجريبي للطوارئ الموجّه للمستجيب',
    aspectRatio: '390:844',
    dimensions: '780×1688 source, optimized web copy',
    generated: false,
    copyrightNotes:
      'Real WISAM responder visual QA capture; demonstration profile. No values altered.',
    approvedForPublicUse: true,
  },
  homeEn: {
    id: 'homeEn',
    filename: '/media/product-home-en.webp',
    type: 'product-capture',

    status: 'existing-product',
    routes: sharedRoutes,
    sections: ['prototype'],
    altEn: 'English caregiver home prototype showing an alert status',
    altAr: 'واجهة مقدّم الرعاية الإنجليزية في النموذج الأولي، تعرض حالة تنبيه',
    aspectRatio: '390:844',
    dimensions: '780×1688 source, optimized web copy',
    generated: false,
    copyrightNotes:
      'Real WISAM production-code visual QA capture; demo data and schematic location. No values altered.',
    approvedForPublicUse: true,
  },
  teamAbdullah: {
    id: 'teamAbdullah',
    filename: '/media/team-abdullah-unified.webp',
    type: 'team-portrait',

    status: 'user-supplied',
    routes: sharedRoutes,
    sections: ['team'],
    altEn: 'Portrait of Abdullah Almuntashiri',
    altAr: 'صورة عبدالله المنتشري',
    aspectRatio: '4:5',
    dimensions: '720×900',
    generated: false,
    copyrightNotes:
      'User-supplied source. macOS Vision subject mask and deterministic compositing replace background pixels with the shared neutral gray; original foreground pixels are preserved, with 4:5 crop and matched face scale.',
    approvedForPublicUse: true,
  },
  teamTurki: {
    id: 'teamTurki',
    filename: '/media/team-turki-unified.webp',
    type: 'team-portrait',

    status: 'user-supplied',
    routes: sharedRoutes,
    sections: ['team'],
    altEn: 'Portrait of Turki Halabi',
    altAr: 'صورة تركي حلبي',
    aspectRatio: '4:5',
    dimensions: '720×900',
    generated: false,
    copyrightNotes:
      'User-supplied source. macOS Vision subject mask and deterministic compositing replace background pixels with the shared neutral gray; original foreground pixels are preserved, with 4:5 crop and matched face scale.',
    approvedForPublicUse: true,
  },
  teamAnan: {
    id: 'teamAnan',
    filename: '/media/team-anan-unified.webp',
    type: 'team-portrait',

    status: 'user-supplied',
    routes: sharedRoutes,
    sections: ['team'],
    altEn: 'Portrait of Anan S. Rawass',
    altAr: 'صورة عنان رواس',
    aspectRatio: '4:5',
    dimensions: '720×900',
    generated: false,
    copyrightNotes:
      'User-supplied source. macOS Vision subject mask and deterministic compositing replace background pixels with the shared neutral gray; original foreground pixels are preserved, with 4:5 crop and matched face scale. Arabic name follows the user correction; English spelling follows the supplied team slide.',
    approvedForPublicUse: true,
  },
} as const satisfies Record<string, WebsiteAsset>;
