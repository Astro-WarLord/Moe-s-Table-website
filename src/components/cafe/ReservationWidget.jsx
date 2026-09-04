import React, { useEffect } from "react";

// Provided by ResDiary support (Aga) for the "MoesTable" venue, widget ID
// 12718.
//
// IMPORTANT: WidgetV2Loader.js's entire body is `window.onload = function
// () { ...loads jQuery, then AJAX-loads the widget into #rd-widget-frame...
// }`. The `load` event fires exactly once, right after the page's initial
// resources finish — which has already happened long before this component
// ever mounts (it only renders once someone clicks "Book Now"). Simply
// injecting the script and waiting does nothing: the handler gets assigned
// but the event that would invoke it never comes again. So once the script
// itself has loaded, we call `window.onload()` ourselves directly instead
// of waiting on the event.
const RESDIARY_WIDGET_URL = "https://booking.resdiary.com/widget/Standard/MoesTable/12718";
const RESDIARY_LOADER_SRC = "https://booking.resdiary.com/bundles/WidgetV2Loader.js";
const RESDIARY_DIRECT_LINK = RESDIARY_WIDGET_URL;

function runResdiaryOnload() {
  if (typeof window.onload === "function") window.onload();
}

export default function ReservationWidget() {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${RESDIARY_LOADER_SRC}"]`);
    if (existing) {
      // Script already loaded from a previous open of this widget — just
      // re-run the init logic to (re)populate the frame, since React wipes
      // the div's injected content when it unmounts/remounts.
      runResdiaryOnload();
      return;
    }

    const script = document.createElement("script");
    script.src = RESDIARY_LOADER_SRC;
    script.async = true;
    script.onload = runResdiaryOnload;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <div className="border border-border bg-card p-1">
        <div id="rd-widget-frame" className="min-h-[200px]" />
        <input
          id="rdwidgeturl"
          name="rdwidgeturl"
          value={RESDIARY_WIDGET_URL}
          type="hidden"
          readOnly
        />
      </div>
      {/* Fallback in case the embedded widget doesn't load for any reason
          (ad blockers, script errors, etc.) — always give a working path
          to book. */}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Widget not loading?{" "}
        <a
          href={RESDIARY_DIRECT_LINK}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline underline-offset-2"
        >
          Book directly here
        </a>
      </p>
    </div>
  );
}

