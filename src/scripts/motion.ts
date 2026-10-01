const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const revealSelector = [
  '.page-intro .container > *',
  '.section-head > *',
  '.what-intro > *',
  '.what-flow > *',
  '.what-status',
  '.split-heading > *',
  '.problem-content > *',
  '.three-steps > *',
  '.contextual-scene',
  '.product-gallery > *',
  '.evidence-grid > *',
  '.evidence-bottom > *',
  '.why-intro > *',
  '.pillar-grid > *',
  '.roadmap-list > *',
  '.team-heading > *',
  '.team-portraits > *',
  '.partnership-section .container > *',
  '.engineering-metrics > *',
  '.component-card-grid > *',
  '.privacy-list > *',
  '.wearable-heading > *',
  '.wearable-callouts > *',
  '.wearable-outro > *',
  '.partner-teaser-inner > *',
  '.roadmap-head > *',
  '.roadmap-stages > *',
  '.plan-grid > *',
  '.plans-hero .container > *',
  '.bundle-layout > *',
  '.evidence-page-built__list > *',
  '.evidence-page-methods__grid > *',
  '.evidence-dashboard__heading > *',
  '.evidence-dashboard__shell',
  '.partners-hero-copy > *',
  '.partners-hero-visual',
  '.partners-path-list > *',
  '.partners-phase-list > *',
  '.partners-editorial-grid > *',
  '.partners-three-columns > *',
  '.partners-two-panel > *',
  '.partners-two-by-two > *',
  '.partners-contact-inner > *',
].join(', ');

const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
const groupIndex = new WeakMap<Element, number>();
for (const target of revealTargets) {
  const group = target.parentElement;
  if (!group) continue;
  const index = groupIndex.get(group) ?? 0;
  groupIndex.set(group, index + 1);
  target.dataset.reveal = '';
  target.style.setProperty('--reveal-delay', `${Math.min(index * 75, 300)}ms`);
}

let revealObserver: IntersectionObserver | undefined;
function configureReveals() {
  revealObserver?.disconnect();
  if (motionQuery.matches || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('motion-ready');
    return;
  }
  document.documentElement.classList.add('motion-ready');
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -7% 0px', threshold: 0.08 },
  );
  for (const target of revealTargets) {
    if (!target.classList.contains('is-visible')) revealObserver.observe(target);
  }
}
configureReveals();
motionQuery.addEventListener('change', configureReveals);

const visual = document.querySelector<HTMLElement>('[data-story-visual]');
const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-story-step]'));
if (visual && steps.length && 'IntersectionObserver' in window) {
  const route = visual.querySelector<SVGPathElement>('.story-route-progress');
  const counter = visual.querySelector<HTMLElement>('[data-story-counter]');
  const positions = [0.07, 0.35, 0.69, 1];
  const activate = (index: number) => {
    visual.dataset.stage = String(index);
    if (route) route.style.strokeDashoffset = String(1 - (positions[index] ?? 0.07));
    if (counter) counter.textContent = `0${index + 1} / 04`;
    steps.forEach((step, stepIndex) => step.classList.toggle('is-active', stepIndex === index));
  };
  activate(0);
  const storyObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      visible.sort(
        (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
      );
      const active = visible[0];
      if (active) activate(Number((active.target as HTMLElement).dataset.storyStep));
    },
    { rootMargin: '-34% 0px -44% 0px', threshold: 0 },
  );
  steps.forEach((step) => storyObserver.observe(step));
}

