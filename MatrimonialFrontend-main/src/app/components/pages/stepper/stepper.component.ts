import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  profileFor: any;
  response: {
    data: any
  }


  genders: any[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'}
  ];

  
  maritalstatuss: any[] = [
    {value: 'Single', viewValue: 'Single'},
    {value: 'Married', viewValue: 'Married'},
    {value: 'Divorced', viewValue: 'Divorced'}
  ];

  

  constructor(private _formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      mobile: ['',Validators.required,Validators.minLength(10)]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.getProfileFor();
  }

  getProfileFor():any{
    this.userService.getprofilefor().subscribe((data):any=>{
      console.log(data)
      this.profileFor = data
      console.log(this.profileFor.data)
    },
    (error)=>{
      console.log(error)
    })
  }
}
