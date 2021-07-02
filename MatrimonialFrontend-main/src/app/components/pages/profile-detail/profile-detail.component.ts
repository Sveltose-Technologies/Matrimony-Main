import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  
  breadcrumb = [
    {
      title: 'Commission-List',
      subTitle: 'Dashboard'
    }
  ]


}
