import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Officer } from 'src/app/officer';
import { OfficerService } from 'src/app/officer.service';

@Component({
  selector: 'app-officer-deatils',
  templateUrl: './officer-deatils.component.html',
  styleUrls: ['./officer-deatils.component.css']
})
export class OfficerDeatilsComponent implements OnInit {

  officer : Officer |undefined

  constructor(
    private officerSRV : OfficerService,
    private router : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getOfficer()
  }

  getOfficer():void{
    const id = Number(this.router.snapshot.paramMap.get('id'))
    this.officerSRV.getOfficer(id).subscribe(
      res => {
        this.officer = res
      }
    )
  }



}
