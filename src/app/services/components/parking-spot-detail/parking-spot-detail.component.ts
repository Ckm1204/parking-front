import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParqueaderoService } from '../../parqueadero.service';
import { Parqueadero } from '../../parqueadero.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-parking-spot-detail',
  templateUrl: './parking-spot-detail.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  styleUrls: ['./parking-spot-detail.component.css']
})
export class ParkingSpotDetailComponent implements OnInit {
  parkingSpot: Parqueadero | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parqueaderoService: ParqueaderoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.parqueaderoService.getParkingSpotDetail(id).subscribe(data => {
      this.parkingSpot = data;
    });
  }

  editParkingSpot() {
    if (this.parkingSpot) {
      this.router.navigate(['/edit-parking-spot', this.parkingSpot.id]);
    }
  }

  deleteParkingSpot() {
    if (this.parkingSpot) {
      this.parqueaderoService.deleteParkingSpot(this.parkingSpot.id).subscribe(() => {
        this.router.navigate(['/parking-spots']);
      });
    }
  }
}
