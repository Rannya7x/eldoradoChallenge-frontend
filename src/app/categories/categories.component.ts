import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor( private service:ApiserviceService){}

  readCategories:any;

  ngOnInit(): void{
    this.service.getAllDataCategories().subscribe((res) => {
      console.log(res);
      this.readCategories = res.data;
    })
  }
  title = 'Categories';
  categoriesForm = new FormGroup({
    'name':new FormControl('', [Validators.required, Validators.maxLength(128)]),
  });

  categoriesSubmit(){
    if(this.categoriesForm.valid){
      console.log(this.categoriesForm.value);
      this.service.createDataCategory(this.categoriesForm.value).subscribe((res) => {
        console.log(res)
        this.categoriesForm.reset();
        alert("Nova categoria adicionada!")
        this.ngOnInit();
      })
    }else{
      alert("Todos os campos são obrigatórios")
    }
  }

  deleteCategory(id:any){
    console.log(id);
    this.service.deleteCategory(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    })
  }
}
