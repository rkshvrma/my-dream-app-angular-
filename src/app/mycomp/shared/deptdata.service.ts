import {Injectable} from '@angular/core';

@Injectable()
export class DeptData{
    
    loadDepts():string[]{
        return ['dept1','dept2','dept3']
   
    }
 
}