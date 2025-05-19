<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Propuestas del juego'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La enseñanza del juego en el Nivel Inicial plantea interrogantes complejos para los educadores. Preguntas como:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 ¿De qué modo se enseña a jugar?

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 ¿Cuáles son las propuestas pedagógicas que consideran el juego como contenido de enseñanza?
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 ¿Existen fórmulas para planificar, coordinar e intervenir en el juego?
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 ¿Cuándo la intervención del adulto facilita o interrumpe la experiencia lúdica?
    
    p.mb-4 Estas inquietudes son frecuentes en la formación docente y en el trabajo con equipos pedagógicos (Pitluk, Dente & Weinstein, 2019).

    h2.mb-5(data-aos="fade-left") Reflexión sobre la intervención en el juego

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Según Pitluk, Dente y Weinstein (2019), no existen recetas ni respuestas genéricas a estas preguntas, ya que cada contexto escolar es único y requiere un análisis específico que considere el entorno, el proceso y los sujetos involucrados. La integración de lo lúdico con lo educativo exige reflexionar sobre el "qué", "cómo" y "cuándo" intervenir.
    
        .bg-color-9.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Como estrategia, se propone la reflexión pedagógica entre colegas y el análisis de experiencias como vías para construir respuestas contextualizadas y fomentar la innovación en la enseñanza del juego. En este sentido, los autores presentan dos situaciones que ilustran la relación entre juego y enseñanza.
    
    h2(data-aos="fade-left") Juego simbólico: Monstruos, fantasmas y brujos
    p.mb-5 A través del <b>juego simbólico Monstruos, fantasmas y brujos</b>, los niños exploraron un mundo de misterio y fantasía, donde la creatividad y la emoción dieron forma a una aventura inolvidable. A continuación, se relatan los momentos clave de esta propuesta lúdica.

    .bg-full-width.bg-color-13.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
          .col-lg-7
            p.text-white(data-aos="fade-left").mb-4 Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] El juego simbólico combinado con construcciones
    
    .row.mb-5.align-items-center.justify-content-center
      .col-6.col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") El juego simbólico combinado con construcciones surge a partir de una experiencia previa en la que los niños visitaron su barrio y la estación de tren, explorando diversos edificios y viajando en tren. Para trasladar esa experiencia al aula, la maestra preparó el salón con materiales variados de construcción, como bloques, cajas, listones, tubos, planchas, telas y juguetes.
        p A continuación, se presentan las fases de desarrollo del juego:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Inicio del juego y recuerdo de la experiencia")
            p Los niños y la maestra regresan del comedor y son invitados a explorar los materiales. La maestra retoma la conversación sobre la visita al barrio y los edificios que más les llamaron la atención. Los niños mencionan la estación, la iglesia y los negocios, y la maestra sugiere recrearlos con los materiales disponibles.
    
          .div(titulo="Construcción del espacio y asignación de roles")
            p Los niños distribuyen los materiales y deciden qué construir en cada espacio del salón. La maestra los apoya en la organización y propone ubicar la plaza en el centro. Se crean la iglesia, la estación y los negocios, y se marcan las veredas con tiza.
    
          .div(titulo="Desarrollo del juego y recorrido")
            p La maestra propone hacer un recorrido por los espacios construidos, permitiendo que los niños exploren su creación. En los negocios, algunas cajas se desarman, por lo que la maestra introduce una cinta para unirlas.
    
          .div(titulo="Cierre del juego y reflexión")
            p Se abre un espacio de diálogo donde los niños relatan sus experiencias. Se sugiere incluir nuevos elementos, como una fuente y bancos en la plaza. La celadora toma fotos del juego para compartir con las familias.
    
    h2(data-aos="fade-left") Secuencia de actividades: "Escondiendo objetos"
    p.mb-5 Esta secuencia de actividades está diseñada para desarrollar habilidades de orientación espacial, comunicación y trabajo en equipo. Cada propuesta varía en la forma en que se dan las pistas para encontrar un objeto escondido, aumentando la complejidad progresivamente.

    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="14.5%" y="93.5%" numero="+")
                h5 Frío, frío, caliente, caliente
                p Un niño sale de la sala mientras otro esconde un objeto. Al regresar, el niño debe encontrarlo guiado por las indicaciones de sus compañeros, quienes usan las palabras "frío" (lejos), "caliente" (cerca) y "te quemas" (en el lugar correcto).
    
              .bg-color-white.box-shadow.p-3(x="39.5%" y="93.5%" numero="+")
                h5 Escondiendo objetos I
                p Se introduce el uso de una foto de la sala como herramienta de orientación. Un niño esconde el objeto y otro coloca un imán en la foto para indicar su ubicación.
    
              .bg-color-white.box-shadow.p-3(x="64.3%" y="94.5%" numero="+")
                h5 Escondiendo objetos II
                p Se reemplaza la foto por un plano de la sala. El niño debe interpretar la simbología del plano para encontrar el objeto escondido.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="94.5%" numero="+")
                h5 Escondiendo objetos III
                p Se combinan elementos de las propuestas anteriores, pero se incorporan pistas verbales más elaboradas. Dos niños describen la ubicación del objeto para guiar al buscador.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Todas las actividades se realizan en grupo total, promoviendo la participación de todos los niños. Al finalizar cada actividad, se cambia de roles para que todos experimenten las diferentes funciones. El uso de materiales como imanes, fotos y planos facilita la comprensión y el desarrollo de habilidades espaciales.
    
    h2(data-aos="fade-left") Secuencia de actividades: "Jugando con la perinola"
    p.mb-5 Esta secuencia adapta el juego tradicional de la perinola para promover la reflexión sobre el juego y el desarrollo de estrategias. Se compone de cinco propuestas con distintos enfoques.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La perinola I
              p Se forman grupos de cuatro jugadores. Cada niño coloca 10 tapitas en su pote y 3 en el pozo central. Siguen las indicaciones de la perinola y reponen fichas si el pozo se vacía. Gana quien tenga más tapitas tras cinco rondas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La perinola II
              p Se juega igual que la anterior, pero cada jugador comienza con 20 tapitas y coloca solo una en el pozo. Esta variante extiende la duración del juego.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La perinola III
              p Similar a la primera propuesta, pero se registra el orden en que los jugadores terminan la partida, permitiendo analizar estrategias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La perinola IV
              p Después de cuatro vueltas, cada jugador anota cuántas tapitas le quedan, introduciendo el conteo como elemento de reflexión.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 ¿Quién tiene razón?
              p Se presenta una discusión entre dos niños sobre quién ganó la partida. Los jugadores deben analizar la situación y justificar su respuesta.

    .row.mb-5.justify-content-center
      .col-6.col-lg-2.mb-3.mb-lg-0.pe-lg-0
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
      .col-lg-9.ps-lg-0
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 El objetivo de esta secuencia es fomentar el análisis de estrategias, el conteo y la resolución de problemas mediante el juego. Las diferentes variantes permiten adaptar la actividad a distintos niveles de dificultad y objetivos pedagógicos.
        .bg-color-white.shadow-soft.p-4
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Importancia del juego simbólico en la educación
                  p.mb-0 Para retomar la importancia del juego simbólico y tener más ideas de cómo aplicarlo en la educación, les dejamos el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=-yaHvyyoQso " target="_blank")
                    span.bg-color-4 Ver video
                    i.fas.fa-arrow-right
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Los juegos sensoriales
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los juegos sensoriales son clave en el desarrollo infantil, ya que estimulan los sentidos y favorecen el aprendizaje significativo. Según Perdomo (2022), estos juegos permiten que los niños coordinen sus movimientos y exploren su entorno a través del tacto, la v ista, el oído, el gusto y el olfato. Además, contribuyen al desarrollo de la motricidad y la percepción sensorial (Meneses & Monge, 2016; Quirós & Arráez, 2017, citados por Perdomo, 2022).
        h2(data-aos="fade-left") La caja sensorial de figuras
        p.mb-5 Este juego permite a los niños identificar figuras geométricas mediante el tacto, mejorando su motricidad fina y percepción sensorial.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          h5 ¿Cómo se juega?
          p.mb-0 El niño introduce sus manos en la caja, saca una figura y busca otro objeto con la misma forma, estableciendo una relación sin depender de la visión.
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Materiales necesarios
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-13.text-white Material
                th.bg-color-13.text-white Uso
            tbody
              tr
                td Caja de cartón
                td Contenedor para las figuras.
              tr
                td Papel de colores
                td Decoración de la caja.
              tr
                td Cartón y fieltro
                td Creación de figuras geométricas con textura.
              tr
                td Pegamento y tijeras
                td Ensamblaje de los materiales.
    
    h2(data-aos="fade-left") Jugando a reconocer las formas de los animales
    p.mb-5 Este juego ayuda a los niños a identificar figuras geométricas en los animales mediante la manipulación y exploración.

    .bg-full-width-2.bg-color-3
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              h5 ¿Cómo se juega?
              p.mb-0 Los niños crean su animal favorito con cartulina y foami, identificando y marcando las figuras geométricas con distintos colores.
            .titulo-figura.mb-4
              h5 Tabla 2.
              span Materiales necesarios
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-13.text-white Material
                    th.bg-color-13.text-white Uso
                tbody
                  tr
                    td Cartulina y <em>foami</em>
                    td Base para formar los animales.
                  tr
                    td Pegante y tijeras
                    td Unión y recorte de piezas.
                  tr
                    td Colores
                    td Identificación y personalización de figuras.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Juegos sensoriales para la primera infancia
                      p.mb-0 Para más juegos sensoriales, los invitamos a visitar el siguiente blog:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://mundoinicial.com/actividades-sensoriales-que-estimulan-el-aprendizaje-en-la-primera-infancia/ " target="_blank")
                        span.bg-color-4 Ir al sitio
                        i.fas.fa-arrow-right
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Juegos motores
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Peña, Loayza y Montoya (2023), citados por Angulo et al. (2023), destacan la importancia del juego y la motricidad en el desarrollo social a través de la instrucción y las unidades didácticas. Según sus investigaciones, el juego no solo favorece el desarrollo integral del niño, sino que también potencia la creatividad, la cognición y las habilidades personales y sociales. En este contexto, las escuelas se convierten en espacios clave para la socialización, el aprendizaje deportivo y la mejora de las habilidades motoras.
        h2(data-aos="fade-left") Juegos motores de carrera sin material
        p.mb-5 Estos juegos de locomoción fomentan la fuerza, la velocidad y la resistencia sin necesidad de materiales adicionales.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Carrera de tres pies")
            p Juego en parejas donde los participantes acuerdan cómo desplazarse con solo tres puntos de apoyo entre ambos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Habilidades desarrolladas:</b> fuerza del tren inferior, velocidad de reacción y desplazamiento.
          .div(titulo="Carrera de cinco pies (variante)")
            p Se juega en grupos de tres, aumentando la dificultad al reducir los apoyos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Habilidades desarrolladas:</b> equilibrio, coordinación y velocidad.
          .div(titulo="Persecución por parejas")
            p Un jugador persigue al otro e intenta capturarlo. Independientemente del éxito, los roles cambian tras un tiempo determinado.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Habilidades desarrolladas:</b> resistencia y velocidad de desplazamiento.
    
    h2(data-aos="fade-left") Variantes de persecución
    p.mb-5 Se presentan dos variantes que añaden dinamismo y sorpresa a los juegos de persecución.

    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Persecución con cambios impuestos	" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Persecución con cambios impuestos
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 El animador cambia los roles con una señal (silbato) y los participantes deben realizar un ejercicio antes de continuar, como un salto con giro.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Habilidades trabajadas: coordinación, agilidad y rapidez de reacción.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/20.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Persecución con música	" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Persecución con música	
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Cada jugador tiene asignada una música. Cuando suena su canción, debe perseguir al otro.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Habilidades trabajadas: ritmo, reacción y atención auditiva.

          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/21.png', alt='')

    .bg-color-white.shadow-soft.p-4.mb-4
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Juegos para fortalecer la motricidad
              p.mb-0 Si deseas profundizar en juegos que fortalezcan la motricidad, les dejamos el siguiente libro donde encontrarán mil juegos para ello:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/ereader/tecnologicadeloriente/116859?page=162" target="_blank")
                span.bg-color-4 Ir al sitio
                i.fas.fa-arrow-right
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Propuesta de recreación
            p.mb-4(data-aos="fade-right") Los invitamos a leer la Propuesta de recreación, un documento que reúne diversas estrategias y actividades lúdicas diseñadas para fomentar la socialización, el desarrollo motriz y la creatividad en la educación infantil. A través de juegos dinámicos, circuitos motrices y experiencias musicales, los niños tienen la oportunidad de explorar su entorno, fortalecer sus habilidades y disfrutar del aprendizaje de manera significativa.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Propuesta de recreación.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')
    
    p.mb-4 Para finalizar esta unidad recordemos que, los docentes en educación inicial tienen la capacidad de utilizar una variedad de juegos recreativos y actividades artísticas para abordar cualquier tema de aprendizaje. Al hacerlo, pueden aprovechar los recursos disponibles en el entorno y considerar las necesidades y características únicas de sus estudiantes. Este enfoque no solo hace el proceso de enseñanza más dinámico y atractivo, sino que también permite a los niños experimentar y aprender de manera más significativa y efectiva. Mediante el uso de estas estrategias lúdicas y creativas, los docentes pueden fomentar el desarrollo integral de los niños, promoviendo habilidades cognitivas, emocionales, sociales y motrices desde una edad temprana.
   
       

    .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/116859?page=162" target="_blank" rel="noopener noreferrer") Méndez Giménez, A. & Méndez Giménez, C. (2018). Los juegos en el currículum de la educación física: (5 ed.). Editorial Paidotribo.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-yaHvyyoQso" target="_blank" rel="noopener noreferrer") Doctor en Casa. (2018, 24 de agosto). Juego simbólico. [Archivo de video] Youtube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-yaHvyyoQso" target="_blank" rel="noopener noreferrer") Doctor en Casa. (2018, 24 de agosto). Juego simbólico. [Archivo de video] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué es la dactilopintura?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una técnica de pintura que utiliza pinceles y lienzos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una forma de escultura con arcilla.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Una técnica de pintura que utiliza los dedos como herramienta principal.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un tipo de collage con materiales reciclados.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes beneficios se asocia principalmente con la dactilopintura?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Desarrollo de habilidades matemáticas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Mejora de la coordinación ojo-mano y la motricidad fina.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aprendizaje de idiomas extranjeros.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Desarrollo de habilidades de programación.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué tipo de materiales se pueden utilizar para la dactilopintura?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Solo pinturas acrílicas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Cualquier tipo de pintura no tóxica y segura para niños.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Únicamente acuarelas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo pinturas al óleo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué habilidades creativas fomenta la dactilopintura en los niños?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La capacidad de seguir instrucciones precisas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La habilidad para copiar modelos predefinidos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La exploración de texturas, colores y formas de manera libre.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La memorización de patrones complejos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es una recomendación importante al realizar actividades de dactilopintura con niños?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Utilizar guantes desechables para evitar mancharse.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Proporcionar un ambiente relajado y permitir la libre expresión.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Limitar el tiempo de la actividad para evitar el desorden.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Utilizar solo colores primarios para simplificar la tarea.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
