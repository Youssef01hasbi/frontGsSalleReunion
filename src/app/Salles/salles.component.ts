import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {SalleReunionService} from "./SalleReunion.service";
import {SalleReunion} from "./SalleReunion";
import {Route, Router} from "@angular/router";
import {Personne} from "../Personnes/Personne";
import {Departments} from "../departments/departments";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  public salleReunion: SalleReunion[] = [];
  public editSalle: SalleReunion;
  public deleteSalle : SalleReunion;

  constructor(private salleReunionService : SalleReunionService,private router:Router) { }

  ngOnInit(): void {
    this.onGetSalle();
  }

  public onGetSalle():void{
    this.salleReunionService.getSalleReunion().subscribe(
      (response:SalleReunion[]) => {
        this.salleReunion = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchSalles(key:string):void{
    const results : SalleReunion[] = [];
    for (const salleReunion of this.salleReunion) {
      if(salleReunion.nom.toLowerCase().indexOf(key.toLowerCase()) != -1
        ||salleReunion.qteMaxPer.toLowerCase().indexOf(key.toLowerCase()) != -1) {
        results.push(salleReunion);
      }
    }
    this.salleReunion = results;
    if(results.length === 0 || !key){
      this.onGetSalle();
    }
  }

  public onAddSalle(addForm: NgForm):void{
    this.salleReunionService.addSalleReunion(addForm.value).subscribe(
      (response:SalleReunion)=>{
        console.log(response);
        this.onGetSalle();
        addForm.reset();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onDeleteSalle(salleId: number):void{
    this.salleReunionService.deleteSalleReunion(salleId).subscribe(
      (response:void)=>{
        console.log(response);
        this.onGetSalle();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onUpdateSalleReunion(salleReunion: SalleReunion):void{
    this.salleReunionService.updateSalleReunion(salleReunion).subscribe(
      (response:SalleReunion)=>{
        console.log(response);
        this.onGetSalle();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onOpenModal(salleReunion: SalleReunion, mode:string) : void{
    const container = document.getElementById('mainContainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit'){
      this.editSalle = salleReunion;
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode === 'delete'){
      this.deleteSalle = salleReunion;
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}

