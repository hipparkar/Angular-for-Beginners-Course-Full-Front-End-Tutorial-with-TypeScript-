import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TC, Bathroom, Kitchen',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkinTime: new Date('30-Oct-2022'),
    checkoutTime: new Date('31-Oct-2022'),
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TC, Bathroom, Kitchen',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkinTime: new Date('30-Oct-2022'),
    checkoutTime: new Date('31-Oct-2022'),
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wifi, TC, Bathroom, Kitchen',
    price: 1500,
    photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkinTime: new Date('30-Oct-2022'),
    checkoutTime: new Date('31-Oct-2022'),
  },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}