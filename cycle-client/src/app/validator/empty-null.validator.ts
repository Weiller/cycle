import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[isEmptyOrNull][formControlName],[isEmptyOrNull][formControl],[isEmptyOrNull][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmptyNullValidator), multi: true }
    ]
})
export class EmptyNullValidator implements Validator {

      validate(c: FormControl): { [key: string]: any } {

          const stringValueLength =  String(c.value).trim();

          if (stringValueLength.length == 0)
              return {
                isEmpty: false
              }

          return null;
      }

}
