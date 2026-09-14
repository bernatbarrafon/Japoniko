(() => {
  const isJapan = document.title.includes('Japoniko');
  const destination = isJapan ? 'Japón' : 'Tailandia';
  const brand = isJapan ? 'Japoniko' : 'Tailandiko';

  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.innerHTML = isJapan ? 'Planificación personalizada<br>para viajar por <em>Japón.</em>' : 'Planificación de viajes<br>a <em>Tailandia a medida.</em>';

  const trust = document.querySelector('.hero-trust');
  if (trust) trust.innerHTML = `<strong>Especialistas en ${destination}.</strong> ${brand} diseña rutas a medida basadas en conocimiento real del destino y una planificación cuidada.`;

  const detail = document.querySelector('.hero-detail');
  if (detail) detail.textContent = 'Cada propuesta incluye alojamientos, transportes, visitas y experiencias seleccionadas para que el viaje tenga una estructura clara desde el principio.';

  const quick = document.querySelector('.quick-signup');
  if (quick) quick.querySelector('div').innerHTML = `<p class="eyebrow">CONSULTA SIN COMPROMISO</p><p>Escríbenos por WhatsApp y resolveremos tus dudas sobre el viaje.</p>`;

  const processTitle = document.querySelector('.journey-process h2');
  if (processTitle) processTitle.textContent = 'Cómo trabajamos.';
  const processIntro = document.querySelector('.journey-process-intro');
  if (processIntro) processIntro.textContent = `Un método claro para diseñar un viaje a ${destination} coherente, práctico y adaptado a cada cliente.`;
  const process = document.querySelectorAll('.journey-process-steps article');
  const processText = [
    ['Primera llamada', 'En una llamada telefónica definimos fechas, presupuesto, intereses y prioridades.'],
    ['Diseñamos la ruta', 'Organizamos destinos, alojamientos, transportes y experiencias.'],
    ['Revisión y ajustes', 'Revisamos la propuesta hasta que encaje con el viaje que buscas.'],
    ['Seguimiento del viaje', 'Resolvemos dudas durante la preparación y, según la asesoría, también durante el viaje.']
  ];
  process.forEach((item, index) => {
    const content = processText[index];
    if (!content) return;
    const heading = item.querySelector('h3');
    const paragraph = item.querySelector('p');
    if (heading) heading.textContent = content[0];
    if (paragraph) paragraph.textContent = content[1];
  });

  document.querySelectorAll('.plan-price-card .signature-includes b').forEach((item) => {
    item.textContent = item.textContent.replace(/^[^\p{L}\p{N}]+/u, '');
  });
  const plans = document.querySelectorAll('.plan-price-card');
  const essential = plans[0];
  const signature = plans[1];
  if (essential) {
    essential.querySelector('.plan-summary').textContent = 'Para quien necesita una ruta completa y bien organizada.';
    essential.querySelector('.signature-includes').innerHTML = `
      <li><b>Llamada inicial</b><span>Definimos fechas, presupuesto, intereses y ritmo.</span></li>
      <li><b>Itinerario personalizado</b><span>Ruta día a día con alojamientos, transportes y visitas.</span></li>
      <li><b>Ajustes incluidos</b><span>Revisamos la propuesta hasta que encaje contigo.</span></li>
      <li><b>Seguimiento durante 30 días</b><span>Para resolver dudas antes del viaje.</span></li>`;
  }
  if (signature) {
    signature.querySelector('.plan-summary').textContent = 'Para quien quiere acompañamiento durante toda la preparación y el viaje.';
    signature.querySelector('.signature-includes').innerHTML = `
      <li><b>Todo lo incluido en Esencial</b><span>La planificación completa y sus ajustes.</span></li>
      <li><b>Búsqueda de vuelos</b><span>Opciones comparadas según horarios, escalas y precio.</span></li>
      <li><b>Gastroguía personalizada</b><span>Restaurantes y recomendaciones adaptadas a la ruta.</span></li>
      <li><b>WhatsApp durante el viaje</b><span>Contacto directo para dudas relacionadas con el itinerario.</span></li>
      <li><b>Videollamada final</b><span>Revisión antes de viajar con todo claro.</span></li>`;
  }
  document.querySelectorAll('.call-booking h2,.faq h2').forEach((title) => {
    title.querySelectorAll('br').forEach((br) => br.replaceWith(' '));
  });
  const callCopy = document.querySelector('.call-booking-copy > p:not(.section-label)');
  if (callCopy) callCopy.textContent = 'Selecciona una fecha y una hora. Confirmaremos la llamada lo antes posible.';
})();
