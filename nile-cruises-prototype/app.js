const itineraryData = {
  'aswan-luxor': {
    id: 'aswan-luxor',
    name: 'Aswan to Luxor',
    durationLabel: '4 Days / 3 Nights',
    summary: 'Explore the south-to-north Nile route from Aswan to Luxor, with temples, riverbanks and timeless scenes.',
    totalDays: 4,
    route: [
      { x: 90, y: 300 },
      { x: 170, y: 232 },
      { x: 290, y: 210 },
      { x: 410, y: 246 },
      { x: 518, y: 170 },
      { x: 650, y: 110 }
    ],
    labels: [
      { name: 'Aswan', x: 75, y: 310 },
      { name: 'Kom Ombo', x: 252, y: 194 },
      { name: 'Edfu', x: 395, y: 224 },
      { name: 'Esna', x: 500, y: 155 },
      { name: 'Luxor', x: 675, y: 96 }
    ],
    landmarks: [
      { name: 'Philae Temple', id: 'philae', day: 1, x: 130, y: 262, type: 'temple' },
      { name: 'Kom Ombo', id: 'kom-ombo', day: 2, x: 285, y: 198, type: 'temple' },
      { name: 'Edfu Temple', id: 'edfu', day: 3, x: 450, y: 228, type: 'temple' },
      { name: 'Luxor Temple', id: 'luxor', day: 4, x: 635, y: 120, type: 'temple' }
    ],
    days: [
      {
        day: 1,
        title: 'Arrival in Aswan',
        heading: 'Aswan and the First River Views',
        description: 'Begin your adventure in Aswan and settle into the rhythm of the Nile. Enjoy the first river vistas and prepare for the journey north.',
        activities: ['Check-in and orientation', 'Philae Temple visit', 'Sunset riverfront stroll'],
        meals: ['Dinner onboard'],
        sailing: 'Short sail to begin the route',
        overnight: 'Aswan'
      },
      {
        day: 2,
        title: 'Kom Ombo & river crossing',
        heading: 'Kom Ombo and the Nile corridor',
        description: 'Continue north with a rewarding stop at Kom Ombo and discover the landscapes and temples that frame the river.',
        activities: ['Kom Ombo Temple', 'Riverbank scenery', 'Onboard leisure'],
        meals: ['Breakfast onboard', 'Lunch onboard'],
        sailing: 'Sail north toward Edfu',
        overnight: 'Kom Ombo / onboard'
      },
      {
        day: 3,
        title: 'Edfu and Esna',
        heading: 'Temple heritage and river towns',
        description: 'Visit Edfu Temple and continue through the scenic river towns as the journey unfolds toward Luxor.',
        activities: ['Edfu Temple', 'Esna stopover', 'Evening Nile views'],
        meals: ['Breakfast onboard', 'Dinner onboard'],
        sailing: 'Morning departure with afternoon sailing',
        overnight: 'Onboard'
      },
      {
        day: 4,
        title: 'Arrival in Luxor',
        heading: 'The Final Arrival in Luxor',
        description: 'Complete the journey in Luxor, where the route ends in one of Egypt’s most storied cities and iconic temples.',
        activities: ['Luxor Temple', 'Historic city approach', 'Final farewell stroll'],
        meals: ['Breakfast onboard'],
        sailing: 'Final northbound arrival',
        overnight: 'Luxor'
      }
    ]
  },
  'luxor-aswan': {
    id: 'luxor-aswan',
    name: 'Luxor to Aswan',
    durationLabel: '5 Days / 4 Nights',
    summary: 'Move southward from Luxor to Aswan, following a longer inland journey through Egypt’s most iconic river stops.',
    totalDays: 5,
    route: [
      { x: 90, y: 116 },
      { x: 165, y: 152 },
      { x: 232, y: 170 },
      { x: 334, y: 198 },
      { x: 456, y: 218 },
      { x: 620, y: 282 }
    ],
    labels: [
      { name: 'Luxor', x: 72, y: 100 },
      { name: 'Esna', x: 178, y: 160 },
      { name: 'Edfu', x: 315, y: 185 },
      { name: 'Kom Ombo', x: 455, y: 210 },
      { name: 'Aswan', x: 655, y: 294 }
    ],
    landmarks: [
      { name: 'Luxor Temple', id: 'luxor', day: 1, x: 120, y: 147, type: 'temple' },
      { name: 'Edfu Temple', id: 'edfu', day: 2, x: 260, y: 175, type: 'temple' },
      { name: 'Kom Ombo', id: 'kom-ombo', day: 3, x: 455, y: 213, type: 'temple' },
      { name: 'Philae Temple', id: 'philae', day: 5, x: 620, y: 273, type: 'temple' }
    ],
    days: [
      {
        day: 1,
        title: 'Departure from Luxor',
        heading: 'Luxor and the start of the southern route',
        description: 'Set out from Luxor and begin the downriver journey south toward the heart of ancient Egypt.',
        activities: ['Luxor Temple', 'Departure formalities', 'Scenic river start'],
        meals: ['Lunch onboard'],
        sailing: 'Departure southbound',
        overnight: 'Luxor'
      },
      {
        day: 2,
        title: 'Esna & the riverbanks',
        heading: 'Along the central Nile',
        description: 'Follow the river through Esna and the central Nile corridor, with changing scenery and temple stops.',
        activities: ['Esna passage', 'Village views', 'Leisure onboard'],
        meals: ['Breakfast onboard'],
        sailing: 'Sail south to Edfu',
        overnight: 'Onboard'
      },
      {
        day: 3,
        title: 'Edfu Temple',
        heading: 'Edfu and the ancient route',
        description: 'Visit Edfu Temple and continue deeper into the Nile valley as the journey heads further south.',
        activities: ['Edfu Temple', 'Local storytelling', 'Sunset sailing'],
        meals: ['Lunch onboard', 'Dinner onboard'],
        sailing: 'Afternoon navigation southward',
        overnight: 'Edfu'
      },
      {
        day: 4,
        title: 'Kom Ombo and the bend in the river',
        heading: 'Kom Ombo and river bends',
        description: 'Experience the distinctive Kom Ombo setting and the river’s character as the itinerary moves toward Aswan.',
        activities: ['Kom Ombo Temple', 'River views', 'Restful evening'],
        meals: ['Breakfast onboard', 'Dinner onboard'],
        sailing: 'Cruise toward Aswan',
        overnight: 'Onboard'
      },
      {
        day: 5,
        title: 'Arrival in Aswan',
        heading: 'Final arrival in Aswan',
        description: 'Complete the journey with an arrival in Aswan, where the final river city marks the end of the expedition.',
        activities: ['Arrival in Aswan', 'Philae Temple exploration', 'Farewell evening'],
        meals: ['Breakfast onboard'],
        sailing: 'Final southbound arrival',
        overnight: 'Aswan'
      }
    ]
  }
};

