import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styles: [
    `
    mat-form-field {
      width: 100%;
    }
    `
  ]
})
export class FormPageComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nombre: [,
      [Validators.required,
       Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(/^[a-zA-Z]+$/)
      ]
    ],
    apellido: [,
      [Validators.required,
       Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(/^[a-zA-Z]+$/)
      ]
    ],
    fechaN: [],

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido( campo: string ) {
    return this.form.controls[campo].errors
            && this.form.controls[campo].touched;
  }

  guardar() {
    if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
    }
    console.log(this.form.value);
    this.form.reset();
  }
}
