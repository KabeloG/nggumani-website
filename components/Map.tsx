"use client";

import React, { useEffect, useRef } from "react";

function Map() {
  const MapRef = useRef<HTMLDivElement | null>(null);
  const DEFAULT_CENTER = { lat: -22.974016, lng: 30.455217 };
  const DEFAULT_ZOOM = 7;

  useEffect(() => {
    if (MapRef.current) {
      new window.google.maps.Map(MapRef.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [MapRef]);

  return <div ref={MapRef} />;
}

export default Map;
