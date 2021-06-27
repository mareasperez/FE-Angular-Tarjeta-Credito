import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
class TarjetaCredito {
  titular: string
  numero: string
  exp_date: string
  cvv: number
  constructor(titular?: string, numero?: string, exp_date?: string, cvv?: number) {
    this.numero = numero ? numero : ''
    this.cvv = cvv ? cvv : 0;
    this.exp_date = exp_date ? exp_date : '';
    this.titular = titular ? titular : ''
  }
}
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  public listaCredito: TarjetaCredito[] = [
    { titular: 'juan perez', numero: '1234567890', exp_date: '2/23', cvv: 123 },
    { titular: 'Miguel Gonzalez', numero: '0987654321', exp_date: '3/23', cvv: 321 },
    { titular: 'Mauricio Areas', numero: '6789012345', exp_date: '4/23', cvv: 231 },
    { titular: 'juana perez', numero: '648896451236', exp_date: '2/23', cvv: 123 }
  ];

  public form: FormGroup = new FormGroup({})
  tarjeta: TarjetaCredito = new TarjetaCredito()


  constructor(
    private fb: FormBuilder,
    private toast: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      exp_date: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }
  agregarTarjeta() {
    this.tarjeta = (this.form.value)
    console.log(this.tarjeta);
    this.listaCredito.push(this.tarjeta)
    this.tarjeta = new TarjetaCredito()
    this.toast.success('Tarjeta agregada con exito','Agregado!!')
    this.form.reset()

  }
  eliminarTarjeta(index: number) {
    this.listaCredito.splice(index,1)
    this.toast.error('Tarjeta Removida con exito','Removido!!')

  }

  ngOnInit(): void {
  }

}
