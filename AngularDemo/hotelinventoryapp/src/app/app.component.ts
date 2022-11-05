import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { reduce } from 'rxjs';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template</h1>
  // <p>Angular is awesome</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red;}`],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
