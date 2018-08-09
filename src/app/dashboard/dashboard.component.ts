import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campaigns: any = [];

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.apiService.getCampaigns().subscribe((data) => {
      this.campaigns = data;
      this.campaigns.forEach((v) => {
        const p = v.platforms;
        v['facebook_status'] = p.facebook.status ? p.facebook.status : 'Not created';

        v['instagram_status'] = p.instagram.status ? p.instagram.status : 'Not created';

        v['google_status'] = p.google.status ? p.google.status : 'Not created';

      });
    });
  }

  campaignClick(event) {
    console.log('Clicked: ' + event.row.item.id);
    this.router.navigate(['/campaigns', event.row.item.id]);
  }

}
