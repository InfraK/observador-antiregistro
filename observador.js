setInterval(() => {
  const cuerpo = document.querySelector('.cuerpo');
  cuerpo.classList.remove('fade');
}, 100);
const paywallBanner = document.querySelector('.paywall');
paywallBanner.parentElement.removeChild(paywallBanner);
