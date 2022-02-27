import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Officer } from '../officer';
import { OfficerService } from '../officer.service';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit {

  spiners: boolean = false;

  officers: Officer[] = [];

  constructor(
    private officerSRV: OfficerService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getOfficers();
  }


  getOfficers(): void {
    this.spiners = true;
    this.officerSRV.getOfficers().subscribe(
      res => {
        this.officers = res
        this.spiners = false
      }
    )
  }

  deleteOfficer(id: number): void {
    this.officerSRV.deleteOfficer(id).subscribe(
      res => {
        this.getOfficers();
      }
    )
  }




}
