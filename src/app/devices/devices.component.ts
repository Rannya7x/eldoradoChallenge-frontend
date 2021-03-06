import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  constructor( private service:ApiserviceService){}

  readDevices:any;
  readCategories:any;

  ngOnInit(): void{
    this.service.getAllData().subscribe((res) => {
      console.log(res);
      this.readDevices = res.data;
    })
    this.service.getAllDataCategories().subscribe((res) => {
      this.readCategories = res.data;
    })
  }
  title = 'Devices';
  devicesForm = new FormGroup({
    'color':new FormControl('', [Validators.required, Validators.maxLength(16), Validators.pattern('^[a-zA-Z ]*$')]),
    'category':new FormControl('', Validators.required),
    'partNumber':new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });

  devicesSubmit(){
    if(this.devicesForm.valid){
      console.log(this.devicesForm.value);
      this.service.createData(this.devicesForm.value).subscribe((res) => {
        console.log(res)
        this.devicesForm.reset();
        alert("Novo device adicionado!")
        this.ngOnInit();
      })
    }else{
      alert("Todos os campos são obrigatórios")
    }
  }

  deleteDevice(id:any){
    console.log(id);
    this.service.deleteData(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    })
  }
}
