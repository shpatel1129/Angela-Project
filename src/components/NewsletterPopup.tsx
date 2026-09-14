import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

export const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [hasShownHome, setHasShownHome] = useState(false);
  const [hasShownBlog, setHasShownBlog] = useState(false);
  const location = useLocation();

  // Cleanup GHL global state and elements to prevent race conditions on page transitions
  const cleanupGHLState = () => {
    const customWindow = window as unknown as Window & {
      __GHL_EMBED_STATE__?: unknown;
      __ghl_iframe_resizer_initialized__?: unknown;
      __ghl_widget_initialized__?: unknown;
    };
    try {
      delete customWindow.__GHL_EMBED_STATE__;
      delete customWindow.__ghl_iframe_resizer_initialized__;
      delete customWindow.__ghl_widget_initialized__;
    } catch (e) {
      console.warn("Failed to delete global window properties:", e);
    }
  };

  // Preload the GHL embed script as soon as the component mounts,
  // BEFORE the popup is shown. This means by the time the user actually
  // sees the modal, the resizer script is already available and doesn't
  // add extra delay on top of the iframe's own load time.
  useEffect(() => {
    cleanupGHLState();

    const existingScript = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Show the popup on the Home page ('/') and Blog page ('/blog') after a 10-second delay.
  // Hide popup on other paths.
  useEffect(() => {
    const path = location.pathname;
    const isHome = path === "/";
    const isBlog = path === "/blog";

    if (!isHome && !isBlog) {
      setIsOpen(false);
      return;
    }

    if (isHome && hasShownHome) return;
    if (isBlog && hasShownBlog) return;

    let timer: ReturnType<typeof setTimeout>;

    const startTimer = () => {
      timer = setTimeout(() => {
        setIsOpen(true);
        if (isHome) {
          setHasShownHome(true);
        } else if (isBlog) {
          setHasShownBlog(true);
        }
      }, 5000); // 10 seconds delay
    };

    const handleLoad = () => {
      startTimer();
    };

    if (document.readyState === "complete") {
      startTimer();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [location.pathname, hasShownHome, hasShownBlog]);

  const handleClose = () => {
    setIsOpen(false);
    setIframeLoaded(false); // reset so the skeleton shows again next time
    setReloadKey((k) => k + 1); // force a brand-new iframe element on next open,
    // instead of reusing a stale/frozen one
  };

  // The iframe's onLoad event fires when its initial document loads —
  // NOT when GHL's widget has actually finished building the form inside
  // it. Treating onLoad as "content visible now" is what causes the
  // blank-popup flash. Instead, use onLoad as a starting signal, then
  // give the widget a short grace period to actually paint before
  // removing the skeleton.
  useEffect(() => {
    if (!isOpen || !iframeLoaded) return;

    const customWindow = window as unknown as Window & { iFrameResize?: () => void };
    if (typeof customWindow.iFrameResize === "function") {
      try {
        customWindow.iFrameResize();
      } catch (e) {
        console.error("Error invoking GHL iframe resizer:", e);
      }
    }
  }, [isOpen, iframeLoaded]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Premium Glassmorphic Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Premium Modal Container */}
      <div className="relative w-full max-w-lg bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800/80 p-5 md:p-6 overflow-hidden transform scale-100 transition-all duration-300 animate-in fade-in zoom-in-95 slide-in-from-bottom-10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 z-10"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Embedded LeadConnector Iframe */}
        <div className="w-full min-h-[472px] mt-2 relative">
          {/* Skeleton shown until the iframe actually finishes loading,
              so the user never sees blank whitespace */}
          {!iframeLoaded && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse"
              aria-hidden="true"
            >
              <div className="h-4 w-2/3 rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-4 w-1/2 rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-10 w-1/3 rounded bg-slate-300 dark:bg-slate-700 mt-2" />
            </div>
          )}

          <iframe
            key={reloadKey} // forces a completely fresh iframe element each time the popup reopens
            src="https://api.leadconnectorhq.com/widget/form/77632qYf0OrBtFKT4haf"
            style={{
              width: "100%",
              height: "472px",
              minHeight: "472px",
              border: "none",
              borderRadius: "8px",
              opacity: iframeLoaded ? 1 : 0,
              transition: "opacity 0.25s ease-in-out",
            }}
            id="inline-77632qYf0OrBtFKT4haf"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Trips and Ships Newsletter "
            data-height="472"
            data-layout-iframe-id="inline-77632qYf0OrBtFKT4haf"
            data-form-id="77632qYf0OrBtFKT4haf"
            title="Trips and Ships Newsletter "
            onLoad={() => {
              // Grace period: onLoad fires when the iframe's shell loads,
              // not when GHL's JS has finished rendering the actual form.
              // Waiting a beat before revealing prevents the blank flash.
              setTimeout(() => setIframeLoaded(true), 400);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;