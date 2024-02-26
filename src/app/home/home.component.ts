import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  minDate  = new Date()
  picker!: MatDatepickerPanel<MatDatepickerControl<any>,any,any>;

  constructor(private fb :FormBuilder , private router : Router){}

  ngOnInit(): void {}

  myInfo: any;
  weekday: string | undefined;
  myDay:any;
  directionObj =this.fb.group({
    from: ["" , Validators.required],
    to : ["" , Validators.required],
    date : ["" , Validators.required],
    amount : ["" , Validators.required],
    name : [""],
    day : [""],
    arriveTime : [""],
    depactureTime : [""],
    trainNumber:[""]
  })

  
  convertToWeekday() {
    this.myDay = this.directionObj.value.date
    if (this.myDay) {
      const date = new Date(this.myDay);
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      this.weekday = days[date.getDay()];
      this.directionObj.value.day  = this.weekday

    } else {
      this.weekday = undefined;
    }
  }

    onSubmit(){

      this.directionObj.value.name = this.directionObj.value.from + "-" + this.directionObj.value.to

      const myForm = this.directionObj.value

      const storedDataString = localStorage.getItem('myForm');
      const storedData = storedDataString ? JSON.parse(storedDataString) : {};
  
      const mergedData = { ...storedData, ...myForm };
    
      localStorage.setItem('myForm', JSON.stringify(mergedData));
    
      this.router.navigate(['/trains']);
    }

    validationToFrom(){
      const fromValue  = this.directionObj.get("from")?.value
      const toValue = this.directionObj.get("to")?.value

      if(fromValue === toValue){
        this.directionObj.get("to")?.setErrors({'sameAsFrom' :true})
        window.alert("In this case, the train cannot be found.You must Change the 'To' values")
        
      }else{
        this.directionObj.get("to")?.setErrors(null)
      }
    }
}
