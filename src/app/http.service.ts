import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class HttpService{

  constructor(private http: HttpClient) { }

  postUser(email: string, password: string){
    console.log(email, password, this.http)
    return this.http.post('https://ad26-80-77-34-202.eu.ngrok.io/users/login', {email, password})
      .pipe(map(r => r));
  }
}
