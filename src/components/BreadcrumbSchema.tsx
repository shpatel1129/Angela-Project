import React from "react";
import { Helmet } from "react-helmet-async";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  /** Show visible breadcrumb nav above content (default: true) */
  showNav?: boolean;
}

/**
 * BreadcrumbSchema
 *
 * Renders both:
 *  1. A visible <nav aria-label="Breadcrumb"> for users
 *  2. A <script type="application/ld+json"> BreadcrumbList for search engines
 *
 * Usage:
 *   <BreadcrumbSchema items={[
 *     { name: "Home", url: "https://www.tripsandships.com/" },
 *     { name: "Experiences", url: "https://www.tripsandships.com/river-cruises" },
 *     { name: "River Cruises", url: "https://www.tripsandships.com/river-cruises" },
 *   ]} />
 */
const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({
  items,
  showNav = true,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {showNav && items.length > 1 && (
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3"
        >
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.url} className="flex items-center gap-1">
                  {isLast ? (
                    <span
                      className="text-gray-800 font-medium"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <>
                      <a
                        href={item.url}
                        className="hover:text-amber-700 transition-colors"
                      >
                        {item.name}
                      </a>
                      <span aria-hidden="true" className="text-gray-300">
                        ›
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
};

export default BreadcrumbSchema;
