import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParqueaderoService } from '../../parqueadero.service';
import { Parqueadero } from '../../parqueadero.model';
import { Button } from "primeng/button";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-parking-spot-create',
  templateUrl: './parking-spot-create.component.html',
  standalone: true,
  imports: [
    Button,
    ReactiveFormsModule
  ],
  styleUrls: ['./parking-spot-create.component.css']
})
export class ParkingSpotCreateComponent implements OnInit {
  parkingSpot: Parqueadero = new Parqueadero();
  parkingSpotForm: FormGroup;

  constructor(
    private parqueaderoService: ParqueaderoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.parkingSpotForm = this.fb.group({
      nombre: ['', Validators.required],
      nit: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  createParkingSpot(): void {
    if (this.parkingSpotForm.valid) {
      this.parqueaderoService.createParkingSpot(this.parkingSpotForm.value).subscribe(() => {
        this.router.navigate(['/parking-spots']);
      });
    }
  }

  onSubmit() {
    this.createParkingSpot();
  }
}
