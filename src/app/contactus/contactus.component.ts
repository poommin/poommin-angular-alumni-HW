import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

    getName(){
      Swal.fire(
        'Success!',
        'ส่งรายละเอียดเสร็จสิ้น!<br>ขอบคุณสำหรับการติดต่อ',
        'success'
      )
    }
    

  constructor() { }

  ngOnInit(): void {
  }
  
}
