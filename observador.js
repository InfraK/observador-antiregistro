setInterval(() => {
  const cuerpo = document.querySelector('.cuerpo');
  cuerpo.classList.remove('fade');
  const paywallBanner = document.querySelector('.paywall');
  paywallBanner.parentElement.removeChild(paywallBanner);
}, 100);
