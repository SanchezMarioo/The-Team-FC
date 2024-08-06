let jugadores;
const jugadoresRealMadrid = [
    {
        id: 1,
        nombre: "Thibaut Courtois",
        descripcion: "Portero belga con gran altura y habilidades en el juego aéreo.",
        posicion: "Portero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--656cf2f8-4ef9-485a-897c-c26f7ddca213/_80x501_COURTOIS_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 4, // No ha jugado esta temporada debido a lesión.
        goles: 0,
        porteriasImbatidas: 0,
        asistencias: 0,
        minutosJugados: 333,
        amarillas: 0,
        rojas: 0

    },
    {
        id: 2,
        nombre: "Andrey Lunin",
        descripcion: "Portero suplente ucraniano, con potencial y habilidades bajo los palos.",
        posicion: "Portero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b99107d5-9147-4e57-87b1-579f2eecd054/_80x501_LUNIN_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 6,
        goles: 0,
        asistencias: 0,
        porteriasImbatidas: 3,
        minutosJugados: 1890,
        amarillas: 2,
        rojas: 0

    },
    {
        id: 3,
        nombre: "Dani Carvajal",
        descripcion: "Lateral derecho español conocido por su capacidad ofensiva y resistencia defensiva.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d35c97d4-9d52-4647-85fd-7a83c4417d57/_80x501_CARVAJAL_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 18,
        goles: 1,
        asistencias: 4,
        minutosJugados: 1530,
        amarillas: 3,
        rojas: 0
    },
    {
        id: 4,
        nombre: "Éder Militão",
        descripcion: "Defensa central brasileño robusto y rápido, destaca en la recuperación de balones.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--44fa234b-efc7-441b-aa98-9c528ad0dd2f/_80x501_MILITAO_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 2, // Lesión temprana en la temporada.
        goles: 0,
        asistencias: 0,
        minutosJugados: 180,
        amarillas: 0,
        rojas: 0
    },
    {
        id: 5,
        nombre: "David Alaba",
        descripcion: "Defensor austriaco versátil, juega como central o lateral izquierdo.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--71b19691-7a56-4884-acdf-cd25628da7b1/_80x501_ALABA_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 14,
        goles: 1,
        asistencias: 2,
        minutosJugados: 1120,
        amarillas: 1,
        rojas: 0
    },
    {
        id: 6,
        nombre: "Antonio Rüdiger",
        descripcion: "Defensa central alemán fuerte y agresivo, con habilidades defensivas destacadas.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e3028543-896e-44e5-a374-ea0f0159b12c/_80x501_RUDIGER_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 18,
        goles: 1,
        asistencias: 0,
        minutosJugados: 1620,
        amarillas: 4,
        rojas: 0
    },
    {
        id: 7,
        nombre: "Fran García",
        descripcion: "Lateral izquierdo español con capacidad ofensiva y solidez defensiva.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7bb98b1e-66dd-4858-b73a-62bac0c386db/_80x501_FRAN_GARCIA_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 15,
        goles: 0,
        asistencias: 3,
        minutosJugados: 1000,
        amarillas: 2,
        rojas: 0
    },
    {
        id: 8,
        nombre: "Luka Modrić",
        descripcion: "Mediocampista croata veterano, destacado por su visión y precisión en los pases.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b31990ea-1fef-4689-b8e4-11f29f80f89d/_80x501_MODRIC_14.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 16,
        goles: 2,
        asistencias: 5,
        minutosJugados: 1040,
        amarillas: 1,
        rojas: 0
    },
    {
        id: 9,
        nombre: "Jude Bellingham",
        descripcion: "Mediocampista inglés joven, conocido por su capacidad para recuperar balones y atacar.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--148b1733-35e0-4a71-8551-0a86da537cde/_80x501_BELLINGHAM_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 18,
        goles: 13,
        asistencias: 5,
        minutosJugados: 1580,
        amarillas: 3,
        rojas: 0
    },
    {
        id: 10,
        nombre: "Eduardo Camavinga",
        descripcion: "Mediocampista francés versátil, juega en varias posiciones del centro del campo.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--50513eff-bc7d-47b7-9167-1e28b6378b74/_80x501_CAMAVINGA_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 16,
        goles: 1,
        asistencias: 3,
        minutosJugados: 1360,
        amarillas: 2,
        rojas: 0
    },
    {
        id: 11,
        nombre: "Aurélien Tchouaméni",
        descripcion: "Mediocampista francés fuerte en la recuperación y distribución del balón.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--dcf6e0fa-2bf3-46b9-af8c-e28d3adc32db/_80x501_TCHOUAMENI_15.app.png?preferwebp=true&width=288&height=384",
        partidosJugados: 15,
        goles: 1,
        asistencias: 2,
        minutosJugados: 1200,
        amarillas: 3,
        rojas: 0
    },
    {
            id: 12,
            nombre: "Brahim Díaz",
            descripcion: "Delantero español, ágil y creativo, con gran técnica.",
            posicion: "Delantero",
            UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--cb8869fe-71dd-485d-ad25-3cd72be2be4e/_80x501_BRAHIIM_15.app.png?preferwebp=true&width=288&height=384",
            partidosJugados: 17,
            goles: 5,
            asistencias: 4,
            minutosJugados: 1300,
            amarillas: 2,
            rojas: 0,
            edad: 24,
            nacionalidad: "Español"
        },
        {
            id: 13,
            nombre: "Federico Valverde",
            descripcion: "Mediocampista uruguayo con gran resistencia y capacidad tanto ofensiva como defensiva.",
            posicion: "Centrocampista",
            UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b49546ca-1b49-440a-afa8-0fb0fbb189c3/_80x501_VALVERDE_15.app.png?preferwebp=true&width=288&height=384",
            partidosJugados: 42,
            goles: 7,
            asistencias: 4,
            minutosJugados: 2900,
            amarillas: 2,
            rojas: 0,
            edad: 25,
            nacionalidad: "Uruguayo"
        },
        {
            id: 14,
            nombre: "Vinícius Júnior",
            descripcion: "Extremo brasileño con gran velocidad y habilidades de dribbling.",
            posicion: "Delantero",
            UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9040a59e-3a60-4d44-9435-6e9388109070/_80x501_VINI_15.app.png?preferwebp=true&width=288&height=384",
            partidosJugados: 39,
            minutosJugados: 1872,
            goles: 23,
            asistencias: 14,
            edad: 23,
            amarillas: 7,
            rojas: 0,
            edad: 24,
            nacionalidad: "Brasileño"
        },
        {
            id: 15,
            nombre: "Rodrygo Goes",
            descripcion: "Extremo brasileño ágil y talentoso, conocido por su capacidad para marcar goles.",
            posicion: "Delantero",
            UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--db4bf191-d289-49d4-98cd-058acd900978/_80x501_RODRYGO_15.app.png?preferwebp=true&width=288&height=384",
            partidosJugados: 40,
            goles: 19,
            asistencias: 10,
            edad: 23,
            nacionalidad: "Brasileño",
            minutosJugados: 2388,
            amarillas: 2,
            rojas: 0,
        },
        {
            id: 16,
            nombre: "Endrick",
            descripcion: "Joven delantero brasileño con gran velocidad y capacidad goleadora.",
            posicion: "Delantero",
            UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5ac9acb7-1dca-448e-a2c2-9c9f8eec0c6b/_80x501_ENDRICK_MONTAJE_1.app.png?preferwebp=true&width=288&height=384",
            partidosJugados: 15,
            goles: 10,
            asistencias: 3,
            edad: 18,
            nacionalidad: "Brasileño",
            minutosJugados: 1200,
            amarillas: 2,
            rojas: 0,
        },
        {
            id: 17,
            nombre: "Kylian Mbappé",
            descripcion: "Delantero francés con velocidad explosiva y habilidades goleadoras.",
            posicion: "Delantero",
            UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--81e3f946-179c-40aa-aea1-061824f84636/_80x501_MBAPPE_1__2_.app.png?preferwebp=true&width=288&height=384",
            partidosJugados: 45,
            goles: 40,
            asistencias: 12,
            edad: 25,
            nacionalidad: "Francés",
            amarillas: 3,
            rojas: 0,
            minutosJugados: 2700,

        }
    ];