const cruises = [
  {
    id: 'sapphire-rose',
    name: 'Sapphire Rose',
    level: 'Deluxe',
    description: 'A refined river cruise combining elegant cabins, warm hospitality and a classic Nile experience.',
    itinerary: 'aswan-luxor',
    duration: '4 Days / 3 Nights',
    departureDay: 'Every Friday',
    departurePoint: 'Aswan',
    arrivalDay: 'Monday',
    arrivalPoint: 'Luxor',
    price: 1190,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80'
    ],
    bookingUrl: '',
    published: true
  },
  {
    id: 'nile-legacy',
    name: 'Nile Legacy',
    level: 'Premium',
    description: 'A polished, design-led cruise with comfortable suites and an immersive cultural route.',
    itinerary: 'aswan-luxor',
    duration: '4 Days / 3 Nights',
    departureDay: 'Every Saturday',
    departurePoint: 'Aswan',
    arrivalDay: 'Tuesday',
    arrivalPoint: 'Luxor',
    price: 1350,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    bookingUrl: 'https://example.com/booking',
    published: true
  },
  {
    id: 'dream-of-nile',
    name: 'Dream of Nile',
    level: 'Classic',
    description: 'An inviting classic cruise experience for travelers who want a relaxed and culturally rich route.',
    itinerary: 'luxor-aswan',
    duration: '5 Days / 4 Nights',
    departureDay: 'Every Wednesday',
    departurePoint: 'Luxor',
    arrivalDay: 'Monday',
    arrivalPoint: 'Aswan',
    price: 1425,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    bookingUrl: '',
    published: true
  },
  {
    id: 'nile-emerald',
    name: 'Nile Emerald',
    level: 'Luxury',
    description: 'A premium floating retreat with elevated dining, spacious suites and guided cultural moments.',
    itinerary: 'luxor-aswan',
    duration: '5 Days / 4 Nights',
    departureDay: 'Every Sunday',
    departurePoint: 'Luxor',
    arrivalDay: 'Thursday',
    arrivalPoint: 'Aswan',
    price: 1685,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    bookingUrl: 'https://example.com/nile-emerald',
    published: true
  },
  {
    id: 'pharaohs-sun',
    name: 'Pharaohs Sun',
    level: 'Standard',
    description: 'A comfortable, easygoing cruise for travelers seeking a reliable classic Nile route.',
    itinerary: 'luxor-aswan',
    duration: '5 Days / 4 Nights',
    departureDay: 'Every Monday',
    departurePoint: 'Luxor',
    arrivalDay: 'Friday',
    arrivalPoint: 'Aswan',
    price: 980,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80'
    ],
    bookingUrl: '',
    published: true
  }
];

