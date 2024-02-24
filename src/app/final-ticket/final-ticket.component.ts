import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-final-ticket',
  templateUrl: './final-ticket.component.html',
  styleUrls: ['./final-ticket.component.scss']
})
export class FinalTicketComponent implements OnInit {
  


   storeData : any ={}
   classFromNumberArray:any =[]
   dayOfToday = new Date()
   trainClass : any
   cardN = ""
   uniqueId:string = ""
  
  constructor(){
  }

  ngOnInit(): void {

    const savedFormData = localStorage.getItem("myForm")
    if(savedFormData){
    this.storeData = JSON.parse(savedFormData)
 
    this.cardN = this.storeData.cardNumber
    this.uniqueId = this.storeData.ticketId
    console.log(this.uniqueId)
   
    }

    for (let i = 0; i < this.storeData.amount; i++) {
        if (this.storeData.passengers[i]) {
            const classFromNumber = this.storeData.passengers[i].classT;
            if (classFromNumber === "150") {
                this.classFromNumberArray[i] = "I class";
            } else if (classFromNumber === "100") {
                this.classFromNumberArray[i] = "II class";
            } else if (classFromNumber === "50") {
                this.classFromNumberArray[i] = "III class";
            }
        }
    }
  }

}
