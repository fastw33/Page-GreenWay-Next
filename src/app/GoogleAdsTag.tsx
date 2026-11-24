import Script from "next/script";
import { googleAdsId } from "@/config/googleAds";

export function GoogleAdsTag() {
  return (
    <Script
      id="google-ads-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function () {
  window.dataLayer = window.dataLayer || [];

  function loadTag(priority) {
    if (document.getElementById('google-ads-tag')) return;
    const tag = document.createElement('script');
    tag.id = 'google-ads-tag';
    tag.async = true;
    tag.fetchPriority = priority;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(${JSON.stringify(googleAdsId)});
    document.head.appendChild(tag);
  }

  window.gtag = function () {
    window.dataLayer.push(arguments);
    if (arguments[0] === 'event' && arguments[1] === 'conversion') {
      loadTag('auto');
    }
  };

  window.gtag('js', new Date());
  window.gtag('config', ${JSON.stringify(googleAdsId)});

  const params = new URLSearchParams(window.location.search);
  if (['gclid', 'gbraid', 'wbraid'].some(function (key) { return params.has(key); })) {
    loadTag('auto');
    return;
  }

  function scheduleTag() {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(function () { loadTag('low'); }, { timeout: 1500 });
    } else {
      window.setTimeout(function () { loadTag('low'); }, 0);
    }
  }

  if (document.readyState === 'complete') {
    scheduleTag();
  } else {
    window.addEventListener('load', scheduleTag, { once: true });
  }
})();
        `.trim(),
      }}
    />
  );
}
