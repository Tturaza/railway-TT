import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges{


  constructor(private fb :FormBuilder , private router : Router){}

  ngOnChanges(changes: SimpleChanges): void {
   
  }

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

  

}

//with swagger

//CgetMethod(){
  //   this.serv.SgetMethod().subscribe( respo => {
  //     this.myInfo = respo
  //     console.log(respo)
  //   } ) 
 
  //   }
