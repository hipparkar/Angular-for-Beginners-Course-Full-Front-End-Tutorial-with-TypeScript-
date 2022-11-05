import { Component, DoCheck, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  title = 'Room List';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() { }

  ngOnInit(): void {

    // console.log(this.headerComponent);
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('30-Oct-2022'),
      checkoutTime: new Date('31-Oct-2022'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('30-Oct-2022'),
      checkoutTime: new Date('31-Oct-2022'),
      rating: 3.4554,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('30-Oct-2022'),
      checkoutTime: new Date('31-Oct-2022'),
      rating: 2.6,
    },
    ]
  }

  ngDoCheck() {
    console.log("on changes is called");
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title = "Last Title";
    // this.headerChildrenComponent.get(0)?.title;
  }

  ngAfterViewChecked() {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Private Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('30-Oct-2022'),
      checkoutTime: new Date('31-Oct-2022'),
      rating: 2.6,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
