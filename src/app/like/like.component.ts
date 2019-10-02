import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
       @Input()  totalLikes = 0;
       @Input()         iLike = false;
        
        
        onClick(){
            
            this.iLike = !this.iLike;
            var x = this.iLike ? 1 : -1;
            this.totalLikes += x;
        //     if(x === 1){
        //  this.totalLikes++;
        //     }
        }
  constructor() { }

  ngOnInit() {
  }

}
