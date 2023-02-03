export const LOCALHOST_GEO_DATA = {
  city: "Medellín",
  region: "ANT",
  country: "CO",
  latitude: "6.2476",
  longitude: "75.5658",
};

export const INTERVALS = [
  {
    // display: "Last hour",
    display: "Última hora",
    slug: "1h",
  },
  {
    // display: "Last 24 hours",
    display: "Últimas 24 horas",
    slug: "24h",
  },
  {
    // display: "Last 7 days",
    display: "Últimos 7 días",
    slug: "7d",
  },
  {
    // display: "Last 30 days",
    display: "Últimos 30 días",
    slug: "30d",
  },
  {
    // display: "Last 3 months",
    display: "Últimos 3 meses",
    slug: "90d",
  },
];

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.2, bounce: 0 },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const HOME_HOSTNAMES = new Set([
  // comment for better diffs
  "corewave.xyz",
  "preview.corewave.xyz",
  "localhost:3000",
]);

export const RESERVED_KEYS = new Set([
  "api",
  "va",
  "static",
  "stats",
  "proxy",
  "auth",
  "pricing",
  "about",
  "metatags",
  "blog",
  "careers",
  "docs",
  "features",
  "contact",
  "terms",
  "privacy",
  "admin",
  "help",
  "new",
  "info",
  "demo",
  "presentamos-corewave",
]);
export const DEFAULT_REDIRECTS = {
  home: "https://corewave.xyz",
  signin: "https://app.corewave.xyz/login",
  login: "https://app.corewave.xyz/login",
  register: "https://app.corewave.xyz/register",
  signup: "https://app.corewave.xyz/register",
  app: "https://app.corewave.xyz",
  dashboard: "https://app.corewave.xyz",
  links: "https://app.corewave.xyz/links",
  settings: "https://app.corewave.xyz/settings",
  welcome: "https://app.corewave.xyz/welcome",
  slack: "https://corewave.slack.com",
  discord: "https://twitter.com/corewave", // placeholder for now
};

export const FREE_PLAN_PROJECT_LIMIT = 5;
export const FAVICON_FOLDER = "/_static/favicons";
export { default as COUNTRIES } from "./countries";
export { default as ccTLDs } from "./cctlds";

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);

export const SPECIAL_APEX_DOMAINS = {
  "youtu.be": "youtube.com",
};

export const DEFAULT_LINK_PROPS = {
  key: "github",
  url: "https://github.com/juancamiloqhz/dub",
  domain: "corewave.xyz",
  archived: false,
  expiresAt: null,
  password: null,

  title: null,
  description: null,
  image: null,
  ios: null,
  android: null,

  clicks: 0,
  userId: "",
  createdAt: new Date(),

  proxy: false,
};
