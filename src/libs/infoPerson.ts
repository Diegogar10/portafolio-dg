import { 
  P1_Photo1, P1_Photo2, P1_Photo3, P1_Photo4, P1_Photo5,
  P2_Photo1, P2_Photo2, P2_Photo3, P2_Photo4, P2_Photo5, P2_Photo6,
  P3_Photo1, P3_Photo2, 
  P4_Photo1, P4_Photo2, P4_Photo3, P4_Photo4, P4_Photo5, P4_Photo6, P4_Photo7, P4_Photo8,
  P5_Photo1, P5_Photo2, P5_Photo3, P5_Photo4, P5_Photo5, P5_Photo6, P5_Photo7, P5_Photo8, 
  P6_Photo1, P6_Photo2, P6_Photo3,
  P7_Photo1,
  P8_Photo1, P8_Photo2, P8_Photo3, P8_Photo4,
  P9_Photo1, P9_Photo2, P9_Photo3, P9_Photo4,P9_Photo5, P9_Photo6, P9_Photo7, P9_Photo8, P9_Photo9,

} from  './linkImages';

import photoDefault from '../assets/projects/portada/random3.png';
 
export const dataAbout:{
  title: string,
  biografy: string[]
} = {
  title: 'Mi historia',
  biografy: [
    'Soy originario de Fusagasugá y criado en el bello municipio de Soacha Cundinamarca. Fue allí donde conocí la tecnología gracias a la electrónica una materia impartida en quinto grado de primaria, yo por ese entonces con tan solo 11 años en el año 2003 ya empezaba a sentir un gusto que a lo largo del tiempo se convertiría en mi más grande pasión; el desarrollo de software y la ingeniería de control. Cursando esta materia año a año fui encontrando destrezas y gustos particulares. Por ese tiempo recuerdo que me emocionó mucho entender cómo operan nuestros electrodomésticos, como creamos pequeños circuitos con chips grandes y viejos que nos enseñaban la lógica de como prender algunos bombillos leds o tal vez contabilizar personas en uno que otro proyecto. Salí como bachiller en el 2009 con la firme idea de estudiar electrónica, las posibilidades me llevaron a estudiar en una universidad pública y quien es hoy mi alma mater, la grandiosa universidad Francisco José de Caldas de Bogotá. En esta universidad seguí con mi aprendizaje, aunque el paso por allí no fue nada fácil, logré graduarme de inicio como tecnólogo en electrónica y en el 2017 como ingeniero en control. Fue la universidad quien afianzó mi gusto por la programación, en especial la programación evocada al control de proceso, automatismos, neumática e hidráulica y a la automatización industrial. Sin aún haber finalizado mi carrera como ingeniero y ya habiendo trabajado anteriormente, apareció mi primera gran oportunidad en un empresa nacional que me permitió crecer mucho, acumular vasta experiencia en el sector de la automatización, manejando instrumentos de marcas importantes como SIEMENS, LENZE, MITSUBISHI, ROCKWELL. En esta empresa me he venido desempeñando y creciendo desde entonces, iniciando como programador y desarrollador para el control de la maquinaria que se fabrica, hasta ejecutando y llevando proyectos a cabo.',
    'Hace unos tres años, motivado por saber cómo funcionaba la industria 4.0, cómo se integraba a nivel global la automatización con el desarrollo web, decidí estudiar a profundidad desarrollo web frontend y backend. Quizás por pandemia y la falta de tiempo de ir a una universidad, decidí probar por el autoaprendizaje, entonces di con buenos cursos y tutoriales virtuales, pero fue conociendo y utilizando los beneficios de la plataforma de platzi donde me volví a enamorar, esta vez de todo el ecosistema que comprende al desarrollo web e internet, sin duda un gran conocimiento y visto por mi como una carrera de gran complemento de la ingeniería electrónica. Hoy me encuentro en otro momento y mi objetivo está puesto en el trabajo remoto, en trabajar para las startup que conectan el mundo, crean futuro, desarrollan valor y utilizan la tecnología como medio. La gran eficiencia que significa el empleo remoto, es ahí donde quiero incursionar, una comunidad llena de colaboración, de libertad y una cultura maravillosa donde aplicar lo aprendido y mi experiencia.'          
  ]
}

