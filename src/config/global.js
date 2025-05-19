export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Propuestas didácticas y metodológicas para abordar la enseñanza del juego, arte y la recreación.',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Propuestas de arte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El taller',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Dáctilo pintura',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelado de plastilina y arcilla',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'El <em>collage</em>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propuestas del juego',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El juego simbólico combinado con construcciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Los juegos sensoriales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Juegos motores',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pitluk, L. (2012). La modalidad de taller en el Nivel Inicial: recorrido y posibilidades para la educación actual: ( ed.). Homo Sapiens Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/67071?page=125',
    },
    {
      referencia:
        'Abarca Cazco, C. E. (2019). La dactilopintura en el desarrollo de la creatividad de los niños y niñas de cinco años de la Unidad Educativa San Felipe Neri de la Ciudad de Riobamba en el Periodo 2018-2019 (Bachelor´s thesis, Riobamba). ',
      link:
        'http://dspace.unach.edu.ec/bitstream/51000/5844/1/UNACH-FCEHT-PI-E.PARV-2019-000009.pdf',
    },
    {
      referencia:
        'Huaman Claros, O., & Reyes Salvador, E. R. (2010). Técnica del collage para mejorar la coordinación visomanual en los niños y niñas de 5 años de edad de la institución educativa Nº 430 Azapampa–Chilca. ',
      link:
        'https://repositorio.uncp.edu.pe/bitstream/handle/20.500.12894/2515/Huaman%20Claros-%20Reyes%20Salvador.pdf?sequence=1',
    },
    {
      referencia:
        'Icraft. (s.f). Modelado con arcilla - 118 ideas de fotos para niños de 1, 2, 3 y 4 años. Decorexpro.com. de ',
      link: 'https://icraft.decorexpro.com/es/applikacziya-iz-plastilina',
    },
    {
      referencia:
        'Valle Pajuelo, R. M. (2019). El modelado con plastilina y su relacion con el desarrollo creativo de los niños de cinco años. ',
      link:
        'https://repositorio.unjfsc.edu.pe/bitstream/handle/20.500.14067/6361/RUTH%20MARIELA%20VALLE%20PAJUELO.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Angulo, D. J. B., Estupiñán, A. A. P., Ramírez, M. P. V., Echeverría, C. A. P., Fischer, B. R. M., & Machado, J. D. P. (2023). Juegos psicomotrices y desarrollo de las habilidades motrices básicas en la Educación Física. Lecturas: Educación Física y Deportes, 28(302). ',
      link:
        'https://www.efdeportes.com/efdeportes/index.php/EFDeportes/article/download/3916/1891?inline=1',
    },
    {
      referencia:
        'Pitluk, L. (Coord.), Dente, L. & Weinstein, E. (2019). La centralidad del juego en la educación inicial: diferentes modalidades lúdicas: ( ed.). Homo Sapiens Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/129659?page=44',
    },
    {
      referencia:
        'Perdomo Chalan, J. J. (2022). Los juegos sensoriales táctiles y la identificación de figuras geométricas en objetos del entorno en niños de 4 a 5 años. ',
      link:
        'https://repositorio.uta.edu.ec/server/api/core/bitstreams/ac74e8b6-74de-4bd6-8dc2-6d6e373bc147/content',
    },
    {
      referencia:
        'Méndez Giménez, A. & Méndez Giménez, C. (2018). Los juegos en el currículum de la educación física: (5 ed.). Editorial Paidotribo.  ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/116859?page=162',
    },
    {
      referencia:
        'Cedeño-Holguín, C. E., & Lescay-Blanco, D. M. (2024). Actividades recreativas para fortalecer el desarrollo de la motricidad gruesa en los niños de 4 años de la Educación Inicial. MQRInvestigar, 8(1), 1011-1033. ',
      link:
        'https://www.researchgate.net/publication/377905288_Actividades_recreativas_para_fortalecer_el_desarrollo_de_la_motricidad_gruesa_en_los_ninos_de_4_anos_de_la_Educacion_Inicial',
    },
    {
      referencia:
        'Miñan, M. (4 de junio, 2024). 10 Ejemplos de circuitos motrices: Definición, Qué es, Diferencias, Significado y Usos. DefinicionWiki. ',
      link:
        'https://definicionwiki.com/circuitos-motrices-definicion-que-es-diferencias-significado-usos/ ',
    },
    {
      referencia:
        'Ramírez Carmona, I. (2009). 99 juegos de expresión corporal y musical: 5 años: ( ed.). Wanceulen Editorial.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33755?page=9',
    },
    {
      referencia:
        'Vergara, A. A. A., & Zambonino, J. M. B. (2024). Los circuitos lúdicos en las áreas de la psicomotricidad en educación inicial. Tesla Revista Científica, 4(1), e338-e338. h  ',
      link:
        'ttps://tesla.puertomaderoeditorial.com.ar/index.php/tesla/article/download/338/365',
    },
  ],
  glosario: [
    {
      termino: 'Cooperación',
      significado:
        'trabajo conjunto entre niños y docentes para lograr un objetivo común en actividades recreativas y artísticas, fomentando la empatía y el trabajo en equipo.',
    },
    {
      termino: 'Creatividad',
      significado:
        'capacidad para generar ideas originales o innovadoras, especialmente a través del arte y el juego, para enriquecer el proceso educativo.',
    },
    {
      termino: 'Diversión',
      significado:
        'experiencia placentera que motiva el aprendizaje mediante actividades lúdicas y recreativas.',
    },
    {
      termino: 'Empatía',
      significado:
        'habilidad para comprender y compartir los sentimientos de los demás, desarrollada a través de juegos grupales y actividades artísticas.',
    },
    {
      termino: 'Expresión',
      significado:
        'capacidad de comunicar pensamientos, emociones o ideas mediante el arte, la música, el teatro o el juego.',
    },
    {
      termino: 'Imaginación',
      significado:
        'facultad para crear imágenes y conceptos nuevos, potenciada por actividades lúdicas y artísticas.',
    },
    {
      termino: 'Interacción',
      significado:
        'relación y comunicación entre los niños y sus pares o docentes, fortalecida mediante actividades recreativas y colaborativas.',
    },
    {
      termino: 'Motricidad',
      significado:
        'desarrollo de habilidades físicas, ya sea fina o gruesa, mediante juegos y propuestas artísticas como el modelado o la pintura.',
    },
    {
      termino: 'Participación',
      significado:
        'implicación activa de los niños en actividades lúdicas, recreativas y artísticas, promoviendo el aprendizaje significativo.',
    },
    {
      termino: 'Socialización',
      significado:
        'proceso mediante el cual los niños aprenden a convivir, cooperar y relacionarse con los demás, facilitado por juegos y actividades recreativas.',
    },
  ],
}
