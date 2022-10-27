import { Component, OnInit } from '@angular/core';
import {Personne} from "./Personne";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {PersonneService} from "./Personne.service";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  public personnes: Personne[] = [];
  public editPersonne: Personne;
  public deleteEmployee : Personne;

  constructor(private personneService:PersonneService) { }

  ngOnInit(): void {
    this.getPersonne();
  }

  public getPersonne():void{
    this.personneService.getPersonne().subscribe(
      (response:Personne[]) => {
        this.personnes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmployee(addForm: NgForm):void{
    document.getElementById('addEmployeeForm').click();
    this.personneService.addPersonne(addForm.value).subscribe(
      (response:Personne)=>{
        console.log(response);
        this.getPersonne();
        addForm.reset();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public searchPersonnes(key:string):void{
    const results : Personne[] = [];
    for (const personne of this.personnes) {
      if(personne.nom.toLowerCase().indexOf(key.toLowerCase()) != -1
        ||personne.email.toLowerCase().indexOf(key.toLowerCase()) != -1
        ||personne.role.toLowerCase().indexOf(key.toLowerCase()) != -1
        ||personne.jobTitle.toLowerCase().indexOf(key.toLowerCase()) != -1 ) {
        results.push(personne);
      }
    }
    this.personnes = results;
    if(results.length === 0 || !key){
      this.getPersonne();
    }
  }

  public onUpdateEmployee(personne: Personne):void{
    this.personneService.updatePersonne(personne).subscribe(
      (response:Personne)=>{
        console.log(response);
        this.getPersonne();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onDeleteEmployee(personneId: number):void{
    this.personneService.deletePersonne(personneId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getPersonne();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }


  public onOpenModal(personne: Personne, mode:string) : void{
    const container = document.getElementById('mainContainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit'){
      this.editPersonne = personne;
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode === 'delete'){
      this.deleteEmployee = personne;
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}