export const dataHome:{
  title: string;
  description:string[]
} = {
  title: 'Acerca de mi',
  description:[
    'Ingeniero en control, desarrollador FullStack y estudiante continuo en el desarrollo web (actualización de conocimientos, nuevas versiones, nuevas tecnologías), con 3 años de experiencia desarrollando de lado del cliente con ReactJS Y Angular. Desarrollo de app nativas con ReactNative, con más de 7 años laborando en el campo de la programación y automatización industrial, aplicando control a maquinaria industrial con programación en PLC, variadores de velocidad, driver de servomotores, comunicaciones industriales, interfaces HMI y SCADA. Conocimientos en diseño de interfaces y experiencia de usuario, manejo de herramientas de diseño como ilustrator y figma. Manejo de versiones y documentación con git y github.',
    'Una persona sociable, emprendedora, autodidacta, con capacidad para trabajar en equipo, gusto por nuevas herramientas de programación, con hobbys en el fútbol, en viajar y conocer nuevas culturas.'
  ]
}

export interface project {
  id: number;
  title: string;
  images: any[];
  age: string;
  goal: string;
  summary: string;
  desciption: string[];
  skills: string[];
  link?:string[];
  video?:string
}

export const projectsHome: {
  projects: project[];
} = {
  projects:[
    {
      id: 9,
      title:'Landing Page que presenta un proyecto de contruccion de vivienda.',
      images: [
        P9_Photo1, 
        P9_Photo2, 
        P9_Photo3, 
        P9_Photo4,
        P9_Photo5, 
        P9_Photo6, 
        P9_Photo7, 
        P9_Photo8, 
        P9_Photo9, 
      ],
      age: '2024',
      goal: 'Crear una página de destino altamente animada y creativa utilizando React, que presente de manera efectiva un proyecto de construcción de apartamentos. La elección de React se fundamenta en su capacidad para proporcionar animaciones e interacciones que mejoren significativamente la experiencia del usuario durante la presentación del proyecto.',
      summary: 'Crear una página de destino utilizando React para presentar un proyecto de construcción de apartamentos. Se enfocará en la creatividad, la interactividad y la usabilidad para ofrecer una experiencia inmersiva al usuario.',
      desciption: [
        'El objetivo principal es desarrollar una página de destino dinámica y visualmente atractiva utilizando la tecnología React, con el fin de presentar de manera integral un proyecto de construcción de apartamentos.', 
        'Esta landing page estará diseñada con un enfoque especial en la creatividad y la interactividad para ofrecer una experiencia inmersiva al usuario.', 
        'Se buscará incorporar animaciones fluidas y elementos interactivos que resalten las características y ventajas del proyecto de manera clara y efectiva.',
        'Además, se prestará una atención meticulosa a la usabilidad y la experiencia del usuario, asegurándose de que la navegación sea intuitiva y satisfactoria.',
        'El objetivo es crear una plataforma que no solo informe sobre el proyecto de construcción, sino que también genere un alto nivel de compromiso y conexión emocional con los potenciales clientes, impulsando así la conversión y la participación activa en el proceso de venta.'
      ],
      skills: [
        'Animación css',
        'ReactJS',
        'Sass',
        'Javscript',
        'Material Icon',
        'UI/UX',
        'HTML',
        'React Context',
        'React Portals'
      ],
      link: [
        'https://github.com/Diegogar10/ar-test',
        'https://arpage.netlify.app/'
      ],
    },
    {
      id: 8,
      title:'Aplicación web de recetas Favoritas con React',
      images: [
        P8_Photo1, 
        P8_Photo2, 
        P8_Photo3, 
        P8_Photo4, 
      ],
      age: '2023',
      goal: 'Crear una aplicación web completa en tan solo 3 días y medio mediante el uso de React. La aplicación permitirá consultar una API de recetas culinarias, brindando a los usuarios la capacidad de explorar, seleccionar y guardar sus recetas favoritas de manera intuitiva y eficiente.',
      summary: 'Sumérgete en el mundo culinario con nuestra aplicación React de vanguardia. Construimos una experiencia web fluida que te permite explorar y seleccionar recetas por categoría. Además, disfruta de la personalización al crear un usuario exclusivo con permisos especiales para guardar tus favoritos. ¡Bienvenido a la revolución culinaria digital con React!',
      desciption: [
        'En el fascinante mundo del desarrollo web, hemos creado una aplicación excepcional utilizando React como nuestra principal herramienta. Nuestra aplicación es mucho más que solo líneas de código; es una experiencia interactiva que te sumerge en el universo de las recetas culinarias. Gracias a la magia de React, hemos construido componentes y utilizado hooks, routing, y context, entre otras poderosas herramientas, para dar vida a una plataforma web que te permite explorar recetas organizadas por categorías de una manera intuitiva y fluida.',
        'Pero no nos detenemos ahí. Hemos llevado la experiencia del usuario un paso más allá al incorporar la posibilidad de seleccionar tus recetas favoritas y guardarlas en tu propia sesión personalizada de favoritos. ¿Cómo logramos esto? Implementamos un sistema de registro que te permite crear un usuario único con permisos especiales, proporcionándote un espacio exclusivo para gestionar y almacenar tus recetas preferidas. Este toque personalizado hace que la aplicación no solo sea funcional, sino también adaptada a tus preferencias culinarias individuales.',
        'En resumen, nuestra aplicación no solo es una muestra de habilidades técnicas avanzadas, sino también un viaje interactivo que te invita a explorar el emocionante mundo de la cocina. Desde la organización por categorías hasta la posibilidad de personalizar tu experiencia mediante la creación de un usuario con permisos especiales, nuestra aplicación construida con React redefine la forma en que interactuamos con las recetas en línea.'
      ],
      skills: [
        'API REST',
        'ReactJS',
        'CSS',
        'Javscript',
        'Routing',
        'UI/UX',
        'HTML',
        'Responsive Design'
      ],
      link: [
        'https://github.com/Diegogar10/app-test-rocketfy',
        'https://apptestrocketfy.netlify.app/'
      ],
    },
    {
      id: 7,
      title:'Tienda de productos con Angular',
      images: [
        P7_Photo1, 
      ],
      age: '2023',
      goal: 'Conocer el framework Angular todas utilidades, para desarrollar toda una tienda online que permita compras de manera fácil.',
      summary: 'Con el uso de Angular y mediante la creación de componentes, servicios, routing, http, forms entre otras herramientas construimos toda una aplicación web que permite ver los productos por categoría, seleccionar algunos productos y llevarlos al carrito de compras, registrarse como usuario, y muchas más funcionalidades.',
      desciption: [
        'Algunas de las utilizades de la amplia gama que nos ofrece angular fueron aplicadas en este proyecto, como por ejemplo routing para proveer al sitio de rutas mediante url, poder compartir productos y navegar sin recargar la página; se hizo uso de servicios que son los encargados del manejo de usuarios, autentificación, consultas a la API, incluso en el manejo de HTTP_Client que ofrece Angular; con la ayuda de interceptores se mantiene la cuenta abierta si el usuario esta registrado. De igual forma se usan otras utilidades como componentes, pipes, guardianes para dotar al proyecto de modularidad, especificidad en la gestión de la aplicación, en la experiencia de programación y experiencia de usuario.',
        'En cuanto al funcionamiento de la tienda, podemos cargar productos de diferentes categorías, poder ver su detalle, crear, editar o eliminar productos, registrarnos como usuario o administradores, hacer autentificación y bajo el role poder acceder a un CMR, agregar productos al carrito de compras, tener sesiones abiertas persistentes en el navegador, proteger rutas privadas, tener un diseño responsivo, entre otras grandes funcionalidades. Para ver más te invito abrir la app en los enlaces descritos y poder interactúa con ella.'      ],
      skills: [
        'Angular',
        'Typescript',
        'APIRest',
        'SCSS',
        'Routing',
        'LazyLouding',
        'Modularizacion'
      ],
      link: [
        'https://github.com/Diegogar10/store-with-angular',
        'https://store-df.netlify.app/home'
      ],
    },
    {
      id: 1,
      title:'Aplicación de finanzas con ReactJS',
      images: [
        P1_Photo1, 
        P1_Photo2, 
        P1_Photo3, 
        P1_Photo4, 
        P1_Photo5
      ],
      age: '2021',
      goal: 'Conocer la librería React JS, para la construcción de un aplicación que nos permita llevar un control ordenado cronológicamente de nuestras finanzas básicas.',
      summary: 'En este proyecto manejamos la librería react, para realizar un aplicación de control y seguimiento de la finanzas personales, mediante el registro de transacciones.',
      desciption: [
        'Para desarrollar esta aplicación se utilizaron varios hooks de react, como useState, useContext, useEfect, entre otros. Para los estilos se utilizó css puro. En cuanto al almacenamiento de la información que se mantiene, se utiliza el localstorage del navegador que usemos para abrir la app, por tanto para cada celular o pc podremos guardar y llevar registro de diferentes ingresos y egresos.',
        'En cuanto a  la aplicación, esta nos permite agregar transacciones tanto de ingresos como de egresos, agregando una fecha y el concepto de la transacción para futuras búsquedas por palabra. Cuando hayamos registrado varias transacciones, se pueden marcar como ejecutadas o se pueden dejar pendientes. Al momento de buscar y filtrar tenemos una búsqueda avanzada que le permite a la app visualizar en el cuadro de transacciones la búsqueda y calcular valores filtrados con el resultado parcial total de ingresos y egresos más un balance sobre el filtro aplicado. En esta misma zona se muestra el valor total de todas las transacciones para aplicar comparaciones o analizar ciertos datos.'      ],
      skills: [
        'ReactJS',
        'Javascript',
        'LocalStorage',
        'CSS',
      ],
      link: [
        'https://github.com/Diegogar10/app-finazas-with-react',
        'https://diegogar10.github.io/app-finazas-with-react/'
      ],
    },
    { 
      id: 2,
      title:'Aplicación de biblioteca de pokemons con React-Native',
      images:[
        P2_Photo1, 
        P2_Photo2, 
        P2_Photo3, 
        P2_Photo4, 
        P2_Photo5,
        P2_Photo6,

      ],
      age: '2022',
      goal: 'Poner en práctica el conocimiento adquirido de react-native desarrollando una app nativa de pokemons para ios y android.',
      summary: 'En este proyecto trabajamos con react-native para consumir una API de pokemons y crear una bella aplicación tanto para android como para ios. Donde aplicamos lo aprendido.',
      desciption: [
        'Esta aplicación fue desarollada mediante react-native que permite programar en javascript y transpirar a código nativo para cada sistema operativo para dispositivos moviles (ios y android), se hizo uso de librerías, frameworks y plugins como capitalize, formik, react-navigation.',
        'Por otro lado la aplicación se diseñó con una página principal donde cargamos los pokemons desde una consulta a una API pública, luego creamos un set de ventanas. Una de ellas Favoritos donde visualizamos los pokemons que más nos gustan si tenemos una sesión abierta. Otra ventana fue la de login, donde ingresamos y podemos ver información básica de nuestro perfil.'
      ],
      skills: [
        'API REST',
        'Javascript',
        'React-native',
        'LazyLoading',
      ],
    },
    { 
      id: 3,
      title:'Juego pegale al conejo con Animcaiones CSS',
      images:[
        P3_Photo1,
        P3_Photo2
      ],
      age: '2019',
      goal: 'Comprender todos los principios de las hojas de estilos con CSS.',
      summary: 'En este proyecto construimos animado y divertido juego con ayuda de animaciones en css, manejando selectores, transiciones, efectos, y animaciones con Keyframes.',
      desciption: [
        'Por medio maquetación en html, de Keyframes y dibujando en css gracias a las propiedades de los elementos, se logró construir toda una interfaz animada e interactiva.',
        'El juego consiste en dar click encima de los conejos que aparecen y desaparecen, ocultándose sobre las montañas cuando logramos dar clik el score va registrando el puntaje que se va acumulando en el juego.'
      ],
      skills: [
        'CSS', 
        'HTML', 
        'Animaciones', 
        'Game'
      ],
      link: [
        'https://github.com/Diegogar10/animacionesCSS',
        'https://diegogar10.github.io/animacionesCSS/'
      ],
    },
    { 
      id: 4,
      title:'Automatización Termoformadora Titanium 270',
      images:[
        P4_Photo1,
        P4_Photo2,
        P4_Photo3,
        P4_Photo4,
        P4_Photo5,
        P4_Photo6,
        P4_Photo7,
        P4_Photo8,
      ],
      age: '2018',
      goal: 'Controlar la maquina termoformadora, para que haga ciclo completo de empaque al vacio',
      summary: 'En este proyecto por medio de programación en PLC, diseño de interfaz HMI en pantalla, control de válvulas y servomotor, logra controlar la máquina termoformadora.',
      desciption: [
        'El proyecto termoformadora es toda una compleja implementación de automatización industrial que comprende varias disciplinas, allí se realizó todo un control de diferentes sistemas como movimiento de cadena a través de un servomotor, manejo de válvulas neumáticas, de presión positiva y negativa(Vacío), control de macado con impresores de inyección y control de temperaturas en las plancha de formado y sellado. Por otra parte se implementó el monitoreo, control y acceso remoto a la máquina mediante la configuración de una red con túnel vpn.',
        'La termoformadora es una máquina elaborada nacionalmente con referencia a grandes industrias que la producen como la industria alemana, americana, china, italiana entre otras. Esta máquina permite empacar al vacio cualquier producto alimenticio como jamones, chorizos, quesos, carnes maduradas entre otros.',
        'El principio consta de varias secciones:',
        '1. Sección de formado, donde se forma el bolsillo en film transparente, con el formato adecuado para el producto a empacar',
        '2. Sección de empaque donde se empaca las cantidades correctas en los bolsillos formados',
        '3. Sección de sellado donde ocurren dos eventos, sacar el vacio para conservar el producto y una vez alcanzada la presión mínima sellar con calor el paquete con una tapa impresa o transparente.',
        '4. Sección de corte y marcado, en el avance de cada paso, una vez se ha sellado el paquete pasa a ser cortado según el formato.'
      ],
      skills: [
        'PLC', 
        'HMI',
        'SERVO-DRIVE',
        'LADDER',
        'AUTOMATIZACION',
        'VPN',
        'REMOTO'
      ],
      video:'https://youtu.be/_WnEdSaw2zk',
    },
    { 
      id: 5,
      title:'Automatización Mezclador con vácio',
      images:[
        P5_Photo1,
        P5_Photo2,
        P5_Photo3,
        P5_Photo4,
        P5_Photo5,
        P5_Photo6,
        P5_Photo7,
        P5_Photo8,
      ],
      age: '2022',
      goal: 'Programar en lenguaje ladder el control para mover dos motores que diren en diferente sentido. Generar una interfaz de usuario que comunique con el plc y se permita crear programas y manipular lo ciclos de mezclado para diferentes productos.',
      summary: 'El actual proyecto se desarrolló mediante PLC, HMI, Variodor de velocidad, que permiten a la máquina controlar el movimiento, la velocidad y el tiempo de sus aspas en diferentes ciclos para lograr mezclas homogéneas de diferentes productos.',
      desciption: [
        'El eje fundamental de este proyecto son los motores que van engranados a las aspas quienes son las responsables de mezclar el producto, para controlar el arranque suave, la dirección de giro y la velocidad de los motores se utilizó un variador de velocidad. El control de programas y del variador se realizó en lenguaje ladder en un plc que mediante señales digitales y análogas controla la operación del variador.',
        'El proyecto consta de un pantalla de 7" que le permite al usuario programar recetas para los diferentes productos, donde tiene 12 pasos por receta para poder disponer de la configuración necesaria, con tiempos y velocidades que mas se consideren adecuadas para cada momento de la mezcla del producto.',
        'El mezclador es un equipo de fabricación nacional, que le permite a la industria de alimentos mezclar todo tipo de productos, como carnes de hamburguesa, pastas de jamones, chorizos, tocinetas, entre muchos otros. Este equipo cuenta aparte con vacío para cuando se quiere tener mezclas más homogéneas o agregar salmueras de absorción a la fibras de proteínas de algunos productos.'
      ],
      skills: [
        'PLC',
        'HMI',
        'Ladder',
        'UI',
        'Variadores de velociada',

      ],
      video:'https://youtube.com/shorts/QU5kA9FVGFI?feature=share',
    },
    { 
      id: 6,
      title:'Diseño de interfaz de equipo tajadora en ilustrator',
      images:[
        P6_Photo1,
        P6_Photo2,
        P6_Photo3,
      ],
      age: '2020',
      goal: 'Realizar todo un diseño de la interfaz de usuario para una maquina tajadora en el programa illustrator',
      summary: 'En este proyecto se realizó toda la elaboración de iconos, elementos y componentes, para construir una interfaz intuitiva que permita la operación de una tajadora básica.',
      desciption: [
        'Mediante un diseño sencillo y minimalista se desarrolló todo un conjunto de iconos con una paleta de colores que resaltan la interacción del usuario con las funciones del equipo y sus estados.',
        'Se aplicó un sistema de diseño atomico, que comienza por botones, iconos, textos, y progresivamente se va conformando la integración de paneles, menús y otro contenedores que permiten construir cada ventana.',
        'A través de capas que son utilizadas podemos visualizar algunos efectos de pantalla, para luego exportar dichos elementos a imagenes vectorizadas (SVGs) y así poder implementar en pantallas bien sea que soporte imágenes o pantallas web.',
        'Se penso en la manera más sencilla de operar con cambios de color de iconos, elevacion de paneles con sombras e integracion de funciones en los mismos, pra lograr un funcionamiento intutivo para el usurio operador de la maquina.'
      ],
      skills: [
        'Diseño atomico', 
        'SVG',
        'Ilustrato',
        'UI',
        'efectos',
        'Diseño'
      ],
    },
  ]
}
