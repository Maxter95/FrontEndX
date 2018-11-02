import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export  class  APIService {
  API_URL = 'http://localhost:18080/jaxrs_crude/rest/entreprise';

  constructor(private  httpClient: HttpClient) {
  }

  getToDO() {
    return this.httpClient.get(`${this.API_URL}/toDooS/`);
  }
}
