import { Component, OnInit } from '@angular/core';

interface TarjetaCredito {
  titular: string
  numero: string
  exp_date: string
  cvv: number
}
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listaCredito: TarjetaCredito[] = [
    { titular: 'juan perez', numero: '1234567890', exp_date: '2/23', cvv: 123 },
    { titular: 'Miguel Gonzalez', numero: '0987654321', exp_date: '3/23', cvv: 321 },
    { titular: 'Mauricio Areas', numero: '6789012345', exp_date: '4/23', cvv: 231 },
    { titular: 'juan perez', numero: '1234567890', exp_date: '2/23', cvv: 123 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
