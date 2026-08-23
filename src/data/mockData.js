export const USER_PROFILE = {
  name: "Vanessa Okonkwo",
  shortName: "Vanessa O.",
  initials: "VO",
  email: "vanessa.o@example.com",
  phone: "+234 803 555 0142",
  address: "14 Opebi Road, Ikeja",
  memberTier: "Silver member",
  customerSince: "March 2024",
  points: 1240,
  pointsToNextTier: 760,
  nextTier: "Gold at 2,000",
  spentThisYear: "₦412k",
  activeVisitsCount: 1,
  pendingQuotesCount: 1,
  referralCode: "VANESSA-KJM",
  referralsInvited: 4,
  referralsJoined: 2,
  referralPointsEarned: 1000
};

export const SHOPS = {
  kojo: {
    id: "kojo",
    name: "Kojo Motors",
    branch: "Ikeja branch",
    fullName: "Kojo Motors — Ikeja",
    shopName: "Kojo Motors, Ikeja",
    address: "14 Adeniyi Jones Ave",
    hours: "Open until 18:00",
    phone: "+234 802 123 4567"
  },
  auto: {
    id: "auto",
    name: "Autoworks",
    branch: "Lekki Phase 1",
    fullName: "Autoworks — Lekki Phase 1",
    shopName: "Autoworks, Lekki",
    address: "8 Admiralty Way",
    hours: "Open until 17:30",
    phone: "+234 809 987 6543"
  }
};

export const CATEGORIES = [
  { id: 'all', label: 'All services' },
  { id: 'maint', label: 'Maintenance' },
  { id: 'brakes', label: 'Brakes' },
  { id: 'tyres', label: 'Tyres & alignment' },
  { id: 'elec', label: 'Electrical & AC' },
  { id: 'engine', label: 'Engine' },
  { id: 'diag', label: 'Diagnostics' }
];

export const CATALOG = [
  { id: 'brake', cat: 'brakes', title: 'Front brake pad replacement', diag: 'Visual inspection + brake test', desc: 'Pads replaced, calipers cleaned and brake performance re-tested.', price: 46000, priceLabel: '₦46,000', time: '1h 30m' },
  { id: 'rotor', cat: 'brakes', title: 'Rear rotor resurfacing', diag: 'Runout measurement', desc: 'Rotors skimmed true, then brake bedding re-checked on a road test.', price: 21000, priceLabel: '₦21,000', time: '1h' },
  { id: 'fluid', cat: 'brakes', title: 'Brake fluid flush', diag: 'Moisture content test', desc: 'Old fluid drained and replaced with fresh DOT 4.', price: 18500, priceLabel: '₦18,500', time: '40m' },
  { id: 'oil', cat: 'maint', title: 'Full synthetic oil change', diag: 'Oil level & quality check', desc: 'Oil and filter replaced to Mercedes service spec.', price: 68000, priceLabel: '₦68,000', time: '45m' },
  { id: 'minor', cat: 'maint', title: 'Minor service (15-point)', diag: '15-point visual check', desc: 'Fluids, filters, belts and lights checked and topped up.', price: 39000, priceLabel: '₦39,000', time: '1h' },
  { id: 'align', cat: 'tyres', title: 'Wheel alignment & balancing', diag: '4-wheel alignment scan', desc: 'Four-wheel alignment with a printed before/after report.', price: 35000, priceLabel: '₦35,000', time: '1h' },
  { id: 'tyre', cat: 'tyres', title: 'Tyre replacement (per pair)', diag: 'Tread depth gauge', desc: 'Fitting, balancing and disposal of the old tyres.', price: 42000, priceLabel: '₦42,000', time: '40m' },
  { id: 'ac', cat: 'elec', title: 'AC regas & cabin filter', diag: 'Refrigerant pressure test', desc: 'Refrigerant top-up, leak check and filter replacement.', price: 54500, priceLabel: '₦54,500', time: '1h 15m' },
  { id: 'battery', cat: 'elec', title: 'Battery & alternator check', diag: 'Load & charge test', desc: 'Battery load tested, terminals cleaned, charging output measured.', price: 18000, priceLabel: '₦18,000', time: '30m' },
  { id: 'engine', cat: 'engine', title: 'Engine diagnostic & tune-up', diag: 'Full electronic scan', desc: 'Fault code scan, spark plugs checked and engine tune-up.', price: 58000, priceLabel: '₦58,000', time: '1h 20m' },
  { id: 'timing', cat: 'engine', title: 'Timing belt inspection', diag: 'Belt wear inspection', desc: 'Belt, tensioner and pulleys inspected against the service interval.', price: 26000, priceLabel: '₦26,000', time: '50m' },
  { id: 'coolant', cat: 'engine', title: 'Cooling system flush', diag: 'Pressure & leak test', desc: 'Coolant drained, system flushed and refilled to spec.', price: 32000, priceLabel: '₦32,000', time: '1h 10m' },
  { id: 'scan', cat: 'diag', title: 'General diagnostic', diag: 'Full electronic scan', desc: 'Complete scan, then an itemised quote after inspection.', price: 12000, priceLabel: '₦12,000', time: '45m' }
];