const jugadoresResumen = [
    {
        id: 0,
        nombre: "Thibaut Courtois",
        descripcion: "Portero belga con gran altura y habilidades en el juego aéreo.",
        posicion: "Portero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--656cf2f8-4ef9-485a-897c-c26f7ddca213/_80x501_COURTOIS_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false

    },
    {
        id: 1,
        nombre: "Andrey Lunin",
        descripcion: "Portero suplente ucraniano, con potencial y habilidades bajo los palos.",
        posicion: "Portero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b99107d5-9147-4e57-87b1-579f2eecd054/_80x501_LUNIN_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false
    },
    {
        id: 2,
        nombre: "Dani Carvajal",
        descripcion: "Lateral derecho español conocido por su capacidad ofensiva y resistencia defensiva.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d35c97d4-9d52-4647-85fd-7a83c4417d57/_80x501_CARVAJAL_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false
    },
    {
        id: 3,
        nombre: "Éder Militão",
        descripcion: "Defensa central brasileño robusto y rápido, destaca en la recuperación de balones.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--44fa234b-efc7-441b-aa98-9c528ad0dd2f/_80x501_MILITAO_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false
    },
    {
        id: 4,
        nombre: "David Alaba",
        descripcion: "Defensor austriaco versátil, juega como central o lateral izquierdo.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--71b19691-7a56-4884-acdf-cd25628da7b1/_80x501_ALABA_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false
    },
    {
        id: 5,
        nombre: "Antonio Rüdiger",
        descripcion: "Defensa central alemán fuerte y agresivo, con habilidades defensivas destacadas.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e3028543-896e-44e5-a374-ea0f0159b12c/_80x501_RUDIGER_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false
    },
    {
        id: 6,
        nombre: "Fran García",
        descripcion: "Lateral izquierdo español con capacidad ofensiva y solidez defensiva.",
        posicion: "Defensa",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7bb98b1e-66dd-4858-b73a-62bac0c386db/_80x501_FRAN_GARCIA_15.app.png?preferwebp=true&width=288&height=384",
        jugadorNuevo : false
    },
    {
        id: 7,
        nombre: "Luka Modrić",
        descripcion: "Mediocampista croata veterano, destacado por su visión y precisión en los pases.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b31990ea-1fef-4689-b8e4-11f29f80f89d/_80x501_MODRIC_14.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 8,
        nombre: "Jude Bellingham",
        descripcion: "Mediocampista inglés joven, conocido por su capacidad para recuperar balones y atacar.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--148b1733-35e0-4a71-8551-0a86da537cde/_80x501_BELLINGHAM_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 9,
        nombre: "Eduardo Camavinga",
        descripcion: "Mediocampista francés versátil, juega en varias posiciones del centro del campo.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--50513eff-bc7d-47b7-9167-1e28b6378b74/_80x501_CAMAVINGA_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 10,
        nombre: "Aurélien Tchouaméni",
        descripcion: "Mediocampista francés fuerte en la recuperación y distribución del balón.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--dcf6e0fa-2bf3-46b9-af8c-e28d3adc32db/_80x501_TCHOUAMENI_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 11,
        nombre: "Brahim Díaz",
        descripcion: "Delantero español, ágil y creativo, con gran técnica.",
        posicion: "Delantero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--cb8869fe-71dd-485d-ad25-3cd72be2be4e/_80x501_BRAHIIM_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 12,
        nombre: "Federico Valverde",
        descripcion: "Mediocampista uruguayo con gran resistencia y capacidad tanto ofensiva como defensiva.",
        posicion: "Centrocampista",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b49546ca-1b49-440a-afa8-0fb0fbb189c3/_80x501_VALVERDE_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 13,
        nombre: "Vinícius Júnior",
        descripcion: "Extremo brasileño con gran velocidad y habilidades de dribbling.",
        posicion: "Delantero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9040a59e-3a60-4d44-9435-6e9388109070/_80x501_VINI_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 14,
        nombre: "Rodrygo Goes",
        descripcion: "Extremo brasileño ágil y talentoso, conocido por su capacidad para marcar goles.",
        posicion: "Delantero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--db4bf191-d289-49d4-98cd-058acd900978/_80x501_RODRYGO_15.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 15,
        nombre: "Endrick",
        descripcion: "Joven delantero brasileño con gran velocidad y capacidad goleadora.",
        posicion: "Delantero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5ac9acb7-1dca-448e-a2c2-9c9f8eec0c6b/_80x501_ENDRICK_MONTAJE_1.app.png?preferwebp=true&width=288&height=384"
    },
    {
        id: 16,
        nombre: "Kylian Mbappé",
        descripcion: "Delantero francés con velocidad explosiva y habilidades goleadoras.",
        posicion: "Delantero",
        UrlJugador: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--81e3f946-179c-40aa-aea1-061824f84636/_80x501_MBAPPE_1__2_.app.png?preferwebp=true&width=288&height=384"
    }
];
const realMadridNews = [
    {
      nombre: "Real Madrid-Chelsea: último partido de la pretemporada en Estados Unidos",
      subtitulo: "Los de Ancelotti disputan su tercer encuentro del DirectTV Soccer Champions Tour.",
      imagen: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--aabf6405-1cf9-4604-82fb-5676978dcbaf/ND_PREVIA_RM_CHELSEA_03_GettyImages_2164763036.app.png?preferwebp=true&width=1440",
      enlace: "https://www.realmadrid.com/es-ES/noticias/futbol/primer-equipo/previas/real-madrid-chelsea-ultimo-amistoso-de-la-pretemporada-06-08-2024"
    },
    {
      nombre: "El Real Madrid ya está en Charlotte",
      subtitulo: "El equipo llegó a Charlotte para enfrentar al Chelsea en su último amistoso de la pretemporada.",
      imagen: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--0bf87e20-bd5f-40af-a94f-62957c38fc65/ND_LLEGADA_CHARLOTTE_COURTOIS_1PC0457.app.png?preferwebp=true&width=1440",
      enlace: "https://www.realmadrid.com/es-ES/noticias/futbol/primer-equipo/actualidad/el-real-madrid-ya-esta-en-charlotte-04-08-2024"
    },
    {
      nombre: "Real Madrid 1-2 Barcelona: resumen, goles y resultado",
      subtitulo: "El equipo de Ancelotti cae ante el Barcelona en un emocionante Clásico de pretemporada.",
      imagen: "https://img.asmedia.epimg.net/resizer/v2/5ZLPBG47SDO5QFXMIYFVNAA2JM.jpg?auth=bb763107d75ebe4cdcff1f765ca8a554157dc5e4c396508b6f81a64bef77f5e5&width=644&height=362&focal=2391%2C1395",
      enlace: "https://as.com/futbol/real-madrid-barcelona-en-directo-amistoso-de-pretemporada-hoy-en-vivo-n/"
    },
    {
      nombre: "Oficial, Militao ya tiene fecha de regreso: al descubierto el partido en el que volverá al verde",
      subtitulo: "El defensa brasileño ya entrena con el grupo y está para jugar un partido.",
      imagen: "https://www.realmadridexclusivo.com/uploads/s1/20/99/62/9/oficial-militao-ya-tiene-fecha-de-regreso-al-descubierto-el-partido-en-el-que-volvera-al-verde_88_1000x563.jpeg",
      enlace: "https://www.realmadridexclusivo.com/curiosidades/oficial-militao-ya-tiene-fecha-regreso-descubierto-partido-en-volvera-verde_144395_102.html"
    },
    {
      nombre: "Güler sorprende a Ancelotti en la pretemporada",
      subtitulo: "El joven turco ha impresionado al técnico italiano con su mejora física y toma de decisiones.",
      imagen: "https://img.asmedia.epimg.net/resizer/v2/QFA3YPLMXZWIZDN2I6PAFDWSKI.jpg?auth=74983a8f8230ab68b5fc05d35cde885efefacc8c25fe8575980a7677298a7ad4&width=644&height=362&focal=3135%2C1740",
      enlace: "https://as.com/futbol/primera/guler-sorprende-a-ancelotti-n/"
    }
  ];

