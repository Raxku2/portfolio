import { createSignal, onCleanup, onMount } from "solid-js";




export function useIndiaTime() {
  const [time, setTime] = createSignal("00:00:00");

  onMount(async () => {
    let offset = 0; // Default to 0 offset if the fetch fails

    try {
      // TimeAPI is a modern alternative that properly supports CORS
      const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata");
      if (!res.ok) throw new Error("API responded with an error");
      
      const data = await res.json();
      
      // TimeAPI returns the date string like "2026-09-26T21:40:53".
      // We append "+05:30" so the browser parses it as absolute Indian Standard Time.
      const serverDate = new Date(`${data.dateTime}+05:30`);
      const localDate = new Date();
      
      // Calculate how far off the user's machine clock is from real internet time
      offset = serverDate.getTime() - localDate.getTime();
    } catch (error) {
      console.warn("Internet time sync failed (CORS or Network). Falling back to local clock forced to IST.");
      // If blocked (e.g., by an adblocker or no internet), it naturally falls back 
      // to using the local machine time, so the clock doesn't just break.
    }

    // This formatter forces the output to ALWAYS be India Time, formatted safely as 24-hour (en-GB)
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    const updateClock = () => {
      // Current time adjusted by the internet offset
      const trueNow = new Date(Date.now() + offset);
      setTime(formatter.format(trueNow));
    };

    updateClock(); // Initialize immediately
    const timer = setInterval(updateClock, 1000); // Tick every second

    onCleanup(() => clearInterval(timer));
  });

  return time;
}
