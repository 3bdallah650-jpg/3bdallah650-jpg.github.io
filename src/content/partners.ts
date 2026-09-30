import type { Locale } from './schema';

export type PartnerPage = 'hub' | 'investment' | 'research' | 'organizations';

type Pair = { en: string; ar: string };
type Item = { title: Pair; body: Pair };

export const partnerRoutes: Record<PartnerPage, string> = {
  hub: '/partners/',
  investment: '/partners/investment/',
  research: '/partners/research/',
  organizations: '/partners/organizations/',
};

export const partnershipCopy = {
  common: {
    status: {
      en: 'Functional software prototype · simulated wearable signals',
      ar: 'نموذج برمجي أولي عامل · إشارات جهاز مُحاكاة',
    },
    evidence: { en: 'Review the evidence', ar: 'اطّلع على الأدلة' },
    contact: { en: 'Talk to us', ar: 'تواصل معنا' },
    future: {
      en: 'Wearable integration, real-world validation, and commercial readiness remain future work.',
      ar: 'لا يزال ربط الأجهزة القابلة للارتداء والتحقق الميداني والاستعداد التجاري أعمالًا مستقبلية.',
    },
    illustration: {
      en: 'Illustrative scene; not a WISAM deployment or patient.',
      ar: 'مشهد توضيحي؛ لا يعرض نشرًا فعليًا لـWISAM أو أحد المرضى.',
    },
    direct: { en: 'Direct email', ar: 'البريد المباشر' },
  },
  hub: {
    metaTitle: { en: 'Partner with WISAM | WISAM', ar: 'الشراكة مع وسام | WISAM' },
    metaDescription: {
      en: 'Partner with WISAM on wearable technology, controlled pilots, research, and the path from software prototype to real-world evidence.',
      ar: 'تعاون مع وسام في الأجهزة القابلة للارتداء والتجارب المنضبطة والبحث، لنقل النموذج البرمجي إلى دليل ميداني.',
    },
    eyebrow: { en: 'Partnerships / The next stage', ar: 'الشراكات / المرحلة القادمة' },
    title: {
      en: 'Build the next stage of WISAM with us.',
      ar: 'شارك في بناء المرحلة القادمة من WISAM.',
    },
    lead: {
      en: 'The next stage takes more than software. We are looking for partners who can contribute wearable technology, pilot settings, research expertise, access to participants, and capital. Together, those contributions can move WISAM from a working prototype toward responsible real-world validation.',
      ar: 'المرحلة القادمة تحتاج إلى أكثر من فريق برمجي. نبحث عن شركاء يضيفون خبرة في الأجهزة، وبيئات للتجربة، وتصميمًا بحثيًا، ووصولًا إلى المشاركين، وتمويلًا. هذه العناصر تنقل وسام من نموذج عامل إلى تحقق واقعي منضبط.',
    },
    routesTitle: { en: 'Choose your path into the work', ar: 'اختر مجال الشراكة' },
    routesLead: {
      en: 'Different partners can answer different questions. Start with the path closest to your expertise.',
      ar: 'لكل شريك دور مختلف في المرحلة القادمة. ابدأ بالمجال الأقرب إلى خبرة جهتك.',
    },
    paths: [
      {
        title: { en: 'Capital Investment', ar: 'الاستثمار الرأسمالي' },
        body: {
          en: 'Explore milestone-linked support for integration, evaluation, and the work needed before scale.',
          ar: 'استكشف دعمًا مرتبطًا بمراحل ربط الأجهزة والتقييم والاستعداد للتوسع.',
        },
        destination: 'investment',
      },
      {
        title: { en: 'Fund a Pilot', ar: 'تمويل تجربة ميدانية' },
        body: {
          en: 'Help design and fund a proposed, appropriately governed pilot after technical integration.',
          ar: 'ساهم في تصميم وتمويل تجربة مقترحة تحت حوكمة مناسبة بعد إنجاز الربط التقني.',
        },
        destination: 'research',
      },
      {
        title: { en: 'Research With Us', ar: 'البحث معنا' },
        body: {
          en: 'Co-design questions, methods, and reporting that can test where WISAM is useful and where it is not yet ready.',
          ar: 'شارك في صياغة الأسئلة والمنهجيات والتقارير لتحديد مواضع فائدة وسام وحدود جاهزيته الحالية.',
        },
        destination: 'research',
      },
      {
        title: { en: 'Strategic Technology', ar: 'الشراكة التقنية الاستراتيجية' },
        body: {
          en: 'Explore wearable, connectivity, mapping, and implementation collaboration.',
          ar: 'استكشف التعاون في الأجهزة القابلة للارتداء والاتصال والخرائط والتنفيذ.',
        },
        destination: 'organizations',
      },
      {
        title: { en: 'Social Impact', ar: 'الأثر الاجتماعي' },
        body: {
          en: 'Shape access and evaluation with organizations focused on families and community care.',
          ar: 'ساهم في توسيع الوصول والتقييم مع جهات تهتم بالأسر والرعاية المجتمعية.',
        },
        destination: 'organizations',
      },
      {
        title: { en: 'Public-Sector Collaboration', ar: 'التعاون مع القطاع العام' },
        body: {
          en: 'Discuss a carefully scoped pathway for evaluation, service fit, and responsible deployment.',
          ar: 'ناقش مسارًا محدد النطاق للتقييم وملاءمة الخدمة والنشر المسؤول.',
        },
        destination: 'organizations',
      },
    ],
    phaseTitle: {
      en: 'From integration to real-world evidence',
      ar: 'من ربط الجهاز إلى الدليل الميداني',
    },
    phase: [
      {
        title: { en: 'Connect the real device', ar: 'ربط جهاز فعلي' },
        body: {
          en: 'Move from simulated telemetry toward a reliable physical wearable integration.',
          ar: 'الانتقال من إشارات مُحاكاة إلى ربط موثوق بجهاز فعلي قابل للارتداء.',
        },
      },
      {
        title: { en: 'Test in context', ar: 'التحقق في السياق الواقعي' },
        body: {
          en: 'Study usability, alert behavior, reliability, and workflow fit under an appropriate protocol.',
          ar: 'دراسة قابلية الاستخدام وسلوك التنبيهات والموثوقية وملاءمة سير العمل ضمن بروتوكول مناسب.',
        },
      },
      {
        title: { en: 'Prepare to scale responsibly', ar: 'الاستعداد للتوسع بمسؤولية' },
        body: {
          en: 'Let technical, human, and commercial evidence determine what is ready for launch.',
          ar: 'جعل الأدلة التقنية والإنسانية والتجارية أساسًا لتحديد ما هو جاهز للإطلاق.',
        },
      },
    ] satisfies Item[],
    ctaTitle: { en: 'Tell us what you can help test.', ar: 'أخبرنا بما يمكن لجهتك اختباره.' },
    ctaBody: {
      en: 'Tell us the area you want to explore and the organization you represent.',
      ar: 'أخبرنا بمجال التعاون الذي ترغب في استكشافه والجهة التي تمثلها.',
    },
  },
  investment: {
    metaTitle: {
      en: 'Investment & Strategic Partnerships | WISAM',
      ar: 'الاستثمار والشراكات الاستراتيجية | WISAM',
    },
    metaDescription: {
      en: 'Explore WISAM’s software-first safety model, working prototype, planned commercial approach, and milestones for wearable integration and validation.',
      ar: 'تعرّف على نموذج وسام البرمجي للسلامة، وما بُني منه، ونموذجه التجاري المستهدف، ومراحل ربط الجهاز والتحقق القادمة.',
    },
    eyebrow: { en: 'Investment & strategic partnerships', ar: 'الاستثمار والشراكات الاستراتيجية' },
    title: {
      en: 'Building the intelligence layer for safer independence.',
      ar: 'نبني طبقة الذكاء التي قد تجعل الاستقلالية أكثر أمانًا.',
    },
    lead: {
      en: 'WISAM is developing a software intelligence layer for wearable-assisted safety, starting with people living with dementia and their caregivers. A working prototype links available signals, safety logic, and caregiver and responder screens. The next investment milestones are physical-device integration and controlled validation.',
      ar: 'يطوّر وسام طبقة برمجية للسلامة المدعومة بالأجهزة القابلة للارتداء، تبدأ من احتياجات المصابين بالخرف ومقدّمي الرعاية. يربط النموذج البرمجي العامل الإشارات المتاحة وقواعد السلامة بواجهات مقدّم الرعاية والمستجيب. ربط جهاز فعلي والتحقق المنضبط هما مرحلتا الاستثمار التاليتان.',
    },
    thesisTitle: {
      en: 'The product insight',
      ar: 'الفكرة التي يقوم عليها المنتج',
    },
    thesisLead: {
      en: 'A location dot tells a caregiver where someone is. WISAM adds the person’s usual routine, other available signals, and the age of the data so an alert has context. We have built this logic in software; whether it improves care in practice remains to be tested.',
      ar: 'توضح نقطة الخريطة مكان الشخص. يضيف وسام مساره المعتاد، والإشارات الأخرى المتاحة، ووقت آخر تحديث حتى لا يصل التنبيه بلا سياق. بُني هذا المنطق برمجيًا، وما زالت فائدته في الواقع تحتاج إلى اختبار.',
    },
    pillars: [
      {
        title: { en: 'The software already runs', ar: 'البرنامج يعمل اليوم' },
        body: {
          en: 'The software prototype links telemetry, component scoring, risk fusion, and demonstration caregiver/responder interfaces.',
          ar: 'يربط النموذج البرمجي الأولي الإشارات وتقييم المكوّنات ودمج المخاطر بواجهتَي عرض لمقدّم الرعاية والمستجيب.',
        },
      },
      {
        title: { en: 'The technical baseline is measured', ar: 'لدينا قياسات تقنية أولية' },
        body: {
          en: 'Engineering tests and public-dataset component evaluations establish a technical starting point, not clinical benefit.',
          ar: 'توفّر اختبارات الهندسة وتقييمات المكوّنات على بيانات عامة نقطة انطلاق تقنية، لا إثباتًا لفائدة سريرية.',
        },
      },
      {
        title: { en: 'The next risks are clear', ar: 'الخطوات غير المحسومة واضحة' },
        body: {
          en: 'Real-device reliability, alert usefulness, and caregiver workflow fit still need controlled evaluation.',
          ar: 'ما زالت موثوقية الجهاز الفعلي، وفائدة التنبيهات، وملاءمة تجربة مقدّم الرعاية تحتاج إلى تقييم منضبط.',
        },
      },
    ] satisfies Item[],
    scaleTitle: { en: 'How the planned service could work', ar: 'كيف قد يعمل نموذج الخدمة؟' },
    scaleLead: {
      en: 'The target model pairs compatible wearable hardware with WISAM software and recurring family plans. Institutional partnerships are another possible route. Pricing, demand, and service performance still need validation.',
      ar: 'يجمع النموذج المستهدف جهازًا قابلًا للارتداء ومتوافقًا مع برمجيات وسام وباقات عائلية دورية. والتعاون مع الجهات مسار محتمل آخر. الأسعار والطلب وأداء الخدمة لا تزال بحاجة إلى تحقق.',
    },
    scale: [
      {
        title: { en: 'Software first', ar: 'البرنامج أولًا' },
        body: {
          en: 'WISAM develops the signal logic and caregiver experience around compatible hardware; it does not make the watch.',
          ar: 'يطوّر وسام منطق الإشارات وتجربة مقدّم الرعاية حول جهاز متوافق؛ ولا يصنع الساعة.',
        },
      },
      {
        title: { en: 'Context over time', ar: 'سياق يتكوّن مع الوقت' },
        body: {
          en: 'Personal baseline logic is in the prototype. A future service would need to test how ongoing routine history helps families.',
          ar: 'منطق خط الأساس الشخصي موجود في النموذج الأولي. ويحتاج استخدام تاريخ الروتين المستمر إلى اختبار مع الأسر في خدمة مستقبلية.',
        },
      },
      {
        title: { en: 'Family and organization routes', ar: 'مساران للأسر والجهات' },
        body: {
          en: 'Family subscriptions are planned; organizations could support pilots or future deployments once the service is ready.',
          ar: 'الباقات العائلية مخططة؛ ويمكن للجهات دعم التجارب أو النشر مستقبلًا بعد إثبات الجاهزية.',
        },
      },
    ] satisfies Item[],
    commercialTitle: { en: 'A planned commercial model', ar: 'نموذج تجاري مستهدف' },
    commercialBody: {
      en: 'WISAM is exploring a starter bundle and tiered family plans as a target launch model. Prices and features remain subject to technical integration, pilot results, and market validation; nothing on this page is currently an offer for sale.',
      ar: 'يستكشف وسام باقة مبدئية وباقات عائلية متعددة المستويات كنموذج إطلاق مستهدف. وتبقى الأسعار والمزايا خاضعة للتكامل التقني ونتائج التجارب والتحقق من السوق؛ ولا تمثل هذه الصفحة عرضًا للبيع حاليًا.',
    },
    evidenceTitle: { en: 'What the current tests show', ar: 'ماذا تُظهر الاختبارات الحالية؟' },
    evidenceBody: {
      en: 'The current evidence includes automated software tests and GPS/HRV component evaluations on public datasets. It does not establish dementia clinical effectiveness, prospective wandering prediction, or production smartwatch performance.',
      ar: 'تشمل الأدلة الحالية اختبارات برمجية آلية وتقييمات لمكوّنَي GPS وHRV على مجموعات بيانات عامة. وهي لا تثبت فعالية سريرية في الخرف أو التنبؤ الاستباقي بالتجول أو أداء ساعة ذكية في بيئة تشغيل فعلية.',
    },
    unlockTitle: { en: 'What support would fund', ar: 'ما الذي سيدعمه التمويل؟' },
    unlocks: [
      {
        title: { en: 'Wearable integration', ar: 'ربط جهاز قابل للارتداء' },
        body: {
          en: 'Build and test the physical-device data path.',
          ar: 'بناء مسار بيانات الجهاز الفعلي واختباره.',
        },
      },
      {
        title: { en: 'Pilot preparation', ar: 'التحضير للتجربة' },
        body: {
          en: 'Define cohorts, protocols, governance, and partner responsibilities.',
          ar: 'تحديد الفئات والبروتوكولات والحوكمة ومسؤوليات الشركاء.',
        },
      },
      {
        title: { en: 'Human evaluation', ar: 'التقييم مع المستخدمين' },
        body: {
          en: 'Study caregiver usability, alerts, and workflow fit.',
          ar: 'دراسة قابلية الاستخدام والتنبيهات وملاءمة سير العمل لمقدّمي الرعاية.',
        },
      },
      {
        title: { en: 'Readiness work', ar: 'أعمال الجاهزية' },
        body: {
          en: 'Use measured results to refine reliability, support, and a future commercial model.',
          ar: 'توظيف النتائج المقاسة لتحسين الموثوقية والدعم والنموذج التجاري المستقبلي.',
        },
      },
    ] satisfies Item[],
    milestonesTitle: {
      en: 'Three milestones to fund and assess',
      ar: 'ثلاث مراحل للتمويل والتقييم',
    },
    milestones: [
      {
        title: { en: '01 / Integrate', ar: '01 / الربط' },
        body: {
          en: 'Real wearable data path and device reliability assessment.',
          ar: 'مسار بيانات جهاز فعلي وتقييم موثوقيته.',
        },
      },
      {
        title: { en: '02 / Validate', ar: '02 / التحقق' },
        body: {
          en: 'Controlled pilot design, human factors, and signal-level evaluation.',
          ar: 'تصميم تجربة منضبطة والعوامل البشرية وتقييم الإشارات.',
        },
      },
      {
        title: { en: '03 / Decide', ar: '03 / القرار' },
        body: {
          en: 'Define a responsible launch scope from the resulting evidence.',
          ar: 'تحديد نطاق إطلاق مسؤول بناءً على الأدلة الناتجة.',
        },
      },
    ] satisfies Item[],
    audienceTitle: { en: 'Who we want to meet', ar: 'مع من نرغب في الحوار' },
    audience: {
      en: 'Investors and strategic partners who can contribute patient capital, healthcare evaluation experience, wearable or connectivity capability, and disciplined support for a measured path to market.',
      ar: 'المستثمرون والشركاء الاستراتيجيون القادرون على تقديم رأس مال طويل الأفق، وخبرة في التقييم الصحي، وقدرات في الأجهزة أو الاتصال، ودعم منضبط لمسار مدروس نحو السوق.',
    },
    accessTitle: { en: 'Request a direct discussion', ar: 'اطلب مناقشة مباشرة' },
    accessBody: {
      en: 'Share who you are, the partnership you have in mind, and what you would like to examine. We can discuss relevant materials and evidence in a direct conversation.',
      ar: 'عرّفنا بجهتك ونوع الشراكة التي تتصورها وما ترغب في مراجعته. ويمكن مناقشة المواد والأدلة المناسبة في محادثة مباشرة.',
    },
    legal: {
      en: 'This page is for partnership discussion only. It is not an offer to sell securities, a solicitation to invest, a promise of returns, or a statement that WISAM is commercially or clinically validated.',
      ar: 'هذه الصفحة لغرض مناقشة الشراكات فقط. ولا تُعد عرضًا لبيع أوراق مالية أو دعوة استثمارية أو وعدًا بعوائد أو تصريحًا بأن وسام متاح تجاريًا أو مثبت سريريًا.',
    },
  },
  research: {
    metaTitle: { en: 'Research & Pilots | WISAM', ar: 'البحث والتجارب | WISAM' },
    metaDescription: {
      en: 'Research with WISAM on wearable use, route changes, alerts, and caregiver response through a future controlled pilot.',
      ar: 'ابحث مع وسام استخدام الجهاز وتغيّر المسار والتنبيهات واستجابة مقدّم الرعاية ضمن تجربة منضبطة مستقبلية.',
    },
    eyebrow: { en: 'Research & pilots', ar: 'البحث والتجارب' },
    title: {
      en: 'Build the evidence with us.',
      ar: 'ابنِ الدليل معنا.',
    },
    lead: {
      en: 'WISAM’s next research step is to move from simulated inputs to structured real-world use. A controlled study could test wearable adherence, alert quality, caregiver response, and where the software helps or falls short. The pilot would follow device integration and an agreed protocol.',
      ar: 'الخطوة البحثية التالية هي الانتقال من مدخلات مُحاكاة إلى استخدام واقعي منظم. يمكن لدراسة منضبطة أن تقيس الالتزام بالجهاز، وجودة التنبيهات، واستجابة مقدّم الرعاية، ومواضع فائدة البرنامج وحدوده. تأتي التجربة بعد ربط الجهاز والاتفاق على بروتوكول.',
    },
    questionsTitle: { en: 'Questions worth testing', ar: 'أسئلة تستحق الاختبار' },
    questionsLead: {
      en: 'These are research directions for a future study, not validated WISAM outcomes.',
      ar: 'هذه اتجاهات بحثية لدراسة مستقبلية، وليست نتائج مثبتة لوسام.',
    },
    questions: [
      {
        title: { en: 'Route deviation', ar: 'الانحراف عن المسار' },
        body: {
          en: 'When does a route change warrant attention, and when is it ordinary variation?',
          ar: 'متى يستدعي تغيّر المسار الانتباه، ومتى يكون اختلافًا طبيعيًا؟',
        },
      },
      {
        title: { en: 'Wearable adherence', ar: 'الالتزام بارتداء الجهاز' },
        body: {
          en: 'Can the device be worn and charged reliably in everyday life?',
          ar: 'هل يمكن ارتداء الجهاز وشحنه بصورة موثوقة في الحياة اليومية؟',
        },
      },
      {
        title: { en: 'Caregiver response', ar: 'استجابة مقدّم الرعاية' },
        body: {
          en: 'What context helps people interpret and act on an alert?',
          ar: 'ما السياق الذي يساعد على فهم التنبيه والتصرف حياله؟',
        },
      },
      {
        title: { en: 'Multimodal risk', ar: 'المخاطر متعددة الإشارات' },
        body: {
          en: 'Do combined signals add useful context beyond any single pathway?',
          ar: 'هل يضيف جمع الإشارات سياقًا مفيدًا مقارنة بكل مسار منفرد؟',
        },
      },
      {
        title: { en: 'False alerts', ar: 'التنبيهات غير الدقيقة' },
        body: {
          en: 'What alert burden is acceptable, and how should uncertainty be shown?',
          ar: 'ما مستوى عبء التنبيهات المقبول، وكيف يجب إظهار عدم اليقين؟',
        },
      },
      {
        title: { en: 'Human factors', ar: 'العوامل البشرية' },
        body: {
          en: 'How does WISAM fit the routines of families, clinicians, and responders?',
          ar: 'كيف ينسجم وسام مع روتين الأسر والممارسين والمستجيبين؟',
        },
      },
      {
        title: { en: 'Health economics', ar: 'الاقتصاد الصحي' },
        body: {
          en: 'Which costs and resource effects should a later study measure?',
          ar: 'ما التكاليف وآثار استخدام الموارد التي ينبغي قياسها في دراسة لاحقة؟',
        },
      },
    ] satisfies Item[],
    pilotTitle: {
      en: 'What a proposed pilot could look like',
      ar: 'كيف قد تُبنى تجربة ميدانية مقترحة',
    },
    pilotLead: {
      en: 'A pilot would follow technical integration and an agreed protocol. It has not yet been conducted.',
      ar: 'تأتي التجربة بعد الربط التقني وبروتوكول متفق عليه. ولم تُنفّذ بعد.',
    },
    pilot: [
      {
        title: { en: 'Define cohort', ar: 'تحديد الفئة' },
        body: {
          en: 'Eligibility, consent, safeguards, and success measures.',
          ar: 'الأهلية والموافقة والضمانات ومعايير النجاح.',
        },
      },
      {
        title: { en: 'Deploy', ar: 'التطبيق' },
        body: {
          en: 'Configure the integrated device and support workflow.',
          ar: 'تهيئة الجهاز المرتبط وسير الدعم.',
        },
      },
      {
        title: { en: 'Observe', ar: 'الرصد' },
        body: {
          en: 'Track use, signal quality, alert behavior, and practical friction.',
          ar: 'متابعة الاستخدام وجودة الإشارات وسلوك التنبيهات والصعوبات العملية.',
        },
      },
      {
        title: { en: 'Evaluate', ar: 'التقييم' },
        body: {
          en: 'Apply the agreed methods to technical and human outcomes.',
          ar: 'تطبيق المنهجيات المتفق عليها على النتائج التقنية والبشرية.',
        },
      },
      {
        title: { en: 'Report', ar: 'التقرير' },
        body: {
          en: 'Publish or share findings with limitations clearly stated.',
          ar: 'مشاركة النتائج مع توضيح الحدود بجلاء.',
        },
      },
    ] satisfies Item[],
    contributionTitle: { en: 'What each side would provide', ar: 'ما الذي يمكن أن يقدمه كل طرف؟' },
    wisamTitle: { en: 'What WISAM can contribute', ar: 'ما يمكن أن يقدمه وسام' },
    wisam: [
      {
        en: 'The existing software prototype and its caregiver/responder demonstration flows',
        ar: 'النموذج البرمجي الأولي الحالي ومسارات العرض لمقدّم الرعاية والمستجيب',
      },
      {
        en: 'Documentation of component logic and current technical evidence',
        ar: 'توثيق منطق المكوّنات والأدلة التقنية الحالية',
      },
      {
        en: 'Technical participation in integration and evaluation planning',
        ar: 'مشاركة تقنية في تخطيط الربط والتقييم',
      },
    ] satisfies Pair[],
    partnerTitle: {
      en: 'What a research or healthcare partner can contribute',
      ar: 'ما قد يقدمه شريك بحثي أو صحي',
    },
    partner: [
      {
        en: 'Study design, population access, and appropriate governance',
        ar: 'تصميم الدراسة والوصول إلى الفئة المناسبة والحوكمة',
      },
      {
        en: 'Clinical or field expertise and participant safeguards',
        ar: 'الخبرة السريرية أو الميدانية وحماية المشاركين',
      },
      {
        en: 'Independent measurement, analysis, and reporting',
        ar: 'القياس والتحليل وإعداد التقارير باستقلالية',
      },
    ] satisfies Pair[],
    fundingTitle: { en: 'Research funding pathways', ar: 'مسارات تمويل البحث' },
    fundingBody: {
      en: 'A study may be supported through a sponsored pilot, co-funded research agreement, institutional collaboration, or a grant application led by an eligible partner. Any route depends on the partner, protocol, and funding criteria; no grant or eligibility is assumed.',
      ar: 'يمكن دعم الدراسة عبر تجربة ممولة أو اتفاق بحث مشترك التمويل أو تعاون مؤسسي أو طلب منحة تقوده جهة مؤهلة. ويعتمد كل مسار على الشريك والبروتوكول وشروط التمويل؛ ولا نفترض الحصول على منحة أو أهلية مؤكدة.',
    },
    ctaTitle: { en: 'Propose a question to study', ar: 'اقترح سؤالًا للدراسة' },
    ctaBody: {
      en: 'Tell us the population, setting, and question you want to explore.',
      ar: 'أخبرنا بالفئة والبيئة والسؤال الذي ترغب في بحثه.',
    },
  },
  organizations: {
    metaTitle: { en: 'Organizations & Public Sector | WISAM', ar: 'الجهات والقطاع العام | WISAM' },
    metaDescription: {
      en: 'Explore a defined WISAM use case for healthcare, public services, community care, or technology, with clear measures before wider use.',
      ar: 'استكشف حالة استخدام محددة لوسام في الصحة أو القطاع العام أو الرعاية المجتمعية أو التقنية، مع قياس واضح قبل التوسع.',
    },
    eyebrow: { en: 'Organizations & public sector', ar: 'الجهات والقطاع العام' },
    title: {
      en: 'Explore where WISAM could serve your organization.',
      ar: 'استكشف أين يمكن أن يضيف وسام قيمة لجهتك.',
    },
    lead: {
      en: 'Whether you work in healthcare, public services, community care, or technology, start with a defined use case. Together we can test the workflow, measure reliability and usefulness, and consider wider use only if the evidence supports it.',
      ar: 'سواء كنت تعمل في الصحة أو القطاع العام أو الرعاية المجتمعية أو التقنية، يمكن أن تبدأ الشراكة بحالة استخدام محددة. نختبر سير العمل ونقيس الموثوقية والفائدة، ثم ننظر في التوسع إذا دعمته النتائج.',
    },
    audienceTitle: { en: 'Where collaboration can begin', ar: 'الجهات التي قد يبدأ معها التعاون' },
    audiences: [
      {
        title: { en: 'Healthcare provider', ar: 'مقدّم خدمات صحية' },
        body: {
          en: 'Study care workflow fit under appropriate clinical governance.',
          ar: 'دراسة ملاءمة مسار الرعاية ضمن حوكمة سريرية مناسبة.',
        },
      },
      {
        title: { en: 'Public sector', ar: 'القطاع العام' },
        body: {
          en: 'Explore a scoped evaluation aligned with public-service needs.',
          ar: 'استكشاف تقييم محدد يتوافق مع احتياجات الخدمات العامة.',
        },
      },
      {
        title: { en: 'Non-profit / association', ar: 'القطاع غير الربحي / الجمعيات' },
        body: {
          en: 'Bring family and community perspectives into design and evaluation.',
          ar: 'إدخال منظور الأسر والمجتمع في التصميم والتقييم.',
        },
      },
      {
        title: { en: 'Corporate / CSR', ar: 'الشركات / المسؤولية الاجتماعية' },
        body: {
          en: 'Support access, evaluation, or a defined social-impact program.',
          ar: 'دعم الوصول أو التقييم أو برنامج محدد للأثر الاجتماعي.',
        },
      },
      {
        title: { en: 'Technology company', ar: 'شركة تقنية' },
        body: {
          en: 'Contribute expertise in devices, connectivity, maps, or secure operations.',
          ar: 'المساهمة بخبرة في الأجهزة أو الاتصال أو الخرائط أو التشغيل الآمن.',
        },
      },
      {
        title: { en: 'Distribution partner', ar: 'شريك توزيع' },
        body: {
          en: 'Explore future delivery requirements after product and market validation.',
          ar: 'استكشاف متطلبات الإتاحة المستقبلية بعد التحقق من المنتج والسوق.',
        },
      },
    ] satisfies Item[],
    structuresTitle: { en: 'Possible partnership structures', ar: 'صيغ شراكة ممكنة' },
    structuresLead: {
      en: 'Structures are proposals for discussion, not current deployments or signed programs.',
      ar: 'هذه صيغ مقترحة للنقاش، وليست برامج موقعة أو عمليات نشر قائمة.',
    },
    structures: [
      { en: 'Sponsored Pilot', ar: 'تجربة ميدانية ممولة' },
      { en: 'Co-funded Research', ar: 'بحث مشترك التمويل' },
      { en: 'Technology Contribution', ar: 'مساهمة تقنية' },
      { en: 'Institutional Deployment', ar: 'نشر مؤسسي مستقبلي' },
      { en: 'Social Impact Program', ar: 'برنامج أثر اجتماعي' },
      { en: 'Strategic Commercial Partnership', ar: 'شراكة تجارية استراتيجية' },
    ] satisfies Pair[],
    measureTitle: { en: 'What we would measure', ar: 'ما نعتزم قياسه' },
    measureLead: {
      en: 'A future evaluation should measure the system and the human workflow before any claim of benefit.',
      ar: 'ينبغي أن تقيس أي دراسة مستقبلية النظام وسير العمل البشري قبل أي ادعاء بفائدة.',
    },
    measures: [
      { en: 'Wearable adherence', ar: 'الالتزام بارتداء الجهاز' },
      { en: 'System uptime', ar: 'استمرارية تشغيل النظام' },
      { en: 'Connectivity', ar: 'الاتصال' },
      { en: 'Battery', ar: 'البطارية' },
      { en: 'Alert frequency', ar: 'تكرار التنبيهات' },
      { en: 'False alerts', ar: 'التنبيهات غير الدقيقة' },
      { en: 'Caregiver response', ar: 'استجابة مقدّم الرعاية' },
      { en: 'Usability', ar: 'قابلية الاستخدام' },
      { en: 'Workflow fit', ar: 'ملاءمة سير العمل' },
      { en: 'Technical reliability', ar: 'الموثوقية التقنية' },
      { en: 'Deployment readiness', ar: 'الجاهزية للنشر' },
    ] satisfies Pair[],
    governanceTitle: {
      en: 'Clinical benefit would need its own study',
      ar: 'الفائدة السريرية تحتاج إلى دراسة مستقلة',
    },
    governance: {
      en: 'Any clinical endpoints would require an appropriate protocol, approvals, data safeguards, and validation. Current public component metrics do not establish clinical outcomes or service impact.',
      ar: 'تتطلب أي مؤشرات سريرية بروتوكولًا مناسبًا وموافقات وحماية للبيانات وتحققًا مستقلًا. ولا تثبت مقاييس المكوّنات المنشورة حاليًا نتائج سريرية أو أثرًا للخدمة.',
    },
    ctaTitle: {
      en: 'Describe the setting you want to explore',
      ar: 'صف البيئة التي ترغب في اختبار وسام فيها',
    },
    ctaBody: {
      en: 'Describe your organization, its role, and the specific question you want to work on.',
      ar: 'عرّفنا بجهتك ودورها والسؤال المحدد الذي ترغب في العمل عليه.',
    },
  },
} as const;

export function localized(text: Pair, locale: Locale): string {
  return text[locale];
}

export function partnershipHref(page: PartnerPage, locale: Locale): string {
  const path = partnerRoutes[page];
  return locale === 'ar' ? `/ar${path}` : path;
}

export function partnershipEmail(subject: string): string {
  return `mailto:wisam.sa.2030@gmail.com?subject=${encodeURIComponent(subject)}`;
}
