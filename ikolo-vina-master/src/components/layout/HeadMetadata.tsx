// src/components/layout/HeadMetadata.tsx (SIMPLIFIÉ)
const HeadMetadata = () => {
  return (
    <>
      {/* Ces balises seront automatiquement gérées par React 19 */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      
      {/* PWA */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
      
      {/* Préchargement */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="image" href="/assets/fondHeader.png" />
    </>
  );
};

export default HeadMetadata;