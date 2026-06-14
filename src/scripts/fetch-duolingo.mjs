// Build-time fetch of the Duolingo streak (unofficial endpoint).
// Writes app/duolingo-streak.json with the streak length and its anchor date.
// The footer then optimistically adds elapsed days client-side, so the number
// stays current between rebuilds. Soft-fails: never breaks the build.
import { writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const USERNAME = "marv51";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "app", "duolingo-streak.json");

try {
  const res = await fetch(`https://www.duolingo.com/2017-06-30/users?username=${USERNAME}`, {
    headers: { "User-Agent": "Mozilla/5.0 (ruehe.me build)" },
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const user = (data.users || [])[0];
  const cs = user?.streakData?.currentStreak;
  const streak = cs?.length ?? user?.streak;
  const since = cs?.endDate; // last day counted; client adds days elapsed since
  if (!streak || !since) throw new Error("no streak in response");
  writeFileSync(OUT, JSON.stringify({ streak, since, username: USERNAME }, null, 2) + "\n");
  console.log(`[duolingo] streak ${streak} as of ${since}`);
} catch (err) {
  console.warn(`[duolingo] fetch failed (${err.message}); keeping existing data.`);
  if (!existsSync(OUT)) {
    const today = new Date().toISOString().slice(0, 10);
    writeFileSync(OUT, JSON.stringify({ streak: 0, since: today, username: USERNAME }, null, 2) + "\n");
  }
  // soft-fail so the build/deploy never breaks
}
