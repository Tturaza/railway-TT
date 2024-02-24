import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, withDebugTracing } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {


  storeData: any = {};
  newMyFormObj!: FormGroup;
  allowed:boolean = false;
  isShow = false;
 

  constructor(private fb: FormBuilder , private router: Router) {}

  ngOnInit(): void {
    this.initializeForm()

    const savedFormData = localStorage.getItem('myForm');

    if (savedFormData) {
      this.storeData = JSON.parse(savedFormData)
      this.newMyFormObj.patchValue(this.storeData) 
    }

    for (let i = 0; i < this.storeData.amount; i++) {
      this.addPassenger();
    }

  }

  initializeForm() {

    this.newMyFormObj = this.fb.group({
      amount: [this.storeData.amount || ''],
      from: [this.storeData.from || ''],
      to: [this.storeData.to || ''],
      date: [this.storeData.date || ''],
      day: [this.storeData.day],
      name: [this.storeData.name],
      trainNumber:[this.storeData.trainNumber],
      depactureTime:[this.storeData.depactureTime],
      arriveTime:[this.storeData.arriveTime],
      email: ["", Validators.email],
      mobileN: ["", Validators.required],
      passengers: this.fb.array([]),
      fullPrice: [0],
    });

  }

  get passengerForms(): FormArray {
    return this.newMyFormObj.get('passengers') as FormArray;
  }

  addPassenger(): void {
    const passenger = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      classT:["" , Validators.required],
      idNumber:["", Validators.required],
      placeP:["" , Validators.required]
     
    });
    this.passengerForms.push(passenger);
    this.storeData = this.newMyFormObj.value
  }

  onSubmit(): void {
    const formValue = this.newMyFormObj.value
    this.storeData = this.newMyFormObj.value
    localStorage.setItem("myForm" , JSON.stringify(formValue))
    this.isShow=true
    this.allowed = true
  }

    totalPrice():number{
      let result = 0
      this.passengerForms.controls.forEach((passenger: any) => {
      const classTValue = passenger.get('classT')?.value || 0;
      result += +classTValue; 
      });
      this.newMyFormObj.get("fullPrice")?.setValue(result)
      return result;
    }

    registerTickect(){
      this.router.navigate(["/cardInfo"])
    }

}
