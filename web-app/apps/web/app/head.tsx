export const size = { width: 32, height: 32 };
export default async function Head() {
  // Fetch favicon and icon URLs from your server
  const faviconUrl = "https://cdn.thrico.network/20241106-mpjsd.png";

  const iconUrl = "https://cdn.thrico.network/20241106-mpjsd.png";

  return (
    <>
      <link rel="icon" type="image/png" href={iconUrl} />
      <link rel="icon" type="image/png" href={iconUrl} />
      <link rel="shortcut icon" href={faviconUrl} />
      <link rel="icon" href={iconUrl} />
      <link rel="apple-touch-icon" href={iconUrl} />
      <link rel="apple-touch-icon-precomposed" href={iconUrl} />
    </>
  );
}
