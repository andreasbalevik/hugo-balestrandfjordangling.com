/*
 * Analytics consent gate.
 *
 * Nothing analytics-related (Google Tag Manager, GA4, gtag.js, cookies) is
 * requested until the visitor actively accepts. Consent is stored in
 * localStorage under the key given in the banner's data-consent-key; a missing
 * or invalid value always means "not consented".
 *
 * Loading has two gates: the visitor must accept, and the build must be allowed
 * to load analytics (data-analytics-enabled, from utils/analytics-enabled.html).
 * Development and preview/branch builds render the surface but never inject a
 * loader.
 *
 * On acceptance: consent mode is set (analytics_storage granted,
 * ad_storage / ad_user_data / ad_personalization denied) BEFORE the loaders are
 * injected, then each loader is injected exactly once (idempotent).
 *
 * On rejection/withdrawal: the choice is stored as "rejected", available
 * first-party _ga cookies on the current host are cleared, and — if analytics
 * had already been active — the page reloads so any third-party code already
 * running is stopped. Browser JS cannot delete every possible third-party
 * cookie; this only clears first-party _ga/_gid cookies it can see.
 */
(function () {
  "use strict";

  var banner = document.getElementById("bfa-consent");
  if (!banner) return;

  var config = {
    key: banner.dataset.consentKey || "bfa-analytics-consent",
    gtm: banner.dataset.gtm || "",
    ga4: banner.dataset.ga4 || "",
    enabled: banner.dataset.analyticsEnabled === "true"
  };

  var KEY = config.key;
  var loaded = false;

  function readConsent() {
    try {
      return window.localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function storeConsent(value) {
    try {
      window.localStorage.setItem(KEY, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function clearGaCookies() {
    var host = window.location.hostname;
    var domains = [host, "." + host];
    var parts = host.split(".");
    if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));

    var names = document.cookie.split(";").map(function (c) {
      return c.split("=")[0].trim();
    });

    names.forEach(function (name) {
      if (name !== "_ga" && name !== "_gid" && name.indexOf("_ga_") !== 0) return;
      domains.forEach(function (domain) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
      });
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
  }

  function activate() {
    if (loaded) return;
    loaded = true;

    // Development and Netlify preview/branch deploys never load tracking, even
    // if the visitor accepts (see utils/analytics-enabled.html). The choice is
    // still stored, so the surface behaves identically everywhere.
    if (!config.enabled) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted"
    });
    window.gtag("js", new Date());

    if (config.ga4) {
      window.gtag("config", config.ga4);
      var gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.ga4);
      document.head.appendChild(gtagScript);
    }

    if (config.gtm) {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var first = d.getElementsByTagName(s)[0];
        var script = d.createElement(s);
        var dl = l !== "dataLayer" ? "&l=" + l : "";
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(i) + dl;
        first.parentNode.insertBefore(script, first);
      })(window, document, "script", "dataLayer", config.gtm);
    }
  }

  function showBanner(focusBanner) {
    if (!banner) return;
    banner.classList.remove("hidden");
    if (focusBanner && typeof banner.focus === "function") banner.focus();
  }

  function hideBanner() {
    if (!banner) return;
    banner.classList.add("hidden");
  }

  function onAccept() {
    storeConsent("accepted");
    activate();
    hideBanner();
  }

  function onReject() {
    var wasAccepted = readConsent() === "accepted";
    storeConsent("rejected");
    clearGaCookies();
    if (wasAccepted) {
      window.location.reload();
    } else {
      hideBanner();
    }
  }

  var acceptBtn = banner && banner.querySelector("[data-consent-accept]");
  var rejectBtn = banner && banner.querySelector("[data-consent-reject]");
  if (acceptBtn) acceptBtn.addEventListener("click", onAccept);
  if (rejectBtn) rejectBtn.addEventListener("click", onReject);

  document.querySelectorAll("[data-analytics-settings]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      showBanner(true);
    });
  });

  var consent = readConsent();
  if (consent === "accepted") {
    activate();
  } else if (consent === "rejected") {
    // Explicitly rejected: leave analytics off, keep the banner hidden.
  } else {
    showBanner(false);
  }
})();