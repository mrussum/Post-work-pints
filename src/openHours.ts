import type { Pub, WeekHours } from "./types";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toMins = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export interface OpenStatus {
  open: boolean;
  /** Short label, e.g. "Open · til 23:00" or "Closed · opens Fri 12:00" */
  label: string;
}

// Works out whether a pub is open at `now`, accounting for sessions that run
// past midnight (close time earlier than open time = next-day close).
export function getOpenStatus(hours: WeekHours, now: Date = new Date()): OpenStatus {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();

  // Is today's session currently running?
  const today = hours[day];
  if (today) {
    const open = toMins(today.open);
    let close = toMins(today.close);
    if (close <= open) close += 1440; // spills past midnight
    if (mins >= open && mins < close) {
      return { open: true, label: `Open · til ${today.close}` };
    }
  }

  // Is yesterday's late session still running after midnight?
  const yesterday = hours[(day + 6) % 7];
  if (yesterday) {
    const open = toMins(yesterday.open);
    const close = toMins(yesterday.close);
    if (close <= open && mins < close) {
      return { open: true, label: `Open · til ${yesterday.close}` };
    }
  }

  // Closed — find the next opening within the coming week
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7;
    const slot = hours[d];
    if (!slot) continue;
    const open = toMins(slot.open);
    if (i === 0 && mins < open) {
      return { open: false, label: `Closed · opens ${slot.open}` };
    }
    if (i > 0) {
      const when = i === 1 ? "tomorrow" : DAY_NAMES[d];
      return { open: false, label: `Closed · opens ${when} ${slot.open}` };
    }
  }
  return { open: false, label: "Closed" };
}

export function isOpenNow(pub: Pub, now: Date = new Date()): boolean {
  return getOpenStatus(pub.hours, now).open;
}

// Human-readable week for the modal, collapsing consecutive identical days.
export function formatWeek(hours: WeekHours): { days: string; time: string }[] {
  // Reorder to Mon..Sun for display
  const order = [1, 2, 3, 4, 5, 6, 0];
  const rows = order.map((d) => ({
    name: DAY_NAMES[d],
    text: hours[d] ? `${hours[d]!.open} – ${hours[d]!.close}` : "Closed",
  }));

  const grouped: { days: string; time: string }[] = [];
  for (const row of rows) {
    const last = grouped[grouped.length - 1];
    if (last && last.time === row.text) {
      // extend the range (e.g. "Mon" -> "Mon–Wed")
      const start = last.days.split("–")[0];
      last.days = `${start}–${row.name}`;
    } else {
      grouped.push({ days: row.name, time: row.text });
    }
  }
  return grouped;
}