export const INITIAL_QUOTE_ITEMS = [
  { id: 0, name: 'Front brake pad replacement', desc: 'Pads worn to 2mm — replacement recommended. Assigned to Chidi.', price: 46000, hours: 1.5, selected: true, required: true },
  { id: 1, name: 'Brake fluid flush', desc: 'Fluid contaminated; flushed and refilled with DOT 4.', price: 18500, hours: 1.0, selected: true, required: true },
  { id: 2, name: 'General diagnostic', desc: 'Full electronic scan already carried out on intake.', price: 12000, hours: 1.0, selected: true, required: true },
  { id: 3, name: 'Rear rotor resurfacing', desc: 'Light scoring, still within tolerance. Can wait one more service.', price: 21000, hours: 0.5, selected: false, required: false, isOptional: true }
];

export const VISITS = [
  {
    id: 'JOB-4821',
    title: 'Brake service + general diagnostic',
    vehicle: 'Mercedes-Benz C300 2019',
    short: 'C300 2019',
    plate: 'LAG-482-KJA',
    color: 'Obsidian black',
    colorHex: '#1c1c1e',
    shopKey: 'kojo',
    date: 'Today',
    status: 'In progress',
    tone: 'blue',
    amount: '₦71,500',
    totalLabel: 'Total paid',
    tech: 'Chidi O.',
    techInitials: 'CO',
    techMeta: '4.8 ★ · 312 jobs completed',
    items: [
      { name: 'Front brake pad replacement', price: '₦46,000' },
      { name: 'Brake fluid flush', price: '₦18,500' },
      { name: 'General diagnostic', price: '₦12,000' }
    ],
    steps: [
      { title: 'Vehicle received', desc: 'Checked in by Emeka. Mileage 84,320 km logged.', time: 'Mon, 09:20', state: 'done' },
      { title: 'Diagnostics complete', desc: 'Chidi logged findings and 4 photos to your job card.', time: 'Mon, 11:05', state: 'done' },
      { title: 'Quote approved & paid', desc: '3 of 4 items approved · ₦71,500 paid by card.', time: 'Today, 09:12', state: 'done' },
      { title: 'Work in progress', desc: 'Chidi is on the front brakes now. 2 of 3 items done.', time: 'Started 09:40 · ~1h 10m left', state: 'current' },
      { title: 'Ready for pickup', desc: "You'll get a notification the moment the car is ready.", time: 'Expected 15:30', state: 'todo' }
    ]
  },
  {
    id: 'JOB-4390',
    title: 'Full synthetic oil change',
    vehicle: 'Mercedes-Benz C300 2019',
    short: 'C300 2019',
    plate: 'LAG-482-KJA',
    color: 'Obsidian black',
    colorHex: '#1c1c1e',
    shopKey: 'kojo',
    date: '12 Feb 2026',
    status: 'Completed',
    tone: 'green',
    amount: '₦68,000',
    totalLabel: 'Total paid',
    tech: 'Chidi O.',
    techInitials: 'CO',
    techMeta: '4.8 ★ · 312 jobs completed',
    rated: 'You rated this visit 5 ★. Change it any time.',
    items: [
      { name: 'Full synthetic oil change', price: '₦62,000' },
      { name: 'Oil filter', price: '₦6,000' }
    ],
    steps: [
      { title: 'Vehicle received', desc: 'Checked in at the front desk. Mileage 79,140 km.', time: '12 Feb, 08:30', state: 'done' },
      { title: 'Work in progress', desc: 'Oil and filter replaced to Mercedes service spec.', time: '12 Feb, 09:05', state: 'done' },
      { title: 'Paid', desc: '₦68,000 by bank transfer. +136 points earned.', time: '12 Feb, 09:50', state: 'done' },
      { title: 'Collected', desc: 'Handed back to you at the front desk.', time: '12 Feb, 10:15', state: 'done' }
    ]
  },
  {
    id: 'JOB-4102',
    title: 'AC regas & cabin filter',
    vehicle: 'Mercedes-Benz C300 2019',
    short: 'C300 2019',
    plate: 'LAG-482-KJA',
    color: 'Obsidian black',
    colorHex: '#1c1c1e',
    shopKey: 'auto',
    date: '04 Nov 2025',
    status: 'Completed',
    tone: 'green',
    amount: '₦54,500',
    totalLabel: 'Total paid',
    tech: 'Musa B.',
    techInitials: 'MB',
    techMeta: '4.6 ★ · 178 jobs completed',
    rated: 'Not yet rated — it takes about ten seconds.',
    items: [
      { name: 'AC regas', price: '₦38,500' },
      { name: 'Cabin filter', price: '₦16,000' }
    ],
    steps: [
      { title: 'Vehicle received', desc: 'Checked in at Autoworks, Lekki.', time: '04 Nov, 10:10', state: 'done' },
      { title: 'Diagnostics complete', desc: 'Pressure test found a slow leak at the low-side valve.', time: '04 Nov, 11:00', state: 'done' },
      { title: 'Work in progress', desc: 'Valve replaced, system regassed, cabin filter changed.', time: '04 Nov, 12:20', state: 'done' },
      { title: 'Paid & collected', desc: '₦54,500 by card.', time: '04 Nov, 14:05', state: 'done' }
    ]
  },
  {
    id: 'JOB-3877',
    title: 'Tyre rotation & alignment',
    vehicle: 'Mercedes-Benz GLE 350 2016',
    short: 'GLE 350 2016',
    plate: 'LAG-119-EPE',
    color: 'Iridium silver',
    colorHex: '#b9bcc0',
    shopKey: 'kojo',
    date: '18 Jul 2025',
    status: 'Completed',
    tone: 'green',
    amount: '₦35,000',
    totalLabel: 'Total paid',
    tech: 'Chidi O.',
    techInitials: 'CO',
    techMeta: '4.8 ★ · 312 jobs completed',
    rated: 'You rated this visit 4 ★. Change it any time.',
    items: [
      { name: 'Four-wheel alignment', price: '₦25,000' },
      { name: 'Tyre rotation & balancing', price: '₦10,000' }
    ],
    steps: [
      { title: 'Vehicle received', desc: 'Checked in by Emeka. Mileage 138,600 km.', time: '18 Jul, 09:00', state: 'done' },
      { title: 'Work in progress', desc: 'Alignment corrected, tyres rotated front to rear.', time: '18 Jul, 10:15', state: 'done' },
      { title: 'Paid & collected', desc: '₦35,000 by card. Alignment report emailed.', time: '18 Jul, 11:40', state: 'done' }
    ]
  }
];

