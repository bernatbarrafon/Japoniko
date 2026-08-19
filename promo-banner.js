(function () {
  'use strict';

  var storageKey = 'japoniko-promo-banner-closed';

  try {
    if (window.sessionStorage.getItem(storageKey) === 'true') return;
  } catch (error) {
    // Si el navegador bloquea el almacenamiento, el banner sigue funcionando.
  }

  var banner = document.createElement('aside');
  banner.className = 'promo-banner';
  banner.setAttribute('aria-label', 'Promoción Japoniko: 15% de descuento, código OCTUBRE');
  banner.innerHTML =
    '<button class="promo-close" type="button" aria-label="Cerrar promoción">×</button>' +
    '<div class="promo-main">' +
      '<div class="promo-identity"><span class="promo-mark" aria-hidden="true"><i></i><i></i></span><span>JAPONIKO</span></div>' +
      '<span class="promo-rule" aria-hidden="true"></span>' +
      '<p class="promo-discount">15%</p>' +
      '<p class="promo-title">de descuento</p>' +
      '<p class="promo-subtitle">Estamos de promoción</p>' +
    '</div>' +
    '<div class="promo-code"><span>Código:</span><strong>OCTUBRE</strong></div>';

  document.body.appendChild(banner);
  window.requestAnimationFrame(function () { banner.classList.add('is-visible'); });

  banner.querySelector('.promo-close').addEventListener('click', function () {
    banner.classList.remove('is-visible');
    banner.classList.add('is-closing');
    try { window.sessionStorage.setItem(storageKey, 'true'); } catch (error) {}
    window.setTimeout(function () { banner.remove(); }, 520);
  });
}());
