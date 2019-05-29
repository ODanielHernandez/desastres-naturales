import { Injectable } from '@angular/core';

import { Siniestro } from './lista-siniestros.model';

@Injectable({
  providedIn: 'root'
})
export class ListaSiniestrosService {
  private siniestros: Siniestro[] = [
    {
      id: 'S1',
      titulo: 'sismo',
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://img.freepik.com/vector-gratis/diseno-terremoto_23-2147713402.jpg?size=338&ext=jpg',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Un terremoto es un temblor, sacudida o movimiento repentino de la superficie terrestre. Los terremotos ocurren a lo largo de grietas (llamadas fallas) en la superficie terrestre. Los terremotos se pueden sentir a través de grandes áreas aunque por lo general duran menos de un minuto.',
      // tslint:disable-next-line: max-line-length
      antes: ['Si puedes salir en 15 segundos o menos sal, si no, permanece y busca espacio vital', 'Ubicate a un lado de muros, pero alejado de ventanas', 'Alejate de objetos que pudieran caer', 'No te coloques debajo de escritorios y mesas', 'Utiliza el triangulo de la vida'],
      // tslint:disable-next-line: max-line-length
      durante: ['No corras','No empujes','No grites','Apaga cualquier cosa que pueda causar un incendio', 'Procura estar alejado de balcones, ventanas, lámparas, canceles etc', 'No uses elevadores ni escaleras', 'alejate de cables de luz'],
      // tslint:disable-next-line: max-line-length
      despues:['En caso de haber quedado atrapado, conserva la calma y trata de comunicarte al exterior','Cierra las llaves de agua y gas. Si percibes olor a gas desconecta el interruptor de energía electrica','No enciendas cerillos ni equipo que origine flama o aquellos artículos eléctricos que puedan producir chispa', 'Usa el teléfono sólo para emergencias', 'Efectúa una cuidadosa revisión de los daños en tu casa antes de ingresar, si son graves no entres. Si estás en tu trabajo o escuela y si se considera que es más seguro evacuar el edificio, habrá que hacerlo', 'mantenete alejado de áreas de desastre'],
      // tslint:disable-next-line: max-line-length
      ubicacion: ['Cobaes 02: Los Mochis', 'Cobaes 03: Villa de Ahome', 'Conalep: Ejido Chihuahuita', 'Cobaes 58: El Guayabo', 'Icatsin: Topolobampo','Casa ejidal: Ejido Mochis','Casa Higuera de Zaragoza:Sindicatura El Carrizo', 'Casa ejidal: San Miguel','Sindicatura: Ahome','Secundaria IMA: Los Mochis','Auditorio CIE: Los Mochis','Tecnológico: Los Mochis', 'Teatro de UAS: Los Mochis','Prepas UAS en Ahome, El Fuerte y El Carrizo.']
    },
    {
      id: 'S2',
      titulo: 'inundación',
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://image.flaticon.com/icons/png/512/733/733081.png',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Un terremoto es un temblor, sacudida o movimiento repentino de la superficie terrestre. Los terremotos ocurren a lo largo de grietas (llamadas fallas) en la superficie terrestre. Los terremotos se pueden sentir a través de grandes áreas aunque por lo general duran menos de un minuto.',
      // tslint:disable-next-line: max-line-length
      antes: ['Si puedes salir en 15 segundos o menos sal, si no, permanece y busca espacio vital', 'Ubicate a un lado de muros, pero alejado de ventanas', 'Alejate de objetos que pudieran caer', 'No te coloques debajo de escritorios y mesas', 'Utiliza el triangulo de la vida'],
      // tslint:disable-next-line: max-line-length
      durante: ['No corras','No empujes','No grites','Apaga cualquier cosa que pueda causar un incendio', 'Procura estar alejado de balcones, ventanas, lámparas, canceles etc', 'No uses elevadores ni escaleras', 'alejate de cables de luz'],
      // tslint:disable-next-line: max-line-length
      despues:['En caso de haber quedado atrapado, conserva la calma y trata de comunicarte al exterior','Cierra las llaves de agua y gas. Si percibes olor a gas desconecta el interruptor de energía electrica','No enciendas cerillos ni equipo que origine flama o aquellos artículos eléctricos que puedan producir chispa', 'Usa el teléfono sólo para emergencias', 'Efectúa una cuidadosa revisión de los daños en tu casa antes de ingresar, si son graves no entres. Si estás en tu trabajo o escuela y si se considera que es más seguro evacuar el edificio, habrá que hacerlo', 'mantenete alejado de áreas de desastre'],
      // tslint:disable-next-line: max-line-length
      ubicacion: ['Cobaes 02: Los Mochis', 'Cobaes 03: Villa de Ahome', 'Conalep: Ejido Chihuahuita', 'Cobaes 58: El Guayabo', 'Icatsin: Topolobampo','Casa ejidal: Ejido Mochis','Casa Higuera de Zaragoza:Sindicatura El Carrizo', 'Casa ejidal: San Miguel','Sindicatura: Ahome','Secundaria IMA: Los Mochis','Auditorio CIE: Los Mochis','Tecnológico: Los Mochis', 'Teatro de UAS: Los Mochis','Prepas UAS en Ahome, El Fuerte y El Carrizo.']

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
