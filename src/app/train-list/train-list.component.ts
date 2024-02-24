import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent{


  constructor(private router : Router , private fb : FormBuilder) {
    this.generateRandomNumbers(3);
    const storedDataString = localStorage.getItem("myForm");
   if(storedDataString){
    this.storeData = JSON.parse(storedDataString)
   }

   

   this.updateId1 = this.fb.group({
    depactureTime : ['13:25'],
    arriveTime : ['18:45'],
    trainName : [this.randomNumbers[1]]
  })


  this.updateId2 = this.fb.group({
    depactureTime : ['22:15'],
    arriveTime : ['04:30'],
    trainName : [this.randomNumbers[2]]
  })

  this.updateId3 = this.fb.group({
    depactureTime : ['06:30'],
    arriveTime : ['12:40'],
    trainName : [this.randomNumbers[0]]
  })

  }

  storeData: any = {};
  randomNumbers: number[] = [];
  updateId1:FormGroup;
  updateId2:FormGroup;
  updateId3:FormGroup;
  life: boolean = true;


  generateRandomNumbers(count: number) {
    const numberSet = new Set<number>();

    while (numberSet.size < count) {
      const randomNumber = Math.floor(Math.random() * (825 - 800 + 1)) + 800;
      numberSet.add(randomNumber);
    }

    this.randomNumbers = Array.from(numberSet);
  }

  moveOnById1(){
   if(this.updateId1){
    this.storeData.depactureTime = this.updateId1.get("depactureTime")?.value
    this.storeData.arriveTime = this.updateId1.get("arriveTime")?.value
    this.storeData.trainNumber = this.updateId1.get("trainName")?.value
   }

    localStorage.setItem('myForm', JSON.stringify(this.storeData));

    this.router.navigate(["/bookT", this.randomNumbers[1]])
  }
   

  moveOnById2(){
    if(this.updateId2){
      this.storeData.depactureTime = this.updateId2.get("depactureTime")?.value
      this.storeData.arriveTime = this.updateId2.get("arriveTime")?.value
      this.storeData.trainNumber = this.updateId2.get("trainName")?.value
    }
    

    localStorage.setItem('myForm' ,JSON.stringify(this.storeData))
    this.router.navigate(["/bookT" , this.randomNumbers[2]])
  }
   
  moveOnById3(){
    if(this.updateId3){
      this.storeData.depactureTime = this.updateId3.get("depactureTime")?.value
      this.storeData.arriveTime = this.updateId3.get("arriveTime")?.value
      this.storeData.trainNumber = this.updateId3.get("trainName")?.value
    }

    localStorage.setItem('myForm' ,JSON.stringify(this.storeData))
    
    this.router.navigate(["/bookT" , this.randomNumbers[0]])
  }
   
}
