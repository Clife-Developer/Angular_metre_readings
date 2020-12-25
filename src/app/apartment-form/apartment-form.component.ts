import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { ApartmentServiceService} from './apartment-service.service';
import { FormInterface } from './form-interface';

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css']
})
export class ApartmentFormComponent implements OnInit {



  details:FormInterface;
  constructor(private httpService:ApartmentServiceService) { }

  ngOnInit(): void {
  }

  view(){
    this.httpService.getApartDetails().subscribe(res=>{
      if(res){
        this.details=res;
      }return false;
      
    })
  }

  onSubmit(form){
    this.httpService.addApartDetails(form.value).subscribe(res=>{
      console.log(res);
    })
    form.reset();
  }


}
