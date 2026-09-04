import React, { useEffect } from "react";

// Provided by ResDiary support (Aga) for the "MoesTable" venue, widget ID
// 12718. NOTE: the original snippet appended `?includeJquery=false`, which
// tells ResDiary the host page already has jQuery loaded and to skip
// bundling it. This site has no jQuery at all, so with that flag the
// widget's script has nothing to run against and silently renders nothing.
// Dropping the query param lets ResDiary include its own jQuery bundle.
const RESDIARY_WIDGET_URL = "https://booking.resdiary.com/widget/Standard/MoesTable/12718";
const RESDIARY_LOADER_SRC = "https://booking.resdiary.com/bundles/WidgetV2Loader.js";
const RESDIARY_DIRECT_LINK = "https://booking.resdiary.com/widget/Standard/MoesTable/12718";

export default function ReservationWidget() {
  useEffect(() => {
    // ResDiary's loader script reads the #rdwidgeturl input on load and
    // injects the booking flow into #rd-widget-frame. Guard against
    // appending it twice (e.g. if this component were ever toggled off and
    // back on) — the loader only needs to run once per page.
    if (document.querySelector(`script[src="${RESDIARY_LOADER_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = RESDIARY_LOADER_SRC;
    script.async = true;
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

