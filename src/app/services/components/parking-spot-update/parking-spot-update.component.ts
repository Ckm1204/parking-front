import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParqueaderoService } from '../../parqueadero.service';
import { Parqueadero } from '../../parqueadero.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-parking-spot-update',
  templateUrl: './parking-spot-update.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  styleUrls: ['./parking-spot-update.component.css']
})
export class ParkingSpotUpdateComponent implements OnInit {
  parkingSpot: Parqueadero | undefined;
  parkingSpotForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.parqueaderoService.getParkingSpotDetail(id).subscribe(data => {
      this.parkingSpot = data;
      this.parkingSpotForm.patchValue(this.parkingSpot);
    });
  }

  updateParkingSpot(): void {
    if (this.parkingSpotForm.valid) {
      this.parqueaderoService.updateParkingSpot(this.parkingSpotForm.value.id, this.parkingSpotForm.value).subscribe(() => {
        this.router.navigate(['/parking-spots']);
      });
    }
  }

  onSubmit() {
    this.updateParkingSpot();
  }
}
