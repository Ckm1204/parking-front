import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParqueaderoService } from '../../parqueadero.service';
import {Button} from "primeng/button";

@Component({
  selector: 'app-parking-spot-delete',
  templateUrl: './parking-spot-delete.component.html',
  standalone: true,
  imports: [
    Button
  ],
  styleUrls: ['./parking-spot-delete.component.css']
})
export class ParkingSpotDeleteComponent implements OnInit {
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private parqueaderoService: ParqueaderoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteParkingSpot(): void {
    if (this.id) {
      this.parqueaderoService.deleteParkingSpot(this.id).subscribe(() => {
        this.router.navigate(['/parking-spots']);
      });
    }
  }

  cancelDelete(): void {
  this.router.navigate(['/parking-spots']);
}

  confirmDelete(): void {
    this.deleteParkingSpot();
}}