function getSelectedItinerary() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || localStorage.getItem('selected-itinerary') || 'aswan-luxor';
  if (itineraryData[id]) return itineraryData[id];
  return itineraryData['aswan-luxor'];
}

function persistItinerary(id) {
  localStorage.setItem('selected-itinerary', id);
}

function formatCurrency(value, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function buildSelectionHandlers() {
  document.querySelectorAll('[data-itinerary]').forEach((card) => {
    const select = () => {
      const id = card.dataset.itinerary;
      persistItinerary(id);
      window.location.href = `journey.html?id=${encodeURIComponent(id)}`;
    };

    card.addEventListener('click', (event) => {
      if (event.target.closest('.primary-action')) {
        select();
        return;
      }
      if (event.target === card || event.target.closest('.journey-card')) {
        select();
      }
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        select();
      }
    });
  });
}

function renderJourneyPage() {
  const itinerary = getSelectedItinerary();
  const routeSvg = document.getElementById('river-svg');
  const routeBase = document.getElementById('river-base');
  const routePath = document.getElementById('river-route');
  const routePoints = document.getElementById('route-points');
  const landmarksLayer = document.getElementById('landmarks');
  const boatLayer = document.getElementById('boat-layer');
  const timelineList = document.getElementById('timeline-list');
  const progressPill = document.getElementById('progress-pill');
  const journeyName = document.getElementById('journey-name');
  const journeySummary = document.getElementById('journey-summary');
  const endCta = document.getElementById('end-cta');
  const crumbItinerary = document.getElementById('crumb-itinerary');

  if (!routeSvg || !routeBase || !routePath || !routePoints || !timelineList) return;

  journeyName.textContent = itinerary.name;
  journeySummary.textContent = itinerary.summary;
  crumbItinerary.textContent = itinerary.name;

  const pathData = itinerary.route.map((point, index) => {
    const command = index === 0 ? 'M' : 'L';
    return `${command} ${point.x} ${point.y}`;
  }).join(' ');

  routeBase.setAttribute('d', pathData);
  routePath.setAttribute('d', pathData);

  const labelMarkup = itinerary.labels.map((label) => `
    <text x="${label.x}" y="${label.y}" class="route-stop-label" text-anchor="middle">${label.name}</text>
  `).join('');
  routePoints.innerHTML = `
    ${itinerary.route.map((point, index) => `
      <circle class="route-stop ${index === 0 ? 'active' : ''}" cx="${point.x}" cy="${point.y}" r="7"></circle>
    `).join('')}
    ${labelMarkup}
  `;

  const landmarkSvg = (type, colorA, colorB) => {
    const base = {
      temple: `
        <g>
          <path d="M18 52 L54 52 L60 16 L62 52 L66 52 L66 58 L14 58 L14 52 Z" fill="${colorB}" opacity="0.9"/>
          <path d="M24 38 L30 22 L38 18 L46 22 L52 38 Z" fill="${colorA}" opacity="0.95"/>
          <rect x="25" y="24" width="24" height="18" rx="2" fill="${colorA}" opacity="0.9"/>
          <rect x="18" y="52" width="48" height="7" rx="2" fill="#d8b990" opacity="0.85"/>
        </g>
      `,
      monument: `
        <g>
          <path d="M12 55 L24 22 L52 22 L64 55 Z" fill="${colorB}" opacity="0.9"/>
          <rect x="22" y="18" width="28" height="10" rx="3" fill="${colorA}" opacity="0.8"/>
          <rect x="28" y="30" width="16" height="18" rx="2" fill="${colorA}" opacity="0.72"/>
          <rect x="15" y="55" width="40" height="8" rx="2" fill="#d7bd97" opacity="0.75"/>
        </g>
      `
    };
    return base[type] || base.temple;
  };

  landmarksLayer.innerHTML = itinerary.landmarks.map((landmark) => `
    <div class="landmark-wrap landmark-card" data-landmark-id="${landmark.id}" style="left:${landmark.x}px; top:${landmark.y}px;">
      <div class="landmark-svg-wrapper">
        ${landmarkSvg(landmark.type === 'temple' ? 'temple' : 'monument', '#d8c49c', '#af7c4a')}
      </div>
      <div class="landmark-name">${landmark.name}</div>
    </div>
  `).join('');

  const dayLayers = document.querySelectorAll('.day-card');
  dayLayers.forEach((card) => card.classList.remove('revealed'));

  const dayCards = itinerary.days.map((day) => `
    <article class="day-card" data-day="${day.day}">
      <strong>Day ${day.day}</strong>
      <h3>${day.title}</h3>
      <p>${day.description}</p>
      <ul>
        ${day.activities.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `).join('');
  timelineList.innerHTML = dayCards;

  const state = {
    itinerary,
    progress: 0,
    elapsed: 0,
    duration: 20000,
    riding: false,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    startTimestamp: null,
    lastTimestamp: null,
    visibleDays: 0,
    isEnded: false
  };

  function setBoatPosition(progress) {
    const total = itinerary.route.length - 1;
    const idx = Math.min(total, Math.floor(progress * total));
    const base = itinerary.route[idx];
    const next = itinerary.route[Math.min(total, idx + 1)];
    const localProgress = (progress * total) - idx;
    const x = base.x + (next.x - base.x) * localProgress;
    const y = base.y + (next.y - base.y) * localProgress;
    const boat = document.querySelector('.boat-wrap');
    if (!boat) {
      boatLayer.innerHTML = `
        <g class="boat-wrap" aria-hidden="true" transform="translate(${x}, ${y}) rotate(${Math.atan2(next.y - base.y, next.x - base.x) * 180 / Math.PI})">
          <g>
            <path d="M-18 6 L12 6 L22 0 L28 6 L38 6 L32 14 L-10 14 Z" fill="#f0f3f5" stroke="#c6dbe2" stroke-width="2"/>
            <path d="M-8 14 L-4 22 L23 22 L28 14 Z" fill="#d7b27e" opacity="0.8"/>
            <rect x="-2" y="-3" width="16" height="8" rx="2" fill="#317475" opacity="0.7"/>
            <path d="M-18 6 L-24 2" stroke="#265963" stroke-width="2"/>
            <path d="M31 6 L38 2" stroke="#265963" stroke-width="2"/>
          </g>
        </g>
      `;
      return;
    }

    boat.style.left = `${x}px`;
    boat.style.top = `${y}px`;
    boat.style.transform = `translate(-50%, -50%) rotate(${Math.atan2(next.y - base.y, next.x - base.x) * 180 / Math.PI}deg)`;
  }

  function updateProgressUI() {
    const visible = Math.min(Math.max(Math.ceil(state.progress * itinerary.totalDays), 1), itinerary.totalDays);
    state.visibleDays = visible;

    const cards = timelineList.querySelectorAll('.day-card');
    cards.forEach((card) => {
      const day = Number(card.dataset.day);
      card.classList.toggle('revealed', day <= visible);
    });

    const finalDay = itinerary.totalDays;
    const dayNumber = Math.min(visible, finalDay);
    progressPill.textContent = `Day ${dayNumber} of ${finalDay}`;

    const landmarks = document.querySelectorAll('.landmark-card');
    landmarks.forEach((landmarkNode) => {
      const landmarkId = landmarkNode.dataset.landmarkId;
      const match = itinerary.landmarks.find((item) => item.id === landmarkId);
      if (!match) return;
      landmarkNode.classList.toggle('visible', match.day <= visible);
    });

    if (state.isEnded) {
      endCta.classList.remove('hidden');
    } else {
      endCta.classList.add('hidden');
    }
  }

  function stepJourney() {
    if (!state.riding) return;

    const progress = Math.min(1, state.elapsed / state.duration);
    state.progress = progress;
    setBoatPosition(progress);
    updateProgressUI();

    if (progress >= 1) {
      state.riding = false;
      state.isEnded = true;
      state.progress = 1;
      updateProgressUI();
      return;
    }
  }

  function animateJourney(timestamp) {
    if (!state.startTimestamp) state.startTimestamp = timestamp;
    const elapsed = state.elapsed + (timestamp - (state.lastTimestamp || timestamp));
    state.elapsed = elapsed;
    state.lastTimestamp = timestamp;
    stepJourney();

    if (state.riding) {
      requestAnimationFrame(animateJourney);
    }
  }

  function pauseJourney() {
    if (state.isEnded) return;
    state.riding = false;
    state.lastTimestamp = null;
  }

  function resumeJourney() {
    if (state.isEnded) return;
    if (state.riding) return;
    state.riding = true;
    state.lastTimestamp = null;
    requestAnimationFrame(animateJourney);
  }

  function setProgressTo(target) {
    state.elapsed = target * state.duration;
    state.progress = target;
    setBoatPosition(target);
    updateProgressUI();
  }

  function revealAtDay(dayNumber) {
    const normalized = Math.min(itinerary.totalDays, Math.max(1, dayNumber));
    const ratio = normalized / itinerary.totalDays;
    setProgressTo(ratio);
  }

  function resetJourney() {
    state.elapsed = 0;
    state.progress = 0;
    state.isEnded = false;
    state.lastTimestamp = null;
    setBoatPosition(0);
    updateProgressUI();
  }

  function startJourney() {
    if (state.reducedMotion) {
      state.riding = false;
      state.isEnded = true;
      state.progress = 1;
      setBoatPosition(1);
      updateProgressUI();
      return;
    }

    state.riding = true;
    state.startTimestamp = null;
    state.lastTimestamp = null;
    requestAnimationFrame(animateJourney);
  }

  document.getElementById('pause-btn').addEventListener('click', pauseJourney);
  document.getElementById('resume-btn').addEventListener('click', resumeJourney);
  document.getElementById('replay-btn').addEventListener('click', () => {
    resetJourney();
    state.riding = false;
    state.isEnded = false;
    setTimeout(() => startJourney(), 20);
  });
  document.getElementById('restart-btn').addEventListener('click', () => {
    resetJourney();
    state.riding = false;
    state.isEnded = false;
    setTimeout(() => startJourney(), 20);
  });
  document.getElementById('next-day-btn').addEventListener('click', () => {
    const dayValue = Math.min(itinerary.totalDays, Math.max(1, state.visibleDays + 1));
    revealAtDay(dayValue);
    const targetProgress = dayValue / itinerary.totalDays;
    setProgressTo(targetProgress);
    if (dayValue >= itinerary.totalDays) {
      state.isEnded = true;
      state.riding = false;
    }
    updateProgressUI();
  });

  if (state.reducedMotion) {
    setProgressTo(1);
    updateProgressUI();
    return;
  }

  setBoatPosition(0);
  updateProgressUI();
  startJourney();
}

