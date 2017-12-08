import { FormGroup, FormControl, Validators } from '@angular/forms';
export class CicloForm {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nomeCiclo: new FormControl([null, Validators.required]),
      totalHoras: new FormControl([null, Validators.required])
    });
  }
}
