import { IRecord } from "./record";

export interface IResponse{
    count : number;
    data : IRecord[];
    status : string;
}