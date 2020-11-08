import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortproducts'
})
export class SortproductsPipe implements PipeTransform {

  transform(value: Array<any>, args: any[]  ): any {
    const sortfeild = args[0];
    const sortdirection = args[1];
    let multiplier = 1;
    if(sortdirection=== "desc"){
      multiplier = -1;
    }
    value.sort((a: any, b:any)=>{
      if(a[sortfeild]<b[sortfeild]){
        return -1 * multiplier;
      }else if(a[sortfeild]>b[sortfeild]){
        return 1 * multiplier;
      }else{
        return 0;
      }
    });
    return value;
  }


}
