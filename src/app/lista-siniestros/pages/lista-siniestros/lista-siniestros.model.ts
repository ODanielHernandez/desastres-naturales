export interface Siniestro {
    id: string;
    titulo: string;
    imgUrl: string;
    descripcion: string;
    antes: string[];
    durante: string[];
    despues: string[];
    sintomas: string[];
    mochila: { value: string, isChecked: boolean }[]
}