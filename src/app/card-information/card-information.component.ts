import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit{

  

  constructor(private fb:FormBuilder, private router: Router,){}
  
  generateUnique(length : number) : string{
    let result = '';
    const symbolos = '812136ABCDEFGHIJKL-MNOPQRS-TUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * symbolos.length);
      result += symbolos.charAt(randomIndex);
    }
    
    return result;
}

  storeData : any = {}
  price:number | undefined


  ngOnInit(): void {
    
    const savedFormData = localStorage.getItem("myForm")
    if(savedFormData){
      this.storeData = JSON.parse(savedFormData)
      this.price = parseInt(this.storeData.fullPrice)
    }
  }

  directionObj= this.fb.group({

      cardNumber: ["" , [Validators.required , Validators.minLength(16) , Validators.maxLength(16)]],
      validityPeriod: ["", Validators.required],
      cvc : ["" , Validators.required],
      cardHolder:["" , Validators.required],
      ticketId : [this.generateUnique(17)]

  })



  onSubmit(){

      const myForm = this.directionObj.value

      console.log(myForm)


      const storedDataString = localStorage.getItem("myForm")

      const storedData = storedDataString ? JSON.parse(storedDataString):{}

      const mergedData = { ...storedData , ...myForm}
      console.log(mergedData)

      localStorage.setItem("myForm" , JSON.stringify(mergedData))

      this.router.navigate(["/ticket"])


  }


 
}
