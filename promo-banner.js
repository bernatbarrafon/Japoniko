(function () {
  'use strict';

  var navigation = document.querySelector('.header-nav');
  if (navigation && !navigation.querySelector('a[href="experiencias.html"]')) {
    var experiencesLink = document.createElement('a');
    experiencesLink.className = 'header-link';
    experiencesLink.href = 'experiencias.html';
    experiencesLink.textContent = 'Experiencias';
    navigation.insertBefore(experiencesLink, navigation.querySelector('a[href="blog.html"]') || null);
  }

  if (navigation && !navigation.querySelector('a[href="viajes-en-grupo.html"]')) {
    var groupTripsLink = document.createElement('a');
    groupTripsLink.className = 'header-link';
    groupTripsLink.href = 'viajes-en-grupo.html';
    groupTripsLink.textContent = 'Viajes en grupo';
    navigation.insertBefore(groupTripsLink, navigation.querySelector('a[href="experiencias.html"]') || null);
  }

  var itineraryDropdown = document.querySelector('.header-nav .nav-dropdown');
  if (itineraryDropdown) {
    var itineraryTrigger = itineraryDropdown.querySelector('.nav-trigger');
    var itineraryMenu = itineraryDropdown.querySelector('.nav-menu');
    if (itineraryTrigger) itineraryTrigger.href = 'itinerarios.html';
    if (itineraryMenu) {
      itineraryMenu.innerHTML =
        '<a href="itinerarios.html#japon-clasico">Japón clásico</a>' +
        '<a href="itinerarios.html#japon-tradicional">Japón tradicional</a>' +
        '<a href="itinerarios.html#luna-de-miel">Luna de miel</a>' +
        '<a href="itinerarios.html#japon-en-familia">Japón con niños</a>' +
        '<a href="itinerarios.html#japon-urbano">Japón urbano</a>' +
        '<a href="itinerarios.html#japon-tailandia">Combinado Japón y Tailandia</a>' +
        '<a href="itinerarios.html#japon-okinawa">Japón con Okinawa</a>';
    }
  }

  var storageKey = 'japoniko-cookies-accepted';
  try {
    if (window.localStorage.getItem(storageKey) === 'true') return;
  } catch (error) {
    // Si el navegador bloquea el almacenamiento, se mostrará en la siguiente visita.
  }

  var consent = document.createElement('aside');
  consent.className = 'cookie-consent';
  consent.setAttribute('role', 'dialog');
  consent.setAttribute('aria-modal', 'true');
  consent.setAttribute('aria-labelledby', 'cookie-consent-title');
  consent.innerHTML =
    '<div class="cookie-consent-copy">' +
      '<p id="cookie-consent-title">Cookies</p>' +
      '<span>Utilizamos cookies necesarias para que la web funcione correctamente.</span>' +
    '</div>' +
    '<button class="cookie-consent-accept" type="button">Aceptar</button>';

  document.body.appendChild(consent);
  window.requestAnimationFrame(function () { consent.classList.add('is-visible'); });

  consent.querySelector('.cookie-consent-accept').addEventListener('click', function () {
    try { window.localStorage.setItem(storageKey, 'true'); } catch (error) {}
    consent.classList.remove('is-visible');
    window.setTimeout(function () { consent.remove(); }, 240);
  });
}());
