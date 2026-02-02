"use client";

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
}

// Google Analytics pageview tracking
export const pageview = (url: string, gaId: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', gaId, {
      page_path: url,
    });
  }
};

// Google Analytics event tracking
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default function Analytics({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID 
}: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (gaId && pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url, gaId);
    }
  }, [pathname, searchParams, gaId]);

  if (!gaId && !gtmId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}
    </>
  );
}

// Hook for tracking events
export function useAnalytics() {
  const trackEvent = (params: {
    action: string;
    category: string;
    label?: string;
    value?: number;
  }) => {
    event(params);
  };

  const trackFormSubmit = (formName: string) => {
    trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formName,
    });
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent({
      action: 'button_click',
      category: 'engagement',
      label: `${buttonName}${location ? ` - ${location}` : ''}`,
    });
  };

  const trackPhoneCall = (phoneNumber: string) => {
    trackEvent({
      action: 'phone_call',
      category: 'conversion',
      label: phoneNumber,
    });
  };

  const trackEmailClick = (email: string) => {
    trackEvent({
      action: 'email_click',
      category: 'conversion',
      label: email,
    });
  };

  const trackDownload = (fileName: string) => {
    trackEvent({
      action: 'download',
      category: 'engagement',
      label: fileName,
    });
  };

  const trackVideoPlay = (videoTitle: string) => {
    trackEvent({
      action: 'video_play',
      category: 'engagement',
      label: videoTitle,
    });
  };

  const trackMapInteraction = (action: 'zoom' | 'marker_click' | 'directions') => {
    trackEvent({
      action: 'map_interaction',
      category: 'engagement',
      label: action,
    });
  };

  return {
    trackEvent,
    trackFormSubmit,
    trackButtonClick,
    trackPhoneCall,
    trackEmailClick,
    trackDownload,
    trackVideoPlay,
    trackMapInteraction,
  };
}
