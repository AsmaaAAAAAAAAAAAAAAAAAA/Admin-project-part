import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {

  transform(ID: string, date: string): string {
    let res:string=""
    if(date=="YY")
    {
       res="19"+ID[1]+ID[2];
    }
    else if(date=="MM")
    {
      res=ID[3]+ID[4];
    }
    else if(date=="DD")
    {
      res=ID[5]+ID[6];
    }
    else
    {
      res=ID[5]+ID[6]+"-"+ID[3]+ID[4]+"-"+"19"+ID[1]+ID[2];
    }
    return res;
  }

}
