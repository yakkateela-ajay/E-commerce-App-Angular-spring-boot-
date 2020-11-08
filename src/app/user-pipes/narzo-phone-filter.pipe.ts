import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'narzoPhoneFilter'
})
export class NarzoPhoneFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
