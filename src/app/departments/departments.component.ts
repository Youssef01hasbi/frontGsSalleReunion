import { Component, OnInit } from '@angular/core';
import {Personne} from "../Personnes/Personne";
import {PersonneService} from "../Personnes/Personne.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Departments} from "./departments";
import {DepartmentsService} from "./departments.service";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public departments: Departments[] = [];
  public editDepartment: Departments;
  public deleteDepartments : Departments;

  constructor(private departmentsService:DepartmentsService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  public getDepartments():void{
    this.departmentsService.getDepartment().subscribe(
      (response:Departments[]) => {
        this.departments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddDepartment(addForm: NgForm):void{
    document.getElementById('addEmployeeForm').click();
    this.departmentsService.addDepartments(addForm.value).subscribe(
      (response:Departments)=>{
        console.log(response);
        this.getDepartments();
        addForm.reset();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public searchDepartments(key:string):void{
    const results : Departments[] = [];
    for (const department of this.departments) {
      if(department.nomService.toLowerCase().indexOf(key.toLowerCase()) != -1
        ||department.tresoriePrefoctorale.toLowerCase().indexOf(key.toLowerCase()) != -1
        ||department.perception.toLowerCase().indexOf(key.toLowerCase()) != -1){
        results.push(department);
      }
    }
    this.departments = results;
    if(results.length === 0 || !key){
      this.getDepartments();
    }
  }

  public onUpdateDepartment(departments: Departments):void{
    this.departmentsService.updateDepartments(departments).subscribe(
      (response:Departments)=>{
        console.log(response);
        this.getDepartments();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onDeleteDepartment(departmentId: number):void{
    this.departmentsService.deleteDepartments(departmentId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getDepartments();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }


  public onOpenModal(departments: Departments, mode:string) : void{
    const container = document.getElementById('mainContainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit'){
      this.editDepartment = departments;
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode === 'delete'){
      this.deleteDepartments = departments;
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}
