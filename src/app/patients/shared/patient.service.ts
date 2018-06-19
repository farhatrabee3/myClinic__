import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {IPatient} from'./patient.model'
 
@Injectable()
export class PatientService {
  selectedPatient : IPatient;
  patientList : IPatient [];
  constructor(private http : Http) { }
 
  postPatient(emp : IPatient){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:28750/api/Employee',body,requestOptions).map(x => x.json());
  }
 
  putPatient(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:28750/api/Employee/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getPatientList(){
    this.http.get('http://localhost:3704/api/Patient/1')
    .map((data : Response) =>{
      return data.json() as IPatient[];
    }).toPromise().then(x => {
      this.patientList = x;
    })
  }
 
  deletePatient(id: number) {
    return this.http.delete('http://localhost:28750/api/Employee/' + id).map(res => res.json());
  }
}