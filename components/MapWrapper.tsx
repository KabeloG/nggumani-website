import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

function MapWrapper({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) return;

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
}

export default MapWrapper;
