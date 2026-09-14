(() => {
  const routes = {
    'japon-clasico': [
      ['Tokio', 'Llegada, traslado y primera vuelta por Shinjuku.'],
      ['Tokio', 'Asakusa, templo Sensō-ji y paseo junto al río Sumida.'],
      ['Tokio', 'Harajuku, Meiji Jingu, Omotesandō y Shibuya.'],
      ['Tokio', 'Akihabara, Ueno o Yanaka según tus intereses.'],
      ['Hakone', 'Tren a Hakone, lago Ashi, teleférico y ryokan con onsen.'],
      ['Kioto', 'Llegada y primera tarde por Gion y Ponto-chō.'],
      ['Kioto', 'Fushimi Inari, Kiyomizu-dera y calles de Higashiyama.'],
      ['Kioto', 'Arashiyama, bosque de bambú y templo Tenryū-ji.'],
      ['Nara', 'Excursión a Nara: Tōdai-ji, parque y Kasuga Taisha.'],
      ['Osaka', 'Dotonbori, Kuromon Market y ambiente de Namba.'],
      ['Osaka', 'Castillo de Osaka, Umeda y tarde libre para compras.'],
      ['Regreso', 'Traslado organizado al aeropuerto de Kansai.']
    ],
    'japon-tradicional': [
      ['Tokio', 'Llegada y paseo tranquilo por Shinjuku o Shibuya.'],
      ['Tokio', 'Asakusa, Ueno y mercados tradicionales.'],
      ['Tokio', 'Meiji Jingu, Harajuku y barrios contemporáneos.'],
      ['Kanazawa', 'Traslado en shinkansen y recorrido por Higashi Chaya.'],
      ['Kanazawa', 'Jardín Kenroku-en, castillo y mercado Ōmichō.'],
      ['Takayama', 'Viaje por los Alpes japoneses y casco histórico.'],
      ['Takayama', 'Mercados matinales, casas antiguas y Hida Folk Village.'],
      ['Kioto', 'Llegada a Kioto y tarde por Gion.'],
      ['Kioto', 'Fushimi Inari y Higashiyama a pie.'],
      ['Kioto', 'Kinkaku-ji, Ryoan-ji y Arashiyama.'],
      ['Nara', 'Tōdai-ji, parque de Nara y regreso a Kioto.'],
      ['Osaka', 'Traslado a Osaka y ruta gastronómica por Namba.'],
      ['Osaka', 'Umeda, Shinsekai o una excursión según el ritmo.'],
      ['Regreso', 'Últimas compras y traslado al aeropuerto.']
    ],
    'japon-extendido': [
      ['Tokio', 'Llegada y primera toma de contacto con la ciudad.'],
      ['Tokio', 'Asakusa, Ueno y Akihabara.'],
      ['Tokio', 'Harajuku, Meiji Jingu y Shibuya.'],
      ['Tokio', 'Ginza, Tsukiji y una tarde libre a tu ritmo.'],
      ['Matsumoto', 'Castillo de Matsumoto y noche en los Alpes japoneses.'],
      ['Takayama', 'Casco antiguo, mercados y gastronomía local.'],
      ['Shirakawa-go', 'Pueblo tradicional y llegada a Kanazawa.'],
      ['Kanazawa', 'Kenroku-en, barrio samurái y mercado Ōmichō.'],
      ['Kioto', 'Llegada, Gion y Ponto-chō.'],
      ['Kioto', 'Fushimi Inari, Kiyomizu-dera e Higashiyama.'],
      ['Kioto', 'Arashiyama, bambú y templos del oeste.'],
      ['Nara', 'Templos, ciervos y regreso a Kioto.'],
      ['Hiroshima', 'Memorial de la Paz y centro de Hiroshima.'],
      ['Miyajima', 'Santuario de Itsukushima y monte Misen.'],
      ['Osaka', 'Dotonbori, Namba y cocina de Osaka.'],
      ['Osaka', 'Castillo, Umeda y tiempo de compras.'],
      ['Osaka', 'Excursión a Kobe o día libre.'],
      ['Tokio', 'Regreso a Tokio en shinkansen y última noche.'],
      ['Regreso', 'Traslado al aeropuerto según el vuelo.']
    ],
    'japon-en-10-dias': [
      ['Tokio', 'Llegada y paseo por Shinjuku.'],
      ['Tokio', 'Asakusa, Ueno y Akihabara.'],
      ['Tokio', 'Harajuku, Meiji Jingu y Shibuya.'],
      ['Tokio', 'Mañana libre y shinkansen a Kioto.'],
      ['Kioto', 'Fushimi Inari y calles de Higashiyama.'],
      ['Kioto', 'Kinkaku-ji, Arashiyama y bosque de bambú.'],
      ['Kioto', 'Gion, Nishiki Market y tiempo a tu ritmo.'],
      ['Nara', 'Tōdai-ji, parque y ciervos.'],
      ['Osaka', 'Dotonbori, Namba y gastronomía.'],
      ['Regreso', 'Traslado al aeropuerto de Kansai.']
    ],
    'luna-de-miel': [
      ['Tokio', 'Llegada y cena especial en Shinjuku o Ginza.'],
      ['Tokio', 'Asakusa, paseo en barco y Tokio tradicional.'],
      ['Tokio', 'Harajuku, Omotesandō y mirador al atardecer.'],
      ['Tokio', 'Día libre con experiencia a elegir.'],
      ['Hakone', 'Ryokan, onsen privado y vistas del Fuji.'],
      ['Hakone', 'Lago Ashi, teleférico y cena kaiseki.'],
      ['Kioto', 'Llegada y primera noche por Gion.'],
      ['Kioto', 'Fushimi Inari, Kiyomizu-dera e Higashiyama.'],
      ['Kioto', 'Arashiyama y paseo junto al río Hozu.'],
      ['Kioto', 'Ceremonia del té o experiencia artesanal.'],
      ['Naoshima', 'Llegada a la isla y museos de arte.'],
      ['Naoshima', 'Benesse House, playas y arte al aire libre.'],
      ['Osaka', 'Traslado y noche gastronómica en Dotonbori.'],
      ['Osaka', 'Últimas compras y cena de despedida.'],
      ['Regreso', 'Traslado al aeropuerto de Kansai.']
    ],
    'japon-en-familia': [
      ['Tokio', 'Llegada y paseo por Shinjuku.'],
      ['Tokio', 'Asakusa, Sensō-ji y crucero por el río.'],
      ['Tokio', 'Ueno Zoo, museos o Akihabara según edades.'],
      ['Tokio', 'Tokyo DisneySea o parque temático a elegir.'],
      ['Tokio', 'Harajuku, Takeshita-dōri y Shibuya Sky.'],
      ['Hakone', 'Trenes de montaña, lago Ashi y ryokan.'],
      ['Hakone', 'Onsen familiar y vistas del Fuji.'],
      ['Kioto', 'Llegada y paseo por Gion al atardecer.'],
      ['Kioto', 'Fushimi Inari y templos de Higashiyama.'],
      ['Kioto', 'Arashiyama, bambú y paseo en barco opcional.'],
      ['Kioto', 'Mercado Nishiki y actividad familiar.'],
      ['Nara', 'Ciervos, parque y gran Buda de Tōdai-ji.'],
      ['Osaka', 'Universal Studios Japan o Dotonbori.'],
      ['Regreso', 'Traslado cómodo al aeropuerto.']
    ],
    'japon-slow': [
      ['Tokio', 'Llegada y primera noche sin prisas.'],
      ['Tokio', 'Asakusa, Ueno y cafés de barrio.'],
      ['Tokio', 'Harajuku, Meiji Jingu y Omotesandō.'],
      ['Tokio', 'Daikanyama, Nakameguro o tiempo libre.'],
      ['Tokio', 'Día flexible para museos, compras o excursión.'],
      ['Kanazawa', 'Traslado y barrio histórico de Higashi Chaya.'],
      ['Kanazawa', 'Kenroku-en, castillo y mercado Ōmichō.'],
      ['Kanazawa', 'Distrito samurái y talleres artesanos.'],
      ['Kioto', 'Llegada y Gion al atardecer.'],
      ['Kioto', 'Fushimi Inari e Higashiyama.'],
      ['Kioto', 'Arashiyama y templos occidentales.'],
      ['Kioto', 'Día libre para volver a lo que más te guste.'],
      ['Kinosaki', 'Llegada a ryokan y recorrido de onsens.'],
      ['Kinosaki', 'Mañana relajada y tren hacia Osaka.'],
      ['Osaka', 'Namba, Dotonbori y última cena.'],
      ['Regreso', 'Traslado al aeropuerto.']
    ],
    'japon-a-tu-ritmo': [
      ['Primer día', 'Llegada, traslado y una primera toma de contacto.'],
      ['Día 2', 'Empezamos por el barrio o ciudad que más te interese.'],
      ['Día 3', 'Combinamos visitas, reservas y tiempos reales de trayecto.'],
      ['Día 4', 'Incluimos una experiencia a medida: cultura, gastronomía o naturaleza.'],
      ['Día 5', 'Dejamos margen para descubrir sin ir con el reloj.'],
      ['Último día', 'Traslado al aeropuerto y todos los enlaces preparados.']
    ],
    'japon-urbano': [
      ['Tokio', 'Llegada y neones de Shinjuku.'],
      ['Tokio', 'Shibuya, Harajuku y Omotesandō.'],
      ['Tokio', 'Akihabara, Ginza y arquitectura contemporánea.'],
      ['Tokio', 'Shimokitazawa, Nakameguro y vida local.'],
      ['Tokio', 'Museos, diseño y noche por Shinjuku o Shibuya.'],
      ['Kioto', 'Llegada y contraste entre Gion y Ponto-chō.'],
      ['Kioto', 'Fushimi Inari e Higashiyama.'],
      ['Osaka', 'Dotonbori, Namba y mercados gastronómicos.'],
      ['Osaka', 'Umeda, America-mura y barrios de compras.'],
      ['Hiroshima', 'Memorial de la Paz y ciudad contemporánea.'],
      ['Miyajima', 'Santuario de Itsukushima y regreso a Osaka.'],
      ['Regreso', 'Traslado al aeropuerto.']
    ],
    'japon-naturaleza': [
      ['Tokio', 'Llegada y primera noche en la ciudad.'],
      ['Tokio', 'Asakusa, Ueno y jardines urbanos.'],
      ['Tokio', 'Meiji Jingu y parques de Tokio.'],
      ['Hakone', 'Lago Ashi, teleférico y ryokan con onsen.'],
      ['Hakone', 'Miradores del Fuji y senderos sencillos.'],
      ['Matsumoto', 'Castillo de Matsumoto y llegada a los Alpes.'],
      ['Kamikōchi', 'Valle, río Azusa y rutas entre montañas.'],
      ['Takayama', 'Casco antiguo, mercados y paisaje alpino.'],
      ['Kioto', 'Llegada y paseo por Gion.'],
      ['Kioto', 'Arashiyama, bambú y río Hozu.'],
      ['Kioto', 'Fushimi Inari y senderos de montaña.'],
      ['Koyasan', 'Monasterio, cementerio Okunoin y shukubō.'],
      ['Koyasan', 'Mañana en el monte Kōya y regreso a Osaka.'],
      ['Regreso', 'Traslado al aeropuerto.']
    ]
  };

  document.querySelectorAll('.itinerary.section[id]').forEach((section) => {
    const days = routes[section.id];
    if (!days) return;
    const grid = document.createElement('div');
    grid.className = 'daily-itinerary';
    grid.setAttribute('aria-label', 'Resumen día a día del itinerario');
    grid.innerHTML = days.map(([place, plan], index) => `
      <article class="daily-card">
        <span class="daily-card__day">DÍA ${String(index + 1).padStart(2, '0')}</span>
        <h3>${place}</h3>
        <p>${plan}</p>
      </article>`).join('');
    section.classList.add('daily-ready');
    section.querySelector('.itinerary-grid')?.insertAdjacentElement('afterend', grid);
  });

  const headings = {
    'japon-clasico': 'Primer viaje a <em>Japón.</em>',
    'japon-tradicional': 'Japón <em>tradicional.</em>',
    'japon-extendido': 'Japón <em>extendido.</em>',
    'japon-en-10-dias': 'Japón en <em>10 días.</em>',
    'luna-de-miel': 'Luna de miel en <em>Japón.</em>',
    'japon-en-familia': 'Japón en <em>familia.</em>',
    'japon-slow': 'Estancias <em>largas.</em>',
    'japon-a-tu-ritmo': 'Ruta <em>a medida.</em>',
    'japon-urbano': 'Japón <em>urbano.</em>',
    'japon-naturaleza': 'Japón y <em>naturaleza.</em>'
  };
  Object.entries(headings).forEach(([id, heading]) => {
    const title = document.querySelector(`#${id} .split-heading h2`);
    if (title) title.innerHTML = heading;
  });
})();
