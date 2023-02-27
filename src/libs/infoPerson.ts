 import photo1 from '../assets/projects/portada/random1.jpg';
 import photo2 from'../assets/projects/portada/random2.jpg';
 import photo3 from'../assets/projects/portada/random3.png';
 import photo4 from'../assets/projects/portada/random4.jpg';
 import photo5 from'../assets/projects/portada/random5.jpg';
 import photo6 from'../assets/projects/portada/random6.jpg';
 import photo7 from'../assets/projects/portada/random7.jpg' ;
 
 const dataAbout:{
  title: string,
  biografy: string[]
} = {
  title: 'Mi hostoria',
  biografy: [
    'Soy originario de Fusagasugá y criado en el bello municipio de Soacha Cundinamarca. Fue allí donde conocí la tecnología gracias a la electrónica i una materia impartida en quito grado de primaria, yo por ese entonces con tan solo 11 años en el año 2003 ya empezaba a sentir un gusto que a lo largo del tiempo se convertiría en mi más grande pasión; el desarrollo de software y la ingeniería de control. Cursando esta materia año a año fui encontrando destrezas y gustos particulares. Por ese tiempo recuerdo que me emociono mucho entender como operaban nuestros electrodomésticos, como creábamos pequeños circuitos con chips grandes y viejos que nos enseñaban la lógica de como prender algunos bombillos leds o tal vez contabilizar personas en uno que otro proyecto. Sali como bachiller en el 2009 con la firme idea de estudiar electrónica, las posibilidades me llevaron a estudiar en una universidad pública y quien es hoy mi alma mater, la grandiosa universidad Francisco José de Caldas de Bogotá. En esta universidad seguí con mi aprendizaje, aunque el paso por allí no fue nada fácil, logré graduarme de inicio como tecnólogo en electrónica y en el 2017 como ingeniero en control. Fue la universidad quien afianzo mi gusto por la programación, en especial la programación evocada al control de proceso, automatismos, neumática e hidráulica y a la automatización industrial. Sin aun haber finalizado mi carrera como ingeniero y ya habiendo trabajado anteriormente, apareció mi primera gran oportunidad en un empresa nacional que me permitió crecer mucho, acumular vasta experiencia en el sector de la automatización, manejando instrumentos de marcas importantes como SIEMENS, LENZE, MITSUBISHI, ROCKWELL. En esta empresa me he venido desempeñando y creciendo desde entonces, iniciando como programador y desarrollador para el control de la maquinaria que se fabrica, hasta ejecutando y llevando proyectos acabo.',
    'Hace unos tres años, motivado por saber cómo funcionaba la industria 4.0 y como se integraba a nivel global la automatización con el desarrollo web, decidí estudiar a profundidad desarrollo web frontend y backend. Quizás por pandemia y la falta de tiempo de ir a una universidad, decidí probar por el autoaprendizaje, entonces di con buenos cursos y tutoriales virtuales, pero fue conociendo y utilizando los beneficios de la plataforma de platzi donde me volví a enamorar, esta vez de todo el ecosistema que comprende al desarrollo web e internet, sin duda un gran conocimiento y visto por mi como una carrera de gran complemento de la ingeniería electrónica. Hoy me encuentro en otro momento y mi objetivo está puesto en el trabajo remoto, en trabajar para las startup que conectan el mundo, crean futuro, desarrollan valor y utilizan la tecnología como medio. La gran eficiencia que significa el empleo remoto, es ahí donde quiero incursionar, una comunidad llena de colaboración, de libertad y una cultura maravillosa donde aplicar lo aprendido y lo que sigo aprendiendo.'          
  ]
}

export const dataHome:{
  title: string;
  description:string[]
} = {
  title: 'Acerca de mi',
  description:[
    'Ingeniero en control, desarrollador Frontend y estudiante de desarrollo web, con más de 7 años de experiencia laborando en el campo de la programación y automatización industrial, habilidades en el manejor de frameworks y librerias como react, react native, angular, manejo en control con programacion en PLC, variadores de velocidad, driver de servomotores, comunicaciones idustriales, interfaces HMI y SCADA. Conocimientos en diseño de interfaces y experiencia de usuario, manejo de herramientas de diseño como ilustrator y figma. Manejo de versiones y documentación con git y github.',
    'Una persona sociable, emprendedora, autodidacta, con capacidad para trabajar en equipo, gusto por nuevas herramientas de programación, con hobbys en el futbol, en viajar y conocer nuevas culturas.'
  ]
}

export interface project {
  id: number;
  title: string;
  images: any[];
  age: string;
  desciption: string;
}

export const projectsHome: {
  projects: project[];
} = {
  projects:[
    {
      id: 1,
      title:'titulo 1',
      images:[photo1],
      age: '2020',
      desciption: 'lorem isu'
    },
    { 
      id: 2,
      title:'titulo 2',
      images:[photo2],
      age: '2020',
      desciption: 'lorem isu'
    },
    { 
      id: 3,
      title:'titulo 3',
      images:[photo3],
      age: '2010',
      desciption: 'lorem isu'
    },
    { 
      id: 4,
      title:'titulo 4',
      images:[photo4],
      age: '2023',
      desciption: 'lorem isu'
    },
    { 
      id: 5,
      title:'titulo 5',
      images:[photo5],
      age: '2018',
      desciption: 'lorem isu'
    },
    { 
      id: 6,
      title:'titulo 6',
      images:[photo6],
      age: '2022',
      desciption: 'lorem isu'
    },
    {
      id: 7,
      title:'titulo 7',
      images:[photo7],
      age: '2019',
      desciption: 'lorem isu'
    }
  ]
}