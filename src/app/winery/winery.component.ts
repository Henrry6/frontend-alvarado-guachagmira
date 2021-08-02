import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.css']
})


export class WineryComponent implements OnInit {

  status=[
    {id: '01', description: 'Activo'},
    {id: '02', description: 'Inactivo'},
  ];
  selectStatus: string;


  constructor() {
    this.selectStatus = 'SI'
  }

  ngOnInit(): void {
  }

}
