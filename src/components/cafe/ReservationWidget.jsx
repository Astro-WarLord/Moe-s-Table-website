import React, { useEffect } from "react";

// Provided by ResDiary support (Aga) for the "MoesTable" venue, widget ID 12718.
const RESDIARY_WIDGET_URL =
  "https://booking.resdiary.com/widget/Standard/MoesTable/12718?includeJquery=false";
const RESDIARY_LOADER_SRC = "https://booking.resdiary.com/bundles/WidgetV2Loader.js";

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
    <div className="mx-auto w-full max-w-[600px] border border-border bg-card p-1">
      <div id="rd-widget-frame" />
      <input
        id="rdwidgeturl"
        name="rdwidgeturl"
        value={RESDIARY_WIDGET_URL}
        type="hidden"
        readOnly
      />
    </div>
  );
}
