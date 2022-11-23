import { Time } from "@angular/common";

export interface Bitacora { 
    fechaInicio:string;
    fechaFinal: string;
    tabla:string;
    usuario:string;
    sistema:string;
    oficina:string;
    operacion:string;
    nombrePC:string;
    entrada:string;
    comando:string;
    direccionIP:string;
    resultado:string;
}