import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(crd: string): string {
    let res="";
    for(let i=0;i<crd.length;i++)
    {
      if(i%4==0)
      {
        if(i==0)
        {
          res+=crd[i];
        }
        else
        {
          res+="-"+crd[i];
        }
        
      }
      else
      {
        res+=crd[i]; 
      }
    }
    return res;
   
  }

}