export const PAST_QUOTES = [
  { id: 'JOB-4821', service: 'Brake service + general diagnostic', note: 'Quote sent today, 4 items', shopKey: 'kojo', date: 'Today', amount: '₦76,500', status: 'Awaiting approval', tone: 'amber' },
  { id: 'JOB-4390', service: 'Full synthetic oil change', note: 'Service completed', shopKey: 'kojo', date: '12 Feb 2026', amount: '₦68,000', status: 'Paid', tone: 'green' },
  { id: 'JOB-4102', service: 'AC regas & cabin filter', note: 'Service completed', shopKey: 'auto', date: '04 Nov 2025', amount: '₦54,500', status: 'Paid', tone: 'green' },
  { id: 'JOB-3877', service: 'Tyre rotation & alignment', note: 'Service completed', shopKey: 'kojo', date: '18 Jul 2025', amount: '₦35,000', status: 'Paid', tone: 'green' }
];

export const VEHICLES = [
  {
    id: 'c300',
    model: 'Mercedes-Benz C300',
    year: '2019',
    plate: 'LAG-482-KJA',
    status: 'In shop',
    statusTone: 'blue',
    visitsCount: 7,
    mileage: '84,320 km',
    lastService: 'Feb 2026'
  },
  {
    id: 'gle',
    model: 'Mercedes-Benz GLE 350',
    year: '2016',
    plate: 'LAG-119-EPE',
    status: 'Idle',
    statusTone: 'grey',
    visitsCount: 2,
    mileage: '142,900 km',
    lastService: 'Sep 2025'
  }
];

