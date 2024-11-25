import {Component, OnInit} from '@angular/core';
import { ParqueaderoService } from '../../parqueadero.service';
import { Parqueadero } from '../../parqueadero.model';
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-spot-list',
  standalone: true,
  imports: [
    TableModule,
    Button
  ],
  templateUrl: './parking-spot-list.component.html',
  styleUrl: './parking-spot-list.component.css'
})
export class ParkingSpotListComponent implements OnInit {
  parkingSpots: Parqueadero[] = [];
  protected selectedParkingSpot: any;

  constructor(private parqueaderoService: ParqueaderoService, private router: Router) {}

  ngOnInit(): void {
    this.parqueaderoService.getAvailableParkingSpots().subscribe(data => {
      this.parkingSpots = data;
    });
  }

  addParkingSpot(): void {
    this.router.navigate(['/create-parking-spot']);
  }
 onRowSelect(event: any): void {
  this.selectedParkingSpot = event.data;
  this.router.navigate(['/parking-spot', this.selectedParkingSpot.id]);
}
}
