import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getCampaigns(): Observable<Object> {
    return this.http.get(`/campaigns/`);
  }

  getCampaign(id): Observable<Object> {
    return this.http.get(`/campaigns/${id}/`);
  }
}