function cargarJugadores() {
    let jugadoresPorCategoria = {};

    // Agrupar jugadores por categoría (posición)
    for (let i = 0; i < jugadoresResumen.length; i++) {
        const jugador = jugadoresResumen[i];
                
        if (!jugadoresPorCategoria[jugador.posicion]) {
            jugadoresPorCategoria[jugador.posicion] = [];
        }
        jugadoresPorCategoria[jugador.posicion].push(jugador);
    }

    let jugadoresHTML = '';
    
    // Generar HTML para cada categoría (posición)
    for (const categoria in jugadoresPorCategoria) {
        jugadoresHTML += `<h2 class="pb-5 pt-5" id="${categoria}">${categoria}</h2><div class=" d-flex justify-content-start flex-row gap-5 flex-wrap categoria">`;
        const jugadores = jugadoresPorCategoria[categoria];
        for (let i = 0; i < jugadores.length; i++) {
            const jugador = jugadores[i];
            jugadoresHTML += `
                <div class="card" style="width: 20rem;">
                    <img src="${jugador.UrlJugador}" class="card-img-top fondoimg" alt="${jugador.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${jugador.nombre}</h5>
                        <p class="card-text">${jugador.descripcion}</p>
                        <p class="card-text"><small class="text-muted">${jugador.posicion}</small></p>
                        <button type="button" class="btn btn-dark" data-player-id=${jugador.id} data-bs-toggle="modal" data-bs-target="#exampleModal">Mas Información</button>
                    </div>
                </div>
            `;
        }
        jugadoresHTML += `</div>`;
    }

    // data-bs-toggle="modal" data-bs-target="#exampleModal"
    document.getElementById('jugadores').innerHTML = jugadoresHTML;
    cargarBtn();
}
function cargarNoticias() {
    let noticiasHTML = '';
    noticiasHTML+=`<h2 class="pb-5 pt-5">Noticias</h2><div class="row row-cols-1 row-cols-md-2 g-4">`;
    for (let i = 0; i < realMadridNews.length; i++) {
        const noticia = realMadridNews[i];
        noticiasHTML += `
            <div class="col d-flex justify-content-center">
            <div class="card mb-3" style="width:30rem">
                <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${noticia.nombre}</h5>
                    <p class="card-text">${noticia.subtitulo}</p>
                    <a href="${noticia.enlace}" class="btn btn-primary" target="_blank">Leer más</a>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('noticias').innerHTML = noticiasHTML;
}
// Asegúrate de que jugadoresRealMadrid es un objeto
function cargarBtn() {
    const botones = document.querySelectorAll('button');
    const modal = document.getElementById('exampleModal');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function (event) {
            const jugador = jugadoresRealMadrid[event.target.getAttribute('data-player-id')];
            modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content body">
                    <div class="modal-header body" id="cuerpo">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                    <div class="d-flex justify-content-space-around">
                        <h5 class="card-title">${jugador.nombre} - ${jugador.posicion} </h5>
                    </div>
                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body body">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <img src="${jugador.UrlJugador}" class="card-img-top fondoimg" alt="${jugador.nombre}">
                </div>
                <div class="col">
                    <h5 class="card-title pb-5">Estadísticas</h5>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col-6">
                        <p>Partidos Jugados</p>
                        <p>${jugador.partidosJugados}</p>
                    </div>
                    <div class="col-6">
                        <p>Minutos jugados</p>
                        <p>${jugador.minutosJugados}</p>
                    </div>
                    <div class="col-6">
                        <p>Goles</p>
                        <p>${jugador.goles}</p>
                    </div>
                    <div class="col-6">
                        <p>Asistencias</p>
                        <p>${jugador.asistencias}</p>
                    </div>
                    <div class="col-6">
                        <p>Tarjetas Amarillas</p>
                        <p>${jugador.amarillas}</p>
                    </div>
                    <div class="col-6">
                        <p>Tarjetas  
                        Rojas</p>
                        <p>${jugador.rojas}</p>
                    </div>
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
            `;
        }
        );
}
}


document.addEventListener('DOMContentLoaded', (event) => {
    cargarJugadores();
    cargarNoticias();
});