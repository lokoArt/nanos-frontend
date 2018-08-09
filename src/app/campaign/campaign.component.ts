import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  campaignId: any = null;
  campaign: any = null;
  error: any = true;

  constructor(private apiService: ApiService,
              private acivatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.error = false;

    this.acivatedRoute.params.forEach((params: Params) => {
      this.campaignId = params['id'];
    });

    this.apiService.getCampaign(this.campaignId).subscribe((data) => {
      this.campaign = data;
    }, (err) => {
      this.error = true;
    });
  }
}
