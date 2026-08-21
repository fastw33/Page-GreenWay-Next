import Script from "next/script";
import { googleAdsId } from "@/config/googleAds";

export function GoogleAdsTag() {
  return (
    <>
      <Script
        id="google-ads-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsId}');
          `.trim(),
        }}
      />
    </>
  );
}
