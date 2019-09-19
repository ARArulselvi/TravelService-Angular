import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-show-tours',
  templateUrl: './show-tours.component.html',
  styleUrls: ['./show-tours.component.css']
})
export class ShowToursComponent implements OnInit {

  tourList:Tour[];
  constructor(private service: TourService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp => this.tourList=resp);
  }

}
