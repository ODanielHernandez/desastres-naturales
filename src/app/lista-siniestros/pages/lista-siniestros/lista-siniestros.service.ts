import { Injectable } from '@angular/core';

import { Siniestro } from './lista-siniestros.model';

@Injectable({
  providedIn: 'root'
})


export class ListaSiniestrosService {
  public noHay = 'Aún no hay indicaciones por protección civil';

  private siniestros: Siniestro[] = [
    {
    id: 'S1',
    titulo: 'Huracán',
    // tslint:disable-next-line: max-line-length
    imgUrl: '../../../assets/img/ciclon.png',
    // tslint:disable-next-line: max-line-length
    descripcion: 'Si los vientos de un ciclón tropical igualan o exceden los 33 metros por segundo (64 nudos, 74 millas por hora), entonces se denomina como un huracán (en el Océano Atlántico y en el Pacífico Nororiental y Norcentral). Los huracanes se clasifican en la Escala de Vientos de Saffir-Simpson según la intensidad del viento. Aquellos huracanes con vientos de las categorías 3, 4 ó 5 son huracanes de gran intensidad.',
    // tslint:disable-next-line: max-line-length
    antes: [this.noHay],
    // tslint:disable-next-line: max-line-length
    durante: [this.noHay],
    // tslint:disable-next-line: max-line-length
    despues:[this.noHay],
    // tslint:disable-next-line: max-line-length
    sintomas: [this.noHay],
    // tslint:disable-next-line: max-line-length
    mochila: [
      {value: 'Documentos importantes', isChecked: false},
      {value: 'Recetas Médicas', isChecked: false},
      {value: 'Dispositivos móviles con bateria', isChecked: false},
      {value: 'Dinero en efectivo', isChecked: false},
      {value: 'Linternas de bateria', isChecked: false},
      {value: 'Velas', isChecked: false},
      {value: 'Botiquín de primero auxilios', isChecked: false},
      {value: 'Bolsas de plástico', isChecked: false},
      {value: 'Mochilas con ropa', isChecked: false},
      {value: 'Agua', isChecked: false},
      {value: 'Alimentos enlatados no perecederos', isChecked: false},
      {value: 'Suministros para tus mascotas', isChecked: false},
    ]
    },
    {
      id: 'S2',
      titulo: 'Tormenta tropical',
      // tslint:disable-next-line: max-line-length
      imgUrl: '../../../assets/img/ciclon1.png',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Un ciclón tropical que exhibe vientos máximos sostenidos en la superficie durante 1 minuto desde 17.5 metros por segundo (34 nudos, 39 millas por hora) hasta 32.5 metros por segundo (63 nudos, 73 millas por hora). La convección en las tormentas tropicales típicamente se concentra en el centro, con bandas exteriores en espiral que producen mucha precipitación.',
      // tslint:disable-next-line: max-line-length
      antes: [this.noHay],
      // tslint:disable-next-line: max-line-length
      durante: [this.noHay],
      // tslint:disable-next-line: max-line-length
      despues:[this.noHay],
      // tslint:disable-next-line: max-line-length
      sintomas: [this.noHay],
      // tslint:disable-next-line: max-line-length
      mochila: [
        {value: 'Documentos importantes', isChecked: false},
        {value: 'Recetas Médicas', isChecked: false},
        {value: 'Dispositivos móviles con bateria', isChecked: false},
        {value: 'Dinero en efectivo', isChecked: false},
        {value: 'Linternas de bateria', isChecked: false},
        {value: 'Velas', isChecked: false},
        {value: 'Botiquín de primero auxilios', isChecked: false},
        {value: 'Bolsas de plástico', isChecked: false},
        {value: 'Mochilas con ropa', isChecked: false},
        {value: 'Agua', isChecked: false},
        {value: 'Alimentos enlatados no perecederos', isChecked: false},
        {value: 'Suministros para tus mascotas', isChecked: false},
      ]
    },
    {
      id: 'S3',
      titulo: 'Depresión Tropical',
      // tslint:disable-next-line: max-line-length
      imgUrl: '../../../assets/img/ciclon2.png',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Un ciclón tropical donde la velocidad de vientos máximos sostenidos en la superficie durante 1 minuto (según se define en los estándares de los EE.UU.) es hasta 17 metros por segundo (33 nudos, 38 millas por hora). A distinción de los disturbios tropicales, las depresiones tropicales tienen una circulación cerrada.',
      // tslint:disable-next-line: max-line-length
      antes: [this.noHay],
      // tslint:disable-next-line: max-line-length
      durante: [this.noHay],
      // tslint:disable-next-line: max-line-length
      despues:[this.noHay],
      // tslint:disable-next-line: max-line-length
      sintomas: [this.noHay],
      // tslint:disable-next-line: max-line-length
      mochila: [
        {value: 'Documentos importantes', isChecked: false},
        {value: 'Recetas Médicas', isChecked: false},
        {value: 'Dispositivos móviles con bateria', isChecked: false},
        {value: 'Dinero en efectivo', isChecked: false},
        {value: 'Linternas de bateria', isChecked: false},
        {value: 'Velas', isChecked: false},
        {value: 'Botiquín de primero auxilios', isChecked: false},
        {value: 'Bolsas de plástico', isChecked: false},
        {value: 'Mochilas con ropa', isChecked: false},
        {value: 'Agua', isChecked: false},
        {value: 'Alimentos enlatados no perecederos', isChecked: false},
        {value: 'Suministros para tus mascotas', isChecked: false},
      ]
    },
    {
      id: 'S4',
      titulo: 'Onda Tropical',
      // tslint:disable-next-line: max-line-length
      imgUrl: '../../../assets/img/ciclon3.png',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Es un pequeño sistema atmosférico tropical que parece tener convección organizada, con un diámetro de alrededor de 200 a 600 km (100 a 300 millas), procedente del trópico o los subtrópicos, con características de migración no-frontales, y que mantiene su integridad por 24 horas o más. El sistema puede o no estar relacionado a disturbios perceptibles en el campo de los vientos. Si el sistema está asociado con las perturbaciones en el campo de los vientos y se propagan desde el este hacia el oeste, entonces se conocen como ondas tropicales.',
      // tslint:disable-next-line: max-line-length
      antes: [this.noHay],
      // tslint:disable-next-line: max-line-length
      durante: [this.noHay],
      // tslint:disable-next-line: max-line-length
      despues:[this.noHay],
      // tslint:disable-next-line: max-line-length
      sintomas: [this.noHay],
      // tslint:disable-next-line: max-line-length
      mochila: [
        {value: 'Documentos importantes', isChecked: false},
        {value: 'Recetas Médicas', isChecked: false},
        {value: 'Dispositivos móviles con bateria', isChecked: false},
        {value: 'Dinero en efectivo', isChecked: false},
        {value: 'Linternas de bateria', isChecked: false},
        {value: 'Velas', isChecked: false},
        {value: 'Botiquín de primero auxilios', isChecked: false},
        {value: 'Bolsas de plástico', isChecked: false},
        {value: 'Mochilas con ropa', isChecked: false},
        {value: 'Agua', isChecked: false},
        {value: 'Alimentos enlatados no perecederos', isChecked: false},
        {value: 'Suministros para tus mascotas', isChecked: false},
      ]
    },
    {
      id: 'S5',
      titulo: 'Sismo',
      // tslint:disable-next-line: max-line-length
      imgUrl: '../../../assets/img/terremoto.png',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Un sismo es un temblor, sacudida o movimiento repentino de la superficie terrestre. Los terremotos ocurren a lo largo de grietas (llamadas fallas) en la superficie terrestre. Los terremotos se pueden sentir a través de grandes áreas aunque por lo general duran menos de un minuto.',
      // tslint:disable-next-line: max-line-length
      antes: ['Si puedes salir en 15 segundos o menos sal, si no, permanece y busca espacio vital', 'Ubicate a un lado de muros, pero alejado de ventanas', 'Alejate de objetos que pudieran caer', 'No te coloques debajo de escritorios y mesas', 'Utiliza el triangulo de la vida'],
      // tslint:disable-next-line: max-line-length
      durante: ['No corras','No empujes','No grites','Apaga cualquier cosa que pueda causar un incendio', 'Procura estar alejado de balcones, ventanas, lámparas, canceles etc', 'No uses elevadores ni escaleras', 'alejate de cables de luz'],
      // tslint:disable-next-line: max-line-length
      despues:['En caso de haber quedado atrapado, conserva la calma y trata de comunicarte al exterior','Cierra las llaves de agua y gas. Si percibes olor a gas desconecta el interruptor de energía electrica','No enciendas cerillos ni equipo que origine flama o aquellos artículos eléctricos que puedan producir chispa', 'Usa el teléfono sólo para emergencias', 'Efectúa una cuidadosa revisión de los daños en tu casa antes de ingresar, si son graves no entres. Si estás en tu trabajo o escuela y si se considera que es más seguro evacuar el edificio, habrá que hacerlo', 'mantenete alejado de áreas de desastre'],
      // tslint:disable-next-line: max-line-length
      sintomas: [this.noHay],
      // tslint:disable-next-line: max-line-length
      mochila: [
        {value: 'Botiquín de primeros auxilios', isChecked: false},
        {value: 'Artículos de higiene', isChecked: false},
        {value: 'Alimentos', isChecked: false},
        {value: 'Abrigos', isChecked: false},
        {value: 'Dinero en efectivo', isChecked: false},
        {value: 'Linternas', isChecked: false},
        {value: 'Radio portátil', isChecked: false},
        {value: 'Silbato', isChecked: false},
        {value: 'Documentos importantes', isChecked: false},
        {value: 'Mascarillas', isChecked: false},
        {value: 'Encendedor', isChecked: false},
      ]
    },
    {
    id: 'C1',
    titulo: 'Inundación',
    // tslint:disable-next-line: max-line-length
    imgUrl: '../../../assets/img/Inundacion.png',
    // tslint:disable-next-line: max-line-length
    descripcion: 'Una inundación es la ocupación por parte del agua de zonas que habitualmente están libres de esta, ​ por desbordamiento de ríos, torrentes o ramblas, por lluvias torrenciales, deshielo, por subida de las mareas por encima del nivel habitual, por maremotos, huracanes, entre otros.',
    // tslint:disable-next-line: max-line-length
    antes: ['Retirar del exterior de la vivienda, aquellos objetos que puedan ser arrastrados por el agua', 'Revisar, cada cierto tiempo, el estado del tejado, el de las bajadas de agua de edificios y de los desagües próximos', 'Colocar los documentos importantes y, sobre todo, los productos peligrosos, en aquellos lugares de la casa en los que el riesgo de que se deterioren por la humedad o se derramen, sea menor', 'No estacionar vehículos ni acampar en cauces secos, ni a la orilla de ríos, para evitar ser sorprendido por una súbita crecida de agua o por una riada'],
    // tslint:disable-next-line: max-line-length
    durante: ['Si está dentro de su casa: Escuche la radio o televisión para estar informado de la emergencia, y posibles instrucciones de la autoridad a cargo.', 'Corte la luz, agua y gas y evacue su hogar si la situación así lo amerita o las autoridades así lo indican.', 'Si está en el exterior: Suba a un lugar alto y permanezca allí.', 'Evite caminar por aguas en movimiento. Si está en la calle, tenga precaución al caminar sobre agua, ya que las tapas de las alcantarillas de agua suelen salirse debido a la presión, y usted puede caer en dicho hueco.', 'Si está en un auto: Si llega a un área inundada, dé la vuelta y tome otra dirección. Si el auto se detiene o se atasca, abandónelo de inmediato y suba a un lugar alto.', 'Durante una evacuación: Si la situación así lo amerita o las autoridades lo indican, evacue su hogar lo antes posible.', 'Debe estar atento a las indicaciones que se dan por radio y/o televisión. ', 'Prepárese con tu familia por si es necesario que se vayan a un lugar seguro. ', 'No se acerque a cables ni postes de luz.', 'Si necesita cambiar de lugar, solo lleve lo necesario.', 'No camine cerca de donde está el agua, pues el nivel puede subir rápidamente.', 'No intente cruzar cauces de ríos, pues el agua lleva muchas cosas como troncos u objetos que pueden golpearlo fuertemente.'],
    // tslint:disable-next-line: max-line-length
    despues:['Si tuvo que dejar la casa, no regrese a ella hasta que las autoridades indiquen que lo pueden hacer.', 'Su casa debe ser revisada, ya que es probable que se derrumbe, no entre a ella hasta que estén seguros de que la pueden usar. ', 'No se acerque a construcciones que es posible que se derrumben.', 'No toque ni pise cables eléctricos caídos.', 'No tome alimentos ni comida que haya sido mojada por el agua de la inundación.', 'No se acerque a la zona inundada ya que su presencia puede entorpecer el trabajo de las personas que auxilian a otros afectados.', 'Los heridos no se deben mover, es mejor avisar a las personas especializadas para este tipo de ayuda.', 'Escuche la radio o vea la televisión para obtener información sobre la emergencia, y posibles instrucciones de la autoridad a cargo.', 'Vuelva a su hogar sólo cuando sea seguro o las autoridades así lo indiquen. No entre a los edificios si todavía hay agua alrededor.'],
    // tslint:disable-next-line: max-line-length
    sintomas: [this.noHay],
    // tslint:disable-next-line: max-line-length
    mochila: [
      {value: 'Documentos importantes', isChecked: false},
      {value: 'Radio y lámpara con pilas', isChecked: false},
      {value: 'Víveres', isChecked: false},
      {value: 'Kit de herramientas', isChecked: false},
      {value: 'Botiquín de primeros auxilios', isChecked: false},
    ]
  },
  {
    id: 'C2',
    titulo: 'Helada',
    // tslint:disable-next-line: max-line-length
    imgUrl: '../../../assets/img/helada.png',
    // tslint:disable-next-line: max-line-length
    descripcion: 'Fenómeno atmosférico que consiste en una bajada de temperatura hasta la congelación del agua.',
    // tslint:disable-next-line: max-line-length
    antes: ['Estar atento a la información meteorológica y de las autoridades (Protección Civil, Sector Salud, Comisión Nacional del Agua, etc.) que se transmita por los medios de comunicación.', 'Informar a las autoridades correspondientes sobre la localización de grupos o personas sujetas a riesgo (indigentes, niños, ancianos o enfermos desprotegidos).', 'Vestir con ropa gruesa, cubriendo todo el cuerpo (chamarra, abrigo, bufanda, guantes, calzado, etc.)', 'Comer frutas y verduras amarillas, ricas en Vitaminas A y C. Las frutas de temporada son más baratas.', 'Contar con combustible suficiente para calefacción.', 'Procurar tener cobijas suficientes para cubrirse por las noches.', 'Solicitar información a la Unidad de Protección Civil de su localidad, sobre la ubicación de refugios temporales.', 'Acudir a la Unidad de Protección Civil de su localidad, con la finalidad de establecer el Plan de Acciones que haga posible prevenir y aminorar los daños a la población durante la temporada de frío.'],
    // tslint:disable-next-line: max-line-length
    durante: ['Permanecer resguardado en el interior de su casa y procurar salir solamente en caso necesario.', 'Abrigarse con ropa gruesa que le cubra todo el cuerpo.', 'Usar cobijas suficientes durante la noche, que es cuando más baja la temperatura.', 'Usar chimenea, calentadores u hornillas en caso de que el frío sea muy intenso, siempre y cuando el lugar se encuentre bien ventilado.', 'Incluir en sus comidas: grasas, dulces, chocolates y todo lo que da energía, a fin de incrementar la capacidad de resistencia al frío.', 'Generar más calor corporal mediante movimiento; es decir, correr, saltar, mover las extremidades, etc.', 'Consulte a su médico o acuda al centro de salud de la localidad en caso necesario. Si va a salir de un lugar caliente, debe cubrirse boca y nariz, para evitar aspirar el aire frío; los cambios bruscos pueden provocarle enfermedades del sistema respiratorio.'],
    // tslint:disable-next-line: max-line-length
    despues:[this.noHay],
    // tslint:disable-next-line: max-line-length
    sintomas: [this.noHay],
    // tslint:disable-next-line: max-line-length
    mochila: [
      {value: 'Botiquín de primeros auxilios', isChecked: false},
      {value: 'Radio con pilas', isChecked: false},
      {value: 'Lamparas con pilas', isChecked: false},
      {value: 'Fósforos o encendedor', isChecked: false},
      {value: 'Velas', isChecked: false},
      {value: 'Botiquín de primeros auxilios', isChecked: false},
      {value: 'Ropa abrigadora', isChecked: false},
      {value: 'Pasamontañas', isChecked: false},
      {value: 'Prendas en general para protegerte del frío', isChecked: false},
      {value: 'Alimentos altos en grasas, alta caloría y carbohidratos', isChecked: false}
    ]
  },
  {
    id: 'C3',
    titulo: 'Sequía',
    // tslint:disable-next-line: max-line-length
    imgUrl: '../../../assets/img/Sequia.png',
    // tslint:disable-next-line: max-line-length
    descripcion: 'Falta de lluvias durante un período prolongado de tiempo que produce sequedad en los campos y escasez de agua.',
    // tslint:disable-next-line: max-line-length
    antes: ['Nunca deseche agua por el desagüe cuando pueda darle algún otro uso. Por ejemplo, úsela para regar las plantas de interior o el jardín.', 'Cambie las juntas de los grifos que goteen. Una gota por segundo implica la pérdida de 2.700 galones (10.220 litros) de agua por año.', 'Verifique las tuberías para detectar pérdidas y solicítele a un plomero que repare cualquier pérdida.', 'Modernice todos los grifos del hogar: instale difusores con restricción de flujo.', 'Instale un calentador instantáneo de agua en el lavabo.', 'Aísle los caños de agua para reducir la pérdida de calor y evitar que se rompan.', 'Instale un sistema de descalcificación de agua únicamente cuando los minerales del agua puedan dañar las tuberías. Apague este sistema cuando se vaya de vacaciones.', 'Elija electrodomésticos que hagan un uso eficiente de la energía y el agua.'],
    // tslint:disable-next-line: max-line-length
    durante: ['Evite tirar de la cadena innecesariamente. Deseche los papeles, insectos y demás desechos similares en la basura en lugar de hacerlo en el inodoro.', 'Evite tomar baños —tome duchas breves— y abra el agua solo para mojarse y enjabonarse y, luego, otra vez para enjuagarse.', 'Evite dejar correr el agua mientras se cepilla los dientes, se lava la cara o se afeita.', 'Coloque un balde en la ducha para recoger el agua que sobre y usarla para regar las plantas.', 'Ponga en funcionamiento la lavadora de ropa automática solo cuando esté llena por completo y seleccione el nivel del agua para el tamaño de la carga.', 'Evite enjuagar los platos antes de colocarlos en el lavavajillas; solo quite los restos grandes de comida. (La mayoría de los lavavajillas pueden limpiar platos sucios muy bien; por lo tanto, no es necesario enjuagarlos antes de lavarlos).', 'Evite usar agua corriente para descongelar carne u otros alimentos congelados. Descongele los alimentos durante la noche en el refrigerador o use la función para descongelar del horno microondas.'],
    // tslint:disable-next-line: max-]line-length
    despues:[this.noHay],
    // tslint:disable-next-line: max-line-length
    sintomas: [this.noHay],
    // tslint:disable-next-line: max-line-length
    mochila: [
      {value: 'Almacenar agua para emergencias', isChecked: false},
      {value: 'Toma en cuenta un sistema para juntar agua', isChecked: false}
    ]
  },
  {
    id: 'C4',
    titulo: 'Temperaturas máximas: Calor',
    // tslint:disable-next-line: max-line-length
    imgUrl: '../../../assets/img/temperaturaC.png',
    // tslint:disable-next-line: max-line-length
    descripcion: 'Una ola de calor es un período prolongado de calor excesivo, a veces acompañado por humedad, en comparación con los patrones climatológicos normales de una región dada.',
    // tslint:disable-next-line: max-line-length
    antes: ['Trate de no desarrollar ninguna actividad y, si hace ejercicios, tome descansos.', 'Beba abundante líquido durante todo el día, especialmente agua o bebidas hidratantes de las que usan los deportistas.', 'Evite los trayectos en coche durante las horas de más sol. En caso de estar estacionados, nadie debe quedarse en el coche cerrado, ancianos, niños o enfermos crónicos.', 'Hidrátese antes, durante y después de la actividad física.', ],
    // tslint:disable-next-line: max-line-length
    durante: ['Rociar el propio cuerpo con agua fría y luego sentarse delante de un ventilador.', 'Ponerse a la sombra, o permanecer en un ambiente con aire acondicionado o bien fresco y ventilado.', 'Tomar una ducha fría o un baño.', 'Beber agua o bebidas hidratantes de las que usan los deportistas. No consuma bebidas alcohólicas o muy dulces o con cafeína.', ''],
    // tslint:disable-next-line: max-line-length
    despues:['Haber presentado un golpe de calor o estar insolado le hace más sensible a las condiciones calurosas  durante  más  o  menos  una  semana  después.  Tenga  especial  cuidado  de  no ejercitarse demasiado y evite el clima caluroso. Pregúntele a su médico cuándo puede volver a realizar sus actividades normales sin que esto represente ningún riesgo para usted.'],
    // tslint:disable-next-line: max-line-length
    sintomas: ['Temperatura corporal de 40 °C o mayor', 'Confusión o dificultad para pensar con claridad.', 'Ver o escuchar cosas que no son reales (alucinaciones).', 'Dificultad para caminar.', 'Convulsiones', 'Pérdida del conocimiento.', 'Respiración rápida.', 'Latidos cardíacos acelerados.', 'Descenso de la presión arterial (hipotensión arterial).', 'Piel enrojecida y caliente.', 'Vómitos o diarrea.', 'Calambres musculares o debilidad.', 'Dolor de cabeza.'],
    // tslint:disable-next-line: max-line-length
    mochila: [
      {value: 'Refrigerar aguas en botella', isChecked: false},
      {value: 'Llenate de alimentos fríos', isChecked: false}
    ]
  },
  {
    id: 'C5',
    titulo: 'Temperaturas máximas: Frío',
    // tslint:disable-next-line: max-line-length
    imgUrl: '../../../assets/img/temperaturaF.png',
    // tslint:disable-next-line: max-line-length
    descripcion: 'Una ola de frío puede ser un período prolongado de frío excesivo o la incursión repentina de aire muy frío en una zona extensa. Junto con heladas, las olas de frío pueden causar daños en la agricultura, la infraestructura y las propiedades.',
    // tslint:disable-next-line: max-line-length
    antes: ['Elabore un plan de emergencia.', 'Prepare un botiquín de primeros auxilios de emergencias para su coche y para su casa.'],
    // tslint:disable-next-line: max-line-length
    durante: ['Quédese en el interior y abríguese.', 'Cierre las habitaciones que no vaya a utilizar para evitar derrochar calor.', 'Coma con frecuencia, porque los alimentos proporcionan energía y producen su propio calor.', 'No se olvide de beber mucha agua.', 'Abríguese, pero con ropa que no pese demasiado.', 'Si no tiene más remedio que salir al exterior, abríguese con más capas de ropa, guantes, bufanda y gorro', 'Tenga cuidado con los síntomas de hipotermia. Recuerde mantenerse seco.', 'Siempre debe cambiarse rápidamente y ponerse ropa seca si se ha mojado.'],
    // tslint:disable-next-line: max-]line-length
    despues:[this.noHay],
    // tslint:disable-next-line: max-line-length
    sintomas: ['Escalofríos', 'Dificultad para hablar.', 'Respiración anormalmente lenta.', 'Piel fría y pálida.', 'Pérdida de la coordinación.', 'La fatiga, letargo o apatía.', 'Confusión o pérdida de la memoria.'],
    // tslint:disable-next-line: max-line-length
    mochila: [
      {value: 'Fósfotos o encendedor', isChecked: false},
      {value: 'Velas', isChecked: false},
      {value: 'Botiquín de primeros auxilios', isChecked: false},
      {value: 'Ropa de abrigo', isChecked: false},
      {value: 'Pasamontañas', isChecked: false},
      {value: 'Prendas en general para protegerte del frío', isChecked: false},
      {value: 'Refrigerar aguas en botella', isChecked: false},
      {value: 'Alimentos altos en grasas, alta caloría y carbohidratos', isChecked: false}
    ]
  }
  ];

  constructor() { }

  getAllSiniestros(){
    return [...this.siniestros];
  }

  getSiniestro(siniestroId: string){
    return {...this.siniestros.find(siniestro => {
      return siniestro.id === siniestroId;
    })};
  }
}
