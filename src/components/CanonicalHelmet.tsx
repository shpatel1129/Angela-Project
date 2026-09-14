import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CanonicalHelmet() {
  const { pathname } = useLocation();

  // Normalize path by stripping trailing slashes
  let cleanPath = pathname.replace(/\/$/, "");
  if (!cleanPath) cleanPath = "/";

  // Redirect legacy or duplicate routes to their primary canonical paths
  if (cleanPath === "/cruise/river-cruises") {
    cleanPath = "/river-cruises";
  } else if (cleanPath === "/safaris/custom-safaris") {
    cleanPath = "/custom-safaris";
  } else if (cleanPath === "/private-travel/family-travel") {
    cleanPath = "/family-and-multigenerational-travel";
  } else if (cleanPath === "/private-travel/weddings-honeymoons") {
    cleanPath = "/destination-weddings-honeymoons";
  } else if (cleanPath === "/weddings-honeymoons") {
    cleanPath = "/destination-weddings-honeymoons";
  } else if (cleanPath === "/luxury-ocean-cruises") {
    cleanPath = "/ocean-cruises";
  } else if (cleanPath === "/services") {
    cleanPath = "/experiences";
  } else if (cleanPath === "/tanzania-luxury-safari-guide") {
    cleanPath = "/kenya-vs-tanzania-safari";
  } else if (cleanPath === "/terms-conditions") {
    cleanPath = "/website-policy";
  } else if (cleanPath === "/why-use-a-luxury-travel-advisor") {
    cleanPath = "/our-story";
  } else if (cleanPath === "/azamara-cruises-guide") {
    cleanPath = "/azamara-cruises-guide-2026-2027";
  }

  const canonicalUrl = `https://www.tripsandships.com${cleanPath}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
