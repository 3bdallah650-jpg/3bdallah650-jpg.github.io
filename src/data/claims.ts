/**
 * Qualified technical and product claims used by the public website.
 */

export type ClaimStatus =
  'VERIFIED' | 'IMPLEMENTED' | 'EVALUATED' | 'PROTOTYPE' | 'SIMULATED' | 'PLANNED' | 'VISION';

export type LocalizedText = Readonly<{ en: string; ar: string }>;

export type ClaimSource = Readonly<{
  label: string;
  note?: string;
}>;

export type ClaimMetric = Readonly<{
  id: string;
  label: LocalizedText;
  value: string;
  unit?: string;
}>;

export type Claim = Readonly<{
  id: string;
  status: ClaimStatus;
  publicText: LocalizedText;
  sourceRefs: readonly ClaimSource[];
  evidenceScope: LocalizedText;
  requiredQualifier: LocalizedText;
  approvedForPublicUse: boolean;
  /** Date of last evidence review or reproduction, not a promise of continuous validation. */
  lastVerified: string;
  metrics?: readonly ClaimMetric[];
}>;

const source = (label: string): ClaimSource => ({ label });

export const claims = {
  'prototype-status': {
    id: 'prototype-status',
    status: 'PROTOTYPE',
    publicText: {
      en: 'WISAM is a functional dementia-safety software prototype for caregiver and responder workflows.',
      ar: 'وسام نموذج برمجي أولي عامل لدعم سلامة المصابين بالخرف وسير عمل مقدّمي الرعاية والمستجيبين.',
    },
    sourceRefs: [source('Product purpose'), source('Implementation inventory')],
    evidenceScope: {
      en: 'Prototype software and demonstrations, not field deployment.',
      ar: 'برنامج أولي وعروض توضيحية، وليس نشرًا ميدانيًا.',
    },
    requiredQualifier: {
      en: 'Current operation uses simulated wearable telemetry and demonstration data.',
      ar: 'يعتمد التشغيل الحالي على بيانات جهاز قابل للارتداء مُحاكاة وبيانات عرض توضيحي.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'end-to-end-pipeline': {
    id: 'end-to-end-pipeline',
    status: 'PROTOTYPE',
    publicText: {
      en: 'The prototype connects telemetry ingestion, component scoring, risk fusion, and caregiver/responder demonstration interfaces.',
      ar: 'يربط النموذج الأولي استقبال الإشارات، وتقييم المكوّنات، ودمج المخاطر، وواجهتَي العرض لمقدّم الرعاية والمستجيب.',
    },
    sourceRefs: [
      source('System path and limitations'),
      source('Simulator'),
      source('Poster evidence audit'),
    ],
    evidenceScope: {
      en: 'A locally exercised software pipeline. Some caregiver screens bind only risk level/flags/score; the responder route uses a demo token.',
      ar: 'مسار برمجي جرى تشغيله محليًا. بعض شاشات مقدّم الرعاية ترتبط بمستوى الخطر والمؤشرات والدرجة فقط؛ وتستخدم واجهة المستجيب رمزًا تجريبيًا.',
    },
    requiredQualifier: {
      en: 'End-to-end refers to the software prototype with simulated inputs, not a complete wearable-to-care deployment.',
      ar: 'يشير التكامل هنا إلى النموذج البرمجي بمدخلات مُحاكاة، لا إلى نشر مكتمل يبدأ من جهاز قابل للارتداء وينتهي بخدمة رعاية.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-07',
  },
  'simulated-telemetry': {
    id: 'simulated-telemetry',
    status: 'SIMULATED',
    publicText: {
      en: 'Current end-to-end demonstrations use simulated wearable telemetry.',
      ar: 'تستخدم العروض الحالية للمسار الكامل إشارات جهاز قابل للارتداء مُحاكاة.',
    },
    sourceRefs: [source('Simulator documentation'), source('Product state: watch gap')],
    evidenceScope: {
      en: 'Generated GPS, HRV, and IMU scenario input sent to the working backend; no physical watch sensing.',
      ar: 'مدخلات سيناريو مولّدة للموقع الجغرافي وتباين نبض القلب والحركة ترسل إلى الخادم العامل؛ لا توجد قراءة من ساعة فعلية.',
    },
    requiredQualifier: {
      en: 'Label all relevant UI captures and demos as prototype/demo data.',
      ar: 'تُوسم لقطات الواجهة والعروض ذات الصلة بأنها بيانات نموذج أولي أو عرض توضيحي.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-07',
  },
  'gps-pathway': {
    id: 'gps-pathway',
    status: 'IMPLEMENTED',
    publicText: {
      en: 'A GPS pathway scores route and location patterns against a personal baseline and a public-data-trained component.',
      ar: 'يقيّم مسار الموقع الجغرافي أنماط الحركة والموقع مقارنةً بخط أساس شخصي ومكوّن دُرّب على بيانات عامة.',
    },
    sourceRefs: [
      source('GPS model decision'),
      source('GPS scenario service'),
      source('Telemetry ingestion'),
    ],
    evidenceScope: {
      en: 'Seeded scenario scoring; live GPS trajectory scoring requires at least 10 accumulated points and otherwise falls back to seeded risk.',
      ar: 'تقييم سيناريو تجريبي؛ يتطلب تقييم مسار موقع وارد عشر نقاط متراكمة على الأقل، وإلا يعود إلى قيمة الخطر التجريبية.',
    },
    requiredQualifier: {
      en: 'The current product path has not been validated for real-world wandering detection or prediction.',
      ar: 'لم يُتحقّق من هذا المسار في المنتج لرصد التجوّل أو التنبؤ به في الواقع.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'hrv-pathway': {
    id: 'hrv-pathway',
    status: 'IMPLEMENTED',
    publicText: {
      en: 'An HRV anomaly pathway processes posted interbeat-interval windows and can use a personal normal baseline.',
      ar: 'يعالج مسار شذوذ تباين نبض القلب نوافذ الفترات بين النبضات المرسلة، ويمكنه استخدام خط أساس شخصي للحالة المعتادة.',
    },
    sourceRefs: [source('HRV implementation'), source('Telemetry ingestion')],
    evidenceScope: {
      en: 'Software component evaluated on a sleep-apnea proxy task; current live demonstrations post simulated windows.',
      ar: 'مكوّن برمجي قُيّم في مهمة بديلة متعلقة بانقطاع النفس أثناء النوم؛ ترسل العروض الحالية نوافذ مُحاكاة.',
    },
    requiredQualifier: {
      en: 'It is not a dementia or sleep-apnea diagnostic claim.',
      ar: 'لا يمثل ذلك ادعاءً بتشخيص الخرف أو انقطاع النفس أثناء النوم.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'imu-pathway': {
    id: 'imu-pathway',
    status: 'PROTOTYPE',
    publicText: {
      en: 'An IMU/motion pathway is present in the prototype risk pipeline.',
      ar: 'يتضمن مسار المخاطر الأولي مكوّنًا لإشارات الحركة ومستشعر القصور الذاتي.',
    },
    sourceRefs: [source('IMU model decision'), source('Product state')],
    evidenceScope: {
      en: 'The current fall and gait model uses synthetic scaffold data; its synthetic test scores are not public accuracy evidence.',
      ar: 'يستخدم نموذج السقوط والمشية الحالي بيانات اصطناعية تأسيسية؛ ولا تمثل درجات اختبارها دليلًا عامًا على الدقة.',
    },
    requiredQualifier: {
      en: 'Synthetic feasibility only; no proven fall detection or prevention performance.',
      ar: 'جدوى برمجية على بيانات اصطناعية فقط؛ من دون إثبات أداء رصد السقوط أو منعه.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'personalized-baseline': {
    id: 'personalized-baseline',
    status: 'IMPLEMENTED',
    publicText: {
      en: 'Personal baseline logic provides individual context for GPS patterns and optional HRV normalization.',
      ar: 'يوفر منطق خط الأساس الشخصي سياقًا فرديًا لأنماط الموقع الجغرافي، مع خيار معايرة إشارات تباين نبض القلب.',
    },
    sourceRefs: [source('GPS baseline'), source('Scenario service'), source('Product state')],
    evidenceScope: {
      en: 'Implemented for GPS and optional HRV baseline input, not IMU; current demonstration baseline is seeded.',
      ar: 'مطبّق للموقع الجغرافي ولمدخلات خط أساس نبض القلب الاختيارية، وليس للحركة؛ خط أساس العرض الحالي تجريبي.',
    },
    requiredQualifier: {
      en: 'A personalization mechanism in a prototype, not clinically established personalization.',
      ar: 'آلية تخصيص ضمن نموذج أولي، لا تخصيصًا ثبتت جدواه سريريًا.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'risk-fusion': {
    id: 'risk-fusion',
    status: 'IMPLEMENTED',
    publicText: {
      en: 'Late risk fusion combines available GPS, IMU, and HRV component scores with safety overrides.',
      ar: 'يجمع دمج المخاطر المتأخر درجات مكوّنات الموقع والحركة وتباين نبض القلب المتاحة، مع قواعد تصعيد للسلامة.',
    },
    sourceRefs: [source('Fusion implementation'), source('Simulator verification')],
    evidenceScope: {
      en: 'Fixed weighted rule and SOS/detected-fall overrides; locally exercised with simulated telemetry. Current component state is in memory.',
      ar: 'قاعدة ذات أوزان ثابتة وتصعيد لنداء المساعدة والسقوط المرصود؛ شُغّلت محليًا بإشارات مُحاكاة. حالة المكوّنات الحالية محفوظة في الذاكرة.',
    },
    requiredQualifier: {
      en: 'Fusion logic is prototype safety logic, not a validated clinical risk score.',
      ar: 'منطق الدمج قاعدة سلامة أولية، وليس درجة خطر مثبتة سريريًا.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-07',
  },
  'caregiver-prototype': {
    id: 'caregiver-prototype',
    status: 'PROTOTYPE',
    publicText: {
      en: 'A caregiver interface presents status, alerts, and context for review and action.',
      ar: 'تعرض واجهة مقدّم الرعاية الحالة والتنبيهات والسياق للمراجعة واتخاذ الإجراء المناسب.',
    },
    sourceRefs: [
      source('Caregiver source'),
      source('Product state: partial bindings'),
      source('Actual product captures'),
    ],
    evidenceScope: {
      en: 'Real prototype UI; several values and controls remain demo/static or local state, and live location is not connected end-to-end.',
      ar: 'واجهة نموذج أولي فعلية؛ لا تزال بعض القيم والأدوات تجريبية أو محلية، والموقع المباشر غير موصول من البداية إلى النهاية.',
    },
    requiredQualifier: {
      en: 'Label screenshots “Prototype interface” and disclose simulated/demo data where shown.',
      ar: 'توسم الصور «واجهة نموذج أولي»، ويُفصح عن البيانات المُحاكاة أو التجريبية حيث تظهر.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'responder-prototype': {
    id: 'responder-prototype',
    status: 'PROTOTYPE',
    publicText: {
      en: 'A responder-facing emergency profile prototype provides limited context in a demonstration flow.',
      ar: 'يوفر نموذج أولي لملف طوارئ موجّه للمستجيب سياقًا محدودًا في مسار عرض توضيحي.',
    },
    sourceRefs: [source('Responder README'), source('Product state: emergency path')],
    evidenceScope: {
      en: 'A demonstration flow with sample data; it is not connected to live emergency services.',
      ar: 'مسار عرض ببيانات تجريبية؛ غير مرتبط بخدمات طوارئ فعلية.',
    },
    requiredQualifier: {
      en: 'Describe as a prototype/demo, never a deployed emergency response system.',
      ar: 'يوصف بأنه نموذج أولي أو عرض توضيحي، لا نظام استجابة طارئة منشور.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'automated-tests': {
    id: 'automated-tests',
    status: 'VERIFIED',
    publicText: {
      en: '72 automated backend and AI-service tests passed in the reported verification run.',
      ar: 'اجتاز ٧٢ اختبارًا آليًا للخادم وخدمات الذكاء الاصطناعي في جولة التحقق الموثّقة.',
    },
    sourceRefs: [source('Rechecked test audit'), source('Poster build evidence')],
    evidenceScope: {
      en: '45 backend/API tests plus 27 AI-service tests, rechecked 7 September 2026. Frontend typechecks are excluded.',
      ar: '٤٥ اختبارًا للخادم وواجهة البرمجة، و٢٧ اختبارًا لخدمات الذكاء الاصطناعي، أُعيد فحصها في ٧ سبتمبر ٢٠٢٦. لا تشمل فحوص أنواع واجهات المستخدم.',
    },
    requiredQualifier: {
      en: 'Engineering test coverage, not clinical or field validation.',
      ar: 'اختبارات هندسية، وليست تحققًا سريريًا أو ميدانيًا.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-07',
    metrics: [
      {
        id: 'total',
        label: { en: 'Automated tests', ar: 'اختبارًا آليًا' },
        value: '72',
      },
      {
        id: 'backend',
        label: { en: 'Backend/API', ar: 'الخادم وواجهة البرمجة' },
        value: '45',
      },
      {
        id: 'ai',
        label: { en: 'AI services', ar: 'خدمات الذكاء الاصطناعي' },
        value: '27',
      },
    ],
  },
  'gps-evaluation': {
    id: 'gps-evaluation',
    status: 'EVALUATED',
    publicText: {
      en: 'The GPS component was evaluated on the GeoLife public mobility dataset against heuristic route labels.',
      ar: 'قُيّم مكوّن الموقع الجغرافي على مجموعة بيانات الحركة العامة GeoLife مقابل تسميات مسار استدلالية.',
    },
    sourceRefs: [
      source('GPS evaluation report'),
      source('GPS metrics'),
      source('Independent reproduction audit'),
    ],
    evidenceScope: {
      en: '1,896 trajectories from 40 general users; 1,395 training and 501 test trajectories with a user-disjoint split. Random Forest precision 0.4471, recall 0.7686, F1 0.5653 against heuristic abnormal labels.',
      ar: '١٬٨٩٦ مسارًا من ٤٠ مستخدمًا عامًا؛ ١٬٣٩٥ للتدريب و٥٠١ للاختبار مع فصل المستخدمين. بلغت الدقة الإيجابية 0.4471، والاستدعاء 0.7686، ودرجة F1 ‏0.5653 مقارنةً بتسميات غير اعتيادية استدلالية.',
    },
    requiredQualifier: {
      en: 'GeoLife contains no dementia wandering labels. These are component proxy-task metrics, not clinical product accuracy or advance prediction.',
      ar: 'لا تضم GeoLife تسميات لتجوّل المصابين بالخرف. هذه مقاييس مكوّن في مهمة بديلة، وليست دقة سريرية للمنتج أو تنبؤًا مسبقًا.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-07',
    metrics: [
      {
        id: 'precision',
        label: { en: 'Precision', ar: 'الدقة الإيجابية' },
        value: '0.4471',
      },
      {
        id: 'recall',
        label: { en: 'Recall', ar: 'الاستدعاء' },
        value: '0.7686',
      },
      { id: 'f1', label: { en: 'F1 score', ar: 'درجة F1' }, value: '0.5653' },
      {
        id: 'trajectories',
        label: { en: 'Trajectories', ar: 'مسارًا' },
        value: '1,896',
      },
      {
        id: 'users',
        label: { en: 'GeoLife users', ar: 'مستخدمًا في GeoLife' },
        value: '40',
      },
    ],
  },
  'hrv-evaluation': {
    id: 'hrv-evaluation',
    status: 'EVALUATED',
    publicText: {
      en: 'The HRV component was evaluated on PhysioNet Apnea-ECG as a sleep-apnea proxy anomaly task.',
      ar: 'قُيّم مكوّن تباين نبض القلب على بيانات PhysioNet Apnea-ECG في مهمة بديلة لرصد الشذوذ المرتبط بانقطاع النفس أثناء النوم.',
    },
    sourceRefs: [
      source('HRV evaluation report'),
      source('HRV metrics'),
      source('Reproduction and limitations audit'),
    ],
    evidenceScope: {
      en: '2,964 one-minute windows; 945 test windows from two held-out records. Saved estimator: precision 0.8981, recall 0.6936, F1 0.7827, ROC-AUC 0.8931. Baseline construction used known-normal windows including within held-out records; record selection was not prospective.',
      ar: '٢٬٩٦٤ نافذة مدة كل منها دقيقة؛ ٩٤٥ نافذة اختبار من سجلّين مستبعدين من التدريب. للنموذج المحفوظ: دقة إيجابية 0.8981، واستدعاء 0.6936، ودرجة F1 ‏0.7827، ومساحة تحت منحنى ROC مقدارها 0.8931. استُخدمت نوافذ معروفة بأنها طبيعية لبناء خط الأساس، ومنها نوافذ من سجلّي الاختبار؛ ولم يكن اختيار السجلات استباقيًا.',
    },
    requiredQualifier: {
      en: 'General adult sleep-apnea data, not dementia patients; these are proxy-task component metrics, not clinical dementia or apnea diagnosis.',
      ar: 'البيانات لراشدين ضمن دراسة انقطاع النفس، وليست لمرضى خرف؛ هذه مقاييس مكوّن لمهمة بديلة، وليست تشخيصًا سريريًا للخرف أو انقطاع النفس.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-07',
    metrics: [
      {
        id: 'precision',
        label: { en: 'Precision', ar: 'الدقة الإيجابية' },
        value: '0.8981',
      },
      {
        id: 'recall',
        label: { en: 'Recall', ar: 'الاستدعاء' },
        value: '0.6936',
      },
      { id: 'f1', label: { en: 'F1 score', ar: 'درجة F1' }, value: '0.7827' },
      {
        id: 'roc-auc',
        label: { en: 'ROC-AUC', ar: 'المساحة تحت منحنى ROC' },
        value: '0.8931',
      },
      {
        id: 'windows',
        label: { en: 'One-minute windows', ar: 'نافذة مدتها دقيقة' },
        value: '2,964',
      },
    ],
  },
  'wearable-integration': {
    id: 'wearable-integration',
    status: 'PLANNED',
    publicText: {
      en: 'Physical wearable integration is a next development step.',
      ar: 'يُعدّ ربط جهاز فعلي قابل للارتداء خطوة تطوير قادمة.',
    },
    sourceRefs: [source('Empty patient-watch app and roadmap'), source('Simulator documentation')],
    evidenceScope: {
      en: 'No watch app or real device ingestion is implemented.',
      ar: 'لم يُنفّذ تطبيق ساعة أو استقبال بيانات من جهاز فعلي.',
    },
    requiredQualifier: {
      en: 'Future work; no hardware capability claim.',
      ar: 'عمل مستقبلي؛ لا ادعاء بقدرة عتادية حالية.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'controlled-validation': {
    id: 'controlled-validation',
    status: 'PLANNED',
    publicText: {
      en: 'Controlled validation is part of the proposed path beyond the prototype.',
      ar: 'يأتي التحقق المنضبط ضمن المسار المقترح بعد النموذج الأولي.',
    },
    sourceRefs: [source('Poster evidence audit and roadmap'), source('Product state')],
    evidenceScope: {
      en: 'A planned study stage; no completed clinical validation or outcome evidence.',
      ar: 'مرحلة دراسة مخطط لها؛ لا يوجد تحقق سريري مكتمل أو دليل نتائج.',
    },
    requiredQualifier: {
      en: 'Planned, subject to study design, approvals, and partners.',
      ar: 'مخطط له، ويعتمد على تصميم الدراسة والموافقات والشركاء.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'caregiver-usability': {
    id: 'caregiver-usability',
    status: 'PLANNED',
    publicText: {
      en: 'Caregiver usability work is a planned validation step.',
      ar: 'تُعدّ دراسة قابلية الاستخدام مع مقدّمي الرعاية خطوة تحقق مخططًا لها.',
    },
    sourceRefs: [source('Poster roadmap'), source('Product limitations')],
    evidenceScope: {
      en: 'No formal caregiver usability validation is established in the reviewed sources.',
      ar: 'لا تثبت المصادر المراجعة اكتمال تحقق رسمي من قابلية الاستخدام مع مقدّمي الرعاية.',
    },
    requiredQualifier: {
      en: 'Planned; do not describe prototype review as a user study.',
      ar: 'مخطط له؛ لا تُعرض مراجعة النموذج الأولي بوصفها دراسة مستخدمين.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'supervised-pilot': {
    id: 'supervised-pilot',
    status: 'PLANNED',
    publicText: {
      en: 'A supervised pilot is a proposed future stage after integration and validation work.',
      ar: 'يُقترح تنفيذ تجربة ميدانية تحت الإشراف بعد أعمال الربط والتحقق.',
    },
    sourceRefs: [source('Poster roadmap and audit')],
    evidenceScope: {
      en: 'No patient pilot, hospital deployment, or care-site outcome is documented.',
      ar: 'لا توجد تجربة موثقة على مرضى أو نشر في مستشفى أو نتائج في موقع رعاية.',
    },
    requiredQualifier: {
      en: 'Future proposal, not a committed or completed pilot.',
      ar: 'مقترح مستقبلي، وليس تجربة معتمدة أو مكتملة.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-28',
  },
  'planned-commercial-model': {
    id: 'planned-commercial-model',
    status: 'PLANNED',
    publicText: {
      en: 'WISAM has a proposed four-tier family plan and Starter Bundle for a future commercial launch.',
      ar: 'لدى وسام نموذج مقترح لأربع باقات عائلية وباقة مبدئية لإطلاق تجاري مستقبلي.',
    },
    sourceRefs: [
      source('Project owner’s approved commercial brief'),
      source('Current wearable integration boundary'),
    ],
    evidenceScope: {
      en: 'Owner-proposed prices, benefits, and target Samsung Galaxy Watch8 LTE bundle; these are product and business intentions, not tested implementation results.',
      ar: 'أسعار ومزايا مقترحة من مالك المشروع، مع باقة مستهدفة تضم Samsung Galaxy Watch8 LTE؛ وهي نوايا للمنتج والنموذج التجاري، لا نتائج تنفيذ مختبَر.',
    },
    requiredQualifier: {
      en: 'Planned Launch Model only. Plans, prices, and features are not currently an offer for sale and may change before release. Physical watch integration is not yet established. LTE/eSIM carrier fees are excluded.',
      ar: 'نموذج إطلاق مستهدف فقط. الباقات والأسعار والمزايا ليست عرضًا للبيع حاليًا، وقد تتغير قبل الإطلاق. لم يثبت بعد التكامل مع ساعة فعلية. رسوم LTE/eSIM وخدمات شركة الاتصالات غير مشمولة.',
    },

    approvedForPublicUse: true,
    lastVerified: '2026-09-29',
  },
} as const satisfies Record<string, Claim>;

export type ClaimId = keyof typeof claims;
export const claimList: readonly Claim[] = Object.values(claims);

export function getPublicClaim(id: ClaimId): Claim {
  const claim: Claim = claims[id];
  if (!claim.approvedForPublicUse) throw new Error(`Claim ${id} is not approved for public use`);
  return claim;
}
