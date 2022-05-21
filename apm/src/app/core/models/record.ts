export interface IRecord{
    name : string;
    stationCode : string;
    ebike : number;
    mechanical : number;
    coordonneesGeo : [];
    dueDate: Date;
    numbikesavailable: number;
    numdocksavailable : number;
    capacity : number;
    isRenting : string;
    isInstalled : string;
    nomArrondissementCommunes : string;
    isReturning : string;
}