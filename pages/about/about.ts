import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css']
})
export class AboutPage {
  height: number;
  weight: number;
  bmr: number;
  age:number;
  intake:number;
  activitylevel:number;
  gender: string;
  carbs: number;
  protein: number;
  fat: number;
  constructor(public navCtrl: NavController) {}


calculateintake() {
this.intake = this.bmr*this.activitylevel;
this.intake = parseFloat(this.intake.toFixed(0)); 
this.carbs= this.intake*0.60
this.carbs = parseFloat(this.carbs.toFixed(0)); 
this.protein = this.intake*0.125
this.protein = parseFloat(this.protein.toFixed(0)); 
this.fat = this.intake*0.275
this.fat = parseFloat(this.fat.toFixed(0)); 
 
 
  if (this.gender = "m") {
  this.bmr = (10*this.weight+6.258*this.height-5*this.age+5);

  } 
 else if (this.gender = "f") {
    this.bmr = (10*this.weight+6.258*this.height-5*this.age-161);
}
  
  

}


}










