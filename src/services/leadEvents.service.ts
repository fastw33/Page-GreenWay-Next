"use client";

const PUBLIC_KEY = "key_landing_abc";
const EVENTS_ENDPOINT =
  process.env.NEXT_PUBLIC_LEAD_EVENTS_ENDPOINT ||
  "https://leads.appfastway.com/Leads/public/events/track";

type LeadEventType =
  | "whatsapp_modal_open"
  | "whatsapp_contact_click"
  | "page_exit";

type LeadEventPayload = {
  contactChannel?: string;
  contactTarget?: string;
  locale?: string;
  metadata?: Record<string, unknown>;
  whatsappPhone?: string;
  whatsappUrl?: string;
};

type TrackOptions = {
  keepalive?: boolean;
};

function randomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function readStorageValue(storage: Storage | undefined, key: string) {
  try {
    return storage?.getItem(key) || "";
  } catch {
    return "";
  }
}

function writeStorageValue(storage: Storage | undefined, key: string, value: string) {
  try {
    storage?.setItem(key, value);
  } catch {
    // Storage can be unavailable in privacy modes; tracking should stay silent.
  }
}

function getStableId(storage: Storage | undefined, key: string) {
  const current = readStorageValue(storage, key);
  if (current) return current;

  const next = randomId();
  writeStorageValue(storage, key, next);
  return next;
}

function readAttribution() {
  const params = new URLSearchParams(window.location.search);

  return {
    fbclid: params.get("fbclid") || "",
    gclid: params.get("gclid") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmContent: params.get("utm_content") || "",
    utmMedium: params.get("utm_medium") || "",
    utmSource: params.get("utm_source") || "",
    utmTerm: params.get("utm_term") || "",
  };
}

function eventDedupeKey(eventType: LeadEventType, payload: LeadEventPayload) {
  const sessionId = getStableId(window.sessionStorage, "greenway_session_id");
  const target = payload.contactTarget || "";

  return [sessionId, eventType, window.location.href, target].join("|");
}

export async function trackLeadEvent(
  eventType: LeadEventType,
  payload: LeadEventPayload = {},
  options: TrackOptions = {},
) {
  if (typeof window === "undefined") return;

  const sessionId = getStableId(window.sessionStorage, "greenway_session_id");
  const visitorId = getStableId(window.localStorage, "greenway_visitor_id");
  const body = {
    attribution: readAttribution(),
    contactChannel: payload.contactChannel,
    contactTarget: payload.contactTarget,
    eventId: eventDedupeKey(eventType, payload),
    eventType,
    locale: payload.locale || document.documentElement.lang || "",
    metadata: payload.metadata || {},
    pageUrl: window.location.href,
    referrer: document.referrer || "",
    sessionId,
    visitorId,
    whatsappPhone: payload.whatsappPhone,
    whatsappUrl: payload.whatsappUrl,
  };

  try {
    await fetch(EVENTS_ENDPOINT, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": PUBLIC_KEY,
      },
      keepalive: Boolean(options.keepalive),
      method: "POST",
    });
  } catch {
    // Tracking must never block navigation, WhatsApp clicks, or page unload.
  }
}
