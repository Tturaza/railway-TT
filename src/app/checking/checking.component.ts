import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.scss']
})
export class CheckingComponent {

  storeData: any = {}
  isAlive: boolean = false

  constructor(){}

 
  searchForm = new FormGroup({
    'yourId': new FormControl()
  })


  submitForm(){
    console.log(this.searchForm.value , 'searcg#')

    const personId = this.searchForm.value.yourId
    console.log(personId)

    const storeDataString = localStorage.getItem("myForm")
    if(storeDataString){
      this.storeData =JSON.parse(storeDataString)
      if(this.storeData.ticketId === personId){
        this.isAlive = true
      }else {
        window.alert("Nothing was found with this iD")
        this.isAlive = false
      }
    }
    

  }


  deleteT(){
    localStorage.removeItem("myForm")
    this.isAlive =false
  }

}
