<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Propuestas de arte'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Durante esta unidad se explorarán propuestas didácticas y metodológicas para la enseñanza del juego, el arte y la recreación. Estas estrategias son esenciales para el desarrollo integral de los niños en la primera infancia, ya que fomentan el aprendizaje a través de actividades lúdicas, artísticas y recreativas, promoviendo el desarrollo cognitivo, emocional y social.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] El taller
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Según Pitluk (2012), el taller es una de las metodologías más relevantes en la educación inicial, ya que promueve el aprendizaje práctico. A través de esta modalidad, los niños aprenden haciendo: pintar pintando, modelar modelando y reflexionar a través de la observación. Este enfoque permite abordar tareas complejas de manera colaborativa, fomentando el logro compartido y el descubrimiento de habilidades individuales y colectivas.
    
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El trabajo grupal en el taller no solo implica compartir un espacio, sino también construir de manera conjunta. Cada participante aporta y se responsabiliza del resultado final, permitiendo que los niños aprendan entre ellos, asignen roles según sus intereses y comprendan la importancia de la reflexión colectiva. Esta metodología también se aplica en talleres de formación artística para adultos, donde se observa, debate e interactúa sobre las obras con la guía de un maestro.
        p Los docentes pueden enfrentar dificultades al aceptar las decisiones de sus estudiantes en proyectos artísticos, ya que suelen tener una visión predeterminada del resultado. Sin embargo, el objetivo principal es fomentar la autonomía y la expresión individual de los niños. En este sentido, el rol del docente debe centrarse en ser un facilitador, proporcionando herramientas y apoyo para que los estudiantes exploren sus propias ideas y tomen decisiones creativas. Para ello, es recomendable:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 01
          p.mb-0 Presentar diversas opciones.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
            h5.mb-2 02
            p.mb-0 Ayudar a resolver problemas técnicos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 03
          p.mb-0 Respetar y valorar las elecciones de los niños.
    
    

    .row.mb-5.justify-content-center
      .col-6.col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        h2(data-aos="fade-left") Taller de anilinas: exploración y creatividad
        p(data-aos="fade-left") Este taller, titulado "Pintando con anilinas", consta de seis sesiones de hora y media cada una. Se centra en la exploración de las anilinas básicas, tintas transparentes utilizadas en la industria para teñir diversos materiales. A diferencia de las fibras, que también contienen tintas transparentes, las anilinas permiten trabajar con esta cualidad de forma más explícita, similar a la técnica utilizada en historietas y dibujos animados. (Pitluk, 2012).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Objetivos y contenidos del taller:</b> el objetivo principal del taller es que los niños descubran las características y posibilidades expresivas de la anilina. A través de la experimentación, aprenderán a pintar por transparencias, superponiendo colores para crear nuevos tonos. También explorarán la compatibilidad de la anilina con otros materiales y realizarán producciones plásticas tanto individuales como grupales, incluyendo obras de gran formato.
        .bg-color-2.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Metodología y beneficios del taller:</b> el taller busca que los niños se familiaricen con un material poco común en el ámbito escolar y exploren sus propiedades únicas. Al trabajar con anilinas, los niños podrán comprender mejor el concepto de transparencia y la formación de colores a través de la superposición. Además, el taller fomenta el trabajo en grupo y la realización de proyectos a gran escala, lo que contribuye al desarrollo de habilidades sociales y creativas. (Pitluk, 2012).
    
    p.mb-4 Este encuentro introduce en la exploración y experimentación con anilinas, fomentando la creatividad y el análisis de sus propiedades a través de actividades grupales e individuales.

    .bg-full-width-2.bg-color-3
      .px-4.px-md-5.pb-md-3
        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-white
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/6.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Materiales utilizados
                  p Soportes de papel de diario, cartulinas y papel satinado; pinceles, hisopos, vasos transparentes y esponjas (solo para mojar los soportes); anilinas básicas en amarillo canario, azul metilo y rodamina (o magenta); rollitos de lana de acero y limpiador cremoso para limpiar las mesas. Se enfatiza que las esponjas no deben usarse para pintar directamente. (Pitluk, 2012).
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/7.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Actividad 1: exploración grupal
                  p El grupo completo explora las propiedades de las anilinas. Un niño prueba el material en papel de diario y describe sus características. Se observa su liquidez, transparencia y secado rápido. Luego, otro niño prueba un color diferente y lo superpone para analizar los cambios. El docente guía la actividad con preguntas sobre textura, similitudes con otros materiales y efectos de la mezcla de colores.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/8.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Actividad 2: experimentación en subgrupos
                  p Los niños se dividen en grupos de 5 o 6 integrantes para pintar en un soporte grupal con los tres colores de anilina. Usan diferentes herramientas (pinceles e hisopos) y prueban superponer colores en soportes secos y húmedos. Se asigna un vaso y herramientas específicas para cada color, evitando el intercambio de pinceles. El docente supervisa y facilita el intercambio entre los niños. (Pitluk, 2012).
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/9.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Puesta en común y reflexión
                  p Cada grupo comparte sus descubrimientos sobre el material, comparándolo con otras técnicas de pintura. El docente guía el debate sobre los colores iniciales y los obtenidos, las herramientas empleadas y las diferencias entre pintar en soportes secos y húmedos. Se analiza el uso de pinceles e hisopos con este material líquido. (Pitluk, 2012).
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/10.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Síntesis, cierre y evaluación
                  p Se realiza una síntesis del taller, se cierra la sesión y se evalúa la experiencia.
    
    
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 La expresión artística en el desarrollo integral de la educación inicial
                      p.mb-0 Para profundizar en este tema, se recomienda consultar el siguiente artículo:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://polodelconocimiento.com/ojs/index.php/es/article/download/3964/9226 " target="_blank")
                        span.bg-color-4 Ir al sitio
                        i.fas.fa-arrow-right

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Dáctilo pintura
    
    p.mb-4 La pintura de dedos es una técnica artística que permite a los niños explorar colores y texturas de manera libre y creativa. Es una actividad ampliamente utilizada en la educación inicial debido a sus múltiples beneficios para el desarrollo integral de los niños (Abarca Cazco, 2019).

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-2
                h5 Beneficios de la pintura de dedos:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Desarrollo motor:</b> favorece la coordinación ojo-mano y las destrezas motoras finas, fundamentales para escribir y manipular objetos pequeños.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Estimulación sensorial:</b> involucra los sentidos del tacto, la vista y, en algunos casos, el olfato, permitiendo una experiencia multisensorial.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Creatividad y expresión emocional:</b> facilita la libre expresión de ideas, pensamientos y emociones, estimulando la imaginación.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Bienestar emocional:</b> al ser una actividad relajante y divertida, reduce el estrés y fortalece la autoestima.
              .col-lg-4(data-aos="zoom-in").order-1
                img.img-fluid(src='@/assets/curso/tema1/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 
    
    p.mb-4 Abarca Cazco (2019) propone diversas actividades para aplicar la dactilopintura en la educación inicial. Estas técnicas de pintura permiten a los niños experimentar con el color y la creatividad a través del movimiento, el contacto y el juego con diferentes materiales: 

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pintura de goteo
                p.text-center Se diluye la pintura con agua y se deja caer en el centro del papel. Al sostenerlo por los extremos, la pintura se mueve y crea manchas. Se pueden añadir capas de distintos colores para lograr efectos visuales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pintura con pajita
                p.text-center Se vierten gotas de pintura aguada en el papel y el niño sopla a través de una pajita para extender la pintura. Es importante supervisar la actividad para evitar la aspiración accidental.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pintura escurriendo
                p.text-center Se emplea pintura ligera de témpera, que se deja escurrir sobre un papel para crear formas espontáneas con diversos colores.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pintura soplando
                p.text-center Se mezcla témpera con agua y se colocan gotas sobre una hoja. Luego, con un sorbete cortado, se sopla para dispersar la pintura y generar figuras abstractas. La mezcla debe ser homogénea y sin grumos para un mejor resultado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Paisajes con huellas
                p.text-center Se crean escenas simples como campos de flores, bosques o cielos estrellados utilizando las huellas de los dedos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Animales y figuras
                p.text-center Se forman animales u objetos con las huellas dactilares y se completan los detalles con lápices de colores o marcadores.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Árbol de manos
                p.text-center Se dibuja el tronco de un árbol y los niños utilizan sus manos para estampar hojas y ramas, creando un árbol colectivo.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/12.png', alt='')
    
    p.mb-4 Los materiales de arte infantil permiten a los niños explorar su creatividad a través de diferentes texturas y técnicas: 
    
    .bg-full-width-2.bg-color-3
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/20.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Ceras")
                p Se pueden aplicar sobre diversas superficies. Para optimizar su uso, se recomienda barnizarlas con cola plástica diluida en agua o cubrirlas con papel de aluminio para evitar manchas y facilitar la superposición de colores.
              .div(titulo="Témpera")
                p Fácil de aplicar con pincel o con las manos, su limpieza se realiza con agua. Puede prepararse mezclando color en polvo, agua y cola, ofreciendo una alternativa accesible y segura para los niños.
              .div(titulo="Pintura de dedos y tizas")
                p La pintura de dedos es lavable y se puede elaborar en casa, aunque es perecedera. Las tizas, además de su uso en pizarras, pueden aplicarse sobre papel, ampliando sus posibilidades creativas.
              .div(titulo="Acuarelas")
                p No son las más adecuadas para niños pequeños, ya que requieren mayor destreza.
              .div(titulo="Pinturas caseras")
                p Se pueden elaborar hirviendo ingredientes naturales como remolacha o zanahorias para obtener pigmentos seguros. Otra opción es mezclando harina, azúcar, agua, maicena y colorante natural.
              .div(titulo="Lápices de colores")
                p Una opción clásica y versátil en el ámbito artístico.
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Actividades con dactilopintura
                      p.mb-0 Si desean conocer más actividades con dactilopintura, como el estampado y el teñido, pueden visitar el siguiente blog:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://raquelbiotmoramagisterio2t.blogspot.com/2015/12/tecnicas-pictoricas-para-la-educacion.html" target="_blank")
                        span.bg-color-4 Ir al sitio
                        i.fas.fa-arrow-right

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Modelado de plastilina y arcilla
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") Para comprender el modelado, es importante conocer las características de la plastilina y la arcilla. Ambos materiales han sido ampliamente utilizados en el ámbito artístico y educativo, permitiendo el desarrollo de habilidades motoras y la creatividad en los niños.
        h2(data-aos="fade-left") Plastilina: origen y características
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              
              p.mb-0 Según Valle Pajuelo (2019), la plastilina se originó a partir de la arcilla mezclada con aceite para mantener su flexibilidad. Con el tiempo, la industria incorporó otros ingredientes, transformándola en una masa plástica de diversos colores, popular entre los niños y ampliamente utilizada en la educación.
    
    p.mb-4 La evolución de la plastilina ha pasado por diversas etapas que han permitido su adaptación al ámbito educativo y artístico. A continuación, se presentan algunos hitos clave en su desarrollo:

    div.bg-color-info.p-5.mb-5
      figure
        img(src="@/assets/curso/tema1/23.svg", data-aos="zoom-in")
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-2
                h5 La plastilina se ha convertido en un material esencial en la educación inicial gracias a sus múltiples beneficios. Sus ventajas en el desarrollo infantil se pueden resumir en los siguientes puntos:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Desarrollo de la motricidad fina:</b> mejora la coordinación y la destreza manual.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Expresión artística:</b> permite a los niños explorar su creatividad de forma accesible.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Material reutilizable:</b> no se endurece y puede moldearse múltiples veces
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Reducción del estrés:</b> su manipulación tiene un efecto relajante.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Facilidad de uso:</b> es económica, fácil de transportar y se adapta a diferentes actividades.
              .col-lg-4(data-aos="zoom-in").order-1
                img.img-fluid(src='@/assets/curso/tema1/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 

    .row.mb-5.justify-content-center
      .col-6.col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") Aunque presenta muchas ventajas, la plastilina también tiene algunas limitaciones. La siguiente tabla presenta un resumen de sus principales ventajas y desventajas:
        p La plastilina es un material ampliamente utilizado en educación y arte debido a su versatilidad y facilidad de uso. Sin embargo, presenta tanto beneficios como limitaciones que deben considerarse al elegirla como recurso didáctico.
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ventajas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ventajas
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Disponible en variedad de colores y calidades.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fácil de manipular y transportar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Permite el desarrollo de figuras y maquetas.
  
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/26.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desventajas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Desventajas
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Algunas plastilinas pueden contener materiales tóxicos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Puede ensuciar las manos y superficies.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Dependiendo de la calidad, algunas pueden ser demasiado blandas o duras.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/27.png', alt='')
    
    h2.mb-5(data-aos="fade-left") Arcilla: propiedades y preparación
  
    .bg-full-width.bg-color-13.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white La arcilla es un material inorgánico que se encuentra en diversas regiones del país y es apreciada por su plasticidad cuando está húmeda. Se puede recolectar en lugares como bordes de acequias, riachuelos y faldas de cerros. Sus colores pueden ser rojizo, negro, blanco, ocre, gris y marrón (Valle Pajuelo, 2019).
              .col-lg-3(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/28.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Para poder utilizar la arcilla en actividades artísticas o educativas, es necesario un proceso previo de preparación. A continuación, se presentan los pasos esenciales para su correcta manipulación:

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/29.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Molienda
                p.mb-0 Si está seca, se muele hasta obtener un polvo fino sin piedras ni grumos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/30.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Hidratación
                p.mb-0 Se añade agua poco a poco hasta obtener una masa pegajosa.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/31.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Amasado
                p.mb-0 Se trabaja la arcilla durante 20 minutos hasta que deje de pegarse en las manos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/32.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Conservación
                p.mb-0 Se guarda en una bolsa plástica bien cerrada para mantener su humedad.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El uso de la arcilla aporta beneficios significativos al desarrollo infantil. Algunas de sus principales ventajas son:
    
        .bg-color-5.px-4.pt-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema1/34.svg", style="max-width: 187px").mx-auto
            .col-lg.order-1
              ul.mb-0.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Permite a los niños explorar texturas y desarrollar la fuerza en sus manos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Su manipulación favorece el desarrollo kinestésico y la creatividad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 No es necesario endurecer las creaciones, permitiendo una exploración libre.
    
    h2(data-aos="fade-left") Técnicas de modelado con plastilina y arcilla
    p.mb-5 El modelado es una técnica que permite la creación de figuras tridimensionales a partir de la manipulación manual de materiales como plastilina y arcilla. Existen diversas formas de modelado, cada una con características específicas. A continuación, se presentan algunas de las técnicas más utilizadas:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modelado por amasado	
                p.text-center Se moldea la masa utilizando la presión de las manos para formar figuras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Bolitas y fideos	
                p.text-center Técnica inicial donde los niños crean esferas y cilindros sin un objetivo definido, fomentando la exploración.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/38.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modelado libre	
                p.text-center Los niños crean formas sin restricciones, permitiendo el desarrollo de la imaginación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/39.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estampado y texturas	
                p.text-center Se utilizan herramientas o elementos naturales para crear texturas sobre la superficie.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modelado con volumen	
                p.text-center Se trabaja la tridimensionalidad combinando diferentes formas para representar objetos específicos.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/35.png', alt='')
    
    h2.mb-5(data-aos="fade-left") El modelado como proceso creativo

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/41.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El modelado es la creación de una representación tridimensional de un objeto real utilizando materiales como plastilina, arcilla o madera. Este proceso permite comprender y explicar mejor ciertos conceptos mediante la observación y la manipulación (Valle Pajuelo, 2019).
    
    p.mb-4 Además de su aplicación en escultura, el modelado también se emplea en la pintura para sugerir volumen a través del uso de luces y sombras. A lo largo de la historia del arte, esta técnica ha evolucionado y ha sido utilizada en distintas corrientes artísticas. La siguiente tabla resume algunas de sus aplicaciones más representativas:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/42.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Pintura rupestre
              p.mb-0 Uso de colores básicos y trazos simples para representar volumen.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/43.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Renacimiento
              p.mb-0 Gradación de tonos para crear profundidad y realismo.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/44.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tenebrismo
              p.mb-0 Contrastes marcados entre luces y sombras para dar dramatismo.
    
    h2(data-aos="fade-left") Preparación inicial	
    p.mb-5 Se recomienda dibujar una plantilla en cartón antes de modelar la plastilina, facilitando así la formación de la figura deseada. (Icraft, s.f.).

    .bg-full-width-2.bg-color-3
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema1/45.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-1
        
            AcordionA(tipo="b")
              .div(titulo="Preparación inicial")
                p Se recomienda dibujar una plantilla en cartón antes de modelar la plastilina, facilitando así la formación de la figura deseada. (Icraft, s.f.).
              .div(titulo="Técnicas para crear texturas y rellenos")
                p El manchado consiste en amasar la plastilina hasta que esté blanda y extenderla sobre el cartón, ideal para fondos y grandes áreas. Se pueden modelar detalles en tres dimensiones para mayor realce. (Icraft, s.f.).
              .div(titulo="Técnicas para crear detalles y bordes")
                p La técnica de bolas de plastilina permite rellenar contornos y resaltar puntos específicos. El aplanamiento consiste en pegar una bola de plastilina y presionarla con el dedo para darle forma plana. (Icraft, s.f.).
              .div(titulo="Técnicas para esculpir y dar forma")
                p El rascado se usa para crear patrones y texturas tallando diseños sobre plastilina aplanada con una herramienta. El raspado implica aplicar plastilina con el dedo y extenderla en pinceladas. (Icraft, s.f.).
              .div(titulo="Técnicas para crear líneas y contornos")
                p La técnica de rodillos permite formar cilindros o “salchichas” de plastilina de distintos grosores, útiles para delinear figuras y bordes. (Icraft, s.f.).
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Técnicas para el modelado de arcilla y plastilina
                      p.mb-0 Si desean observar más técnicas para el modelado de la arcilla y la plastilina, les dejamos el siguiente blog:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://icraft.decorexpro.com/es/applikacziya-iz-plastilina" target="_blank")
                        span.bg-color-4 Ir al sitio
                        i.fas.fa-arrow-right
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] El <em>collage</em>
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/46.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/47.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El collage es una técnica artística basada en el pegado de diversos materiales sobre una superficie. Su origen proviene del término francés coller, que significa pegar. Esta forma de arte permite combinar distintos elementos como papel, plástico, madera, cartón y objetos reutilizados, lo que da lugar a composiciones únicas que integran dibujo, pintura y texturas variadas (Huaman & Reyes, 2010).
        p(data-aos="fade-left") Según Quintana (2005), citado por Huaman y Reyes (2010), el collage es un medio de expresión libre que permite explorar la creatividad a través de la manipulación de materiales como revistas, aserrín y cáscaras de huevo. Por otro lado, Rollano (2005) resalta que esta técnica facilita la comprensión de la bidimensionalidad y mejora la coordinación visomanual. Pérez (2002) enfatiza su accesibilidad y versatilidad en el uso de múltiples materiales, convirtiéndolo en un recurso artístico y educativo clave.
    
    .bg-full-width.bg-color-13.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white Varios autores, como Gálvez (1999) e Hinostroza (2000), mencionan que el collage involucra actividades como rasgar, cortar y pegar, permitiendo a los niños desarrollar habilidades motoras y explorar su entorno a través de la manipulación de materiales. Más allá de su valor estético, el collage es una herramienta educativa que fomenta el aprendizaje y la creatividad en la infancia (Huaman & Reyes, 2010).
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/48.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Clasificación del collage según los materiales empleados
    p.mb-5 Existen diferentes tipos de collage, los cuales pueden clasificarse según los materiales utilizados. A continuación, se presentan algunas de las categorías más comunes:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/49.png")
            .col-lg-7
              h5 <em>Collage</em> con papel y cartulina
              p Incluye técnicas como el rasgado de papel, donde los niños crean texturas con sus manos, y el uso de tijeras para un pegado más preciso.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/50.png")
            .col-lg-7
              h5 <em>Collage</em> con materiales sólidos (ensamblaje)
              p En Francia, se conoce como <em>assemblage</em>. Utiliza fragmentos de madera, tejidos, metales y otros objetos reciclados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/51.png")
            .col-lg-7
              h5 <em>Collage</em> con relieve de pintura
              p Aplica capas gruesas de pintura para generar un efecto tridimensional. Requiere soportes resistentes debido al peso de la pintura.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/52.png")
            .col-lg-7
              h5 <em>Collage</em> con elementos naturales
              p Usa materiales como papel periódico, flores secas, cáscaras de semillas y lana para añadir texturas orgánicas.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/53.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El collage puede realizarse tanto de manera individual como en grupo, adaptándose a distintas edades. Para los niños pequeños, se recomienda empezar con un solo tipo de material y aumentar la complejidad progresivamente. Además, el collage puede integrarse con otras técnicas como el dibujo y la pintura, enriqueciendo aún más la experiencia creativa.
    
    h2(data-aos="fade-left") Importancia del collage en la educación
    p.mb-5 El collage es una herramienta educativa significativa que fomenta la creatividad y el desarrollo de habilidades motoras. Rollano (2005) destaca que esta técnica permite a los niños experimentar con diferentes materiales, promoviendo el descubrimiento de nuevas combinaciones visuales. Su importancia en el aprendizaje se debe a múltiples factores, entre ellos:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/54.svg" alt="" style="width: 90px")
              h5.text-center Desarrollo de la psicomotricidad fina
              p.mb-0.text-center Mejora la coordinación visomanual al trabajar con distintos materiales y herramientas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/54.svg" alt="" style="width: 90px")
              h5.text-center Estimulación del pensamiento creativo
              p.mb-0.text-center Permite la exploración de texturas, colores y formas de manera libre.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/54.svg" alt="" style="width: 90px")
              h5.text-center Accesibilidad y bajo costo
              p.mb-0.text-center Es una actividad sencilla y económica, lo que facilita su implementación en diferentes contextos educativos.
    
    div.bg-color-9.px-4.px-md-5
      .row.align-items-center
        .col-lg-auto.order-2
          img(src="@/assets/curso/tema1/55.svg", style="max-width: 190px").mx-auto
        .col-lg.order-1
          p.mb-0 Es fundamental recordar que el valor del collage radica en el proceso creativo más que en el resultado final. Evaluar el desarrollo de la actividad fomenta el pensamiento divergente en los niños, fortaleciendo su capacidad de exploración e innovación (Huaman & Reyes, 2010).
    .bg-color-white.shadow-soft.p-4
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Técnicas de arte pictórico infantil y <em>collage</em>
              p.mb-0 Para conocer más sobre las diferentes técnicas trabajadas en esta sesión y el collage, les dejamos el siguiente video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=GXHXSHK0vDo" target="_blank")
                span.bg-color-4 Ver video
                i.fas.fa-arrow-right


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/67071?page=125" target="_blank" rel="noopener noreferrer") Pitluk, L. (2012). La modalidad de taller en el Nivel Inicial: recorrido y posibilidades para la educación actual: ( ed.). Homo Sapiens Ediciones.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://raquelbiotmoramagisterio2t.blogspot.com/2015/12/tecnicas-pictoricas-para-la-educacion.html" target="_blank" rel="noopener noreferrer") Perfil, V. T. mi. (s.f). TÉCNICAS PICTÓRICAS PARA LA EDUCACIÓN INFANTIL. Blogspot.com. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://icraft.decorexpro.com/es/applikacziya-iz-plastilina" target="_blank" rel="noopener noreferrer") Icraft. (s.f). Modelado con arcilla - 118 ideas de fotos para niños de 1, 2, 3 y 4 años. Decorexpro.com. de

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GXHXSHK0vDo " target="_blank" rel="noopener noreferrer") Canal 12 Nicaragua. (2023, 21 de septiembre) Taller de arte pictórico infantil “Expresarte técnicas mixtas, collage, texturas”. [Archivo de video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