function renderListingPage() {
  const itinerary = getSelectedItinerary();
  const list = document.getElementById('cruise-grid');
  const selectedLabel = document.getElementById('selected-itinerary-label');
  const durationLabel = document.getElementById('selected-duration-label');
  const summary = document.getElementById('listing-summary');
  const emptyState = document.getElementById('empty-state');

  if (!list) return;

  selectedLabel.textContent = itinerary.name;
  durationLabel.textContent = itinerary.durationLabel;
  summary.textContent = `Browse the available cruise options for the ${itinerary.name} itinerary.`;

  const matches = cruises.filter((cruise) => cruise.itinerary === itinerary.id && cruise.published);

  if (!matches.length) {
    list.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  list.innerHTML = matches.map((cruise) => `
    <article class="cruise-card" data-cruise-id="${cruise.id}">
      <div class="cruise-image">
        <img src="${cruise.image}" alt="${cruise.name}" />
      </div>
      <div class="cruise-body">
        <div class="cruise-head">
          <span class="cruise-level">${cruise.level}</span>
        </div>
        <div class="cruise-name">${cruise.name}</div>
        <p>${cruise.description}</p>
        <div class="cruise-meta">
          <span>${cruise.departureDay}</span>
          <span>${cruise.departurePoint}</span>
        </div>
        <button class="view-details" type="button" data-open="${cruise.id}">View Details</button>
      </div>
    </article>
  `).join('');

  list.querySelectorAll('[data-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const cruise = matches.find((item) => item.id === button.dataset.open);
      if (!cruise) return;
      openCruiseModal(cruise);
    });
  });
}

