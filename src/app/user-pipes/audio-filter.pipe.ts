import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audioFilter'
})
export class AudioFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
