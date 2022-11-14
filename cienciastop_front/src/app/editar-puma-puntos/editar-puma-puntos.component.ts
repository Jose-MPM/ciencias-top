import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Monedero } from './monedero';
import { MonederoService } from './monedero.service';

@Component({
  selector: 'app-editar-puma-puntos',
  templateUrl: './editar-puma-puntos.component.html',
  styleUrls: ['./editar-puma-puntos.component.css']
})
export class EditarPumaPuntosComponent implements OnInit {

  private monederoId: number = 1;
  private monedero: Monedero;

  sumaRestaGroup!: FormGroup;

  constructor(private fb: FormBuilder, private monederoService: MonederoService) { }

  ngOnInit(): void {
    this.sumaRestaGroup = this.fb.group({
      defCantidad: [''],
      otraCantidad: ['',  Validators.min(0)],
      opcion: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.sumaRestaGroup.valid) {
      console.log(this.sumaRestaGroup.value.defCantidad);
      // Se obtienen los datos del monedero para operar
      //this.monederoService.getMonedero(this.monederoId).subscribe(
      //  (m: Monedero) => {
      //    console.log(m);
      //    this.monedero = m;
      //    console.log(this.monedero);
      //  }
      //);

      // Se operan los datos del monedero
      let n = this.sumaRestaGroup.value.defCantidad as number;
      let m = this.sumaRestaGroup.value.otraCantidad as number;
      let updatedPP = 0;
      var monederoUpdate: Monedero = new Monedero();
      if (this.sumaRestaGroup.value.opcion == 'restar') {
        monederoUpdate.pumaPuntos = -1 * (Number(n) + Number(m)) ;
      } else {
        monederoUpdate.pumaPuntos = (Number(n) + Number(m));
      }
      console.log(monederoUpdate);
      //const monederoUpdate = {
      //  'status': '',
      //  'pumaPuntos': '',
      //  'periodo': ''
      //}
      this.monederoService.sumarRestarPumaPuntos(this.monederoId, monederoUpdate).subscribe(
        response => {
          Swal.fire('Saldo Actualizado'
          , 'Saldo actual: ' + response.monedero.pumaPuntos
          , 'success');
        }
      );
    }
  }

}
