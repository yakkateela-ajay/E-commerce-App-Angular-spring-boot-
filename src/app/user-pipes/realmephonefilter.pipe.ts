import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realmephonefilter'
})
export class RealmephonefilterPipe implements PipeTransform {

  transform(value: any[],filterString: String, propName:string): any[] {
    const resultArray=[];
    if(value.length === 0 || filterString === "" || propName === ""){
      return value;
    }  
    for(const item of value){
      if(item[propName].toLowerCase() === filterString.toLowerCase()){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
