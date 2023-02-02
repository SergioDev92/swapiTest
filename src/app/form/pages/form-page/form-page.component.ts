import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
    fechaN: [
      Validators.required,
      this.validacionEdad
    ],

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido(campo: string) {
    return this.form.controls[campo].errors
      && this.form.controls[campo].touched;
  }

  validacionEdad(control: FormControl) {
    // const fechaN = this.form.get('fechaN')?.value;
    const fechaN = control?.value;
    if (fechaN instanceof Date) {
      const fechaActual = new Date();
      const edad = fechaActual.getFullYear() - fechaN.getFullYear();
      // console.log(edad)
      if (edad < 18) {
        return { menorEdad: true };
      }

    }
    return null;
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