const wearable = document.querySelector<HTMLElement>('[data-wearable]');
if (wearable && 'IntersectionObserver' in window) {
  const scrollStage = wearable.querySelector<HTMLElement>('[data-wearable-scroll]');
  const frames = Array.from(wearable.querySelectorAll<HTMLImageElement>('.watch-frame'));
  const counter = wearable.querySelector<HTMLElement>('[data-watch-counter]');
  const callouts = Array.from(wearable.querySelectorAll<HTMLElement>('[data-wearable-callout]'));
  let nearViewport = false;
  let scheduled = false;
  let framesRequested = false;
  const requestFrames = () => {
    if (framesRequested) return;
    framesRequested = true;
    for (const frame of frames) {
      const source = frame.dataset.watchSrc;
      if (source) frame.src = source;
    }
  };
  const updateWatch = () => {
    scheduled = false;
    if (!nearViewport || motionQuery.matches || window.innerWidth < 901 || !scrollStage) return;
    requestFrames();
    const rect = scrollStage.getBoundingClientRect();
    const travel = Math.max(1, scrollStage.offsetHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, -rect.top / travel));
    const position = progress * (frames.length - 1);
    const depth = Math.sin(progress * Math.PI);
    wearable.style.setProperty('--watch-stage-scale', (0.96 + depth * 0.075).toFixed(3));
    wearable.style.setProperty('--watch-stage-y', `${(-12 * depth).toFixed(1)}px`);
    frames.forEach((frame, index) => {
      const distance = Math.abs(index - position);
      const opacity = Math.max(0, 1 - distance);
      frame.style.opacity = opacity.toFixed(3);
      frame.style.transform = `translateX(${((index - position) * 2).toFixed(2)}%) scale(${(0.97 + 0.03 * opacity).toFixed(3)})`;
    });
    const angle = Math.min(frames.length, Math.round(position) + 1);
    if (counter) counter.textContent = `0${angle} / 05`;
    wearable.style.setProperty('--watch-progress', `${(progress * 100).toFixed(1)}%`);
    const activeCallout = Math.min(callouts.length - 1, Math.floor(progress * callouts.length));
    callouts.forEach((callout, index) => {
      callout.classList.toggle('is-active', index === activeCallout);
      callout.classList.toggle('is-passed', index < activeCallout);
    });
  };
  const scheduleWatch = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateWatch);
  };
  new IntersectionObserver(
    ([entry]) => {
      nearViewport = Boolean(entry?.isIntersecting);
      if (nearViewport) scheduleWatch();
    },
    { rootMargin: '400px 0px' },
  ).observe(wearable);
  window.addEventListener('scroll', scheduleWatch, { passive: true });
  window.addEventListener('resize', scheduleWatch, { passive: true });
}

const aiVisual = document.querySelector<HTMLElement>('[data-ai-visual]');
const aiSteps = Array.from(document.querySelectorAll<HTMLElement>('[data-ai-step]'));
if (aiVisual && aiSteps.length && 'IntersectionObserver' in window) {
  const counter = aiVisual.querySelector<HTMLElement>('[data-ai-counter]');
  const route = aiVisual.querySelector<SVGPathElement>('.ai-map-progress');
  const markers = Array.from(aiVisual.querySelectorAll<SVGGElement>('[data-ai-marker]'));
  const routeStops = [0.12, 0.32, 0.68, 0.9, 1];
  const activate = (index: number) => {
    aiVisual.dataset.stage = String(index);
    if (route) route.style.strokeDashoffset = String(1 - (routeStops[index] ?? 1));
    markers.forEach((marker, i) => {
      marker.classList.toggle('is-reached', i < index);
      marker.classList.toggle('is-current', i === index);
      marker
        .querySelector('image')
        ?.setAttribute(
          'href',
          i === index
            ? '/media/wisam-map-marker-selected.svg'
            : '/media/wisam-map-marker-on-dark.svg',
        );
    });
    if (counter) counter.textContent = `0${index + 1} / 05`;
    aiSteps.forEach((step, i) => step.classList.toggle('is-active', i === index));
  };
  activate(0);
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const story = aiVisual.closest<HTMLElement>('[data-ai-story]');
    if (!story) return;
    const bounds = story.getBoundingClientRect();
    if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
    const focus = window.innerHeight * 0.35;
    let closest = 0;
    let distance = Infinity;
    aiSteps.forEach((step, index) => {
      const current = Math.abs(step.getBoundingClientRect().top - focus);
      if (current < distance) {
        distance = current;
        closest = index;
      }
    });
    activate(closest);
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  schedule();
}

const roadmap = document.querySelector<HTMLElement>('[data-roadmap]');
if (roadmap) {
  const timeline = roadmap.querySelector<HTMLElement>('.roadmap-stages');
  let scheduled = false;
  const updateRoadmap = () => {
    scheduled = false;
    if (!timeline || motionQuery.matches) return;
    const top = timeline.getBoundingClientRect().top;
    const start = window.innerHeight * 0.9;
    const end = window.innerHeight * 0.55;
    const entrance = Math.max(0, Math.min(1, (start - top) / (start - end)));
    // The active third marker is 2 of the 5 gaps between six markers.
    roadmap.style.setProperty('--roadmap-progress', (entrance * 0.4).toFixed(3));
  };
  const scheduleRoadmap = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateRoadmap);
  };
  window.addEventListener('scroll', scheduleRoadmap, { passive: true });
  window.addEventListener('resize', scheduleRoadmap, { passive: true });
  motionQuery.addEventListener('change', scheduleRoadmap);
  scheduleRoadmap();
}
