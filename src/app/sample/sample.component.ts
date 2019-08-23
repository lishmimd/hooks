
import { Component, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy, OnChanges} from '@angular/core';
@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
  data:number=100;

  constructor() {
    console.log(`new - data is ${this.data}`);
}
ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
}
ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
}
ngDoCheck() {
    console.log("ngDoCheck")
}
ngAfterContentInit() {
    console.log("ngAfterContentInit");
}
ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
}
ngAfterViewInit() {
    console.log("ngAfterViewInit");
}
ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
}
ngOnDestroy() {
    console.log("ngOnDestroy");
}
fnAddNumber():void{
    this.data+=100;
}
deleteNumber():void{
    this.data -=100;
}
}

