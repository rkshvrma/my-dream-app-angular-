import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {


userData = {
    name : 'Rakesh', 
    income : 1234,
    rating : 11.12356,
    DOJ : new Date ('10/23/2019'),
    display : 'asssswwwwomeeeeedddddddsadsada'
    
    
}

// description =  {
//     firstname : 'Rakesh',
//     lastname : 'Varma',

//     mobile : 9980808080
    
// }
  constructor() { }

  ngOnInit() {
  }

}
