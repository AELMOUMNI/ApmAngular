import {Component, OnDestroy, OnInit} from "@angular/core"
import { Subscription } from "rxjs";
import { IRecord } from "../../core/models/record";
import { VelibApiService } from "../../core/services/velib-api.service";

@Component({
  selector: 'app-dock-available-list',
  templateUrl: './dock-available-list.component.html',
  styleUrls: ['./dock-available-list.component.scss']
})

export class DockAvailableListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'la station avec le plus de borne disponible et le nombre de vélos disponible';
    sub! : Subscription;

    errorMessage: string = '';

    filteredDocks: IRecord[] = [];
    docks: IRecord[] = [];
    constructor(private docksService: VelibApiService){}

    performFilter(filterBy:string) : IRecord[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.docks.filter((dock:IRecord) => 
        dock.name.toLocaleLowerCase().includes(filterBy));
    }
    ngOnInit(): void{
        this.sub = this.docksService.getProducts().subscribe({
            next: docks =>{
                this.docks = docks.data,
                this.filteredDocks = this.docks;
            },
            error: err => this.errorMessage = err
        });
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    onRatingClicked(message : string): void{
        this.pageTitle = 'Product List ' + message;
    }
}