export const MARKETPLACE_LISTINGS = {
  c300: {
    id: 'c300',
    title: 'Mercedes-Benz C300 2021',
    subtitle: 'Obsidian black · single owner · Kojo Motors, Ikeja',
    price: '₦34,500,000',
    deposit: '₦250,000 refundable deposit holds it for 7 days',
    status: 'Available',
    tone: 'green',
    cta: 'Reserve with deposit',
    specs: [
      { label: 'Year', value: '2021' },
      { label: 'Mileage', value: '41,000 km' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Engine', value: '2.0L turbo, 255 hp' },
      { label: 'Fuel', value: 'Petrol' },
      { label: 'Drive', value: 'Rear-wheel' },
      { label: 'Registration', value: 'Lagos, current' },
      { label: 'Service records', value: '6 visits on SPANR' }
    ],
    checks: [
      { text: '42-point inspection passed on 02 August 2026 by Chidi O.' },
      { text: 'Brake pads, tyres and battery all above 70% life.' },
      { text: 'No accident history on record; paintwork original.' }
    ],
    note: 'A sales advisor calls you back to finish the sale — SPANR does not handle financing itself.'
  },
  glc: {
    id: 'glc',
    title: 'Mercedes-Benz GLC 300 2020',
    subtitle: 'Selenite grey · two owners · Kojo Motors, Ikeja',
    price: '₦29,900,000',
    deposit: 'Reserved until 24 August 2026',
    status: 'Reserved',
    tone: 'amber',
    cta: 'Join the waitlist',
    specs: [
      { label: 'Year', value: '2020' },
      { label: 'Mileage', value: '58,400 km' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Engine', value: '2.0L turbo, 255 hp' },
      { label: 'Fuel', value: 'Petrol' },
      { label: 'Drive', value: 'All-wheel' },
      { label: 'Registration', value: 'Lagos, current' },
      { label: 'Service records', value: '4 visits on SPANR' }
    ],
    checks: [
      { text: '42-point inspection passed on 19 July 2026 by Musa B.' },
      { text: 'Front tyres replaced at inspection; rears at 60%.' },
      { text: 'One repaired panel on the rear quarter, documented.' }
    ],
    note: 'Currently held for another buyer. Join the waitlist and we will contact you if the reservation lapses.'
  },
  e350: {
    id: 'e350',
    title: 'Mercedes-Benz E350 2018',
    subtitle: 'Iridium silver · two owners · Autoworks, Lekki',
    price: '₦21,000,000',
    deposit: '₦200,000 refundable deposit holds it for 7 days',
    status: 'Available',
    tone: 'green',
    cta: 'Reserve with deposit',
    specs: [
      { label: 'Year', value: '2018' },
      { label: 'Mileage', value: '96,200 km' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Engine', value: '3.5L V6, 302 hp' },
      { label: 'Fuel', value: 'Petrol' },
      { label: 'Drive', value: 'Rear-wheel' },
      { label: 'Registration', value: 'Lagos, current' },
      { label: 'Service records', value: '9 visits on SPANR' }
    ],
    checks: [
      { text: '42-point inspection passed on 28 June 2026 by Chidi O.' },
      { text: 'Timing chain and suspension bushings replaced in 2025.' },
      { text: 'No accident history on record.' }
    ],
    note: 'Higher mileage, fully documented. A sales advisor calls you back to finish the sale.'
  }
};

export const NOTIFICATIONS_LIST = [
  {
    id: 1,
    title: 'Your quote for JOB-4821 is ready',
    desc: '3 items plus 1 optional. Total ₦76,500.',
    time: 'Today, 08:40',
    type: 'quote',
    read: false,
    screen: 'quote'
  },
  {
    id: 2,
    title: 'Payment received — ₦71,500',
    desc: 'Receipt saved to your service history.',
    time: 'Today, 09:12',
    type: 'payment',
    read: false,
    screen: 'track'
  },
  {
    id: 3,
    title: 'Work started on your C300',
    desc: 'Chidi O. is on the front brakes. Estimated ready 15:30.',
    time: 'Today, 09:40',
    type: 'progress',
    read: false,
    screen: 'track'
  },
  {
    id: 4,
    title: 'Diagnostics complete',
    desc: 'Findings and 4 photos added to your job card.',
    time: 'Yesterday, 11:05',
    type: 'diag',
    read: true,
    screen: 'track'
  },
  {
    id: 5,
    title: '+136 points earned',
    desc: 'From your oil change on 12 February.',
    time: '12 Feb',
    type: 'reward',
    read: true,
    screen: 'rewards'
  },
  {
    id: 6,
    title: 'Rate your AC regas visit',
    desc: 'Optional — takes about ten seconds.',
    time: '05 Nov 2025',
    type: 'rating',
    read: true,
    screen: 'track'
  }
];