function openCruiseModal(cruise) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');
  const tabs = document.querySelectorAll('.tab');

  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-panel is-visible" data-panel="details">
      <div class="modal-cruise-header">
        <span class="mini-kicker">${cruise.level}</span>
        <h3>${cruise.name}</h3>
        <p class="modal-summary">${cruise.description}</p>
      </div>

      <div class="info-grid">
        <div class="info-item"><span class="label">Departure Day</span><span class="value">${cruise.departureDay || 'Not supplied'}</span></div>
        <div class="info-item"><span class="label">Departure Point</span><span class="value">${cruise.departurePoint || 'Not supplied'}</span></div>
        <div class="info-item"><span class="label">Arrival Day</span><span class="value">${cruise.arrivalDay || 'Not supplied'}</span></div>
        <div class="info-item"><span class="label">Arrival Point</span><span class="value">${cruise.arrivalPoint || 'Not supplied'}</span></div>
      </div>

      <div class="booking-box">
        <div class="price">${cruise.price ? formatCurrency(cruise.price, cruise.currency || 'USD') : 'On request'}<small>${cruise.price ? ` / ${cruise.duration}` : ''}</small></div>
        ${cruise.bookingUrl ? `<a class="cta" href="${cruise.bookingUrl}" target="_blank" rel="noreferrer">Book Now</a>` : '<span class="unavailable">Booking not yet configured</span>'}
      </div>
    </div>

    <div class="modal-panel" data-panel="gallery">
      <div class="gallery-grid">
        ${cruise.gallery.map((image, index) => `
          <button class="gallery-thumb" type="button" data-lightbox-index="${index}" aria-label="Open image ${index + 1} for ${cruise.name}">
            <img src="${image}" alt="${cruise.name} gallery image ${index + 1}" />
          </button>
        `).join('')}
      </div>
    </div>
  `;

  tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === 'details');
    tab.setAttribute('aria-selected', String(tab.dataset.tab === 'details'));
  });

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  bindModalTabs();
  bindLightboxButtons(cruise.gallery);

  const closeButton = document.querySelector('.modal-close');
  if (closeButton) {
    closeButton.onclick = () => closeModal();
  }

  document.addEventListener('keydown', handleModalEsc);
}

function bindModalTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.modal-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        panel.classList.toggle('is-visible', panel.dataset.panel === target);
      });
    });
  });
}

function bindLightboxButtons(gallery) {
  const thumbs = document.querySelectorAll('.gallery-thumb');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const counter = document.getElementById('lightbox-counter');

  if (!lightbox || !lightboxImage || !counter) return;

  const openImage = (index) => {
    lightboxImage.src = gallery[index];
    lightboxImage.alt = `Gallery image ${index + 1}`;
    counter.textContent = `${index + 1} / ${gallery.length}`;
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const index = Number(thumb.dataset.lightboxIndex || 0);
      openImage(index);
    });
  });

  const prev = document.querySelector('.lightbox-control.prev');
  const next = document.querySelector('.lightbox-control.next');
  const close = document.querySelector('.lightbox-close');

  const currentIndex = () => {
    const src = lightboxImage.src;
    return gallery.indexOf(src);
  };

  prev.addEventListener('click', () => {
    let index = currentIndex();
    if (index <= 0) index = gallery.length - 1;
    else index -= 1;
    openImage(index);
  });

  next.addEventListener('click', () => {
    let index = currentIndex();
    if (index === -1 || index >= gallery.length - 1) index = 0;
    else index += 1;
    openImage(index);
  });

  close.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (lightbox.classList.contains('hidden')) return;
    if (event.key === 'Escape') {
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden', 'true');
    }
    if (event.key === 'ArrowRight') {
      let index = currentIndex();
      if (index >= gallery.length - 1) index = 0;
      else index += 1;
      openImage(index);
    }
    if (event.key === 'ArrowLeft') {
      let index = currentIndex();
      if (index <= 0) index = gallery.length - 1;
      else index -= 1;
      openImage(index);
    }
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', handleModalEsc);
}

function handleModalEsc(event) {
  if (event.key === 'Escape') {
    const modal = document.getElementById('modal');
    if (modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
    const lightbox = document.getElementById('lightbox');
    if (lightbox && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  }
}

function initPage() {
  if (document.querySelector('[data-itinerary]')) {
    buildSelectionHandlers();
  }

  if (document.getElementById('river-svg')) {
    renderJourneyPage();
  }

  if (document.getElementById('cruise-grid')) {
    renderListingPage();
  }

  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target.dataset.closeModal === 'true') closeModal();
    });
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  }
}

document.addEventListener('DOMContentLoaded', initPage);
