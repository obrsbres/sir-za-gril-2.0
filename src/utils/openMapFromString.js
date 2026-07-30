export default function openMapFromString({
  customerAddress,
  town = 'Beograd 11000',
  country = 'Serbia',
}) {
  const address = `${customerAddress}, ${town}, ${country}`;
  const encoded = encodeURIComponent(address);

  // Check if the user is on iOS, Android mobile, or Desktop
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);

  let url;
  if (isIOS) {
    url = `maps://?q=${encoded}`;
  } else if (isAndroid) {
    url = `geo:0,0?q=${encoded}`;
  } else {
    // Desktop or fallback: Universal Google Maps URL
    url = `https://google.com/maps/place/${encoded}`;
  }

  if (!isIOS && !isAndroid) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}
